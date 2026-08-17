# Copyright (c) 2026 Eng. Omar Wael. All Rights Reserved.

from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.db import transaction
from .models import Category, MenuItem, Order, OrderItem
from .serializers import (
    CategorySerializer, MenuItemSerializer,
    OrderSerializer, CreateOrderSerializer
)


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_field = 'id'


class MenuItemViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = MenuItem.objects.filter(is_available=True)
    serializer_class = MenuItemSerializer
    lookup_field = 'id'

    def get_queryset(self):
        queryset = MenuItem.objects.filter(is_available=True)
        category = self.request.query_params.get('category')
        featured = self.request.query_params.get('featured')
        search = self.request.query_params.get('search')

        if category:
            queryset = queryset.filter(category__id=category)
        if featured:
            queryset = queryset.filter(is_featured=True)
        if search:
            queryset = queryset.filter(name__icontains=search)
        return queryset


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    lookup_field = 'id'

    def create(self, request, *args, **kwargs):
        serializer = CreateOrderSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.validated_data

        with transaction.atomic():
            # Calculate total amount
            total_amount = 0
            order_items_data = []

            for item_data in data['items']:
                try:
                    menu_item = MenuItem.objects.get(id=item_data['menu_item_id'])
                except MenuItem.DoesNotExist:
                    return Response(
                        {'error': f"Menu item with id {item_data['menu_item_id']} not found."},
                        status=status.HTTP_400_BAD_REQUEST
                    )

                size = item_data['size']
                quantity = int(item_data['quantity'])

                price_map = {
                    'small': menu_item.price_small,
                    'medium': menu_item.price_medium,
                    'large': menu_item.price_large,
                }
                price = price_map.get(size, menu_item.price_medium)
                subtotal = price * quantity
                total_amount += subtotal

                order_items_data.append({
                    'menu_item': menu_item,
                    'size': size,
                    'quantity': quantity,
                    'price': price,
                })

            # Create the order
            order = Order.objects.create(
                customer_name=data['customer_name'],
                customer_email=data['customer_email'],
                customer_phone=data['customer_phone'],
                delivery_address=data['delivery_address'],
                payment_method=data['payment_method'],
                special_instructions=data.get('special_instructions', ''),
                total_amount=total_amount,
            )

            # Create order items
            for item_data in order_items_data:
                OrderItem.objects.create(order=order, **item_data)

        return Response(
            OrderSerializer(order).data,
            status=status.HTTP_201_CREATED
        )

    @action(detail=True, methods=['patch'])
    def update_status(self, request, pk=None):
        order = self.get_object()
        new_status = request.data.get('status')
        valid_statuses = [choice[0] for choice in Order.STATUS_CHOICES]

        if new_status not in valid_statuses:
            return Response(
                {'error': f'Invalid status. Must be one of: {valid_statuses}'},
                status=status.HTTP_400_BAD_REQUEST
            )

        order.status = new_status
        order.save()
        return Response(OrderSerializer(order).data)

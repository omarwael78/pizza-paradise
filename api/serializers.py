# Copyright (c) 2026 Eng. Omar Wael. All Rights Reserved.

from rest_framework import serializers
from .models import Category, MenuItem, Order, OrderItem


class CategorySerializer(serializers.ModelSerializer):
    items_count = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ['id', 'name', 'description', 'image', 'items_count']

    def get_items_count(self, obj):
        return obj.items.count()


class MenuItemSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)

    class Meta:
        model = MenuItem
        fields = [
            'id', 'category', 'category_name', 'name', 'description',
            'price_small', 'price_medium', 'price_large',
            'image', 'is_available', 'is_featured', 'ingredients'
        ]


class OrderItemSerializer(serializers.ModelSerializer):
    menu_item_name = serializers.CharField(source='menu_item.name', read_only=True)
    subtotal = serializers.DecimalField(max_digits=10, decimal_places=2, read_only=True)

    class Meta:
        model = OrderItem
        fields = ['id', 'menu_item', 'menu_item_name', 'size', 'quantity', 'price', 'subtotal']


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)
    status_display = serializers.CharField(source='get_status_display', read_only=True)

    class Meta:
        model = Order
        fields = [
            'id', 'customer_name', 'customer_email', 'customer_phone',
            'delivery_address', 'status', 'status_display', 'payment_method',
            'total_amount', 'special_instructions', 'items', 'created_at', 'updated_at'
        ]


class CreateOrderSerializer(serializers.Serializer):
    customer_name = serializers.CharField(max_length=200)
    customer_email = serializers.EmailField()
    customer_phone = serializers.CharField(max_length=20)
    delivery_address = serializers.CharField()
    payment_method = serializers.ChoiceField(choices=['cash', 'card'], default='cash')
    special_instructions = serializers.CharField(required=False, allow_blank=True, default='')
    items = serializers.ListField(child=serializers.DictField())

    def validate_items(self, value):
        if not value:
            raise serializers.ValidationError("Order must contain at least one item.")
        for item in value:
            if 'menu_item_id' not in item:
                raise serializers.ValidationError("Each item must have a menu_item_id.")
            if 'size' not in item:
                raise serializers.ValidationError("Each item must have a size.")
            if 'quantity' not in item or int(item['quantity']) < 1:
                raise serializers.ValidationError("Each item must have a quantity of at least 1.")
        return value

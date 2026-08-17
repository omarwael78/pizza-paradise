# Copyright (c) 2026 Eng. Omar Wael. All Rights Reserved.

from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse


def api_root(request):
    return JsonResponse({
        'name': 'Pizza Paradise API',
        'version': '1.0.0',
        'description': 'Full-stack artisan pizza ordering platform',
        'author': 'Eng. Omar Wael',
        'endpoints': {
            'categories': {
                'list': '/api/categories/',
                'detail': '/api/categories/{id}/',
            },
            'menu_items': {
                'list': '/api/menu-items/',
                'detail': '/api/menu-items/{id}/',
                'filters': '?category={uuid}&featured=true&search={query}',
            },
            'orders': {
                'list': '/api/orders/',
                'create': '/api/orders/',
                'detail': '/api/orders/{id}/',
                'update_status': '/api/orders/{id}/update_status/',
            },
            'admin': '/admin/',
        },
    })


urlpatterns = [
    path('', api_root),
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
]

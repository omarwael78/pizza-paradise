# Copyright (c) 2026 Eng. Omar Wael. All Rights Reserved.

from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

def api_root(request):
    return JsonResponse({
        'message': 'Welcome to Pizza Paradise API',
        'endpoints': {
            'categories': '/api/categories/',
            'menu_items': '/api/menu-items/',
            'orders': '/api/orders/',
            'admin': '/admin/',
        }
    })

urlpatterns = [
    path('', api_root),
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
]

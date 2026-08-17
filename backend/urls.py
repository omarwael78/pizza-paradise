# Copyright (c) 2026 Eng. Omar Wael. All Rights Reserved.

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
]

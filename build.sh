#!/bin/bash

# Copyright (c) 2026 Eng. Omar Wael. All Rights Reserved.

echo "Building Django project for Vercel..."

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate --noinput

# Collect static files
python manage.py collectstatic --noinput

echo "Build completed successfully!"

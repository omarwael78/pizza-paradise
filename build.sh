#!/bin/bash

# Copyright (c) 2026 Eng. Omar Wael. All Rights Reserved.

echo "Building Django project for Vercel..."

# Install dependencies
pip install -r requirements.txt

# Create static directory if it doesn't exist
mkdir -p static

# Collect static files
python manage.py collectstatic --noinput

echo "Build completed successfully!"

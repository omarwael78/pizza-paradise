#!/bin/bash

# Copyright (c) 2026 Eng. Omar Wael. All Rights Reserved.

set -e

echo "Building Django project for Vercel..."

# Install dependencies
pip install -r requirements.txt

# Run database migrations
python manage.py migrate --noinput

# Seed menu data (only if categories table is empty)
python manage.py shell -c "
from api.models import Category
if Category.objects.count() == 0:
    exec(open('seed_data.py').read())
    print('Database seeded with menu data.')
else:
    print('Database already has data, skipping seed.')
"

# Create static directory if it doesn't exist
mkdir -p static

# Collect static files
python manage.py collectstatic --noinput

echo "Build completed successfully!"

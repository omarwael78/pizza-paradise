#!/bin/bash

# Copyright (c) 2026 Eng. Omar Wael. All Rights Reserved.

set -e

echo "=== Building Pizza Paradise for Vercel ==="

# --- Django Backend ---
echo "[1/4] Installing Python dependencies..."
pip install -r requirements.txt

echo "[2/4] Running database migrations..."
python manage.py migrate --noinput

echo "[3/4] Seeding menu data (if empty)..."
python manage.py shell -c "
from api.models import Category
if Category.objects.count() == 0:
    exec(open('seed_data.py').read())
    print('Database seeded with menu data.')
else:
    print('Database already has data, skipping seed.')
"

mkdir -p static
python manage.py collectstatic --noinput

# --- React Frontend ---
echo "[4/4] Building React frontend..."
cd frontend
npm install
npm run build
cd ..

echo "=== Build completed successfully! ==="

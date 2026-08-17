#!/bin/bash

echo "🍕 Pizza Paradise - Starting Application..."
echo ""

# Start Django backend
echo "Starting Django backend on port 8000..."
cd backend
python3 manage.py runserver &
BACKEND_PID=$!
cd ..

# Wait for backend to start
sleep 3

# Start React frontend
echo "Starting React frontend on port 3000..."
cd frontend
npm start &
FRONTEND_PID=$!
cd ..

echo ""
echo "✅ Application started!"
echo ""
echo "🌐 Frontend: http://localhost:3000"
echo "🔧 Backend API: http://localhost:8000/api/"
echo "👑 Admin Panel: http://localhost:8000/admin/"
echo ""
echo "Press Ctrl+C to stop both servers"

# Wait for either process to exit
wait $BACKEND_PID $FRONTEND_PID

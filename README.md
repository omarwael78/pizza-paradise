<div align="center">

# 🍕 Pizza Paradise

### A Full-Stack Artisan Pizza Ordering Platform

**Built with Django REST Framework & React**

[![Django](https://img.shields.io/badge/Django-6.0-092E20?style=for-the-badge&logo=django&logoColor=white)](https://www.djangoproject.com/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![REST API](https://img.shields.io/badge/REST_API-DRF-092E20?style=for-the-badge)](https://www.django-rest-framework.org/)
[![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)](https://www.sqlite.org/)
[![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-red?style=for-the-badge)](LICENSE)

---

A premium pizza restaurant web application featuring a sophisticated UI, full shopping cart functionality, and a complete order management system.

</div>

---

## 📋 Table of Contents

- [About The Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [API Endpoints](#-api-endpoints)
- [Database Models](#-database-models)
- [Screenshots](#-screenshots)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 About The Project

**Pizza Paradise** is a full-stack web application that provides an elegant and seamless online pizza ordering experience. The platform features a curated menu of artisan pizzas, gourmet sides, beverages, and desserts, all managed through a powerful Django REST API backend with a sleek React frontend.

The application demonstrates modern web development practices including component-based architecture, state management with React Context, RESTful API design, and responsive UI design.

---

## ✨ Features

### Frontend
- **Responsive Design** — Fully responsive across all device sizes
- **Home Page** — Hero section, featured pizzas, and call-to-action
- **Menu Page** — Filterable menu with category tabs and search functionality
- **Shopping Cart** — Add, remove, update quantities with persistent localStorage
- **Checkout Flow** — Complete checkout form with delivery details
- **Order Confirmation** — Real-time order status and details view

### Backend
- **RESTful API** — Full CRUD operations via Django REST Framework
- **Menu Management** — Categories, menu items with multi-size pricing
- **Order Processing** — Atomic order creation with automatic total calculation
- **Admin Panel** — Django admin for managing menu, categories, and orders
- **Order Status Tracking** — Update order status (Pending → Confirmed → Preparing → Delivered)

### Menu Categories
| Category | Items |
|----------|-------|
| Signature Collection | Truffle Margherita, Prosciutto & Fig, Lobster & Shrimp, Wagyu Beef, Mediterranean Lamb |
| Classic Favorites | Neapolitan Margherita, Pepperoni Classico, Quattro Formaggi, Diavola |
| Gourmet Selection | Black Truffle & Wild Mushroom, Saffron & Seafood, Peking Duck, Burrata & Prosciutto Crudo |
| Artisan Sides | Truffle Arancini, Burrata Caprese, Garlic Knots, Buffalo Wings, Caesar Salad, Loaded Fries |
| Beverages | Italian Sparkling Water, Fresh Lemonade, Craft Cola, Chianti Classico, Peroni Nastro Azzurro |
| Sweet Endings | Tiramisu, Nutella Calzone, Panna Cotta, Chocolate Fondant |

---

## 🛠 Tech Stack

### Backend
| Technology | Purpose |
|------------|---------|
| Python 3 | Programming Language |
| Django 6.0 | Web Framework |
| Django REST Framework | API Development |
| SQLite | Database |
| django-cors-headers | CORS Handling |

### Frontend
| Technology | Purpose |
|------------|---------|
| React 19 | UI Library |
| React Router DOM 7 | Client-side Routing |
| Axios | HTTP Client |
| CSS3 | Styling |

---

## 📁 Project Structure

```
pizza-paradise/
├── backend/                    # Django project settings
│   ├── __init__.py
│   ├── settings.py             # Project configuration
│   ├── urls.py                 # Root URL configuration
│   ├── wsgi.py                 # WSGI entry point
│   └── asgi.py                 # ASGI entry point
├── api/                        # Django REST API app
│   ├── models.py               # Database models
│   ├── views.py                # API viewsets
│   ├── serializers.py          # Data serializers
│   ├── urls.py                 # API URL routing
│   ├── admin.py                # Admin configuration
│   ├── apps.py                 # App configuration
│   ├── tests.py                # Unit tests
│   └── migrations/             # Database migrations
├── frontend/                   # React application
│   ├── public/
│   ├── src/
│   │   ├── api/                # Axios API client
│   │   │   └── index.js
│   │   ├── components/         # Reusable UI components
│   │   │   ├── Navbar.js
│   │   │   ├── Footer.js
│   │   │   ├── MenuCard.js
│   │   │   └── CartItem.js
│   │   ├── context/            # React Context providers
│   │   │   └── CartContext.js
│   │   ├── pages/              # Page components
│   │   │   ├── Home.js
│   │   │   ├── Menu.js
│   │   │   ├── Cart.js
│   │   │   └── OrderConfirmation.js
│   │   ├── App.js              # Root component
│   │   ├── App.css             # Global styles
│   │   ├── index.js            # Entry point
│   │   └── index.css           # Base styles
│   └── package.json
├── manage.py                   # Django management script
├── seed_data.py                # Database seeder script
├── start.sh                    # Application launcher
├── db.sqlite3                  # SQLite database
├── LICENSE                     # All Rights Reserved
└── README.md                   # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Python 3.8+**
- **Node.js 16+** and **npm**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/pizza-paradise.git
   cd pizza-paradise
   ```

2. **Backend Setup**
   ```bash
   # Install Python dependencies
   pip install django djangorestframework django-cors-headers

   # Run database migrations
   python manage.py migrate

   # Seed the database with menu data
   python seed_data.py

   # Create an admin superuser (optional)
   python manage.py createsuperuser
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   cd ..
   ```

4. **Run the Application**
   ```bash
   # Option 1: Use the start script
   bash start.sh

   # Option 2: Run servers manually
   # Terminal 1 - Backend
   python manage.py runserver

   # Terminal 2 - Frontend
   cd frontend && npm start
   ```

### Access Points

| Service | URL |
|---------|-----|
| 🌐 Frontend | [http://localhost:3000](http://localhost:3000) |
| 🔧 Backend API | [http://localhost:8000/api/](http://localhost:8000/api/) |
| 👑 Admin Panel | [http://localhost:8000/admin/](http://localhost:8000/admin/) |

---

## 📡 API Endpoints

### Categories
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/categories/` | List all categories |
| `GET` | `/api/categories/{id}/` | Retrieve a single category |

### Menu Items
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/menu-items/` | List all available menu items |
| `GET` | `/api/menu-items/{id}/` | Retrieve a single menu item |

**Query Parameters:**
| Parameter | Example | Description |
|-----------|---------|-------------|
| `category` | `?category=<uuid>` | Filter by category |
| `featured` | `?featured=true` | Filter featured items only |
| `search` | `?search=pizza` | Search by item name |

### Orders
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/orders/` | List all orders |
| `POST` | `/api/orders/` | Create a new order |
| `GET` | `/api/orders/{id}/` | Retrieve order details |
| `PATCH` | `/api/orders/{id}/update_status/` | Update order status |

**Order Status Flow:**
```
pending → confirmed → preparing → out_for_delivery → delivered
```

---

## 🗄 Database Models

### Category
| Field | Type | Description |
|-------|------|-------------|
| `id` | UUID | Primary key |
| `name` | String | Category name |
| `description` | Text | Category description |
| `image` | URL | Category image |

### MenuItem
| Field | Type | Description |
|-------|------|-------------|
| `id` | UUID | Primary key |
| `category` | ForeignKey | Associated category |
| `name` | String | Item name |
| `description` | Text | Item description |
| `price_small` | Decimal | Small size price |
| `price_medium` | Decimal | Medium size price |
| `price_large` | Decimal | Large size price |
| `ingredients` | Text | Comma-separated ingredients |
| `is_available` | Boolean | Availability status |
| `is_featured` | Boolean | Featured flag |

### Order
| Field | Type | Description |
|-------|------|-------------|
| `id` | UUID | Primary key |
| `customer_name` | String | Customer full name |
| `customer_email` | Email | Customer email |
| `customer_phone` | String | Customer phone |
| `delivery_address` | Text | Delivery address |
| `status` | String | Order status |
| `payment_method` | String | Cash or Card |
| `total_amount` | Decimal | Order total |
| `special_instructions` | Text | Special notes |

### OrderItem
| Field | Type | Description |
|-------|------|-------------|
| `id` | UUID | Primary key |
| `order` | ForeignKey | Associated order |
| `menu_item` | ForeignKey | Associated menu item |
| `size` | String | small / medium / large |
| `quantity` | Integer | Item quantity |
| `price` | Decimal | Unit price at time of order |

---

## 📜 License

```
Copyright (c) 2026 Eng. Omar Wael. All Rights Reserved.

This software and its source code are the exclusive property of Eng. Omar Wael.
Unauthorized copying, modification, distribution, or use of this software
is strictly prohibited without prior written permission from the copyright holder.
```

See the [LICENSE](LICENSE) file for full details.

---

## 👨‍💻 Author

**Eng. Omar Wael**

- 📍 Algalaa, Kafr Elzayat, Egypt
- 📞 +20 1285786006
- Built with passion and precision

---

<div align="center">

**⭐ Star this repository if you find it impressive! ⭐**

</div>

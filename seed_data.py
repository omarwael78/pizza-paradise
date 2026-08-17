# Copyright (c) 2026 Eng. Omar Wael. All Rights Reserved.

import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from api.models import Category, MenuItem

if Category.objects.exists():
    print("Database already seeded, skipping.")
else:
    categories = {
        'signature': Category.objects.create(
            name='Signature Collection',
            description='Our award-winning artisan pizzas crafted with the finest ingredients from around the world',
            image='https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800'
        ),
        'classic': Category.objects.create(
            name='Classic Favorites',
            description='Timeless recipes perfected over generations',
            image='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800'
        ),
        'gourmet': Category.objects.create(
            name='Gourmet Selection',
            description='Premium pizzas for the discerning palate',
            image='https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800'
        ),
        'sides': Category.objects.create(
            name='Artisan Sides',
            description='Handcrafted accompaniments to complement your meal',
            image='https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800'
        ),
        'drinks': Category.objects.create(
            name='Beverages',
            description='Curated selection of premium drinks',
            image='https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800'
        ),
        'desserts': Category.objects.create(
            name='Sweet Endings',
            description='Indulgent desserts crafted by our pastry chef',
            image='https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800'
        ),
    }

    # SIGNATURE COLLECTION
    signature_pizzas = [
        {
            'name': 'Truffle Margherita',
            'description': 'San Marzano tomatoes, fresh buffalo mozzarella from Campania, organic basil, aged Parmigiano-Reggiano, finished with black truffle oil and fleur de sel',
            'price_small': 18.99,
            'price_medium': 24.99,
            'price_large': 30.99,
            'ingredients': 'San Marzano Tomatoes, Buffalo Mozzarella, Fresh Basil, Parmigiano-Reggiano, Black Truffle Oil, Fleur de Sel',
            'is_featured': True,
            'image': 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800'
        },
        {
            'name': 'Prosciutto & Fig',
            'description': 'Prosciutto di Parma, fresh figs, gorgonzola dolce, arugula, balsamic reduction, drizzled with aged honey',
            'price_small': 21.99,
            'price_medium': 27.99,
            'price_large': 33.99,
            'ingredients': 'Prosciutto di Parma, Fresh Figs, Gorgonzola Dolce, Arugula, Balsamic Reduction, Aged Honey',
            'is_featured': True,
            'image': 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800'
        },
        {
            'name': 'Lobster & Shrimp',
            'description': 'Succulent lobster tail, tiger shrimp, roasted garlic cream sauce, mascarpone, lemon zest, fresh dill',
            'price_small': 28.99,
            'price_medium': 36.99,
            'price_large': 44.99,
            'ingredients': 'Lobster Tail, Tiger Shrimp, Roasted Garlic Cream, Mascarpone, Lemon Zest, Fresh Dill',
            'is_featured': True,
            'image': 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800'
        },
        {
            'name': 'Wagyu Beef',
            'description': 'A5 Wagyu beef, caramelized onions, aged gruyere, wild mushrooms, black garlic aioli, microgreens',
            'price_small': 32.99,
            'price_medium': 40.99,
            'price_large': 48.99,
            'ingredients': 'A5 Wagyu Beef, Caramelized Onions, Aged Gruyere, Wild Mushrooms, Black Garlic Aioli, Microgreens',
            'is_featured': False,
            'image': 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=800'
        },
        {
            'name': 'Mediterranean Lamb',
            'description': 'Slow-roasted lamb, tzatziki, kalamata olives, sun-dried tomatoes, feta cheese, za\'atar herbs',
            'price_small': 24.99,
            'price_medium': 30.99,
            'price_large': 36.99,
            'ingredients': 'Slow-Roasted Lamb, Tzatziki, Kalamata Olives, Sun-Dried Tomatoes, Feta Cheese, Za\'atar',
            'is_featured': False,
            'image': 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800'
        },
    ]

    for pizza_data in signature_pizzas:
        MenuItem.objects.create(category=categories['signature'], **pizza_data)

    # CLASSIC FAVORITES
    classic_pizzas = [
        {
            'name': 'Neapolitan Margherita',
            'description': 'The original classic — San Marzano tomato sauce, fresh mozzarella di bufala, fragrant basil, extra virgin olive oil',
            'price_small': 14.99,
            'price_medium': 18.99,
            'price_large': 22.99,
            'ingredients': 'San Marzano Tomatoes, Mozzarella di Bufala, Fresh Basil, EVOO',
            'is_featured': True,
            'image': 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800'
        },
        {
            'name': 'Pepperoni Classico',
            'description': 'Double layer of artisan pepperoni, aged mozzarella, house-made tomato sauce, oregano',
            'price_small': 16.99,
            'price_medium': 20.99,
            'price_large': 24.99,
            'ingredients': 'Artisan Pepperoni, Aged Mozzarella, House Tomato Sauce, Oregano',
            'is_featured': True,
            'image': 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800'
        },
        {
            'name': 'Quattro Formaggi',
            'description': 'Four cheese blend — mozzarella, gorgonzola, fontina, parmigiano reggiano with a touch of honey',
            'price_small': 17.99,
            'price_medium': 21.99,
            'price_large': 25.99,
            'ingredients': 'Mozzarella, Gorgonzola, Fontina, Parmigiano Reggiano, Wildflower Honey',
            'is_featured': False,
            'image': 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800'
        },
        {
            'name': 'Diavola',
            'description': 'Spicy salami calabrese, roasted red peppers, chili flakes, mozzarella, fresh basil',
            'price_small': 16.99,
            'price_medium': 20.99,
            'price_large': 24.99,
            'ingredients': 'Spicy Calabrese Salami, Roasted Red Peppers, Chili Flakes, Mozzarella, Basil',
            'is_featured': False,
            'image': 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=800'
        },
    ]

    for pizza_data in classic_pizzas:
        MenuItem.objects.create(category=categories['classic'], **pizza_data)

    # GOURMET SELECTION
    gourmet_pizzas = [
        {
            'name': 'Black Truffle & Wild Mushroom',
            'description': 'Black truffle cream, wild porcini, chanterelle, shiitake mushrooms, fontina cheese, fresh thyme',
            'price_small': 26.99,
            'price_medium': 32.99,
            'price_large': 38.99,
            'ingredients': 'Black Truffle Cream, Porcini, Chanterelle, Shiitake, Fontina, Fresh Thyme',
            'is_featured': True,
            'image': 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800'
        },
        {
            'name': 'Saffron & Seafood',
            'description': 'Saffron-infused cream sauce, calamari, mussels, clams, cherry tomatoes, white wine reduction',
            'price_small': 27.99,
            'price_medium': 34.99,
            'price_large': 40.99,
            'ingredients': 'Saffron Cream, Calamari, Mussels, Clams, Cherry Tomatoes, White Wine',
            'is_featured': False,
            'image': 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800'
        },
        {
            'name': 'Peking Duck',
            'description': 'Glazed duck breast, hoisin reduction, scallions, cucumber, sesame, crispy wonton strips',
            'price_small': 25.99,
            'price_medium': 31.99,
            'price_large': 37.99,
            'ingredients': 'Glazed Duck Breast, Hoisin Reduction, Scallions, Cucumber, Sesame, Crispy Wonton',
            'is_featured': False,
            'image': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800'
        },
        {
            'name': 'Burata & Prosciutto Crudo',
            'description': 'Creamy burata, 24-month aged prosciutto crudo, cherry tomatoes, basil pesto, pine nuts',
            'price_small': 23.99,
            'price_medium': 29.99,
            'price_large': 35.99,
            'ingredients': 'Burata, Prosciutto Crudo 24-Month, Cherry Tomatoes, Basil Pesto, Pine Nuts',
            'is_featured': True,
            'image': 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=800'
        },
    ]

    for pizza_data in gourmet_pizzas:
        MenuItem.objects.create(category=categories['gourmet'], **pizza_data)

    # ARTISAN SIDES
    sides = [
        {
            'name': 'Truffle Arancini',
            'description': 'Crispy risotto balls stuffed with black truffle and mozzarella, served with saffron aioli',
            'price_small': 12.99,
            'price_medium': 16.99,
            'price_large': 20.99,
            'ingredients': 'Arborio Rice, Black Truffle, Mozzarella, Saffron Aioli',
            'image': 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800'
        },
        {
            'name': 'Burrata Caprese',
            'description': 'Fresh burrata cheese, heirloom tomatoes, basil oil, aged balsamic, sea salt flakes',
            'price_small': 14.99,
            'price_medium': 18.99,
            'price_large': 22.99,
            'ingredients': 'Burrata, Heirloom Tomatoes, Basil Oil, Aged Balsamic, Sea Salt',
            'image': 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=800'
        },
        {
            'name': 'Garlic Knots',
            'description': 'Hand-tied dough knots, roasted garlic butter, fresh parsley, parmigiano reggiano',
            'price_small': 8.99,
            'price_medium': 11.99,
            'price_large': 14.99,
            'ingredients': 'Pizza Dough, Roasted Garlic Butter, Fresh Parsley, Parmigiano',
            'image': 'https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=800'
        },
        {
            'name': 'Buffalo Wings',
            'description': 'Crispy free-range wings tossed in our house-made buffalo sauce, served with blue cheese dip',
            'price_small': 13.99,
            'price_medium': 17.99,
            'price_large': 21.99,
            'ingredients': 'Free-Range Wings, House Buffalo Sauce, Blue Cheese Dip, Celery',
            'image': 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800'
        },
        {
            'name': 'Caesar Salad',
            'description': 'Romaine hearts, house-made croutons, shaved parmigiano, white anchovy, classic caesar dressing',
            'price_small': 11.99,
            'price_medium': 14.99,
            'price_large': 17.99,
            'ingredients': 'Romaine Hearts, Croutons, Parmigiano, White Anchovy, Caesar Dressing',
            'image': 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=800'
        },
        {
            'name': 'Loaded Fries',
            'description': 'Hand-cut fries, melted cheddar, crispy bacon, jalapeños, sour cream, chives',
            'price_small': 10.99,
            'price_medium': 13.99,
            'price_large': 16.99,
            'ingredients': 'Hand-Cut Fries, Cheddar, Bacon, Jalapeños, Sour Cream, Chives',
            'image': 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800'
        },
    ]

    for side_data in sides:
        MenuItem.objects.create(category=categories['sides'], **side_data)

    # BEVERAGES
    drinks = [
        {
            'name': 'Italian Sparkling Water',
            'description': 'San Pellegrino sparkling natural mineral water, 500ml',
            'price_small': 4.99,
            'price_medium': 4.99,
            'price_large': 6.99,
            'ingredients': 'San Pellegrino Sparkling Water',
            'image': 'https://images.unsplash.com/photo-1523362628745-0c100fc988a6?w=800'
        },
        {
            'name': 'Fresh Lemonade',
            'description': 'House-made lemonade with fresh mint and a hint of elderflower',
            'price_small': 5.99,
            'price_medium': 7.99,
            'price_large': 9.99,
            'ingredients': 'Fresh Lemons, Mint, Elderflower Syrup, Sparkling Water',
            'image': 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=800'
        },
        {
            'name': 'Craft Cola',
            'description': 'Artisan cola made with real kola nuts, vanilla, and citrus',
            'price_small': 5.99,
            'price_medium': 7.99,
            'price_large': 9.99,
            'ingredients': 'Kola Nuts, Vanilla, Citrus, Cane Sugar',
            'image': 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800'
        },
        {
            'name': 'Chianti Classico',
            'description': 'Tuscan red wine — dark cherry, leather, and earthy notes. Glass / Bottle',
            'price_small': 12.99,
            'price_medium': 18.99,
            'price_large': 42.99,
            'ingredients': 'Sangiovese Grapes, Tuscany, Italy',
            'image': 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800'
        },
        {
            'name': 'Peroni Nastro Azzurro',
            'description': 'Crisp Italian lager with a light, citrusy finish. 330ml bottle',
            'price_small': 6.99,
            'price_medium': 6.99,
            'price_large': 8.99,
            'ingredients': 'Italian Lager, 330ml',
            'image': 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=800'
        },
    ]

    for drink_data in drinks:
        MenuItem.objects.create(category=categories['drinks'], **drink_data)

    # SWEET ENDINGS
    desserts = [
        {
            'name': 'Tiramisu',
            'description': 'Classic Italian dessert — espresso-soaked ladyfingers, mascarpone cream, dusted with Valrhona cocoa',
            'price_small': 10.99,
            'price_medium': 13.99,
            'price_large': 16.99,
            'ingredients': 'Ladyfingers, Espresso, Mascarpone, Valrhona Cocoa',
            'image': 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800'
        },
        {
            'name': 'Nutella Calzone',
            'description': 'Warm pizza dough folded with Nutella, dusted with powdered sugar, served with vanilla gelato',
            'price_small': 11.99,
            'price_medium': 14.99,
            'price_large': 17.99,
            'ingredients': 'Pizza Dough, Nutella, Powdered Sugar, Vanilla Gelato',
            'image': 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800'
        },
        {
            'name': 'Panna Cotta',
            'description': 'Silky vanilla bean panna cotta with fresh berry compote and almond biscotti',
            'price_small': 9.99,
            'price_medium': 12.99,
            'price_large': 15.99,
            'ingredients': 'Vanilla Bean, Cream, Berry Compote, Almond Biscotti',
            'image': 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800'
        },
        {
            'name': 'Chocolate Fondant',
            'description': 'Dark chocolate lava cake with a molten center, served with salted caramel ice cream',
            'price_small': 12.99,
            'price_medium': 15.99,
            'price_large': 18.99,
            'ingredients': 'Valrhona Dark Chocolate, Butter, Eggs, Salted Caramel Ice Cream',
            'image': 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800'
        },
    ]

    for dessert_data in desserts:
        MenuItem.objects.create(category=categories['desserts'], **dessert_data)

    print(f"Created {Category.objects.count()} categories")
    print(f"Created {MenuItem.objects.count()} menu items")
    print("Premium seed data created successfully!")

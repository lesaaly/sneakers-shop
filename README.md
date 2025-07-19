# 🏃‍♂️ Vue Sneakers - Online Sneaker Store

A modern web application for selling sneakers, built with Vue.js 3 and full-stack technologies.

## 🚀 Features

- **Modern UI/UX** - Beautiful and responsive interface using Tailwind CSS
- **Full-featured catalog** - Browse, search and sort products
- **Shopping cart** - Add items, calculate costs with taxes
- **Favorites** - Save favorite items in localStorage
- **REST API** - Express.js server with MongoDB
- **Docker support** - Ready configuration for MongoDB

## 🛠 Tech Stack

### Frontend

- **Vue.js 3** - Progressive JavaScript framework
- **Vite** - Fast build tool
- **Vue Router** - Routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests

### Backend

- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB

### Development Tools

- **ESLint** - JavaScript linter
- **Prettier** - Code formatter
- **Nodemon** - Server auto-reload
- **Concurrently** - Run multiple processes

## 📁 Project Structure

```
vue-sneakers/
├── src/
│   ├── api/                 # Backend API
│   │   ├── app.js          # Express server
│   │   ├── models/         # Mongoose models
│   │   └── routes/         # API routes
│   ├── components/         # Vue components
│   ├── composables/        # Vue composables
│   ├── pages/             # Application pages
│   └── router/            # Routing configuration
├── public/                # Static files
├── docker-compose.yml     # Docker configuration
└── products.json          # Product data
```

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Docker (for MongoDB)

### Installation and Setup

1. **Clone the repository**

```bash
git clone https://github.com/your-username/vue-sneakers.git
cd vue-sneakers
```

2. **Install dependencies**

```bash
npm install
```

3. **Start MongoDB with Docker**

```bash
docker-compose up -d
```

4. **Run the application in development mode**

```bash
# Frontend only
npm run dev

# Backend only
npm run dev:server

# Frontend and backend simultaneously
npm run dev:full
```

5. **Open your browser**

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## 📋 Available Scripts

```bash
# Development
npm run dev              # Start Vite dev server
npm run dev:server       # Start Express server
npm run dev:full         # Start frontend and backend

# Build
npm run build            # Build for production
npm run preview          # Preview build

# Code quality
npm run lint             # Check and fix ESLint
npm run format           # Format code with Prettier
```

## 🎯 Functionality

### Home Page

- Display sneaker catalog
- Search by product name
- Sort by price and name
- Add items to cart
- Add items to favorites

### Shopping Cart

- View added items
- Remove items from cart
- Automatic cost calculation
- Tax calculation (5%)
- Place order

### Favorites Page

- View saved items
- Remove from favorites

### API Endpoints

- `GET /products` - Get products list
- `POST /orders` - Create new order

## 🗄 Database

The project uses MongoDB with two main collections:

### Products

```javascript
{
  title: String,    // Sneaker name
  price: Number,    // Price
  image: String     // Image URL
}
```

### Orders

```javascript
{
  products: [ObjectId],     // Array of product IDs
  totalPrice: Number,       // Total cost
  totalTax: Number,         // Tax amount
  totalPriceWithTax: Number // Final cost
}
```

## 🎨 UI/UX Features

- **Responsive design** - Works on all devices
- **Smooth animations** - Using @formkit/auto-animate
- **Intuitive navigation** - Simple and clear interface
- **Visual feedback** - Hover effects and loading states
- **Modal windows** - Cart as side panel

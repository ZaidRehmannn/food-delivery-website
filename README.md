# 🍔 Food Delivery Website

A full-stack food delivery web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This project allows users to browse food items, manage their cart, place orders, and make secure payments. It also includes an admin dashboard for managing food items and orders.

## 🚀 Features

- **User Authentication**: Sign up, login, and JWT-based authentication.
- **Food Menu Management**: Add, edit, and delete food items.
- **Shopping Cart**: Add/remove items and adjust quantities.
- **Order Management**: Track order status.
- **Image Uploading**: Integrated with Cloudinary.
- **Secure Payments**: Implemented using Stripe.
- **Admin Dashboard**: Manage food items and orders.

## 🛠️ Tech Stack

### Frontend

- React.js (Component-based UI)
- React Router (Navigation)
- Tailwind CSS (Responsive design)
- Axios (API calls)
- React Toastify (Notifications)

### Backend

- Node.js & Express.js (REST API)
- MongoDB & Mongoose (Database)
- JWT (Authentication)
- Cloudinary (Image uploads)
- Stripe API (Payments)

## 📦 Installation

To run this project locally, follow these steps:

### Prerequisites

- Node.js and npm installed
- MongoDB database (local or cloud-based)
- Cloudinary account for image uploads
- Stripe account for payment processing

---

### 🔧 Backend Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ZaidRehmannn/food-delivery-website.git
   cd food-delivery-website/backend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure environment variables**:

   Create a `.env` file in the `backend` directory:

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

4. **Start the backend server**:

   ```bash
   npm run server
   ```

   The backend server will start on `http://localhost:4000`.

---

### 🌐 Frontend Setup

1. **Navigate to the frontend directory**:

   ```bash
   cd ../frontend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure environment variables**:

   Create a `.env` file in the `frontend` directory:

   ```env
   VITE_API_URL=http://localhost:4000/api
   VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   ```

4. **Start the frontend development server**:

   ```bash
   npm run dev
   ```

   The frontend will be accessible at `http://localhost:5173`.

---

### 🛠️ Admin Panel Setup

1. **Navigate to the admin panel directory**:

   ```bash
   cd ../admin
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure environment variables**:

   Create a `.env` file in the `admin` directory:

   ```env
   VITE_API_URL=http://localhost:4000/api
   ```

4. **Start the admin panel development server**:

   ```bash
   npm run dev
   ```

   The admin panel will be accessible at `http://localhost:5174` (or another port if configured).

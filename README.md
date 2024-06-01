# Art Deco - Artwork Shop App

Welcome to the Art Deco Artwork Shop App! This application allows users to upload, view and like artworks. Admin users have the additional capability to delete artworks.

# Demo Video
[Watch the demo video here](https://drive.google.com/drive/folders/1rPoQsgTAacX0e-_covBSXQLTowKYogn6?usp=sharing)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- User registration and login
- Upload artwork with title, artist, date, medium, description, and image URL
- View all artworks with sorting and filtering options
- Like artworks
- Admin-only artwork deletion
- Responsive design

## Tech Stack

- **Frontend:** React, Axios, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (MongoDB Atlas)
- **Authentication:** JWT (JSON Web Tokens)

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14.x or later)
- npm (v6.x or later)
- MongoDB Atlas account for the database

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/art-deco.git
cd art-deco
```

2. Install backend dependencies:

```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

4. Set up environment variables:
Create a .env file in the backend directory and add the following:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

5. Start the backend server:
```bash
cd backend
npm run server
```

6. Start the frontend server:
```bash
cd ../frontend
npm start
```

## Usage

- Open your browser and navigate to `http://localhost:3000`.
- Register a new user or log in with an existing account.
- Upload artwork by providing the necessary details including an image URL.
- View all artworks, use sorting and filtering options.
- Like artworks and if logged in as an admin, delete artworks.

## API Endpoints

### Auth Routes
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Log in a user
- `GET /api/auth/user` - Get logged-in user details (requires token)

### Artwork Routes
- `POST /api/artworks` - Upload a new artwork (requires token)
- `GET /api/artworks` - Get all artworks
- `DELETE /api/artworks/:id` - Delete an artwork (requires admin token)
- `POST /api/artworks/:id/like` - Like an artwork (requires token)

## Screenshots

Include some screenshots of the application to give a visual overview of the app.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


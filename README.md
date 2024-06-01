# Art Deco - Artwork Shop App

Welcome to the Art Deco Artwork Shop App! This application allows users to upload, view, like, comment, and delete artworks. Admin users have the additional capability to delete artworks.

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
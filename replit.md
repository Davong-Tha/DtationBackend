# Data Annotation Platform Backend

## Overview
This is a Node.js Express backend application for a full-stack data annotation platform. It provides user authentication functionality with MongoDB as the database.

## Project Architecture
- **Language**: Node.js (ES Modules)
- **Framework**: Express.js
- **Database**: MongoDB (via Mongoose)
- **Authentication**: bcryptjs for password hashing
- **Port**: 3000 (configurable via PORT environment variable)

## Project Structure
```
src/
├── controllers/     # Request handlers
│   └── auth.controller.js
├── models/         # Database schemas
│   └── user.models.js
├── routes/         # API route definitions
│   ├── auth.routes.js
│   └── ping.routes.js
├── services/       # Business logic
│   └── auth.service.js
└── server.js       # Application entry point
```

## Features
- User registration with email/password
- Password hashing with bcryptjs
- MongoDB integration with Mongoose
- RESTful API structure
- Health check endpoint (/ping)

## API Endpoints
- `GET /` - Hello World
- `GET /ping` - Health check
- `POST /auth/register` - User registration

## Environment Variables Required
- `MONGODB_URI` - MongoDB connection string
- `PORT` - Server port (default: 3000)

## Setup Date
November 21, 2025

## Recent Changes
- Initial import from GitHub
- Configured for Replit environment
- Added package.json with dependencies

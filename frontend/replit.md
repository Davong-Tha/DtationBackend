# Dtatation Frontend

## Overview
This is a React + Vite frontend application for Dtatation. It provides user authentication functionality with login and register pages.

## Project Structure
- **Framework**: React 19.2.0 with Vite 7.2.4
- **Routing**: React Router DOM v7.9.6
- **Build Tool**: Vite
- **Port**: 5000 (frontend server)

## Key Features
- User registration page
- User login page  
- Authentication API integration
- React Router for navigation

## API Integration
The app connects to a backend API (expected on port 3000 or configured via `VITE_API_URL` environment variable):
- POST `/auth/register` - User registration
- POST `/auth/login` - User login

## Configuration
- **Vite Config**: Configured for Replit environment with host `0.0.0.0:5000`
- **API URL**: Configurable via `VITE_API_URL` environment variable, defaults to `http://localhost:3000`

## Development
Run the development server:
```bash
npm run dev
```

## Build
Build for production:
```bash
npm run build
```

## Recent Changes (Nov 24, 2025)
- Configured Vite for Replit environment (port 5000, host 0.0.0.0)
- Updated API URL to be configurable via environment variable
- Installed all dependencies
- Set up frontend workflow

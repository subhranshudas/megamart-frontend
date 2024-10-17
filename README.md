# MegaMart Frontend

## MegaMart Backend API Documentation

This document outlines the available API endpoints for the MegaMart Backend.

### Base URL

All API routes are prefixed with `/api/v1`.

### User Routes

#### Register User

- **URL:** `/users/register`
- **Method:** `POST`
- **Input:**
  ```json
  {
    "username": "johndoe",
    "email": "john@example.com",
    "password": "securepassword123"
  }
  ```
- **Success Response:**
  - **Code:** 201
  - **Content:**
    ```json
    {
      "message": "user registered successfully!"
    }
    ```
- **Error Response:**
  - **Code:** 400
  - **Content:**
    ```json
    {
      "errors": [
        {
          "code": "too_small",
          "minimum": 3,
          "type": "string",
          "inclusive": true,
          "exact": false,
          "message": "Username must be at least 3 characters long",
          "path": ["username"]
        }
      ]
    }
    ```
    OR
  - **Code:** 400
  - **Content:**
    ```json
    {
      "message": "user already exist!"
    }
    ```

#### Login User

- **URL:** `/users/login`
- **Method:** `POST`
- **Input:**
  ```json
  {
    "email": "john@example.com",
    "password": "securepassword123"
  }
  ```
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    {
      "message": "Logged in successfully"
    }
    ```
- **Error Response:**
  - **Code:** 400
  - **Content:**
    ```json
    {
      "message": "Invalid email"
    }
    ```
    OR
  - **Code:** 400
  - **Content:**
    ```json
    {
      "message": "Invalid password"
    }
    ```

#### Logout User

- **URL:** `/users/logout`
- **Method:** `POST`
- **Input:** None (uses session data)
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    {
      "message": "Logged out successfully"
    }
    ```
- **Error Response:**
  - **Code:** 400
  - **Content:**
    ```json
    {
      "message": "No active session"
    }
    ```

#### Get User Profile

- **URL:** `/users/profile`
- **Method:** `GET`
- **Authentication:** Required
- **Input:** None (uses session data)
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    {
      "_id": "60d5ecb54b24a1234c9f8e7a",
      "username": "johndoe",
      "email": "john@example.com",
      "createdAt": "2023-06-25T12:00:00.000Z",
      "updatedAt": "2023-06-25T12:00:00.000Z"
    }
    ```
- **Error Response:**
  - **Code:** 404
  - **Content:**
    ```json
    {
      "message": "User not found"
    }
    ```
    OR
  - **Code:** 401
  - **Content:**
    ```json
    {
      "message": "Unauthorized"
    }
    ```

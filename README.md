# Train Service Management System

## Overview
This project is a backend system developed using Node.js, Express, and MongoDB. It manages train services, stations, user wallets, and ticketing, with features like user authentication, scheduling, and financial transactions.

## Features
- **User Management:** 
  - User registration and login.
  - Secure authentication and authorization using JWT.
  - Password hashing with bcrypt.

- **Station Management:** 
  - Endpoints for creating, updating, and retrieving station information.
  - Data integrity and validation ensured.

- **Train Management:** 
  - Endpoints for creating, updating, and retrieving train schedules and stops.
  - Accurate timing for train stops.

- **Wallet Integration:** 
  - Add funds to user wallets.
  - Maintain wallet balance updates and transaction history.

- **Ticketing System:** 
  - Purchase tickets using wallet balance.
  - Fare calculation based on train stops.

## Project Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB with mongoose
- npm (Node Package Manager)

### Installation

1. **Clone the repository:**
   ```bash
   git clone [[Repository URL](https://github.com/Emranhossainshuvo/train-management.git)]
   ```SSH
   git clone[[Repository URL](git@github.com:Emranhossainshuvo/train-management.git)]
   cd [train-management]

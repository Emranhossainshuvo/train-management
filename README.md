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
   git clone <code>https://github.com/Emranhossainshuvo/train-management.git </code> or <code>git clone git@github.com:Emranhossainshuvo/train-management.git </code> 
   
   <code>cd train-management</code>

   <code>npm install</code>

2. **Configure the application:**
   after cloning and installing all the dependencies, you'll have to add a .env file in the root of your project and you'll have to add environment variables. 

   1.  Port = 3000
   2.  MONGO_URI = mongodb+srv://train-system:OHSeWkWwPeToI3Ku@cluster0.0fn8ke9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   3.  JWT_SECRET = Aq6GVG+a+nCQLRq2d0L6o4yj3oP7PeU7Bjzc2WsJU7XLoPP2h4Bbyh7Rrwn/Ml0CLTda/IUFZ5F0DNGu8IDDSUdpQgjjHmvQJAJ6omxOWI2hi2+zvFcl+0Saoz42HQzvaNQ61hXTsxMWf2YfqSDyinqUsYMBPMnvAT3M1xpejbeMmlevIkqHJIjCUs+WKtrO3pELfFLWYM0n+z8/XnJB550azrBD70T7XIhQej4a9ooiTC8+HJpgqDmcd2Dsbj7AR7S9q4g+vXkhXPytQv7M/iHKpy8ED/PgKOE3OX7LjnDsIVIML0drK4pIb33z0YCv6CIq6/iQ6alJVDJ0Mu
   4.  run <code>npm start</code>

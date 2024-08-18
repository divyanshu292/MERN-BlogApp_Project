# MERN BlogApp

A Full-stack blog app with CRUD Operations.

![Screen grab of MERN BlogApp](https://github.com/user-attachments/assets/8a3af2b3-071a-4c65-a2b7-c09a9e34ddeb)



## Table of Contents
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Clone the Repository](#clone-the-repository)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Install Yarn](#install-yarn)
- [Contributing](#contributing)

## Installation

### Prerequisites

Ensure you have the following installed on your system:
- Node.js
- MongoDB
- Yarn (if not installed, see [Install Yarn](#install-yarn))
- Nodemon (if not installed, see [Install Nodemon](#install-nodemon))

### Clone the Repository

### Backend Setup

Navigate to 'api' folder

``` bash 
cd api
```

Install the dependencies
``` bash 
npm install
```
Start the backend server using Nodemon:
``` bash 
nodemon index.js
```

*** Make sure to change the MongoDB connection URL in the code if you plan to use your own database. ***

### Frontend Setup


Install Yarn

If Yarn is not installed, run the following command:
``` bash 
npm install -g yarn
```

Navigate to the client directory:
``` bash 
cd ../client or cd client
```
Install the dependencies:
``` bash 
yarn install
```
Start the frontend development server:
``` bash 
yarn start
```

## Contributing

Feel free to submit issues or pull requests. Make sure to follow the contribution guidelines.

# Form Submission Application

This is a full-stack application that allows users to submit their details via a form. The details are then stored in a MySQL database. The application is built using HTML, CSS, JavaScript for the frontend, and Node.js with Express.js for the backend.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm
- MySQL

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/vincentrajadurai/form-app.git
cd form-app

### 2. Configure the Application

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mavericks9777',
    database: 'sampleform'
});

**Project Structure**
form-app/
│
├── app.js          # Express.js server setup
├── package.json    # Project dependencies
├── index.html      # HTML form
├── styles.css      # CSS for styling the form
└── README.md       # Project documentation


**Detailed Code Explanation**
**Frontend**
1. index.html: Contains the HTML form for user input.

2. styles.css: Contains CSS to style the form.

3. JavaScript within index.html: Handles form submission via a POST request to the server.

**Backend**
1. app.js: Sets up an Express.js server, connects to the MySQL database, and handles form submissions.

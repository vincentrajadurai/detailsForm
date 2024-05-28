const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(__dirname));

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mavericks9777',
    database: 'sampleform'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

// Route to handle form submission
app.post('/submit', (req, res) => {
    const { name, email,age, mobile, address, pin } = req.body;
    if (!name || !email) {
        return res.status(400).json({ message: 'Please provide the details' });
    }

    const sql = 'INSERT INTO users (name, email, age, mobile, address, pin) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [name], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.json({ message: 'Form submitted successfully' });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

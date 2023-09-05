const express = require('express');
const app = express();
const { Pool } = require('pg');

// Create a connection pool to the PostgreSQL database
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'tmr2023',
  password: 'vieckhovoich',
  port: 5432 // or your PostgreSQL port
});

// Test the database connection
pool.connect((err, client, done) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
    done(); // Release the client
  }
});

// Middleware to parse JSON request bodies
app.use(express.json());

// Define your routes here
app.post('/signup', (req, res) => {
  const {
    timestamp,
    name,
    dob,
    email,
    phone,
    facebook,
    gender,
    livingplace,
    highschool,
    uni,
    otheruni,
    uniplace,
    universityyear,
    major,
    long1,
    long2,
    long3,
    long4,
    timeperweek,
    appliedbefore,
    mostpreferred,
    secondpreferred,
    long5,
    long6,
    long7,
    long8,
    channel,
    otherchannel,
    receiveinformation,
    gocamp,
    utm_source,
    utm_medium,
    utm_campaign,
    utm_term,
    utm_id,
    utm_content
  } = req.body;

  const query = `INSERT INTO signup (timestamp, name, dob, email, phone, facebook, gender, livingplace, highschool, uni, otheruni, uniplace, universityyear, major, long1, long2, long3, long4, timeperweek, appliedbefore, mostpreferred, secondpreferred, long5, long6, long7, long8, channel, otherchannel, receiveinformation, gocamp, utm_source, utm_medium, utm_campaign, utm_term, utm_id, utm_content) 
                 VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36)`;

  const values = [
    timestamp,
    name,
    dob,
    email,
    phone,
    facebook,
    gender,
    livingplace,
    highschool,
    uni,
    otheruni,
    uniplace,
    universityyear,
    major,
    long1,
    long2,
    long3,
    long4,
    timeperweek,
    appliedbefore,
    mostpreferred,
    secondpreferred,
    long5,
    long6,
    long7,
    long8,
    channel,
    otherchannel,
    receiveinformation,
    gocamp,
    utm_source,
    utm_medium,
    utm_campaign,
    utm_term,
    utm_id,
    utm_content
  ];

  pool.query(query, values, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      console.log('Sign-up data inserted successfully');
      res.status(201).json({ success: true });
    }
  });
});

// Start the server
const port = 3000; // or your desired port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
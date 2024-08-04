const mysql = require('mysql2');


const Person = document.querySelector(".Person");

// Create a connection to the database
const connection = mysql.createConnection({
  host: '127.0.0.1', // Your host
  user: 'root',      // Your MySQL username
  password: 'narith3013',  // Your MySQL password
  database: 'world', // Your database name
  port: 3307
});

// Connect to the database
connection.connect();

// Perform a query
connection.query('SELECT * FROM city where city.id = 10', (err, results) => {

  console.log('Results: ', results);
});
Person.innerHTML == results
// Close the connection
connection.end();

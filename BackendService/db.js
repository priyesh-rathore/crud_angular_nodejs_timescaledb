const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

const createTable = async () => {
  const createTableText = `
    CREATE TABLE IF NOT EXISTS your_table_name (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      city VARCHAR(255),
      dob DATE
    );
  `;

  try {
    await pool.query(createTableText);
    console.log("Table 'your_table_name' is ready.");
  } catch (error) {
    console.error('Error creating table:', error);
    throw error;
  }
};

module.exports = { pool, createTable };

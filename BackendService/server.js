const express = require('express');
const cors = require('cors');
const { pool, createTable } = require('./db');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Create (POST) endpoint
app.post('/api/create', async (req, res) => {
  try {
    const { name, city, dob } = req.body;
    const result = await pool.query(
      'INSERT INTO your_table_name (name, city, dob) VALUES ($1, $2, $3) RETURNING *',
      [name, city, dob]
    );
    res.status(200).json({
        message: 'Data inserted successfully',
        data: result.rows[0]
      }
    );
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).send('Error occurred while inserting data');
  }
});

// Read (GET) endpoint to fetch entry by ID
app.get('/api/read/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      'SELECT * FROM your_table_name WHERE id = $1',
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).send('Entry not found');
    }
    res.status(200).json({
        message: 'Data read successfully',
        data: result.rows[0]
      }
    );
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).send('Error occurred while fetching data');
  }
});

// Update (PUT) endpoint
app.put('/api/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, city, dob } = req.body;
    const result = await pool.query(
      'UPDATE your_table_name SET name = $1, city = $2, dob = $3 WHERE id = $4 RETURNING *',
      [name, city, dob, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).send('Entry not found');
    }
    res.status(200).json({
        message: 'Entry updated successfully',
        data: result.rows[0]
      }
    );
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).send('Error occurred while updating data');
  }
});

// Delete (DELETE) endpoint
app.delete('/api/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      'DELETE FROM your_table_name WHERE id = $1 RETURNING *',
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).send('Entry not found');
    }
    res.status(200).json({
        message: 'Entry deleted successfully',
        data: result.rows[0]
      }
    );
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).send('Error occurred while deleting data');
  }
});

// Start the server
createTable().then(() => {
  app.listen(port, () => {
    console.log(`BackendService running at http://localhost:${port}`);
  });
}).catch(error => {
  console.error('Failed to start the server:', error);
});

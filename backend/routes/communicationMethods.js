const express = require('express');
const db = require('../config/db');

const router = express.Router();

// Get All Communication Methods
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM communication_methods ORDER BY sequence');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

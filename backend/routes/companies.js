const express = require('express');
const db = require('../config/db');

const router = express.Router();

// Get All Companies
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM companies');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Add a Company
router.post('/', async (req, res) => {
    const { name, location, linkedin_profile, emails, phone_numbers, comments, communication_periodicity } = req.body;
    try {
        await db.query(
            'INSERT INTO companies (name, location, linkedin_profile, emails, phone_numbers, comments, communication_periodicity) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [name, location, linkedin_profile, emails, phone_numbers, comments, communication_periodicity]
        );
        res.status(201).json({ message: 'Company added successfully!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a Company
router.delete('/:id', async (req, res) => {
    try {
        await db.query('DELETE FROM companies WHERE id = ?', [req.params.id]);
        res.status(200).json({ message: 'Company deleted successfully!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

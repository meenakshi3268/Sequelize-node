const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');

// Index route - List all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.render('index', { employees });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Add route - Render add employee form
router.get('/add', (req, res) => {
  res.render('add');
});

// Create route - Add a new employee
router.post('/', async (req, res) => {
  try {
    const { name, designation } = req.body;
    const employee = await Employee.create({ name, designation });
    res.redirect('/employees');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Edit route - Render edit employee form
router.get('/:id/edit', async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    res.render('edit', { employee });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Update route - Update an employee
router.post('/:id', async (req, res) => {
  try {
    const { name, designation } = req.body;
    await Employee.update({ name, designation }, { where: { id: req.params.id } });
    res.redirect('/employees');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Delete route - Delete an employee
router.get('/:id/delete', async (req, res) => {
  try {
    await Employee.destroy({ where: { id: req.params.id } });
    res.redirect('/employees');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

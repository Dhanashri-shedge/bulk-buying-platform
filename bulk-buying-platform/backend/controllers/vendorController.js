exports.placeOrder = (req, res) => {
  const db = require('../models/db');
  const { name, item, quantity } = req.body;

  const sql = `INSERT INTO orders (name, item, quantity) VALUES (?, ?, ?)`;
  db.run(sql, [name, item, quantity], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: "Order placed successfully", orderId: this.lastID });
  });
};

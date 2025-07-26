const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const vendorRoutes = require('./routes/vendorRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/vendor', vendorRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});

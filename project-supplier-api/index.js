const express = require('express');
const app = express();
const supplierRoutes = require('./routes/supplierRoutes');

app.use(express.json());
app.use('/api/supplier', supplierRoutes);

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});

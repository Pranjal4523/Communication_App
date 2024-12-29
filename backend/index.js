const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const companyRoutes = require('./routes/companies');
const methodRoutes = require('./routes/communicationMethods');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/companies', companyRoutes);
app.use('/api/methods', methodRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

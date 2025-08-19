require('dotenv').config();
const express = require('express');
const cors =require('cors');
const app = express();
const mainRouter = require('./routes/mainrouter');

app.use(express.json())
app.use(cors());

app.use("/api/v1" , mainRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
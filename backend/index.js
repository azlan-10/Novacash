require('dotenv').config();
const express = require('express');
const cors =require('cors');
const app = express();
const mainRouter = require('./routes/mainrouter');

app.use(express.json())
app.use(cors());

app.use("/api/v1" , mainRouter)

app.listen(3000, '0.0.0.0', () => {
  console.log(`Server running on port 3000`);
});
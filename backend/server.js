const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());

app.use('/api/user', userRoutes);

app.get("/", (req, res) => {
  res.send("API is Running");
});




const PORT = process.env.PORT | 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
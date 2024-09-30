const express = require("express");
const app = express();
const PORT = 5000 || process.env.PORT;
const routes = require('./routes/twiddle_routes')


app.use(express.json())
app.use("/", routes)
app.get("/", (req, res) => {
  console.log("runnning");
  res.status(200).json({
    message: "Welcome to the API",
    version: "1.0.0",
  });
});

const startServer = () => {
  app.listen(PORT, () => {
    try {
      console.log("Server started on port 5000");
    } catch (error) {
      console.log(error);
    }
  });
};

startServer();

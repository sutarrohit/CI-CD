import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("This Express server to test CI/CD");
});

app.listen(3000, () => console.log("Server is running on port 3000"));

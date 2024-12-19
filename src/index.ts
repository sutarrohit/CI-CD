import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("<-----------Request received----------->");
  res.send("This Express server to test CI/CD");
});

app.listen(3000, () => console.log("Server is running on port 3000"));

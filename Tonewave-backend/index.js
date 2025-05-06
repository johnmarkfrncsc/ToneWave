import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API Example Route is working" });
});

app.listen(3000, () => {
  console.log("app is running on http://localhost:3000");
});

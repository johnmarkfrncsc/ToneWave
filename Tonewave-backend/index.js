import express from "express";
import cors from "cors";
import { getHome } from "@hydralerne/youtube-api";

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", async (req, res) => {
  try {
    const homeData = await getHome();
    res.json(homeData);
  } catch (error) {
    res.status(500).send("Error fetching home data");
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});





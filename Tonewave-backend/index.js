import express from "express";
import cors from "cors";
import { getHome, youtubeMusicSearch } from "@hydralerne/youtube-api";

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


app.get("/search", async (req, res) => {
  const query = req.query.q;
  const filter = req.query.filter || "songs";

  if (!query) {
    return res.status(400).json({ error: "Missing search query" });
  }

  try {
    const results = await youtubeMusicSearch(query, filter);
    res.json(results);
  } catch (error) {
    res.status(500).send("Error fetching search results");
  }
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  

  (async () => {
    try {
      const results = await youtubeMusicSearch('Imagine Dragons', 'songs');
      console.log("Test search results for 'Imagine Dragons':", results);
    } catch (err) {
      console.error("Test search failed:", err);
    }
  })();
});

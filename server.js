const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3300;

app.use(bodyParser.json());

app.post("/json-finder", (req, res) => {
  const { jsonString, parentKey } = req.body;

  try {
    const jsonObject = JSON.parse(jsonString);
    const child = jsonObject[parentKey];

    if (child) {
      res.status(200).send(child);
    } else {
      res.status(404).json({ error: "Parent key not found" });
    }
  } catch (error) {
    res.status(400).json({ error: "Invalid JSON string" });
  }
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});

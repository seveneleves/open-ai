const express = require("express");
const openai = require("./utils/auth");
const cors = require("cors");

// Initialize Express App
const app = express();

// Initialize Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Set Listening Port
app.listen(3001, () => console.log("Server is listening on port 3001"));

// Error handling function
function handleError(res, err) {
  if (err.response) {
    console.log(err.response.status);
    console.log(err.response.data);
    res.status(400).send(err.response.data);
  } else {
    console.log(err.message);
    res.status(400).json({ err: err.message });
  }
}

// @        /generateImage
// method   POST
// desc.    Return Image After Given Prompt
app.post("/generateImage", async function (req, res, next) {
  try {
    const image = await openai.createImage({
      prompt: req.body.prompt,
      n: 1,
      size: "256x256",
    });
    res.status(200).json({ imageUrl: image.data.data[0].url });
  } catch (error) {
    handleError(res, error);
  }
});

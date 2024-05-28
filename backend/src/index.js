const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());

app.use("/api/blogs", require("./routes/blogs"));

app.listen(port, () => {
  console.log(`IX blogging app listening on port ${port}`);
});

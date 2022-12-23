const express = require("express");
const app = express();

const tourRouter =  require('./routes/tourRoutes')

app.use(express.json());
app.use("/api/v1/tours",tourRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is runnning on port ${port}`);
});

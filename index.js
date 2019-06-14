const app = require("./server");
const db = require("./server/db/database");

const port = process.env.PORT || 3000;

db.sync()
  // sync our database

  .then(function() {
    app.listen(port, () =>
      console.log(`Your port is up and running on port ${port}`)
    ); // then start listening with our express server once we have synced
  });

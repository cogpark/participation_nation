const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

// should never be seen
app.get("/", (req, res) => res.send("You hit the Participation Nation backend"));

// the only route we actually need
app.post("/api/feedback", (req, res) => {
    res.redirect("/");
});

const port = 5000;


app.listen(port, () => console.log("listening on ", port));

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

// should never be seen
app.get("/", (req, res) => res.send("You hit the Participation Nation backend"));

app.get("/app/feedback", (req, res) => {
	res.send("Hi");
});

// the only route we actually need
app.post("/api/feedback", (req, res) => {
    console.log(req.body);
    res.redirect("/");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("listening on ", port));

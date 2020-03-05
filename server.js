const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("You hit the Participation Nation backend"));
app.get("/api/data", (req, res) => {
    const data = [
        {id: 1, fName: "john", lName: "smith"},
        {id: 2, fName: "jane", lName: "doe"}
    ]
    res.json(data);
});
app.post("/api/feedback", (req, res) => {
    res.send("hello from feedback");
});

const port = 5000;


app.listen(port, () => console.log("listening on ", port));

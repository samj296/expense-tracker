const express = require("express");
const {createNote} = require("./logicEngine");

const noteApp = express();
noteApp.use(express.json());

const PORT = 3000;

noteApp.listen(PORT, () =>{
    console.log(`The server is running on http://Localhost:${PORT}`);
});

noteApp.get("/note",(req, res) => {
    res.json(note)
});
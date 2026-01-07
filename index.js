const express = require("express");
const {createNote, note} = require("./logicEngine");

const noteApp = express();
noteApp.use(express.json());

const PORT = 3000;

noteApp.listen(PORT, () =>{
    console.log(`The server is running on http://Localhost:${PORT}`);
});

noteApp.get("/note",(req, res) => {
    res.json(note);
});

noteApp.post("/note",(req, res) =>{
    const {note: item} = req.body;
    const {category: category} = req.body;
    try{
        const newNote = createNote(item, category);
        res.json(newNote);
    }catch(err){
        res.status(404).json({error: err.message});
    }
    
});
const express = require("express");
const {addExpense, getExpenseAmount, expenseDetail, deleteExp} = require("./logicEngine");

const expenseApp = express();
expenseApp.use(express.json());

const PORT = 3000;

expenseApp.listen(PORT, () =>{
    console.log(`The server is running on http://Localhost:${PORT}`);
});

expenseApp.get("/exp",(req, res) => {
    res.json(`Total exp : ${getExpenseAmount()}`);
});

expenseApp.get("/exp/detail", (req,res) =>{
    res.json(expenseDetail);
});

expenseApp.post("/exp",(req, res) =>{
    const {expense: expense} = req.body;
    const {category: category} = req.body;
    try{
        const newExp = addExpense(expense, category);
        res.json(newExp);
    }catch(err){
        res.status(404).json({error: err.message});
    }
    
});

expenseApp.delete("/exp/:id",(req,res) =>{
    try{
        const id = Number(req.params.id);
        res.json(deleteExp(id));
    }catch (err){
        res.status(404).json({error: err.message});
    }
});
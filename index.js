const express = require("express");
const {addExpense, getExpenseAmount, expenseDetail} = require("./logicEngine");

const expenseApp = express();
expenseApp.use(express.json());

const PORT = 3000;

expenseApp.listen(PORT, () =>{
    console.log(`The server is running on http://Localhost:${PORT}`);
});

expenseApp.get("/exp",(req, res) => {
    res.json(getExpenseAmount());
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
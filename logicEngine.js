let expenseAmount = 0;
const expenseDetail = [];
const validCategory = ["Food", "Transportation", "Housing", "Bills", "Entertainment", "Shopping", "Miscellaneous"];
let id = 1;

function addExpense(expense, category){
    if(typeof expense !== "number" || Number.isNaN(expense) || expense <= 0){
        throw new Error(`expense should be a positive numbers only`);
        
    };
    const normalizedCat = category.trim().toLowerCase();
    const normalizedValid = validCategory.map(C => C.toLowerCase());
    if (!normalizedValid.includes(normalizedCat)){
        throw new Error(`Category should be ${validCategory.join(", ")}`)
    };
    const expenseObject ={
        id: id++,
        expense: expense,
        category: category.toUpperCase()
    };
    expenseAmount += expense
    expenseDetail.push(expenseObject);
    return expenseObject;
};

function getExpenseAmount(){
    return expenseAmount
}

module.exports = {addExpense, getExpenseAmount,expenseDetail}
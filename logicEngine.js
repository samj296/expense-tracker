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

function deleteExp(id){
    const itemIndex = expenseDetail.findIndex(i => i["id"] === id);
    // if the id is not found then findIndex will assign -1
    if(itemIndex === -1){
        throw new Error(`expense with id ${id} not found`);
    }
    
    removedItem = expenseDetail.splice(itemIndex,1)[0];
    expenseAmount -= removedItem.expense;
   return removedItem
};

module.exports = {addExpense, getExpenseAmount, expenseDetail, deleteExp}
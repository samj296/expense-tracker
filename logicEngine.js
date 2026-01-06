const note = [];
const id = 1;

function createNote(item,category){
    const validCategory = ["Work", "personal", "Study"];
    if(!validCategory.includes(category)){
        throw new Error(`Only ${validCategory.join(", ")} categories are allowed`);        
    };

    const noteObject ={
        id: id++,
        note: item,
        category: category
    };

    note.push(noteObject);
};

module.exports = {createNote}
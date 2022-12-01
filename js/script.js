// Stores the Submit button in a variable
let btn = document.querySelector('#submit');
let taskList = [];

let count = 1;

// This function adds a new item to the To Do List
function addToDo() {

    if (document.querySelector("#todo").value !== "")
    {
        newTask = new task.create(count, document.querySelector("#todo").value);
        taskList.push(newTask);

        // Resets the input field
        document.querySelector("#todo").value = "";

        // Increment count variable by 1 so that when we add a new item to the list it is the next number in order
        count++;

        console.log(newTask)
    }
}

// Submit button calls the, "addToDo" function when clicked
btn.addEventListener('click', addToDo);

/**
 * Lord Jesus take the wheel
 * 
 * Alrighty, lets go
 */


/**
 * Task object
 */
let task = {
    //Variables
    count:         0,
    description:    "",

    //Setters
    setCounter: function(number)
    {
        this.count = number;
    },

    setDescription: function(string)
    {
        this.description = string;
    },

    //Constructor
    create: function(count, description)
    {
        this.count = count;
        this.description = description;

        // Stores the body tag in a variable, and creates a new div tag variable
        let bodyTag = document.querySelector("body");
        let divTag = document.createElement("DIV");

        // Creates new p tags. p1 for the number before the item, and p2 for the item string itself
        let p1 = document.createElement("P");
        let p2 = document.createElement("P");

        // Appends the new div tag to the body 
        bodyTag.appendChild(divTag);
        
        // Stores what the user typed in the input field
        let newToDo = this.description;

        // Creates a new checkbox 
        let checkBox = document.createElement("INPUT");
        checkBox.setAttribute ("type", "checkbox");

        // Creates a new paragraph field where the To Do List item will be displayed
        let pCount = document.createTextNode(this.count + ".");
        let pToDo = document.createTextNode(newToDo);

        // Creates a new Delete button
        let deleteBtn = document.createElement("BUTTON");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.addEventListener('click', deleteToDo.bind(this.count));

        // Appends the p1, checkbox, p2, and delete button to the parent tag element
        divTag.appendChild(p1);
        p1.appendChild(pCount); 
        
        divTag.appendChild(checkBox);
        divTag.appendChild(p2);
        p2.appendChild(pToDo);

        divTag.appendChild(deleteBtn)
    }
};

function adjustListItems()
{
    for(let i = 0; i < taskList.length; i++)
    {
        listItems[i].setCounter(i);
    }
};

// This function adds a new item to the To Do List
function deleteToDo(number) {
    taskList.splice(number,1);

    console.log("Here");
    console.log(taskList);
    count--;
    adjustListItems();

    divTag.appendChild(p1);
        p1.removeChild(pCount); 
        
        divTag.removeChild(checkBox);
        divTag.removeChild(p2);
        p2.removeChild(pToDo);

        divTag.removeChild(deleteBtn)
};



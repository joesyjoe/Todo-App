let selectors = {
    todoTask : "todo-task",
    todoHeader: "task-header",
    todoDate: "task-date",
    todoDescription: "task-description",
    taskId: "todo-form",
    formId: "todo-form",
    dataAttribute: "data",
    deleteDiv: "delete-div"
}

code = {
    "1": "#pending",
    "2": "#inProgress",
    "3": "#completed"
};

/**adding task*/
let generateElement = function(para) {
    let parent = $(codes[para.code]);
    let wrapper;
    if(!parent){
        return;
    }
    wrapper = $("<div />",{
        "class": selectors.todoTask,
        "id": selectors.taskId + para.id,
        "data": para.id
    }).appendTo(parent);

    $("<div />", {
        "class": selectors.todoHeader,
        "text": para.tiitle
    }).appendTo(wrapper);

    $("<div />", {
        "class": selectors.todoDate,
        "text":  para.date
    }).appendTo(wrapper);

    $("<div />", {
        "class": selectors.todoDescription,
        "text": para.description
    }).appendTo(wrapper)
};

/** removing task */
let removeElemenet = function(para){
    $("#" + selectors.taskId+para.Id).remove();
};

/** saving task in local storage */
let data = json.parse(localStorage.getItem("todoData"));
localStorage.setItem("todoData")

// submitting the todo form
let addItem = ( ) => {
    let inputs = $("#" + selectors.formId +" :input");
    let errorMessage = "Tittle can be empty";
    let id, tittle, description, date, tempData;
    if(!tittle.length !== 4){
        return;
    }
    tittle = inputs[0].value;
    description= inputs[1].value;
    date=inputs[2].value;
    if(!tiitle){
        generateDialog(errorMessage);
        return;
    }
    id = new Date().getTime();

    tempDate = {
        id: id,
        code: "1",
        tittle: tiitle,
        date: date,
        description: description
    };

    // saving Element in local storage
    data[id] = temData;
    localStorage.setItem("todoData", JSON.stringify(data));

    // gENEATE TODO ELEMENET
    generateElement(tempData);

    // Reset form
    inputs[0].value="";
    inputs[1].value="";
    inputes[2].value="";
};

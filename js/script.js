let tasks = [];
let isPlusDisabled = false;

function renderTasks() {
  let out_arr = document.getElementById("out_arr");
  out_arr.innerHTML = "";

  tasks.forEach(function (task) {
    const taskElement = document.createElement("div");
    taskElement.className = "div_task";
    const nomerElement = document.createElement("p");
    nomerElement.className = "p_nomer";
    nomerElement.innerHTML = task.nomer;

    const titleElement = document.createElement("p");
    titleElement.className = "p_title";
    titleElement.innerHTML = task.title;
    const descriptionElement = document.createElement("p");
    descriptionElement.className = "p_description";
    descriptionElement.innerHTML = task.description;
    //const finishElement = document.createElement("p");
    //finishElement.className = "p_finish";

    //finishElement.innerHTML = task.finish;
    //finishElement.innerHTML = inputElementfinish;
    const delBut = document.createElement("input");
    delBut.className = "input_del";
    delBut.type = "image";
    delBut.src = "img/icons8-крестик-48.png";
    delBut.id = "del_but_id";
    delBut.onclick = function () {
      deleteTask(task.nomer);
    };
    const updateButton = document.createElement("input");
    updateButton.className = "input_tassel";
    updateButton.type = "image";
    updateButton.src = "img/icons8-кисточка-для-рисования-48.png";
    const inputElementfinish = document.createElement("input");
    inputElementfinish.className = "classInputFinish";
    inputElementfinish.type = "checkbox";
    inputElementfinish.id = "inputfinish_id";

    taskElement.appendChild(nomerElement);
    taskElement.appendChild(titleElement);
    taskElement.appendChild(descriptionElement);
    //taskElement.appendChild(finishElement);
    out_arr.appendChild(taskElement);
    taskElement.appendChild(delBut);
    taskElement.appendChild(updateButton);
    taskElement.appendChild(inputElementfinish);
  });
}
renderTasks();

const buttonAdd = document.querySelector(".adding-input");
function renderPlusComponents() {
  if (isPlusDisabled) {
    return;
  }
  const blockForList = document.getElementById("tasks_form");
  const inputElementTitle = document.createElement("input");
  blockForList.appendChild(inpbut_id);
  inpbut_id.appendChild(inputElementTitle);
  inputElementTitle.id = "title_id";
  inputElementTitle.className = "inputClass";

  const inputElementDescription = document.createElement("input");
  inputElementDescription.id = "description_id";
  inputElementDescription.className = "inputClass";
  inpbut_id.appendChild(inputElementDescription);
  const saveButton = document.createElement("button");
  saveButton.className = "buttonClassAdd";
  saveButton.innerHTML = "Добавить";
  inpbut_id.appendChild(saveButton);
  const buttonAddTask = document.querySelector(".buttonClassAdd");
  saveButton.onclick = addTask;
  isPlusDisabled = true;
}
function addTask() {
  const titleInput = document.getElementById("title_id");
  const description = document.getElementById("description_id");
  let nomerToo = generateNumber();
  let adding = {
    nomer: nomerToo,
    title: titleInput.value,
    description: description.value,
    //finish: "Выполнена",
  };
  tasks.push(adding);
  renderTasks();
  inpbut_id.innerHTML = "";
  isPlusDisabled = false;
}

buttonAdd.onclick = renderPlusComponents;
function generateNumber() {
  if (tasks.length == 0) {
    return 1;
  }
  tasks[tasks.length - 1].nomer;
  return tasks[tasks.length - 1].nomer + 1;
}
function deleteTask(nomer) {
  tasks = tasks.filter((person) => person.nomer != nomer);
  renderTasks();
}

// TODO Домашнее задание:
// почитать про сравнения

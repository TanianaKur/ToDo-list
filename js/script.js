
let tasks = [


];

function renderTasks() {
   let out_arr = document.getElementById('out_arr');
   out_arr.innerHTML = '';

   tasks.forEach(function (task) {
      const taskElement = document.createElement('div');

      const nomerElement = document.createElement('p');
      nomerElement.innerHTML = task.nomer;

      const titleElement = document.createElement('p');
      titleElement.innerHTML = task.title;
      const descriptionElement = document.createElement('p');
      descriptionElement.innerHTML = task.description;
      const finishElement = document.createElement('p');
      finishElement.innerHTML = task.finish;
      taskElement.appendChild(nomerElement);
      taskElement.appendChild(titleElement);
      taskElement.appendChild(descriptionElement);
      taskElement.appendChild(finishElement);
      out_arr.appendChild(taskElement);
   });
};
renderTasks();

const buttonAdd = document.querySelector('.adding-input');
function showForm() {
   const blockForList = document.getElementById("tasks_form");
   const inputElementTitle = document.createElement('input');
   blockForList.appendChild(inpbut_id);
   inpbut_id.appendChild(inputElementTitle);
   inputElementTitle.id = 'title_id';
   inputElementTitle.className = 'inputClass';

   const inputElementDescription = document.createElement('input');
   inputElementDescription.id = 'description_id';
   inputElementDescription.className = 'inputClass';
   inpbut_id.appendChild(inputElementDescription);
   const saveButton = document.createElement('button');
   saveButton.className = 'buttonClassAdd';
   saveButton.innerHTML = 'Добавить';
   inpbut_id.appendChild(saveButton);
   const buttonAddTask = document.querySelector('.buttonClassAdd');
   saveButton.onclick = addTask;

};
function addTask() {
   const titleInput = document.getElementById("title_id");
   const description = document.getElementById("description_id");
   let nomerToo = generateNumber();
   let adding = {

      nomer: nomerToo,
      title: titleInput.value,
      description: description.value,
      finish: 'да',
   };
   tasks.push(adding);
   renderTasks();
   inpbut_id.innerHTML = '';

};

buttonAdd.onclick = showForm;
function generateNumber() {
   if (tasks.length == 0) {
      return 1
   }
   tasks[tasks.length - 1].nomer;
   return tasks[tasks.length - 1].nomer + 1
};












// TODO Домашнее задание:

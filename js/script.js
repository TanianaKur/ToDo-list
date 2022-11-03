
let tasks = [
   {
      nomer: 1,
      title: 'home work',
      description: 'сделать информатику',
      finish: 'да',
   },
   {
      nomer: 2,
      title: 'home works',
      description: 'сделать литературу',
      finish: 'нет',
   }
];
let out_arr = document.getElementById('out_arr');

tasks.forEach(function (task) {
   console.log(task)
   const taskElement = document.createElement('div');

   const nomerElement = document.createElement('p');
   nomerElement.innerHTML = `${task.nomer}`;

   const titleElement = document.createElement('p');
   titleElement.innerHTML = `${task.title}`;
   const descriptionElement = document.createElement('p');
   descriptionElement.innerHTML = `${task.description}`;
   const finishElement = document.createElement('p');
   finishElement.innerHTML = `${task.finish}`;
   taskElement.appendChild(nomerElement);
   taskElement.appendChild(titleElement);
   taskElement.appendChild(descriptionElement);
   taskElement.appendChild(finishElement);
   out_arr.appendChild(taskElement);

});


const buttonAdd = document.querySelector('.adding-input');
function showForm() {
   const blockForList = document.getElementById("tasks_form");
   const inputElementTitle = document.createElement('input');

   blockForList.appendChild(inputElementTitle);
   inputElementTitle.className = 'inputClass';
   const inputElementDescription = document.createElement('input');
   inputElementDescription.className = 'inputClass';
   blockForList.appendChild(inputElementDescription);
   const saveButton = document.createElement('button');
   saveButton.innerHTML = 'Добавить';
   blockForList.appendChild(saveButton);
};
buttonAdd.onclick = showForm;
// TODO Домашнее задание:
// * Добавить стили.
// * Добавить появление инпутов и кнопки при нажатии кнопки "+"
// * Добавить создание задачи
// ** Подумать, как генерировать номер для новой задачи
// ** Подумать, как добавлять новые задачи и вывод их на форму
// ** Подумать, как реализовать исчезновение инпутов и кнопки при нажатии на кнопку "Добавить"
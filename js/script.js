
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

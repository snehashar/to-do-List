const addButton = document.querySelector('.add-button');
const inputField = document.querySelector('.input-task');
const taskList = document.querySelector('.task-list');

addButton.addEventListener('click', function() {
    const taskValue = inputField.value;
    if (taskValue) {
        const li = document.createElement('li');
        li.className = 'list-item flex justify-between items-center gap-x-10 mb-4 ';
        li.textContent = taskValue;

    
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'bg-red-500 text-black rounded px-2 ml-4 '; 


        li.appendChild(deleteButton);
        taskList.appendChild(li);
        inputField.value = ''; 

    
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });
        li.addEventListener('click', function() {
            li.classList.toggle('line-through'); 
        });
    }
});

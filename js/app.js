// add new task 
const btnTaskAdd = document.getElementById('btn-task-add');

const inputTask = document.getElementById('input-task');
const taskListContainer = document.getElementById('task-list-container');
// console.log(btnTaskAdd);
btnTaskAdd.addEventListener('click',addNewTask)
inputTask.addEventListener('keyup',function(event){
    if(event.key == "Enter"){
        addNewTask()
        // console.log('done ')
    }
    // console.log(event.key)
})
function addNewTask(){
    
    if(inputTask.value==''){
        return inputTask.focus()
    }
    // console.log('new task 1')
    // console.log(inputTask.value)
    // create a new element 
    const li =  document.createElement('li');
    li.innerHTML = inputTask.value +`<button  class="btn-trash"> <i class="far fa-trash-alt  transform hover:rotate-180 hover:-translate-y-2 transition duration-500 ease-in-out"></i></button>`
    // add class 
    li.classList = "flex justify-between bg-green-300 py-2 px-2 rounded text-white lg:text-3xl my-1 border-white hover:bg-red-400"
    // add to ul
    taskListContainer.appendChild(li)
    inputTask.value = ''
    inputTask.focus()
    // taskListContainer.appendChild
    
    // console.log(btnTrash)    ;

    // remove 
    

}
taskListContainer.addEventListener('click',function(event){
    // console.log(event.target.parentNode.parentNode.parentNode)
    taskListContainer.removeChild(event.target.parentNode.parentNode)
    // event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode)
})

// remove list item 

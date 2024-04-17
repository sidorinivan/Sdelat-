document.getElementByID("button").onclick = addNewTask

document.getElementsById('ul').onclick =  markDone
function markDone(ev) {
    console.log ("ahaaha")
    console.log (ev)
    const el = ev.target
    el.style.textDecoration = 'Line-through'
}

document.getElementByID("button").onclick = addNewTask


document.addEventListener('keyboard',check)
function check(ev) {
    if (ev.key == "Enter") {addNewTask();}
 
    function addNewTask() {
    const taskEl=document.getElementById('ul')
    const task = taskEl.value 
    if (task) {
        const listEl = document.getElementById('ul')
        const newTaskEl = document.createElement("li")
        newTaskEl.innerText = task
        listEl.prepend(newTaskEl)
        task.value == ''
    }
    else {alert ("AHAHAAHUAHAUAHAUHAHAUHAUHAUAHAUHAUHAUHAUHAUAHUHUAHAUHUAAUHAUAHAUHAUAHAUH")}
    }
}
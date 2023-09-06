var list = document.getElementById('task-li');
var enterTxt = document.getElementById('txt');

function addTask(){
    if(enterTxt.value === ''){
        alert('You Must Enter Somthing!!')
    }
    else{
        var li = document.createElement('li');
        li.innerHTML = enterTxt.value;
        list.appendChild(li);
        var span = document.createElement('span');
        span.innerHTML = '\u00d7'
        li.appendChild(span);
    }
    enterTxt.value = '';
    saveData();
}
list.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("done");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data", list.innerHTML);
};

function callData(){
    list.innerHTML = localStorage.getItem("data");
}
callData();

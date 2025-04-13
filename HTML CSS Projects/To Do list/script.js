

const inputBox = document.getElementById("input-box");
const list = document.getElementById("list-container");
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = "";
    saveDate();
}

list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveDate()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveDate()
    }
}, false);

function saveDate() {
localStorage.setItem("data", list.innerHTML );
}

function showTask() {
    list.innerHTML = localStorage.getItem("data");
}
showTask();
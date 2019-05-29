var points = 0;

function newElement() {
  var br = document.createElement("br");
  var li = document.createElement("li");
  var inputValue = document.getElementById("inputtask").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  li.appendChild(br);
  if (inputValue === '') {
    alert("Please type something");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("inputtask").value = "";
}

function onDone() {
  points++;
}

if (points == 1) {
  alert("lmao");
}
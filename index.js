var totalItem = 0;
var itemNumber = 0; 
var inc = 'true';
var newItem="";

function addNewItem() {
    newItem = document.getElementById('newItem').value;
    // console.log("New", newItem);
    if(newItem === ""){
        return;
    }
    itemNumber += 1;
    document.getElementById('newItem').value = "";
  let addTask = `<div id="task${itemNumber}" class="task p-2 d-flex justify-content-between">
    <div>
        <input class="check-task" type="checkbox" title="Check if completed!">
        <span>${newItem}</span>
    </div>
    
    </div>`;

    console.log("Add", addTask);
  document.getElementById('item').insertAdjacentHTML("beforebegin", addTask);
  document.getElementById('tasks-left').innerHTML = itemNumber;
}





// to add new item in the list by clicking button

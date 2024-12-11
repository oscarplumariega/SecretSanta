function openModal() {
  document.getElementById("modal").classList.remove("hidden");
};
function closeModal() {
  document.getElementById("modal").classList.add("hidden");
};

  function deleteData(entry){
    console.log(entry);
  };

// array of object
let options = [
  {
    name: "opt1",
    email: "some@gmail.com"
  },
  {
    name: "opt2",
    email: "some2@gmail.com"
  },
  {
    name: "opt3",
    email: "some3@gmail.com"
  },
];

// selects the table to write in
let table = document.querySelector("table");
let tblBody = document.querySelector("tbody");

 for (let i = 0; i < options.length; i++) {

    const row = document.createElement("tr");

    for (let j = 0; j <= Object.keys(options[i]).length; j++) {
      const cell = document.createElement("td");
      
      const cellText = document.createTextNode(options[i][Object.keys(options[i])[j]]);

      if(j === Object.keys(options[i]).length) {
        cell.innerHTML = `<button onclick=deleteData("${options[i].email}") value="${options[i].email}">Eliminar</button>`;
      }else{
        cell.appendChild(cellText);
      }
      row.appendChild(cell);
    }

    tblBody.appendChild(row);
  };

  // sets the border attribute of tbl to '2'
  table.setAttribute("border", "2");
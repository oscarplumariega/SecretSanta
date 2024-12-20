function openModal() {
  document.getElementById("modal").classList.remove("hidden");
}
function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

function deleteData(email) {
  const indexOfElement = participants.map((p) => p.email).indexOf(email);

  document.getElementById("table").deleteRow(indexOfElement + 1);
}

let participants = [];

function addParticipant(name, email) {
  participants.push({ name: name, email: email });
  this.createData(participants[participants.length - 1]);
  this.closeModal();
}

function drawParticipants() {
  const participantsAleatory = participants.sort(() => {
    return Math.random() - 0.5;
  });
  const draws = [];

  for (let i = 0; i < participantsAleatory.length; i++) {
    let draw = {};
    if (i === participantsAleatory.length - 1) {
      draw = {
        p1: participantsAleatory[i],
        p2: participantsAleatory[0],
      };
    } else {
      draw = {
        p1: participantsAleatory[i],
        p2: participantsAleatory[i + 1],
      };
    }

    draws.push(draw);
  }

  return draws;
}

let table = document.querySelector("table");
let tblBody = document.querySelector("tbody");

function createData(participant) {
  const row = document.createElement("tr");
  row.setAttribute("id", participant.email);

  for (let j = 0; j <= Object.keys(participant).length; j++) {
    const cell = document.createElement("td");

    if (j === Object.keys(participant).length) {
      cell.innerHTML = `<button onclick=deleteData("${participant.email}") value="${participant.email}">Eliminar</button>`;
    } else {
      cell.innerHTML = `<td>${participant[Object.keys(participant)[j]]}</td>`;
    }
    row.appendChild(cell);
  }

  tblBody.appendChild(row);
}

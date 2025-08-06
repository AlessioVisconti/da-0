const textInput = document.getElementById("textInput");
const add = document.getElementById("add");
const newTask = document.getElementById("newTask");

add.addEventListener("click", function () {
  //aggiungiamo l'evento del click, ovvero quando si andrà a cliccare il bottone accadrà qualcosa
  const taskStr = textInput.value;
  if (taskStr !== "") {
    //se textInput è diverso da stringa vuota fai quello che dice l'if
    const li = document.createElement("li"); // crea li
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox"; //creiamo la checkbox ovvero il quadrattino
    const span = document.createElement("span"); //creiamo lo spazio dove poi verrà la stringa
    span.textContent = taskStr + " "; // mettiamo stringa spazio per allontanare un po' la checkbox
    checkbox.addEventListener("change", function () {
      //aggiungiamo un evento a checkbox che si attiva quando il suo valore cambia
      span.classList.toggle("sbarratura", checkbox.checked); //toggle aggiunge la classe solo se la condizione è vera(checkbox.checked)
    });
    li.appendChild(span);
    li.appendChild(checkbox);
    newTask.appendChild(li);
    textInput.value = ""; //riportiamo tutto al punto di partenza
  }
});

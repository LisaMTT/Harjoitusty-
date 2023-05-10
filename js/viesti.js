//VIESTI
document.querySelector("#addNoteBtn").addEventListener("click", addNote);

    let button = document.querySelector("button");
    let body = document.querySelector("body");
    let nimi = document.getElementById("nimi");
    let note = document.getElementById("viesti");
    let checkbox = document.getElementById("important");
  

    function addNote() {
        let h3 = document.createElement("h3");
        let p = document.createElement("p");
      
        // Lisää päiväyksen ja kellonajan
        let currentTime = new Date();
        let noteName = nimi.value + " - " + currentTime.toLocaleString();
        h3.textContent = noteName;
      
        p.textContent = viesti.value;
      
        if (checkbox.checked) {
        //   h3.classList.add("important");
          p.classList.add("important");
        }
      
        body.append(h3, p, document.createElement("hr"));
      }    
  
    button.addEventListener("click", addNote);


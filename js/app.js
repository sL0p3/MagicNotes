showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("addTitle");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
        title :addTitle.value,
        text : addTxt.value
  }
  if (addTxt.value == "") {
    alert("Enter something in the note");
  } else {
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
  }
  showNotes();
});
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index){
    html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${index+1}. ${element.title}</h5>
                <p class="card-text">${element.text}</p>
                <a id ="${index}" onclick ="deleteNote(this.id)" class="btn btn-primary">Delete Note</a>
                <button type="button" class="btn btn-outline-warning" style = "text-decoration:none;" >&#9734;</button>
            </div>
        </div>`;
  });
  let notesElem = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElem.innerHTML = html;
  } else {
    notesElem.innerHTML = `Nothing to show . Use "Add a note" section above to add note. `;
  }
}
function deleteNote(index) {
  if (confirm("Do you want to delete note permanently ?") == true) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
  } else {
    showNotes();
  }
}
let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  let inputVal = search.value.toLowerCase();
  let noteCards = document.getElementsByClassName("noteCard");
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.toLowerCase().includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});

// function impBtnClick(){
    // html = "";
    
  // let impBtn= document.getElementsByClassName("impButton");
//   console.log(impBtn)
//   Array.from(impBtn).forEach(function(element){
//     let span = element.getElementsByTagName('span')[0].innerHTML;
//     console.log(span)
//     if (span.innerHTML === "☆"){
//       span.innerHTML = "★"
//     }else{
//       span.innerHTML = "☆"
//     }
//   })
  // let imp = localStorage.getItem("imp");
  // if (imp == null){
  //   impArray = [];
  // }else{
  //   impArray = JSON.parse(imp)
  // }
  // console.log(impBtn.innerHTML);
  // if (impBtn.innerHTML == <span style="font-size:200%;">&#9734;</span>){
  //   impBtn.innerHTML = `<span style="font-size:200%;">&#9733;</span>`;
  // }else{
  //   impBtn.innerHTML = `<span style="font-size:200%;">&#9733;</span>`
  // }
// }
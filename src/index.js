let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  renderChars();
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

function renderChars() {
  fetch('http://localhost:3000/toys')
    .then(res => res.json())
    .then(toys => {
      //console.log(toys);
      //get top element for start of card element
      for(index in toys) {
        console.log(toys[index].name);
        //create a card
        //fill all data in card
        //append card to list
      }
      //append card list to start of card element
      //for(let i = 0; i < toys.length; i++){}
    })
}

function pushChars() {

}

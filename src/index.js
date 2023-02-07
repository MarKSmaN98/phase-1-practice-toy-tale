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
      //get top element for start of card element
      let topDiv = document.querySelector('#toy-collection'); //start of card collection
      for(index in toys) {
        console.log(toys[index].name);
        let tmpToyId = toys[index].id; //get id of each toy
        //create a card
        //fill all data in card
        //append card to list
         let topOfCard = document.createElement('div'); //beginning of each card
         topOfCard.id = tmpToyId;
         topOfCard.className = 'card';

         let name = document.createElement('h2');
         name.textContent = toys[index].name;

         let img = document.createElement('img');
         img.className = 'toy-avatar';
         img.src = toys[index].image;
         img.alt = toys[index].name;

         let likes = document.createElement('p');
         likes.textContent = toys[index].likes;

         topOfCard.append(name);
         topOfCard.append(img);
         topOfCard.append(likes);


        // const nameDiv = document.createElement('div');
        // nameDiv.id = 'name';
        // nameDiv.textContent = toys[index].name;

        // const imageDiv = document.createElement('div');
        // imageDiv.id = 'image';
        // imageDiv.className = 'toy-avatar';
        // imageDiv.innerHTML = `<img src='${toys[index].image}' alt='${toys[index].name}'>`;

        // const likesDiv = document.createElement('div');
        // likesDiv.id = 'likes';
        // likesDiv.textContent = toys[index].likes;
        
        // //append values to card
        // topOfCard.append(nameDiv);
        // topOfCard.append(imageDiv);
        // topOfCard.append(likesDiv);
        
        topDiv.append(topOfCard);
      }
      //append card list to start of card element
    })
}

function pushChars() {

}

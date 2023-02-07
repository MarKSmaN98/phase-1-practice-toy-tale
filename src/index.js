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
        topOfCard.id = `card${tmpToyId}`;
        topOfCard.className = 'card';

        let name = document.createElement('h2');
        name.textContent = toys[index].name;

        let img = document.createElement('img');
        img.className = 'toy-avatar';
        img.src = toys[index].image;
        img.alt = toys[index].name;

        let likes = document.createElement('p');
        likes.textContent = toys[index].likes;

        let button = document.createElement('button');
        button.textContent = 'Like ❤️';
        button.className = 'like-btn';
        button.id = `${toys[index].id}`;
         button.addEventListener('click', (e) => {
           addLike(button.id);
           //console.log(button.id);
         });
        
         //class="like-btn" id="[toy_id]"

        topOfCard.append(name);
        topOfCard.append(img);
        topOfCard.append(likes);
        topOfCard.append(button);
        topDiv.append(topOfCard);
      }
    })
}

function addLike(id) {
  //update api first
  //might have to change id names of div or button as they match rn
  targetLikes = document.querySelector(`div#card${id} p`); //get the right like 
  targetLikes = targetLikes.textContent += 1;

  //update server
}



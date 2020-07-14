document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items
  // --- your code here!
  
  const submitPlace = (e) => {
    event.preventDefault();
    const inputField = document.querySelector("favorite-input");
    const places = document.getElementByID("sf-places");
    const input = document.createTextNode(`${inputField.value}`);
    const newList = document.createElement("li");

    newList.appendChild(input);
    places.appendChild(newList);
    inputField.value = "";

  };

  const submit = docume.querySelector(".favorite-submit");

  submit.addEventListener("click", submitPlace);
  


  // adding new photos

  // --- your code here!



});

// First, we declare a function toggleLi that takes in an event. Using that event, 
// we grab the currentTarget (which is the <li> that was clicked on) 
// and toggle its className to be either visited or "". Over in our CSS file, the class .visited is set to have line-through its text. 
// Because of this, all we have to do to toggle the strikethrough appearance of the text is toggle the <li>'s class to visited or not.
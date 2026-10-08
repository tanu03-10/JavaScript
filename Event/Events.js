// EVENTS - User ki action ko event kehte hain.

//click events
let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    console.log("Button clicked");
});

// mouseover event
btn.addEventListener("mouseover", function() {
    console.log("Mouse is over button");
});

// keyboard
document.addEventListener("keydown", function() {
    console.log("Key pressed");
});



// EVENT BUBBLING
// EVENT CAPTURING
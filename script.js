const myButton = document.getElementById('myButton');
const myLink = document.getElementById('myLink');


function showAlertOnce() {
    alert("Button clicked! This will only happen once.");
    myButton.removeEventListener('click', showAlertOnce); 
}

myButton.addEventListener('click', showAlertOnce);


myLink.addEventListener('click', function(event) {
    
    event.preventDefault(); 
    alert("No distractions! I’m coding!");
});

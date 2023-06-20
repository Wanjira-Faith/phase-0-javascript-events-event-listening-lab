// const input = document.getElementById('input');
// input.addEventListener('click', function() {
//   alert('I was clicked!');
// });
 
// const input = document.getElementById('input');

// function clickAlert() {
//   alert('I was clicked!');
// }

// input.addEventListener('click', clickAlert);


//create a function addingEventlistener and add addEventlistener inside then call the outer function

function addingEventListener(){
  const input = document.getElementById('button');
  input.addEventListener('click',function(){
    alert ('I was clicked!');
  });
}
addingEventListener();
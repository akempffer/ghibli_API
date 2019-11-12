/************
* Where is the data (api feed)? 
************/
// The API feed
const getStuff = 'https://ghibliapi.herokuapp.com/films/';

/************
* Show the Data
************/ 
// Show the data
const showStuff = (data) => {
    
  // Check the data   
  console.log(data);
  // How much data is there?
  console.log(data.length);
  // How do you access a single data entry? 
  console.log(data[0]);
  
  // Show single entry, then repeat (loop-through) one-at-a-time 
  for (i=0; i < data.length; i++) { 
     
      // Template for data. Have fun. Be a Designer.
      // jQuery for easy DOM manipulations: `text()`, `attr()`, `addClass()`, etc. 
      let template = `<div class="movie">
  <div class="title">${data[i].title}</div>
  <div class="year">(<span>${data[i].release_date}</span>) </div>
  <div class="description">${data[i].description}</div>
</div>
`;
    
    // Show data within template using jQuery `append()`
    // https://api.jquery.com/append/
    $('#app').append(template);
    
  } // end of `for` loop

/*******************************/  
  // Random Numbers
const limit = 8;
const randNum = Math.floor(Math.random() * limit);
console.log( randNum );

// Set Background Color

console.log( 'bg' + randNum  );

$('body').addClass('bg' + randNum );
    
}; // end of showStuff function

/************
* Got template? Got data? Show it. 
* jQuery convenience function for JSON and API data
* First parameter: url to data
* Second parameter: callback function runs on success
* https://api.jquery.com/jQuery.getJSON
************/ 
$.getJSON( getStuff, showStuff);

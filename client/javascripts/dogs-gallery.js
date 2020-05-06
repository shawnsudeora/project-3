// jshint esversion: 6

let failHandler = () => {
 console.log("Fail -- unknown breed");
 $(".photos").empty().html("<h3>Error -- breed not found<h3>");
};

//1. Define the onclick handler
let clickHandler = function() {
  let imgElem;
  let prefixURL =
    'https://dog.ceo/api/breed/';
  let suffixURL = '/images/random/6';
  //get value entered by user from textbox

  //let breedTag = (document.querySelector('input[type = "text"]').value).toLowerCase();
  let breedTag = ($('input[type = "text"]').val()).toLowerCase();
  let requestURL = prefixURL + breedTag + suffixURL;


  console.log($("h2")[0].textContent);

  //clear old photos

  //document.querySelector('.photos').innerHTML = '';
  $('.photos').html('');

  $.getJSON(requestURL, function(dogAPIresponse) {
    dogAPIresponse.message.forEach(function(imgURL, index) {

      //We need only six images for the Gallery
        // create a new element to hold the image
        // but hide it so we can fade it in

        //let imgElem = document.createElement('img');
        let imgElem = $("<img>");
        imgElem.hidden = true;

        // set the attribute to the response url

        //imgElem.setAttribute('src', imgURL);
        //imgElem.setAttribute('width', '100');

        imgElem.attr('src', imgURL);
        imgElem.attr('width', '100');

        // attach the img tag to the main
        // photos element and then fade it in

      //  document.querySelector('.photos').appendChild(imgElem);
      //  imgElem.hidden = false;

      $('.photos').append(imgElem);
      imgElem.hidden = false;

    });
  }).fail(failHandler);
};

//2. Register the onclick handler for each button after the DOM is complete
window.addEventListener('load', () => {
  //select the buttons
  let buttonElem = document.querySelector('button');
  buttonElem.addEventListener('click', clickHandler);
});

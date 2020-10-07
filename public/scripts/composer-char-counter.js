

$(document).ready(function () {
  // --- our code goes here ---

  $("#tweet-text").keyup(function () {
    let maxChars = 140;
    let charsLength = $(this).val().length;
    let charLeftover = maxChars - charsLength;
    let theDiv = $(this).siblings()[1];
    let output = $(theDiv).children(".counter");
    //console.log($(this).siblings()[1].find(".counter"))
    $(output).html(charLeftover);
    // if(charsLength < 140) {

    //   else{}
    //}



  });


  $("#btn").on('click', function () {
    //The this keyword is a reference to the button
  });
  // using jQuery and an appropriate selector, 
  // register an event handler to the textarea element 
  // for the form inside of the .new-tweet section.


  //borderbackgroundand margin set in new-tweet.css
});
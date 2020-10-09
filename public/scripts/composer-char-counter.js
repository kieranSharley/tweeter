

$(document).ready(function () {
  // --- our code goes here ---

  $("#tweet-text").keyup(function () {
    let maxChars = 140;
    let charsLength = $(this).val().length;
    let charLeftover = maxChars - charsLength;
    const counter = $(this).siblings("div.footer").children('output')
    //const turnRed =  counter.css(color, red)
   $(counter).html(charLeftover);

   if(charsLength > 140 || charsLength === "") {
     
     $(counter.css('color', 'red'));
     $(counter).html(charLeftover);
   }

    //   counter.css(color, red)
    //   $(counter).html(charLeftover);

    // } else {
    // let theDiv = $(this).siblings("div.footer");
    // let output = $(theDiv).children(".counter");
    //console.log($(this).siblings()[1].find(".counter"))
    
    //}

    //   else{}
    //}
    
    // .css('color', 'red')


  });


  $("#btn").on('click', function () {
    //The this keyword is a reference to the button
  });
  // using jQuery and an appropriate selector, 
  // register an event handler to the textarea element 
  // for the form inside of the .new-tweet section.


  //borderbackgroundand margin set in new-tweet.css
});
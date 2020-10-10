$(document).ready(function () {

  // Creates a new HTML element and returns a tweet given the user input.
  const createTweetElement = function (tweet) {
    return $(`
    <article>
        <header class="article-header">
          <div class="tweet-header">
            <div class="avatar-container">
              <img class="avatar-image" src="${escape(tweet.user.avatars)}">
              <p> &nbsp ${escape(tweet.user.name)}</p>
            </div>
            <p class="tweet-handle">${escape(tweet.user.handle)}</p>
          </div>
        </header>
        <p id="tweet-body"> 
        ${escape(tweet.content.text)}         
        </p>
        <footer class="article-footer">
        
        <span>${timeSince(tweet.created_at)}</span>
        <div>
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
       </div>
        </footer>  
        </article>
    `);
  };

  // renders the created tweets/ takes return value and prepends it to the tweets container
  const renderTweets = function (tweets) {
    $("#tweets-container").empty();
    tweets.forEach(element => {
      const $tweet = createTweetElement(element);
      $('#tweets-container').prepend($tweet);
    });
  };

  // Form submission and error handling for the submission process.
  const errorEmpty = $("#tweet-text").siblings(".error-empty");
  const error140 = $("#tweet-text").siblings(".error-140");
  $("form").submit(function (event) {
    event.preventDefault();
    const charsLength = $("#tweet-text").val().length;
    console.log(charsLength);

    if (charsLength > 140) {
      $(error140).slideDown(2000);
      $(error140).slideUp(2000);

    } else if (charsLength === 0) {
      $(errorEmpty).slideDown(2000);
      $(errorEmpty).slideUp(2000);


    } else {
      $.post("/tweets",
        $("form").serialize()
      ).then(() => {
        loadTweets();
        $(error140).hide()
        $(errorEmpty).hide();
      });
    }
  });
// The form submission error handlers are default hidden from the page.
  $(error140).hide()
  $(errorEmpty).hide();




//  AJAX request function that fetches from the tweet database and loads the tweets to the page.
  const loadTweets = function () {
    $.ajax({
      method: 'GET',
      url: '/tweets'
    }).then((response) => {
      renderTweets(response);
    }).catch((error) => {
      alert(error);
    }
    );
  };
  loadTweets();


// Protection incase of malicious code entered into input fields and converts to text
  const escape = function (str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  
// This function I found on stack overflow. I know you're not supposed to copy/paste but 
// the function works flawlessly and could not see any way to make it my own. 
  function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  }

});
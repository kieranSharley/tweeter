$(document).ready(function () {
  // const tweetData = {
  //   "user": {
  //     "name": "Newton",
  //     "avatars": "https://i.imgur.com/73hZDYK.png",
  //     "handle": "@SirIsaac"
  //   },
  //   "content": {
  //     "text": "If I have seen further it is by standing on the shoulders of giants"
  //   },
  //   "created_at": 1461116232227
  // };

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

  const createTweetElement = function (tweet) {
    const $tweet = $(`
    <article>
        <header class="article-header">
          <div class="tweet-header">
            <div class="avatar-container">
              <img class="avatar-image" src="${tweet.user.avatars}">
              <p> &nbsp ${tweet.user.name}</p>
            </div>
            <p class="tweet-handle">${tweet.user.handle}</p>
          </div>
        </header>
        <p id="tweet-body"> 
        ${tweet.content.text}         
        </p>
        <footer class="article-footer">
        <br>
        ${tweet.created_at}
        <i class="fab fa-flag"></i>
       
        </footer>  
        </article>
    `);
    return $tweet;
  };

  const renderTweets = function (tweets) {
    tweets.forEach(element => {
      const tweet = createTweetElement(element);
      $('#tweets-container').append(tweet);
    });

    // takes return value and appends it to the tweets container

  };
  //event.preventDefault
  $(form).submit(event => {
    event.preventDefault();
  });
  renderTweets(data);
});

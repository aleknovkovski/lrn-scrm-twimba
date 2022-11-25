import { tweetsData } from './data.js'

const tweetInput = document.getElementById('tweet-input')
const tweetBtn = document.getElementById('tweet-btn')

tweetBtn.addEventListener("click", e=> {
    console.log(tweetInput.value)
})

function getFeedHtml(){
    console.log(tweetsData)
    let markup = ""
    for (let tweet of tweetsData) {
        markup += `
        <div class="tweet">
            <div class="tweet-inner">
                <img src="${tweet.profilePic}" class="profile-pic">
                <div>
                    <p class="handle">${tweet.handle}</p>
                    <p class="tweet-text">${tweet.tweetText}</p>
                    <div class="tweet-details">
                        <span class="tweet-detail">
                            ${tweet.replies.length}
                        </span>
                        <span class="tweet-detail">
                            ${tweet.likes}
                        </span>
                        <span class="tweet-detail">
                            ${tweet.retweets}
                        </span>
                    </div>   
                </div>            
            </div>
        </div>
    `
    document.body.innerHTML += markup
    // return markup
    }
    /*
    Challenge:
    1. Use a "for of" to iterate over the data and
       create HTML string for each tweet using the
       boilerplate below. Replace UPPERCASE text
       with data from the tweets.
    2. Store this HTML in a let called "feedHtml".
    3. Log out feedHtml.
    4. Call getFeedHtml to check it's working.
    */
}

getFeedHtml()
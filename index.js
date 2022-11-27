import { tweetsData } from './data.js'

const tweetInput = document.getElementById('tweet-input')
const tweetBtn = document.getElementById('tweet-btn')

tweetBtn.addEventListener("click", e=> {
    console.log(tweetInput.value)
})

function getFeedHtml(){
    // console.log(tweetsData)
    let feedHtml = ""
    tweetsData.forEach(tweet => {
        feedHtml += `
        <div class="tweet">
            <div class="tweet-inner">
                <img src="${tweet.profilePic}" class="profile-pic">
                <div>
                    <p class="handle">${tweet.handle}</p>
                    <p class="tweet-text">${tweet.tweetText}</p>
                    <div class="tweet-details">
                        <span class="tweet-detail">
                            ${tweet.replies.length}
                            <i 
                            class="fa-regular fa-comment-dots"
                            data-reply="${tweet.uuid}"
                            ></i>
                        </span>
                        <span class="tweet-detail">
                            ${tweet.likes}
                            <i 
                            class="fa-solid fa-heart"
                            data-like="${tweet.uuid}"
                            ></i>
                        </span>
                        <span class="tweet-detail">
                            ${tweet.retweets}
                            <i 
                            class="fa-solid fa-retweet"
                            data-retweet="${tweet.uuid}"
                            ></i>
                        </span>
                    </div>   
                </div>            
            </div>
        </div>`
    })

    // document.body.innerHTML += feedHtml
    return feedHtml
}

function render(){
    document.getElementById('feed').innerHTML = getFeedHtml()
    /*
    Challenge:
    1. Take control of the ‘feed’ div.
    2. Render the HTML returned by the getFeedHtml
       function to the 'feed' div.
       See if you can do this with just one line of code!
    */
}

// call render
render()
import { tweetsData } from './data.js'

const tweetInput = document.getElementById('tweet-input')
const tweetBtn = document.getElementById('tweet-btn')

tweetBtn.addEventListener("click", e=> {
    console.log(tweetInput.value)
})

document.addEventListener("click", (e)=>{
    console.log(e.target.dataset.like)
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
}

// call render
render()
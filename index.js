import { tweetsData } from './data.js'

const tweetInput = document.getElementById('tweet-input')
const tweetBtn = document.getElementById('tweet-btn')

tweetBtn.addEventListener("click", e=> {
    console.log(tweetInput.value)
})

document.addEventListener("click", (e)=>{
    const dataset = e.target.dataset

    if(dataset.like) {
     handleLikeClick(dataset.like)
    }

    if(dataset.retweet) {
        handleRetweetClick(dataset.retweet)
    }
})

function handleLikeClick(uuid){
    const tweet = tweetsData.filter((tweet)=> {
        return tweet.uuid === uuid
    })[0]

    !tweet.isLiked ? tweet.likes++ : tweet.likes--
    tweet.isLiked = !tweet.isLiked

    render()
}

function handleRetweetClick(uuid){
    const tweet = tweetsData.filter((tweet)=> {
        return tweet.uuid === uuid
    })[0]

    !tweet.isRetweeted ? tweet.retweets++ : tweet.retweets--
    tweet.isRetweeted = !tweet.isRetweeted

    render()
}

function getFeedHtml(){
    // console.log(tweetsData)
    let feedHtml = ""

    tweetsData.forEach(tweet => {
        let likedIconClass = ""
        tweet.isLiked ? likedIconClass = "liked" : null
        let retweetIconClass = ""
        tweet.isRetweeted ? retweetIconClass = "retweeted" : null

        let repliesSection = ""
        tweet.replies.length ? repliesSection = "<p>Has Replies</p>" : null

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
                            class="fa-solid fa-heart ${likedIconClass}"
                            data-like="${tweet.uuid}"
                            ></i>
                        </span>
                        <span class="tweet-detail">
                            ${tweet.retweets}
                            <i 
                            class="fa-solid fa-retweet ${retweetIconClass}"
                            data-retweet="${tweet.uuid}"
                            ></i>
                        </span>
                    </div>   
                    <div id="replies-${tweet.uuid}">
                        ${repliesSection}
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
import { tweetsData } from './data.js'

const tweetInput = document.getElementById('tweet-input')
const tweetBtn = document.getElementById('tweet-btn')

tweetBtn.addEventListener("click", e=> {
    console.log(tweetInput.value)
})

function getFeedHtml(){
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
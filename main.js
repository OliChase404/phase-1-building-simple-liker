
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const likeHeart = document.getElementsByClassName('like-glyph')

const errorFlag = document.getElementById('modal')
const errorMsg = document.getElementById('modal-message')
errorFlag.classList.add('hidden')


for(let i = likeHeart.length - 1; i >= 0; i--){
  likeHeart[i].addEventListener('click', () => {
    errorFlag.classList.add('hidden')
    mimicServerCall()
    .then(() => {
      if(likeHeart[i].textContent === EMPTY_HEART){
        likeHeart[i].textContent = (FULL_HEART)
        likeHeart[i].classList.add('activated-heart')
      }else{
        likeHeart[i].textContent = EMPTY_HEART
        likeHeart[i].classList.remove('activated-heart')
      }
    })
    .catch((error) => {
      errorFlag.classList.remove('hidden')
      errorMsg.textContent = (error)
    })



  })
}



// errorFlag.classList.remove('hidden')










































//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

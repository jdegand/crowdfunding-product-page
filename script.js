let backThisReward = document.getElementById('backThisBtn');
let successModal = document.querySelector('.success-modal');
let successBtn = document.getElementById('successBtn');
let body = document.querySelector('.body');
let continueBtns = document.querySelectorAll('.continueBtn');
let rewardBtns = document.querySelectorAll('.rewardBtn');
let selectModal = document.querySelector('.select-modal');
let closeBtn = document.getElementById('close');
let hamburger = document.querySelector('.hamburger');
let navUl = document.querySelector('.nav-ul');
let cover = document.querySelector('.cover');
let radioBtns = document.querySelectorAll('input[type="radio"]');
let enterPledgeContainers = document.querySelectorAll('.enter-pledge-container');
let bookmarkImage = document.querySelector('.bookmark-img');
let bookmarkText = document.querySelector('.bookmark-text');
/*   issues because of toggle  if steps are not followed to completion  */

hamburger.addEventListener('click', ()=> {
  navUl.classList.toggle('block')
  cover.classList.toggle('block')
  if(navUl.classList.contains('block')){
    hamburger.src = 'images/icon-close-menu.svg';
  } else {
    hamburger.src = 'images/icon-hamburger.svg';
  }

})


bookmarkImage.addEventListener('click', ()=> {
  if(bookmarkText.innerText === 'Bookmarked'){
      bookmarkText.innerText = 'Bookmark';
      bookmarkText.style.color = 'black';
      bookmarkImage.src = 'images/icon-bookmark.svg';
  } else {
    bookmarkText.innerText = 'Bookmarked';
    bookmarkText.style.color = 'hsl(176, 50%, 47%)';
    bookmarkImage.src = 'images/icon-bookmark-green.svg';
  }
})

rewardBtns.forEach(btn => btn.addEventListener('click', ()=> {
  cover.classList.toggle('block')
  selectModal.classList.toggle('open');
  let top = window.pageYOffset + btn.getBoundingClientRect().top;
  selectModal.style.top = top + 'px';

  radioBtns.forEach(btn => {
    btn.addEventListener('change', (e)=> {
        if(e.target.id === 'no-reward'){
          document.querySelector('.noReward').classList.toggle('block')
        }else if (e.target.id === 'black-edition') {
         document.querySelector(".black").classList.toggle('block');
       }else {
         document.querySelector('.bamboo').classList.toggle('block')
       }
      })
    })

}))


continueBtns.forEach(btn => btn.addEventListener('click', (e)=> {
  //need to check if it's a number && over tier level
//  console.log(e.target.previousElementSibling.value)

  let inputValue = e.target.previousElementSibling.value;
  let regex = /[\d]+/;

  if(inputValue.match(regex)){
    if(document.getElementById('black-edition').checked && inputValue >= 75
    || document.getElementById('bamboo-stand').checked && inputValue >= 25
    || document.getElementById('no-reward').checked && inputValue > 0) {

      cover.classList.toggle('block');
      selectModal.classList.toggle('open');
      successModal.classList.toggle('show');
      body.classList.toggle('fixed');
    } else {
      alert('Please enter amount higher than tier amount for gift')
    }
  } else {
     alert('Enter a valid amount')
   }
}))

backThisReward.addEventListener('click', ()=> {
  cover.classList.toggle('block')
  selectModal.classList.toggle('open');

  radioBtns.forEach(btn => {
    btn.addEventListener('click', (e)=> {
        if(e.target.id === 'no-reward'){
          document.querySelector('.noReward').classList.toggle('block')
        }else if (e.target.id === 'black-edition') {
         document.querySelector(".black").classList.toggle('block');
       }else {
         document.querySelector('.bamboo').classList.toggle('block')
       }
      })
    })

})

closeBtn.addEventListener('click', ()=> {
  cover.classList.toggle('block')
  selectModal.classList.toggle('open');
})

successBtn.addEventListener('click', ()=> {
  cover.classList.toggle('block')
  successModal.classList.toggle('show');
  selectModal.classList.remove('open');
  body.classList.toggle('fixed');
})

// window.addEventListener('DOMContentLoaded', function(){
//     const h1 = document.querySelector('h1');
//     console.log(h1);
// });

const h1 = document.querySelector('h1');

h1.addEventListener('mouseenter', function(){
    h1.style.backgroundColor = "skyblue";
})

// 이미지를 클릭했을때 해당 이미지가 지워지도록 이벤트 만들기
// 1번 방식
// const img1 = document.querySelector('.container img:nth-child(1)');
// const img2 = document.querySelector('.container img:nth-child(2)');
// const img3 = document.querySelector('.container img:nth-child(3)');
// const img4 = document.querySelector('.container img:nth-child(4)');
// const img5 = document.querySelector('.container img:nth-child(5)');

// img1.addEventListener('click', function() {
//     // img1.style.visibility = 'hidden';
//     img1.style.display = 'none';
// });

// img2.addEventListener('click', function() {
//     img2.style.visibility = 'hidden';
// });

// img3.addEventListener('click', function() {
//     img3.style.visibility = 'hidden';
// });

// img4.addEventListener('click', function() {
//     img4.style.visibility = 'hidden';
// });

// img5.addEventListener('click', function() {
//     img5.style.visibility = 'hidden';
// });

// 2번 방식
const imgList = document.querySelectorAll('.container img');

const container = document.querySelector('.container')

function removeHendler(event) { // 이벤트 객체
    if(event.target!==event.currentTarget) {
        event.target.style.display = 'none';
    }
}

container.addEventListener('click', removeHendler)

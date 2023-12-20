let hearts = document.querySelectorAll('.move-heart');
const header = document.querySelector('header');

for (let i = 0; i < hearts.length; i++) {
  header.addEventListener('mousemove', (e) => {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    hearts[i].style.transform = 'translate(-' + x * 25 + 'px, -' + y * 25 + 'px)';
  });
}

// header.addEventListener

// hearts.forEach((e) => {
//   e.addEventListener('mousemove', (el) => {
//     console.log(el.clientX, el.clientY)
//     let x = el.clientX - e.getBoundingClientRect().x;
//     let y = el.clientY - e.getBoundingClientRect().y;
//     console.log(x, y)
//     e.style.transform = 'translate(' + x / 50   + 'px, ' + y / 50 + 'px)';
//   });
// })

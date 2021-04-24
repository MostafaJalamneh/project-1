const sport = document.querySelector('.Sport')
sport.addEventListener('click', () => {
    localStorage.setItem("type",'sport')
    window.open('quiz.html', '_blank');
})

const scien = document.querySelector('.Scientific')
scien.addEventListener('click', () => {
    localStorage.setItem("type",'scientific')
    window.open('quiz.html', '_blank');
})

const cul = document.querySelector('.Cultural')
cul.addEventListener('click', () => {
    localStorage.setItem("type",'cultural')
    window.open('quiz.html', '_blank');
})

const reg = document.querySelector('.Religious')
reg.addEventListener('click', () => {
    localStorage.setItem("type",'religious')
    window.open('quiz.html', '_blank');
})


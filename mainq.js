const btn = document.querySelector('#but2')
btn.addEventListener('click', () => {
    window.open('main.html', '_blank');
})
const btn1 = document.querySelector('#but1')
btn1.addEventListener('click', () => {
    question()
})

let an;
let ry
let hh = 0;
let a = 4;
let s;
let count = 1;
const body = document.querySelector('.b2');
const he = document.querySelector("#h2q")
const ans1 = document.querySelector(".ans1")
const ans2 = document.querySelector(".ans2")
const ans3 = document.querySelector(".ans3")
const ans4 = document.querySelector(".ans4")
const but1 = document.querySelector("#but1")
const but2 = document.querySelector("#but2")
let arr = [ans1, ans2, ans3, ans4]

const qu = [{ 'what is your name ?': 'abc' }, { 'what is fav color ?': 'red' }
, { 'what is food ?': 'pizaa' }, { 'where are u from ?': 'amman' }, { 'hi ?': 'bye' }]

const question = () => {

   
    s = Math.floor(Math.random() * (4 - 0) + 0)
    he.innerText = count + "- " + Object.keys(qu[hh]);
    arr[s].innerText = Object.values(qu[hh]);
    ry=hh
    hh++
    count++


    let at = ['meen', 'soso', 'momo', 'yua', 'yo', 'too', 'rt', 'qp', 'kb', 'aa', 'da', 'dd','cc']
    for (let i = 0; i <= 3; i++) {
        if (arr[i].innerText !== '') {

        } else {
            arr[i].innerText = at[i]
            at.splice(at[i], 1)

        }
    }
}
const an1 = document.querySelector('.ans1')
an1.addEventListener('click', () => {
    answer()
    an=ans1.h5.innerText;
})
const an2 = document.querySelector('.ans2')
an2.addEventListener('click', () => {
    answer()
    an= document.getElementsByClassName("ans2")[0].innerText=Object.values(qu[hh]);


})
const an3= document.querySelector('.ans3')
an3.addEventListener('click', () => {
    answer()
    an=ans3.h5.innerText;

})
const an4 = document.querySelector('.ans4')
an4.addEventListener('click', () => {
    answer()
    an=ans4.h5.innerText;

})
const answer = () => {
    console.log(an)
    console.log(Object.values(qu[ry]))
if(an!==Object.values(qu[hh])){
    he.innerText='false'
}else{
    he.innerText='true'

}
}



body.append(he)
body.append(ans1)
body.append(ans2)
body.append(ans3)
body.append(ans4)
body.append(but1)
body.append(but2)

/*he*/
he.innerText = "Ready ?"
he.style.border = "solid blue 2px";
he.style.padding = "5px"
he.style.width = '85vw'

/*answers*/

ans1.style.padding = "7px"
ans1.style.border = 'solid red 1px'
ans1.style.width = '45vw'

ans2.style.padding = "7px"
ans2.style.border = 'solid red 1px'
ans2.style.width = '45vw'

ans3.style.padding = "7px"
ans3.style.border = 'solid red 1px'
ans3.style.width = '45vw'

ans4.style.padding = "7px"
ans4.style.border = 'solid red 1px'
ans4.style.width = '45vw'

/** button */
but1.innerText = "Next"
but1.style.margin = '10px';
but1.style.color = "orange";
but1.style.height = '2rem';



but2.innerText = "GO TO Main Page"
but2.style.color = "orange";
but2.style.height = '2rem';















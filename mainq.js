const body = document.querySelector('.b2');
const he = document.querySelector("#h2q")
const ans1 = document.querySelector(".ans1")
const ans2 = document.querySelector(".ans2")
const ans3 = document.querySelector(".ans3")
const ans4 = document.querySelector(".ans4")
const but1 = document.querySelector("#but1")
const but2 = document.querySelector("#but2")




body.append(he)
body.append(ans1)
body.append(ans2)
body.append(ans3)
body.append(ans4)
body.append(but1)
body.append(but2)

/*he*/
he.innerText = "the question"
he.style.border = "solid blue 2px";
he.style.padding="5px"
he.style.width='85vw'

/*answers*/
ans1.innerText='answer one'
ans1.style.padding="7px"
ans1.style.border='solid red 1px'
ans1.style.width='45vw'

ans2.innerText='answer two'
ans2.style.padding="7px"
ans2.style.border='solid red 1px'
ans2.style.width='45vw'

ans3.innerText='answer three'
ans3.style.padding="7px"
ans3.style.border='solid red 1px'
ans3.style.width='45vw'

ans4.innerText='answer four'
ans4.style.padding="7px"
ans4.style.border='solid red 1px'
ans4.style.width='45vw'

/** button */
but1.innerText="Replay"
but1.style.margin='10px';
but1.style.color="orange";
but1.style.height='2rem';



but2.innerText="GO TO Main Page"
but2.style.color="orange";
but2.style.height='2rem';
















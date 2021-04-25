const btn = document.querySelector('#but2')
btn.addEventListener('click', () => {
    window.open('main.html', '_blank');
})
let enable = true
const btn1 = document.querySelector('#but1')
if (enable === true) {
    btn1.addEventListener('click', () => {
        if (enable === true) {
            cor.innerText = ''
            question()
        }
    })
}
const btn2 = document.querySelector('#but3')
btn2.addEventListener('click', () => {
    window.location.reload();
})
const soundm = document.querySelector('#mute')
soundm.addEventListener('click', () => {
    if(document.getElementById('sound').muted===true)
    document.getElementById('sound').muted = false;
    else{
        document.getElementById('sound').muted= true
    }

})

let x = localStorage.getItem("type");
let mark = 0;
let at = []
let ss, an, ry, s;
let hh = 0;
let a = 4;
let count = 1;
const body = document.querySelector('.b2');
const he = document.querySelector("#h2q")
const ans1 = document.querySelector(".ans1")
const ans2 = document.querySelector(".ans2")
const ans3 = document.querySelector(".ans3")
const ans4 = document.querySelector(".ans4")
const but1 = document.querySelector("#but1")
const but2 = document.querySelector("#but2")
const cor = document.querySelector(".cor")
const marks = document.querySelector(".mark")



let arr = [ans1, ans2, ans3, ans4]

const qsport = [{ 'The most team won the World Cup ?': 'Brazil' }, { 'The club that achieves the most European Champions League ?': 'Real Madrid' }
    , { 'The organizing country for the 2014 World Cup ?': 'Brazil' }, { 'Who is the historical goalscorer for the World Cup ?': 'Klose' }, { 'The best player of all time ?': 'Benzema' }]
let ars = ['Italy', 'Spain', 'Jordan', 'Japan', 'Milan', 'Bayern munich', 'Barcelona', 'Arsenal', 'south Africa', 'Russia', 'Qatar', 'canada', 'Ronaldo', 'messi', 'Maradona', 'Sameer',
    'cristiano', 'messi', 'bele', 'under taker']

const qscien = [{ 'What is the name of the device that is used to measure the atmospheric pressure ?': 'Barometer' }, { 'Who is the scientist who invented the telescope ?': 'Galileo' }
    , { 'Who is the scientist who invented the calculator ?': 'Blaze pixel' }, { 'Who is the scientist who invented the medical glasses ?': 'Al-Hasan bin Al-Haytham' }, { 'From the world who invented the light bulb ?': 'Thomas Edison' }]
let arsc = ['Thermometer', 'Gutter', 'ammeter', 'Ohmmeter', 'aynshtayn', 'Ibn sena', 'Idresse', 'fred', 'Ibn rushd', 'alfarabi', 'blank', 'newton', 'Ibn rushd', 'Alexander Fleming', 'Howard Florey', 'Robert Koch', 'fred', 'Florey', 'Marie Curie', 'Nobel']

const qcult = [{ 'What is the capital of Ethiopia ?': 'Addis Ababa' }, { 'What is the capital of Germany ?': 'Berlin' }
    , { 'What is the capital of India ?': 'New Delhi' }, { 'What is the capital of Switzerland ?': 'Bern' }, { 'What is the capital of Egypt ?': 'cairo' }]
let arq = ['qairo', 'amman', 'ryad', 'topa', 'brussia', 'trodo', 'tokyo', 'tunsia', 'new york', 'maqdesho', 'phladelphia', 'mosco', 'tahran', 'aldoha', 'roma', 'khartoom', 'damas', 'berut', 'aleskandryeh', 'rebat']

const qrel = [{ 'To whom the Prophet Hood sent ?': 'add`s' }, { 'To whom the Prophet Saleh sent ?': 'Thamoud' }
    , { 'To whom the Prophet Ismail sent ?': 'Jurhum' }, { 'To whom the Prophet Shuaib sent ?': 'Madian' }, { 'To whom the Prophet Ibrahim sent ?': 'Iraq' }]
let arqr = ['bani Israeli', 'madian', 'Jurhum', 'Pharaoh', 'Pharaoh', 'ashab alrss', 'ashab alyka', 'tobba`a', 'add`s', 'eram', 'quraish', 'alroom', 'bani Israeli', 'alroom', 'Jurhum', 'Pharaoh', 'Pharaoh', 'ashab alrss', 'ashab alyka', 'tobba`a']


if (x === 'sport') {
    for (let i = 0; i <= ars.length; i++) {
        at.push(ars[i])
    }

} else if (x === 'scientific') {
    for (let i = 0; i <= arsc.length; i++) {
        at.push(arsc[i])
    }
} else if (x === 'cultural') {
    for (let i = 0; i <= arq.length; i++) {
        at.push(arq[i])
    }
} else {
    for (let i = 0; i <= arqr.length; i++) {
        at.push(arqr[i])
    }
}

const question = (object) => {

    if (x === 'sport') {
        object = qsport
    } else if (x === 'scientific') {
        object = qscien
    } else if (x === 'cultural') {
        object = qcult
    } else {
        object = qrel
    }

    for (let i = 0; i <= 3; i++) {
        arr[i].innerHTML = ''
        arr[i].innerHTML = at[0];
        at.splice(0, 1)

    }
    s = Math.floor(Math.random() * (4 - 0) + 0)
    he.innerText = count + "- " + Object.keys(object[hh]);
    arr[s].innerText = Object.values(object[hh]);
    ry = hh
    hh++
    count++
}

const an1 = document.querySelector('.ans1')
an1.addEventListener('click', () => {
    an = document.getElementsByClassName("ans1")[0].innerText;
    if (cor.innerText === '') {
        answer()
    }
})
const an2 = document.querySelector('.ans2')
an2.addEventListener('click', () => {
    an = document.getElementsByClassName("ans2")[0].innerText;
    if (cor.innerText === '') {
        answer()
    }
})
const an3 = document.querySelector('.ans3')
an3.addEventListener('click', () => {
    an = document.getElementsByClassName("ans3")[0].innerText;
    if (cor.innerText === '') {
        answer()
    }
})
const an4 = document.querySelector('.ans4')
an4.addEventListener('click', () => {
    an = document.getElementsByClassName("ans4")[0].innerText;
    if (cor.innerText === '') {
        answer()
    }
})
const answer = (object) => {
    if (x === 'sport') {
        object = qsport
    } else if (x === 'scientific') {
        object = qscien
    } else if (x === 'cultural') {
        object = qcult
    } else {
        object = qrel
    }
    ss = (Object.values(object[ry])).toString()
    if ((an) !== ss) {
        cor.innerText = 'your answer (' + an + ') is incorrect 😢\n \n The correct answer is (' + ss + ')'
    } else {
        cor.innerText = 'your answer (' + ss + ') is correct 🎉'
        mark++
    }
    if (count === 6) {
        marks.innerText = "You got: " + mark + ' / ' + (count - 1)
        enable = false
    }
}



body.append(he)
body.append(ans1)
body.append(ans2)
body.append(ans3)
body.append(ans4)
body.append(cor)
body.append(but1)
body.append(but3)
body.append(but2)
body.append(marks)

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

but3.innerText = "Replay"
but3.style.color = "orange";
but3.style.marginRight = '10px';
but3.style.height = '2rem';
















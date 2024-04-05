let start = false;
let level = 0;
let score = 0;
let max = 0;

let pc =[];
let user = [];

let col = ["red","blue","green","yellow"];

let body = document.querySelector('body');

let h3 = document.querySelector('h3');

let p = document.querySelectorAll('p');

console.log("start:", start);
if (start == false) {
    document.addEventListener("keypress", levelUp);
    start = true;
    console.log(start);
}


function levelUp(){
    body.style.background = "white";
    user=[];
    let index = Math.floor(Math.random()*4);
    increment();
    colour(index);
}


function increment(){
    level++;
    h3.innerText = `Level ${level}`;
}

function flashbtn(c){
    c.classList.add('white');
    setTimeout(function(){
        c.classList.remove('white');
    },250);
}


function colour(index){
    let c = document.querySelector(`.${col[index]}`);
    pc.push(col[index]);
    flashbtn(c);
}

function checkAns(index){
    if(user[index] === pc[index])
    {
        if(user.length == pc.length)
        {
            setTimeout(levelUp,1000);
            score+=10;
            max =Math.max(max,score);
            p[0].innerText = `${score}`;
        }
    }
    else
    {
        h3.innerText = `Game Over! Press any key to RESTART`;
        p[1].innerText = `${max}`;
        body.style.background = "red";
        score =0;
        level=0;
        start = false;
        pc=[];
        user=[];
    }
}

function btnpress(){
    let btn = this;
    user.push(btn.classList[1]);
    flashbtn(btn);
    console.log("Button was Pressed");
    checkAns(user.length-1);
}

let allbtn = document.querySelectorAll('.btn');

for(btn of allbtn)
{
    btn.addEventListener("click",btnpress);
}

let ruleoption = document.querySelector('.ruleoption');

let rule = document.querySelector('#rule');
let cross = document.querySelector('i');
cross.addEventListener("click",function(){
    rule.style.display = "none";
});
ruleoption.addEventListener("click",function(){
    rule.style.display = "flex";
});
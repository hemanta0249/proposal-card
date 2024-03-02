let btn1 = document.getElementById("bid1");
let rejectSound = new Audio("sound/reject.mp3");
let acceptSound = new Audio("sound/i-love-you.mp3");

let hbtn = document.getElementById("hid");
let out = document.getElementById("outid");

let div1 = document.getElementById("c1id");
let div2 = document.getElementById("c2id");
let div3 = document.getElementById("c3id");

hbtn.addEventListener("click", ()=>{
    out.classList.add("outHeart1");    
    div1.style.opacity= '1'
    div2.style.opacity= '1'
    div3.style.opacity= '1'
})

btn1.addEventListener("mouseenter", function(){
    btn1.style.color = "royalblue";
    btn1.style.backgroundColor = "white";
})
btn1.addEventListener("mouseout", function(){
    btn1.style.color = "white";
    btn1.style.backgroundColor = "royalblue";
})

let btn2 = document.getElementById("bid2");

// btn2.style.top = "0vh";

btn2.addEventListener("mouseenter",()=>{
    rejectSound.play();
    
    if(btn2.style.top === "0vh"){
        btn2.style.top = "-60vh";
        btn2.style.left = "20vw";
    }
    else if(btn2.style.top === "-60vh"){
        btn2.style.top = "-10vh";
        btn2.style.left = "30vw";
    }
    else if(btn2.style.top === "-10vh"){
        btn2.style.top = "-20vh";
        btn2.style.left = "-40vw";
    }
    else if(btn2.style.top === "-20vh"){
        btn2.style.top = "-65vh";
        btn2.style.left = "-15vw";
    }
    else if(btn2.style.top === "-65vh"){
        btn2.style.top = "8vh";
        btn2.style.left = "-5vw";
    }
    else{
        btn2.style.top = "-60vh";
        btn2.style.left = "30vw";
    }
})

let p1id = document.getElementById("p1id");
let myImg = document.getElementById("myImg");
let t1id = document.getElementById("t1id");

btn1.addEventListener("click", ()=>{
    p1id.innerText = "I love you too...";
    myImg.src = "gif/giphy.gif";
    myImg.style.width = "280px";
    t1id.innerHTML = `<button class="b3" id="b3id" >Thanks</button>`;
    acceptSound.play();
})

let btn3 = document.getElementById("b3id");
let consti = document.getElementById("const");
let h = 0;

btn3.addEventListener("click", ()=> {
    if(h===0){
        consti.style.backgroundColor = "deeppink";
        h=1;
    }
    else if(h===1){
        consti.style.backgroundColor = "deepskyblue";
        h=0;
    }
})


let ch = document.createElement()

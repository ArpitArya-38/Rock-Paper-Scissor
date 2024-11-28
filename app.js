let img = document.querySelectorAll(".img");
let rock = document.querySelector("#img1");
let paper = document.querySelector("#img2");
let siger = document.querySelector("#img3");
let foot = document.querySelector("#foot");
let button = document.querySelector("button")

let yprog = document.querySelector("#yprog");
let cprog = document.querySelector("#cprog");
let reset = document.querySelector("#reset");

let turn = document.querySelector("#turn");

let arr = ["rock","paper","siger"];
let userArr = ["rock","paper","siger"];
// let userArr = [rock,paper,siger];


let random = Math.floor(Math.random()*3);
console.log(random);

let comp = arr[random];

// yprog.innerText=0;
// cprog.innerText=0;
y = 0;
c = 0;

img.forEach((im) => { 
    im.addEventListener("click", ()=>{
          console.log("You Clicked",im);

          if(im==rock){
            if(comp=="rock"){
                console.log("Try Again!!");
                foot.innerText="Try Again!";
            }
            if(comp=="paper"){
                console.log("Comp Won!");
                foot.innerText="Comp Won!";
                // cprog.innerText= cprog.innerText+1;
                c+=1;
            }
            if(comp=="siger"){
                console.log("You Won!");
                foot.innerText="You Won!";
                y+=1;
            }
          }

          else if(im==paper){
            if(comp=="rock"){
                console.log("You Won!");
                foot.innerText="You Won!";
                y+=1;
            }
            if(comp=="paper"){
                console.log("Try Again!");
                foot.innerText="Try Again!";
            }
            if(comp=="siger"){
                console.log("Comp Won!");
                foot.innerText="Comp Won!";
                c+=1;
            }
          }

         else if(im==siger){
            if(comp=="rock"){
                console.log("Comp Won!");
                foot.innerText="Comp Won!";
                c+=1;
            }
            if(comp=="paper"){
                console.log("You Won!");
                foot.innerText="You Won!";
                y+=1;
            }
            if(comp=="siger"){
                console.log("Try Again!");
                foot.innerText="Try Again!";
            }
          }

          cprog.innerText=c;
          yprog.innerText=y;
 
        
          random = Math.floor(Math.random()*3);
          comp = arr[random];
          console.log(comp);
            

        turn.innerText="";          

        setTimeout(()=>{
          turn.innerText="Your Turn";
        },1000);        
     
})
 } )

console.log(comp);

reset.addEventListener("click",()=>{
        c=0;
        y=0;
        cprog.innerText=c;
          yprog.innerText=y;
        random = Math.floor(Math.random()*3);
      comp = arr[random];
      console.log(comp);   
})


// if(comp == userArr[0] || comp == userArr[1] || comp == userArr[2]){
//     if(comp == userArr[0] || userArr1    ){
//         console.log("computer rock");

//     }
// }
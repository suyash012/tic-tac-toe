let boxes=document.querySelectorAll(".box")
let reset=document.querySelector(".reset")
let msg=document.querySelector("#msg")
let newbtn=document.querySelector(".newbtn")
let msgcont=document.querySelector(".msgcoantiner")
let turn0=true;
let count=0;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]; 

const resetgame=()=>{
    
        turn0 =true;
        enabledboxes()
      
       msgcont.classList.add("hide")
        

    }


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box vat lage gi")
        if (turn0===true){
            box.innerText="o"
            turn0=false;
        }
        else{
            box.innerText="x"
            turn0=true;
        }
        box.disabled=true;
        count += 1;
       let Iswinner= checkwinner();
       if(count===9 && !Iswinner() ){
        showdraww();
       }
    })
    
})
const showdraww=()=>{
    msg.innerText=`game was a draw`;
    msgcont.classList.remove("hide")
    diasabledboxes();
}
const diasabledboxes=()=>{
    for (let boxe of boxes){
        boxe.disabled=true;
    }
}
const enabledboxes=()=>{
    for (let boxe of boxes){
        boxe.disabled=false;
        boxe.innerText=""
    }
}
const showwinner=(winner)=>{
    msg.innerText=`congratulation, winner is ${winner}`
    msgcont.classList.remove("hide")
    diasabledboxes();




}

const checkwinner= ()=>{
    for (let pattern of winpatterns ){
        let pos1val=boxes[pattern[0]].innerText
        let pos2val=boxes[pattern[1]].innerText
        let pos3val=boxes[pattern[2]].innerText
        if (pos1val!=""&&pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val&&pos2val===pos3val){
                console.log("winner",pos1val)
                showwinner(pos1val);
                return true;
            }        }
            

    }

}
newbtn.addEventListener("click",resetgame)
reset.addEventListener("click",resetgame)

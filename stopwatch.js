let hrs = mins = secs = msecs = "0" + 0;
let startTimer;

const start_btn= document.querySelector(".start");
const stop_btn= document.querySelector(".stop");
const reset_btn= document.querySelector(".reset");



function start(){
    start_btn.classList.add("active");
    stop_btn.classList.remove("stopActive");

    startTimer = setInterval(() =>{
        msecs++
        msecs= msecs < 10 ? "0" + msecs : msecs;

        if(msecs == 100){
            secs++;
            secs= secs < 10 ? "0" + secs : secs;
            msecs= "0" + 0 ;
        }

        if(secs == 60){
            mins++;
            mins= mins < 10 ? "0" + mins : mins;
            secs= "0" + 0;
        }

        if(mins == 60){
            hrs++;
            hrs= hrs < 10 ? "0" + hrs : hrs;
            mins= "0" + 0;
        }

        putValue();

    }, 10);



}

function stop(){
    clearInterval(startTimer);
}

function reset(){
    clearInterval(startTimer);
    hrs = mins = secs = msecs = "0" + 0;
    putValue();
}

function putValue(){
    document.querySelector(".msec").innerText= msecs;
    document.querySelector(".sec").innerText= secs;
    document.querySelector(".mins").innerText= mins;
    document.querySelector(".hour").innerText= hrs;

}

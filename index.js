var [seconds,minutes,hours,ml] =[0,0,0,0];
var sdiv = document.getElementById("second");
var mdiv = document.getElementById("minutes");
var hdiv = document.getElementById("hours");
var mldiv = document.getElementById("ml");
var displayTime = document.getElementById("displaytime");
var play = document.getElementById("play");
var timer = null;
function stopwatch(){
    ml++;
    if(ml==100){
        ml=0;
        seconds++;
         if(seconds == 60){
            seconds = 0;
             minutes++;
            if(minutes == 60){
                 minutes=0;
                 hours++;
            }
         }
    }
    let mt =  ml<10 ? "0"+ ml: ml;
    let h = hours<10 ? "0" +hours:hours;
    let m = minutes<10 ? "0" +minutes:minutes;
    let s = seconds<10 ? "0" +seconds:seconds;
    sdiv.innerHTML = s;
    mdiv.innerHTML = m;
    hdiv.innerHTML = h;
    mldiv.innerHTML = mt;
    displayTime.innerHTML = h +':'+ m +":"+ s +":" +mt;
}
play.addEventListener('click',function watchStart(){
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch,10);
});
function watchStop(){
    clearInterval(timer);
}
function reset(){
    clearInterval(timer);
    [seconds,minutes,hours] = [0,0,0];
    sdiv.innerHTML = "00";
    mdiv.innerHTML = "00";
    hdiv.innerHTML = "00";
    mldiv.innerHTML ="00";
}
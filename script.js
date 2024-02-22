//setting the values of display-timer to 0
let [milliseconds, seconds,minutes,hours]=[0,0,0,0];
let timeRef = document.querySelector('.display-timer');
let lapList = document.getElementById('lap-list');
let buttonOn = document.getElementById('on');
let buttonOff = document.getElementById('off');
let int=null;
let lapCount=0;

//setting the functionality of start button
document.getElementById('start').addEventListener('click',()=>{
        buttonOn.style.display='none';
        buttonOff.style.display='flex';
        if(int!==null){
            clearInterval(int);
        }
        int=setInterval(displayTimer,10);
});

//setting the functionality of stop button
document.getElementById('stop').addEventListener('click',()=>{
    clearInterval(int);
    buttonOff.style.display='none';
    buttonOn.style.display='flex';
});

//setting the functionality of reset button
document.getElementById('reset').addEventListener('click',()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours]=[0,0,0,0];
    timeRef.innerHTML='00 : 00 : 00 : 000 ';
    lapList.innerHTML = '';
    lapCount = 0;
});

//setting the functionality of lap button
document.getElementById('lap').addEventListener('click',()=>{
    //concatinating zeroes for single digits in hours,minutes and seconds and 1 zero and 2 zeroes for single digits and double digits respectively for milliseconds to maintain equal length
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    //creation of new list element
    let newLapList = document.createElement('li');
    //counting the number of clicks
    lapCount++;
    //creation of new list items
    let lapCountSpan = document.createElement('span');
    let lapTimeSpan = document.createElement('span');
    //updating the list item values
    lapCountSpan.innerHTML=`Lap ${lapCount}`;
    lapTimeSpan.innerHTML=`${h} : ${m} : ${s} : ${ms}`;
    //appending list items to the new list element
    newLapList.appendChild(lapCountSpan);
    newLapList.appendChild(lapTimeSpan);
    //appending new list element to the list
    lapList.appendChild(newLapList);
});

//function for incrementing the values of milliseconds,seconds,minutes,hours
function displayTimer(){
    milliseconds+=10;
    if(milliseconds==1000){
        milliseconds=0;
        seconds++;

        if(seconds==60){
            seconds=0;
            minutes++;

            if(minutes==60){
                minutes=0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}


function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";

//12-Hour format
    
    if (hh == 0) {
        hh = 12;
    }
    if (hh > 12) {
        hh = hh - 12;
        session = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    document.getElementById('hour').innerHTML = hh;
    document.getElementById('minute').innerHTML = mm;
    document.getElementById('second').innerHTML = ss;
    document.getElementById('session').innerHTML = session;

}
setInterval(currentTime, 1000);


function audioPlay() {
    setTimeout(() => {
        let audio = new Audio('audio.mp3');
        audio.loop = true;
        audio.play();

    }, 1000);


}
// audioPlay();
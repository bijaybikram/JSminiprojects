showTime = () => {
    let time = new Date();
    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    meridiem = 'AM';

    if(hr > 12) {
        hr -= 12;
        meridiem = 'PM';
    }
    if(hr == 0) {
        hr = 12;
        meridiem = 'AM';
    }
    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hr + ":" + min + ":" + sec +" " + meridiem;

    document.getElementById('digi_clk').innerHTML = currentTime;

}
showTime();
setInterval(showTime, 1000);

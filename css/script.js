function updatTime(){
    const now = new Date ()

    document.getElementById("day").innerText= 
    zeropadding(now.getMonth(), 2);

    document.getElementById("hours").innerText=
    zeropadding(now.getHours(), 2);

    document.getElementById("minitecs").innerText=
    zeropadding(now.getMinutes(), 2);

    document.getElementById("secodnts").innerText=
    zeropadding(now.getSeconds(), 2);
}
function zeropadding(num, digit){
    return String(num).padStart(digit, "0");
}
updatTime()
setInterval(updatTime, 1000);
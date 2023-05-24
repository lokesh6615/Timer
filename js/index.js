function instructions(){
    document.getElementById("txt2").style.display = "block";
}
function closeinst(){
    document.getElementById("txt2").style.display = "none";
}
function validate(){
    var hr=document.getElementById("hours-input");
    if(hr.value>=24){
        alert("enter valid hours");
        return false;
    }
    var mi=document.getElementById("min-input");
    if(mi.value>60){
        alert("enter valid minutes");
        return false;
    }
    var se=document.getElementById("sec-input");
    if(se.value>60){
        alert("enter valid seconds");
        return false;
    }
    return true;
}
function start(){
    
    var day=Number(document.getElementById("days").innerHTML);
    var hr=Number(document.getElementById("hours").innerHTML);
    var mi=Number(document.getElementById("min").innerHTML);
    var se=Number(document.getElementById("sec").innerHTML);
    var now = new Date().getTime();
    var countDownDate = (((day * 24 + hr) * 60 + mi) * 60 + se)*1000+now;
    var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("min").innerHTML=minutes;
    document.getElementById("sec").innerHTML=seconds+1;
    if (distance < 0) {
        rst();
        clearInterval(x);
        alert("expired");
    }
    function pausefun(){
        clearInterval(x);
    }
    start.pausefun=pausefun;
}, 1000);

}
function pau(){
    clearTimeout(x);
}
function setTime(){
    var day=document.getElementById("day-input").value;
    document.getElementById("days").innerHTML=day;
    var hr=document.getElementById("hours-input").value;
    document.getElementById("hours").innerHTML=hr;
    var mi=document.getElementById("min-input").value;
    document.getElementById("min").innerHTML=mi;
    var se=document.getElementById("sec-input").value;
    document.getElementById("sec").innerHTML=se;

}
function rst(){
    document.getElementById("days").innerHTML="00";
    document.getElementById("hours").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("day-input").value="00";
    document.getElementById("hours-input").value="00";
    document.getElementById("min-input").value="00";
    document.getElementById("sec-input").value="00";
}
//Amadeus eventListener
document.addEventListener("DOMContentLoaded", function(){
    var Amadeus=document.getElementById("Amadeus");
    var frm2=document.getElementById("frm2");

    Amadeus.addEventListener("click",function(){
        /*if(frm2.style.display !="block"){
            frm2.style.display = "block";
        }
        else{
            frm2.style.display="none";
        }*/
        frm2.style.display="block";
    });
});


// uname 
var uname = document.getElementById('uname');

uname.addEventListener('focus', function() {
    uname.value = '';
});

uname.addEventListener('blur', function() {
    if (uname.value == '') {
        uname.value = 'user';
    }
});

//pass
var upass = document.getElementById('upass');

upass.addEventListener('focus', function() {
    if(upass.type=='text'){
        upass.value = '';
        upass.type = 'password';
    }
});

upass.addEventListener('blur', function() {
    if (upass.value == '') {
        upass.type = 'text';
        upass.value = 'password';
    }
});
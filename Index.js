var res=document.getElementById("submit").addEventListener('click',()=>{
//console.log(1);
var number=document.getElementById("input");
console.log(number.value);
function load()
{//document.getElementById("after").innerHTML='<p>'+'did you know'+'</p>'

var xhr=new XMLHttpRequest();
xhr.open('GET','http://numbersapi.com/'+number.value,true );

xhr.onload=function(){
    if(this.status==200){
        //console.log(this.responseText);
        document.getElementById("after1").style.visibility="visible";
        document.getElementById("after2").innerHTML='<p>'+this.responseText+'</p>'
        document.getElementById("after2").style.textAlign="center";
    }
}
xhr.send();
}
load();
}
);
var reset=document.getElementById("reset").addEventListener('click',()=>{
    document.getElementById("after1").style.visibility="hidden";

    
});

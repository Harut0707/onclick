let tel=document.querySelector('.tel');
let iph=document.querySelector('.iphon');
let m1bx=document.querySelector('.m1box')
let a='open';

m1bx.onclick=function(){
    if(a=='open'){
        tel.style.background='inherit';
        tel.style.transform='scale(100%)'
        a='next'
    }
    
    else if(a=='next'){
        tel.style.background='blue';
        tel.style.transform='scale(110%)';
        a='next2';
    }
    else if(a=='next2'){
        tel.style.background='green';
        a='next3';
    }
    else if(a=='next3'){
        tel.style.background='gold';
        a='next4';
    }
    else if(a=='next4'){
        
        tel.style.background='red';
        a='open';
}
}


   

//main2 & main3
let box=document.querySelector('.productbox');
let liked=document.querySelector('.likedproduct');
let hrt=document.querySelectorAll('.heart');
function selectprod(){
    box.value++
}
for (let i = 0; i < hrt.length; i++) {
hrt[i].onclick=function(event){
   let like=event.srcElement;
    
    if (like.style.background==''){
        hrt[i].style.background='red';
        liked.value++;
        
    }
    else {
        hrt[i].style.background=''; 
        liked.value--;
    }
}  
}



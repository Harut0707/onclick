let tel=document.querySelector('.tel');
let iph=document.querySelector('.iphon');

function transf() {
        tel.style.transition='10s';
    tel.style.transform='rotateY(180deg)';
}
   

//main2 & main3
let box=document.querySelector('.productbox');
let liked=document.querySelector('.likedproduct');
let hrt=document.querySelector('.heart');
let hrt1=document.querySelector('.heart1');
let hrt2=document.querySelector('.heart2');
let hrt3=document.querySelector('.heart3');
let hrt4=document.querySelector('.heart4');
let hrt5=document.querySelector('.heart5');
let hrt6=document.querySelector('.heart6');
let hrt7=document.querySelector('.heart7');
let hrt8=document.querySelector('.heart8');
let x='close';
let x1='close';
let x2='close';
let x3='close';
let x4='close';
let x5='close';
let x6='close';
let x7='close';
let x8='close';


function selectprod(){
    box.value++
}
function likeprod(){
hrt.style.backgroundColor='red';
 if (x=='close'){
 liked.value++;
 x='open'
}
else if(x=='open'){
    hrt.style.backgroundColor='white';
    liked.value--;
    x='close'
}
}
function likeprod1(){
    hrt1.style.backgroundColor='red';
     if (x1=='close'){
     liked.value++;
     x1='open'
    }
    else if(x1=='open'){
        hrt1.style.backgroundColor='white';
        liked.value--;
        x1='close'
    }
    }
    function likeprod2(){
        hrt2.style.backgroundColor='red';
         if (x2=='close'){
         liked.value++;
         x2='open'
        }
        else if(x2=='open'){
            hrt2.style.backgroundColor='white';
            liked.value--;
            x2='close'
        }
        }
        function likeprod3(){
            hrt3.style.backgroundColor='red';
             if (x3=='close'){
             liked.value++;
             x3='open'
            }
            else if(x3=='open'){
                hrt3.style.backgroundColor='white';
                liked.value--;
                x3='close'
            }
            }
            function likeprod4(){
                hrt4.style.backgroundColor='red';
                 if (x4=='close'){
                 liked.value++;
                 x4='open'
                }
                else if(x4=='open'){
                    hrt4.style.backgroundColor='white';
                    liked.value--;
                    x4='close'
                }
                }
                function likeprod5(){
                    hrt5.style.backgroundColor='red';
                     if (x5=='close'){
                     liked.value++;
                     x5='open'
                    }
                    else if(x5=='open'){
                        hrt5.style.backgroundColor='white';
                        liked.value--;
                        x5='close'
                    }
                    }
                    function likeprod6(){
                        hrt6.style.backgroundColor='red';
                         if (x6=='close'){
                         liked.value++;
                         x6='open'
                        }
                        else if(x6=='open'){
                            hrt6.style.backgroundColor='white';
                            liked.value--;
                            x6='close'
                        }
                        }
                        function likeprod7(){
                            hrt7.style.backgroundColor='red';
                             if (x7=='close'){
                             liked.value++;
                             x7='open'
                            }
                            else if(x7=='open'){
                                hrt7.style.backgroundColor='white';
                                liked.value--;
                                x7='close'
                            }
                            }
                            function likeprod8(){
                                hrt8.style.backgroundColor='red';
                                 if (x8=='close'){
                                 liked.value++;
                                 x8='open'
                                }
                                else if(x8=='open'){
                                    hrt8.style.backgroundColor='white';
                                    liked.value--;
                                    x8='close'
                                }
                                }


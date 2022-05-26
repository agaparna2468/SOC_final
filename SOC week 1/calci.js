var canvas = document.getElementById("mycanvas");

var ctx = canvas.getContext("2d");
canvas.width = 1225;
canvas.height = 575;

var value=0;

var flag=0;



function Draw_background() {

    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.rect(100, 25, 980, 520); //KEYPAD SCREEN
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.rect(110, 120, 224, 95); // 7
    ctx.rect(344, 120, 224, 95); // 8

    ctx.rect(578, 120, 224, 95); // 9
    ctx.rect(812, 120, 224, 95); // *

    ctx.rect(110, 225, 224, 95); // 4
    ctx.rect(344, 225, 224, 95); // 5

    ctx.rect(578, 225, 224, 95); // 6
    ctx.rect(812, 225, 224, 95); // /

    ctx.rect(110, 330, 224, 95); // 1
    ctx.rect(344, 330, 224, 95); // 2

    ctx.rect(578, 330, 224, 95); // 3
    ctx.rect(812, 330, 224, 95); // +

    ctx.rect(344, 435, 224, 95); // 0
    ctx.rect(812, 435, 224, 95); // -

    //ctx.rect(110, 35, 224, 75); // =
    
    ctx.fill();
    ctx.closePath();


    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.rect(110, 35, 924, 75); // ANS

    ctx.fill();
    ctx.closePath();

    ctx.font = "60px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("7" , 210 , 185);
    ctx.fillText("8" , 444 , 185);
    ctx.fillText("9" , 678 , 185);
    ctx.fillText("*" , 912 , 185);

    ctx.fillText("4" , 210 , 290);
    ctx.fillText("5" , 444 , 290);
    ctx.fillText("6" , 678 , 290);
    ctx.fillText("/" , 912 , 290);

    ctx.fillText("1" , 210 , 395);
    ctx.fillText("2" , 444 , 395);
    ctx.fillText("3" , 678 , 395);
    ctx.fillText("+" , 912 , 395);

    //ctx.fillText("=" , 210 , 55);
    ctx.fillText("0" , 444 , 500);
   
    ctx.fillText("-" , 912 , 500);

    
    ctx.fillText(value , 210 , 90);

}


function update() {
    Draw_background()
}

onmousedown = function(e) {
    var x = e.clientX;   // Get the horizontal coordinate
    var y = e.clientY;     // Get the vertical coordinate
    if(x > 812 && x<812+224 && y> 120 && y< 120+ 95 )
    {  
        flag = 1;
        
    }  
    if(x > 812 && x<812+ 224 && y> 225 && y< 225+ 95 ) flag =2;
    if(x > 812 && x<812+ 224 && y> 435 && y< 435+ 95 ) flag = 4;

    if(x > 812 && x<812+ 224 && y> 330 && y< 330+ 95 ) flag =3;

    if (flag==1)  
    {   
        
        if(x > 110 && x< 110+224 && y> 120 && y< 120+ 95 )
            {value *= 7; flag=0;}
    
         if(x > 344 && x<344+ 224 && y> 120 && y< 120+ 95 )
            {value *= 8; flag =0;}
    
        if(x > 578 && x<578+ 224 && y> 120 && y< 120+ 95 )
            {value *= 9; flag =0;}
    
        if(x > 110 && x<110+ 224 && y> 225 && y< 225+ 95 )
            {value *= 4; flag =0;}
    
        if(x > 344 && x<344+ 224 && y> 225 && y< 225+ 95 )
            {value *= 5; flag =0;}
    
        if(x > 578 && x<578+ 224 && y> 225 && y< 225+ 95 )
            {value *= 6; flag =0;}
    
        if(x > 110 && x<110+ 224 && y> 330 && y< 330+ 95 )
            {value *= 1; flag =0;}
    
        if(x > 344 && x<344+ 224 && y> 330 && y< 330+ 95 )
            {value *= 2; flag =0;}
    
        if(x > 578 && x<578+ 224 && y> 330 && y< 330+ 95 )
            {value *= 3; flag =0;}
    
        if(x > 344 && x<344+ 224 && y> 435 && y< 435+ 95 )
            {value = value* 0;flag =0;}
        
        
    }
    else if(flag==2)
    {  
        
        if(x > 110 && x<110+ 224 && y> 120 && y< 120+ 95 )
            {value /= 7.0; flag =0;}
    
         if(x > 344 && x<344+ 224 && y> 120 && y< 120+ 95 )
            {value /= 8.0; flag =0;}
    
        if(x > 578 && x<578+ 224 && y> 120 && y< 120+ 95 )
            {value /= 9.0; flag =0;}
    
        if(x > 110 && x<110+ 224 && y> 225 && y< 225+ 95 )
            {value /= 4.0; flag =0;}
    
        if(x > 344 && x<344+ 224 && y> 225 && y< 225+ 95 )
            {value /= 5.0; flag =0;}
    
        if(x > 578 && x<578+ 224 && y> 225 && y< 225+ 95 )
            {value /= 6.0; flag =0;}
    
        if(x > 110 && x<110+ 224 && y> 330 && y< 330+ 95 )
            {value /= 1.0; flag =0;}
    
        if(x > 344 && x<344+ 224 && y> 330 && y< 330+ 95 )
            {value /= 2.0; flag =0;}
    
        if(x > 578 && x<578+ 224 && y> 330 && y< 330+ 95 )
            {value /= 3.0; flag =0;}
    
        if(x > 344 && x<344+ 224 && y> 435 && y< 435+ 95 )
        { alert("ERROR!");
           clearInterval(one);
           flag=0;
        }
        
    }
    
    else if(flag ==4)
     
     { 
        
        if(x > 110 && x<110+ 224 && y> 120 && y< 120+ 95 )
            {value -= 7; flag =0;}
    
        if(x > 344 && x<344+ 224 && y> 120 && y< 120+ 95 )
            { value -= 8; flag =0;}
    
        if(x > 578 && x<578+ 224 && y> 120 && y< 120+ 95 )
             {value -= 9; flag =0;}
    
        if(x > 110 && x<110+ 224 && y> 225 && y< 225+ 95 )
            {value -= 4; flag =0;}
    
        if(x > 344 && x<344+ 224 && y> 225 && y< 225+ 95 )
             {value -= 5; flag =0;}
    
        if(x > 578 && x<578+ 224 && y> 225 && y< 225+ 95 )
            {value -= 6; flag =0;}
    
        if(x > 110 && x<110+ 224 && y> 330 && y< 330+ 95 )
            {value -= 1; flag =0;}
    
        if(x > 344 && x<344+ 224 && y> 330 && y< 330+ 95 )
            {value -= 2; flag =0;}
    
        if(x > 578 && x<578+ 224 && y> 330 && y< 330+ 95 )
            {value -= 3; flag =0;}
    
        if(x > 344 && x<344+ 224 && y> 435 && y< 435+ 95 )
            {value -= 0;

            flag=0;}
    }
    else if(flag==3)
    {   
        
        if(x > 110 && x<110+ 224 && y> 120 && y< 120+ 95 )
             {value += 7; flag =0;}
    
        if(x > 344 && x<344+ 224 && y> 120 && y< 120+ 95 )
            {value += 8; flag =0;}
    
        if(x > 578 && x<578+ 224 && y> 120 && y< 120+ 95 )
            {value += 9; flag =0;}
    
        if(x > 110 && x<110+ 224 && y> 225 && y< 225+ 95 )
            {value += 4; flag =0;}
    
        if(x > 344 && x<344+ 224 && y> 225 && y< 225+ 95 )
            {value += 5; flag =0;}
    
        if(x > 578 && x<578+ 224 && y> 225 && y< 225+ 95 )
            {value += 6; flag =0;}
    
        if(x > 110 && x<110+ 224 && y> 330 && y< 330+ 95 )
            {value += 1; flag =0;}
    
        if(x > 344 && x<344+ 224 && y> 330 && y< 330+ 95 )
            {value += 2; flag =0;}
    
        if(x > 578 && x<578+ 224 && y> 330 && y< 330+ 95 )
            {value += 3; flag =0;}
    
        if(x > 344 && x<344+ 224 && y> 435 && y< 435+ 95 )
            {value += 0;
             flag=0;}
    }
    else if(flag==0) 
    {  
       if(x > 110 && x<110+ 224 && y> 120 && y< 120+ 95 )
            value = value*10+ 7;

       if(x > 344 && x<344+ 224 && y> 120 && y< 120+ 95 )
             value = value*10+ 8;


       if(x > 578 && x<578+ 224 && y> 120 && y< 120+ 95 )
           value = value*10+ 9;


       if(x > 110 && x<110+ 224 && y> 225 && y< 225+ 95 )
           value = value*10+ 4;


       if(x > 344 && x<344+ 224 && y> 225 && y< 225+ 95 )
           value = value*10+ 5;


       if(x > 578 && x<578+ 224 && y> 225 && y< 225+ 95 )
           value = value*10+ 6;


       if(x > 110 && x<110+ 224 && y> 330 && y< 330+ 95 )
           value = value*10+ 1;


       if(x > 344 && x<344+ 224 && y> 330 && y< 330+ 95 )
            value = value*10+ 2;


       if(x > 578 && x<578+ 224 && y> 330 && y< 330+ 95 )
           value = value*10+ 3;


       if(x > 344 && x<344+ 224 && y> 435 && y< 435+ 95 )
            value = value*10+ 0;

}
}
one = setInterval(update, 0.1);
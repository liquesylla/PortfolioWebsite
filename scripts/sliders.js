var books = document.getElementsByClassName("book1");
const int = 0;
for(var i=0; i<books.length; i++){
    books[i].addEventListener("mouseenter", function(){
        var image = this.getElementsByClassName("image");
        var description = this.getElementsByClassName("description");
        
        var o = document.querySelector(".book1");
        o.style.setProperty('--book1opa', getComputedStyle(image[int]).getPropertyValue('opacity'));
        o.style.setProperty('--book1decMargin', getComputedStyle(description[int]).getPropertyValue('margin-left'));
        
        image[int].style.animation = "fadein linear 450ms";
        o.style.backgroundColor = "cornsilk";
     
        description[int].style.animation = "fadeIn linear 250ms";
        

        o.style.setProperty('--book1finish', '100%');
        setTimeout(function(){
            o.style.setProperty('--book1decMargin', '400px');  
        }, 200);
   

    })
    books[i].addEventListener("mouseleave", function(){
        var image = this.getElementsByClassName("image");
        var description = this.getElementsByClassName("description");
        
        
        var o = document.querySelector(".book1");
        o.style.setProperty('--book1opa', getComputedStyle(image[int]).getPropertyValue('opacity'));
        o.style.setProperty('--book1decMargin', getComputedStyle(description[int]).getPropertyValue('margin-left'));
        
        
        image[int].style.animation = "fadeout linear 450ms";
        o.style.backgroundColor = "grey";
        description[int].style.animation = "fadeOut linear 250ms";


        o.style.setProperty('--book1finish', '0%');
        setTimeout(function(){
            o.style.setProperty('--book1decMargin', '50px');  
        }, 550);
             
        
    })


}
var books2 = document.getElementsByClassName("book2");

for(var i=0; i<books2.length; i++){
    books2[i].addEventListener("mouseenter", function(){
        console.log(this);
        var image = this.getElementsByClassName("image");
        var description = this.getElementsByClassName("description");
        
        var o = document.querySelector(".book2");
        o.style.setProperty('--book2opa', getComputedStyle(image[int]).getPropertyValue('opacity'));
        o.style.setProperty('--book2decMargin', getComputedStyle(description[int]).getPropertyValue('margin-left'));
        
        console.log(getComputedStyle(description[int]).getPropertyValue('margin-left'));
        image[int].style.animation = "tfadein linear 450ms";
        description[int].style.animation = "tfadeIn linear 250ms";
        console.log(description[int]);
        console.log(getComputedStyle(description[int]).getPropertyValue('margin-left'));

        o.style.setProperty('--book2finish', '100%');
        setTimeout(function(){
            o.style.setProperty('--book2decMargin', '400px');  
        }, 200);
       //  
        console.log(getComputedStyle(description[int]).getPropertyValue('margin-left'));
   

    })
    books2[i].addEventListener("mouseleave", function(){
        var image = this.getElementsByClassName("image");
        var description = this.getElementsByClassName("description");
        
        
        var o = document.querySelector(".book2");
        o.style.setProperty('--book2opa', getComputedStyle(image[int]).getPropertyValue('opacity'));
        o.style.setProperty('--book2decMargin', getComputedStyle(description[int]).getPropertyValue('margin-left'));
        
        
        image[int].style.animation = "tfadeout linear 450ms";
        description[int].style.animation = "tfadeOut linear 250ms";


        o.style.setProperty('--book2finish', '0%');
        setTimeout(function(){
            o.style.setProperty('--book2decMargin', '50px');  
        }, 250);
             
        
    })


}

var books3 = document.getElementsByClassName("book3");

for(var i=0; i<books3.length; i++){
    books3[i].addEventListener("mouseenter", function(){
        console.log(this);
        var image = this.getElementsByClassName("image");
        var description = this.getElementsByClassName("description");
        
        var o = document.querySelector(".book3");
        o.style.setProperty('--book3opa', getComputedStyle(image[int]).getPropertyValue('opacity'));
        o.style.setProperty('--book3decMargin', getComputedStyle(description[int]).getPropertyValue('margin-left'));
        
        console.log(getComputedStyle(description[int]).getPropertyValue('margin-left'));
        image[int].style.animation = "tfadein linear 450ms";
        description[int].style.animation = "tfadeIn linear 250ms";
        console.log(description[int]);
        console.log(getComputedStyle(description[int]).getPropertyValue('margin-left'));

        o.style.setProperty('--book3finish', '100%');
        setTimeout(function(){
            o.style.setProperty('--book3decMargin', '400px');  
        }, 200);
       //  
        console.log(getComputedStyle(description[int]).getPropertyValue('margin-left'));
   

    })
    books3[i].addEventListener("mouseleave", function(){
        var image = this.getElementsByClassName("image");
        var description = this.getElementsByClassName("description");
        
        
        var o = document.querySelector(".book3");
        o.style.setProperty('--book3opa', getComputedStyle(image[int]).getPropertyValue('opacity'));
        o.style.setProperty('--book3decMargin', getComputedStyle(description[int]).getPropertyValue('margin-left'));
        
        
        image[int].style.animation = "tfadeout linear 450ms";
        description[int].style.animation = "tfadeOut linear 250ms";


        o.style.setProperty('--book3finish', '0%');
        setTimeout(function(){
            o.style.setProperty('--book3decMargin', '50px');  
        }, 250);
             
        
    })


}
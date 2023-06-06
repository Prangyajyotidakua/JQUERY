//event listener
$("h1").click(function() {
    $("h1").css("color" , "purple")
});


//in normal javascript

for(var i=0 ; i<5; i++){
    document.querySelectorAll("button ")[i].addEventListener("click" , function(){
        document.querySelector("h1").style.color = "red";
    });
}


$("button").click(function() {
    $("h1").css("color" , "red")
});

$("input").keypress(function(event) {
    console.log(event.key)
});

$("input").keypress(function(event){
    $("h1").text(event.key)
});

$("h1").before("<button>before</button>");
$("h1").after("<button>after</button>");
$("h1").prepend("<button>prepend</button>");
$("h1").append("<button>append</button>");
$("h1").hide(); //to hide
$("h1").show();


//fade
$("button").on("click", function(){
    $("h1").fadeOut();
});

$("button").on("click", function(){
    $("h1").fadeIn();
});

$("button").on("click", function(){
    $("h1").fadeToggle();
});

//slide
$("button").on("click", function(){
    $("h1").slideUp();
});

$("button").on("click", function(){
    $("h1").slideDown();
});

$("button").on("click", function(){
    $("h1").slideToggle();
});


//animate or customized

$("button").on("click", function(){
    $("h1").animate({opacity : 0.5});
});


$("button").on("click", function(){
    $("h1").animate({margin : "20%"});
});
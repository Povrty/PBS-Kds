$(".arthur").hide();
$(".agento").hide();
$(".martha").hide();
$(".george").hide();
$(".error").hide();
$(".duh").hide();

$(".submit").click(function() {
    var age = $('#one').val();
    var type = $('#two').val();
    if (age <= 8 && age > 0 && type.toLowerCase() === "human") {
        $(".arthur").show();
        $(".agento").hide();
        $(".martha").hide();
        $(".george").hide();
    }
    else if (age >= 8 && type.toLowerCase() === "human") {
        $(".agento").show();
        $(".george").hide();
        $(".martha").hide();
        $(".arthur").hide();
    }
    else if (age >= 8 && type.toLowerCase() === "animal") {
        $(".martha").show();
        $(".agento").hide();
        $(".george").hide();
        $(".arthur").hide();
    }
    else if (age <= 8 && age > 0 && type.toLowerCase() === "animal") {
        $(".george").show();
        $(".agento").hide();
        $(".martha").hide();
        $(".arthur").hide();
    }
    else if (age < 0 && type.toLowerCase() === "animal") {
        $(".duh").show();
        $(".george").hide();
        $(".agento").hide();
        $(".martha").hide();
        $(".arthur").hide(); 
    }
    else {
        alert("Invalid: Fill in both inputs");
        $(".error").show();
        $(".george").hide();
        $(".agento").hide();
        $(".martha").hide();
        $(".arthur").hide();
    }
});
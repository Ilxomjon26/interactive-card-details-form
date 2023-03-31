$(document).ready(function(){
    $(".kor").hide()
    $(".button").click(function(){
        $(".kor").show()
        $("#inputs").hide()
    })
    $(".button1").click(function(){
        $(".kor").hide()
        $("#inputs").show()
    })



});
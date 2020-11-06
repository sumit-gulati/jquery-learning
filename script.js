$(document).ready(function(){
    $("#btn1").click(function(){
        var a = $("#a").val();
        var b = $("#b").val();
        var sum = (parseInt(a)+parseInt(b));
        $("#box").html(sum)
        $(".box").css({"background-color": "#007bff"})
    })

    $("#btn2").click(function(){
        var a = $("#a").val();
        var b = $("#b").val();
        var sub = (parseInt(a)-parseInt(b));
        $("#box").html(sub)
        $(".box").css({"background-color": "#6c757d"})
    })

    $("#btn3").click(function(){
        var a = $("#a").val();
        var b = $("#b").val();
        var multiply = (parseInt(a)*parseInt(b));
        $("#box").html(multiply)
        $(".box").css({"background-color": "#28a745"})
    })

    $("#btn4").click(function(){
        var a = $("#a").val();
        var b = $("#b").val();
        var divide = (parseInt(a)/parseInt(b));
        $("#box").html(divide)
        $(".box").css({"background-color": "#dc3545"})
    })

    $("#btn5").click(function(){
        $("#a").val('');
        $("#b").val('');
        var reset = ('');
        $("#box").html(reset)
        $(".box").css({"background-color": "#ffc107"})
    })

    $("#btn6").click(function(){
        var swap = $('#a').val();
        $('#a').val($('#b').val());
        $('#b').val(swap);
        
    });

    $("#btn7").click(function(){
       var a = 20;
       var b = 30;
        var c = (a + b)
        $("#box").html(c)
        $(".box").css({"background-color": "#000"})
    })

    $("#btn8").click(function(){
        var a = $("#a").val();
        var b = $("#b").val();
        var remainder = (parseInt(a)%parseInt(b));
        $("#box").html(remainder)
        $(".box").css({"background-color": "#17a2b8"})
    })

})



 
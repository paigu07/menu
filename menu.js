/**
 * Created by Rachel on 1/27/2015.
 */

$(document).ready(function(){
       var $a=$('#starter-menu');
       $a.hide();
       console.log($a);
       var b=$a.css('fontSize');
       $('#start-menu').mouseenter(
           function(){
             $(this).find('.start0').slideDown('slow');
           });
       $('#start-menu').mouseleave(
        function(){
            $(this).find('.start0').slideUp('slow');
        });
       $('#soup-menu').mouseenter(
        function(){
            $(this).find('.start1').slideDown('slow');
        });
       $('#soup-menu').mouseleave(
        function(){
            $(this).find('.start1').slideUp('slow');
        });
       $('#noodles-menu').mouseenter(
        function(){
            $(this).find('.start2').slideDown('slow');
        });
       $('#noodles-menu').mouseleave(
        function(){
            $(this).find('.start2').slideUp('slow');
        });
       $('#signature-menu').mouseenter(
        function(){
            $(this).find('.start3').slideDown('slow');
        });
      $('#signature-menu').mouseleave(
        function(){
            $(this).find('.start3').slideUp('slow');
        });
       $('#wok-menu').mouseenter(
        function(){
            $(this).find('.start4').slideDown('slow');
        });
       $('#wok-menu').mouseleave(
        function(){
            $(this).find('.start4').slideUp('slow');
        });
    $('#recommend-menu').mouseenter(
        function(){
            $(this).find('.start5').slideDown('slow');
        });
    $('#recommend-menu').mouseleave(
        function(){
            $(this).find('.start5').slideUp('slow');
        });
    $(function(){
        $(".heartPic li").hover(function(){
            $(this).addClass("on");
            $(this).find("img").animate({"width":"200px","height":"200px"});
            $(this).find("div").animate({"width":"200px","height":"200px"});
            $(this).find(".pTxt").animate({"width":"200px","height":"20px"});
            $(this).find("p").addClass("showDiv");
        },function(){
            $(this).animate({height:"100px"},100).removeClass("on");
            $(this).find("img").stop(true,true).animate({"width":"100px","height":"100px"});
            $(this).find("div").stop(true,true).animate({"width":"100px","height":"100px"});
            $(this).find(".pTxt").stop(true,true).animate({"width":"0px","height":"0px"});
        });
    })

});


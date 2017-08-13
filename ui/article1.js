   
  function chgcolor() { 
    var bagcolors = ["#635e5e", "#c6c91c", "#1a4219"];

    var fontcolor = ["#0a76c9", "#db255e", "db255e"];

    var randno = Math.floor(Math.random() * 2);

    $(".quote").css("color", font_color[randno]);

    $("html body").animate({
        backgroundColor: bag_colors[randno],
        
      }, 1000);}

$(document).ready(function(){
  
   $(".Buttt").on("click", function(){
    
     var bagcolors = ["#635e5e", "#c6c91c", "#1a4219","#1a4219"];
     var fontcolor = ["#0a76c9", "#db255e", "db255e","#db255e"];
     var randno = Math.floor(Math.random() * 4);
     var f = fontcolor[randno];
     var b = bagcolors[randno];
     
     $(".quote").css("color",f );
     $("body").css("background",b) ;
    
       $.ajax({url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", async: false, success: function(json){
         
           
        }});
    });
     
     
   });
   


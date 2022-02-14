$(document).ready(function(){
    $(".view").click(function(){
      $(this).find(".inView").css('display', 'none')
      $(this).find(".outView").css('display', 'flex')
    });
  });
$(window).scroll(function(){
    if($(this).scrollTop()>150)
    {
        $(".navbar-expand-lg").addClass("yellow")
        $(".arrow").show("yellow")
    }
    else
    {
        $(".navbar-expand-lg").removeClass("yellow")
        $(".arrow").hide("yellow")
    }

  })
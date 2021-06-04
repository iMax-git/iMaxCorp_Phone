jQuery(document).ready(function(){
    selected = "#app-phone-button-contact";
    $(selected).attr('class',"selected");   
    const btns = document.getElementById("app-phone-selectbar").querySelectorAll("div");
    function select(id) {
        for(var i = 0,len = btns.length; i<len;i++){btns[i].setAttribute("class", "");}
        $('div#app-phone-menu-'+selected.substr(18)).hide();
        $(id).attr('class',"selected");
        selected = id;
        $('div#app-phone-menu-'+selected.substr(18)).fadeIn('fast');
    }
    $("#app-phone-button-fav").click(function(){
        select("#app-phone-button-fav");
    })
    $("#app-phone-button-recent").click(function(){
        select("#app-phone-button-recent");
    })
    $("#app-phone-button-contact").click(function(){
        select("#app-phone-button-contact");
    })
    $("#app-phone-button-keypad").click(function(){
        select("#app-phone-button-keypad");
    })
});
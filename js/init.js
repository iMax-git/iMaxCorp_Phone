
///////////////////
// Import        //
///////////////////




///////////////////
// Table         //
///////////////////
var app = [
    {
        name:"phone",
        label:"Phone",
        code:'  <div class="banner" id="app-phone-menu-contact"><div class="left">Groups</div><div class="center">All Contacts</div><div class="right"><i class="fas fa-plus"></i></div></div>\
                <div class="search"  id="app-phone-menu-contact">\
                    <input placeholder="Search" type="text" id="name" name="name" required maxlength="12"></input>\
                </div>\
                <div class="list" id="app-phone-menu-contact">\
                    <div>iMax</div>\
                    <div>Person</div>\
                    <div>Person</div>\
                    <div>Person</div>\
                    <div>Person</div>\
                    <div>Person</div>\
                    <div>Person</div>\
                    <div>Person</div>\
                    <div>Person</div>\
                    <div>Person</div>\
                    <div>Person</div>\
                    <div>Person</div>\
                    <div>Person</div>\
                </div>\
                <div class="banner" id="app-phone-menu-recent"><div class="center">Recents</div></div>\
                <div class="list" id="app-phone-menu-recent">\
                    <div>iMax</div>\
                    <div>Person</div>\
                    <div>Person</div>\
                    <div>Person</div>\
                </div>\
                <div class="selectbar" id="app-phone-selectbar">\
                    <div id="app-phone-button-fav"><i class="far fa-star" ></i><p>Favorites</p></div>\
                    <div id="app-phone-button-recent"><i class="fas fa-clock"></i><p>Recents</p></div>\
                    <div class="selected" id="app-phone-button-contact"><i class="far fa-address-book"></i><p>Contacts</p></div>\
                    <div id="app-phone-button-keypad"><i class="fas fa-th"></i><p>Keypad</p></div>\
                </div>',
    },
    {
        name:"appstore",
        label:"AppStore",
        code:'',
    },
    {
        name:"bank",
        label:"Bank",
        code:'',
    },
    {
        name:"bourse",
        label:"Bourse",
        code:'',
    },
    {
        name:"uber",
        label:"Uber",
        code:'',
    }
];

var appdown = [
    {name:"phone",label:"Phone"},
    {name:"appstore",label:"AppStore"},
    {name:"bank",label:"Bank"},
    {name:"message",label:"Message"},
];

var days = ['Dimanche','Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
var months = ['Décembre','Janvier','Février','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre']


///////////
// FNC   //
///////////


jQuery(document).ready(function(){
    for (let _ = 0; _ < app.length; _++) {new AppContainer(app[_]);}
    for (let _ = 0; _ < 4; _++) {new AppFooter(appdown[_]);}

    Time()

    
    

});
$(document).ready ( function () {
    $(document).on ("click", ".locked", function () {
        $(".lockicon").html('<i class="fas fa-lock-open"></i>');
        setTimeout("OpenPhone()",200);
        setTimeout(function() {
            $(".lockicon").html("<i class='fas fa-lock'></i>");
        },800);
    });
    $(document).on ("click", ".CLOSED", function () {
        $(".CLOSED").attr('class',"CLOSED load");
        $(".loading").fadeIn("slow");
        $(".loadingbar").attr('class',"loadingbar barwork");
        setTimeout(()=>{
            $(".CLOSED").fadeOut("slow");
            $(".locked").fadeIn("slow");
        }, (1000*5)+40);
    });

});


function OpenPhone() {
    $(".locked").fadeOut("slow");
    $(".home").fadeIn("slow");
}

function Time() {
    var today = new Date();
    if (today.getMinutes() < 10) {
        var time = today.getHours() + ":0"+today.getMinutes();
    } else {
        var time = today.getHours() + ":" + today.getMinutes();
    }
    var day = days[today.getDay()] + " " +today.getDate()+" "+ months[today.getMonth()];
    $("#hour").html(time);  
    $(".hour").html(time);
    $("#day").html(day);  
    setTimeout("Time()",100);
}

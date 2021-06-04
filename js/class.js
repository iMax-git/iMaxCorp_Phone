function SwitchScreen(show,hide) {
    $("."+hide).fadeOut("slow");
    $("."+show).fadeIn("slow");
}

///////////////////
// Class         //
///////////////////


class AppContainer {
    constructor(AppInfo){
        this.AppInfo = AppInfo;
        this.BASE = "home";
        this.container = $("#ui-container");
        this.CreateIcon();
        this.CreateApp();
    }

    CreateIcon(){   
        var dir = "assets/logoapp/"+this.AppInfo.name+".png";
        this.container.append('<div onclick="SwitchScreen('+"'"+this.AppInfo.name+"'"+','+"'"+this.BASE+"'"+');" class="app" style="background: url('+dir+') no-repeat;background-size: contain;"></div>');
    }

    CreateApp(){
        const phoneContainer = $("#phone");
        var content = '<div class="'+this.AppInfo.name+' screen" style="display:none;"> \
                            <div class="head"><div class="hour" id="hour">00:00</div><div class="state"></div></div>\
                            <div class="container-app" id="'+this.AppInfo.name+'-container">\
                                '+this.AppInfo.code+'\
                            </div>\
                        <div onclick="SwitchScreen('+"'"+this.BASE+"'"+','+"'"+this.AppInfo.name+"'"+')" class="back" id="'+this.AppInfo.name+'-back"></div>\
                        </div>';
        phoneContainer.append(content);
    }
}

class AppFooter{
    constructor(AppInfo){
        this.AppInfo = AppInfo;
        this.BASE = "home";
        this.container = $("#ui-footer");
        this.CreateIcon();
    }

    CreateIcon(){      
        var dir = "assets/logoapp/"+this.AppInfo.name+".png";
        this.container.append('<div onclick="SwitchScreen('+"'"+this.AppInfo.name+"'"+','+"'"+this.BASE+"'"+');" class="app" style="background: url('+dir+') no-repeat;background-size: contain;"></div>');
    }
}
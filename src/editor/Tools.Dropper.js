/* Wick - (c) 2016 Zach Rispoli, Luca Damasco, and Josh Rispoli */

if(!window.Tools) Tools = {};

Tools.Dropper = function (wickEditor) {

    var that = this;

    this.getCursorImage = function () {
        return 'url("resources/dropper.png") 2 14,default';
    }

    this.getToolbarIcon = function () {
        return "resources/eyedropper.png";
    }

    this.getTooltipName = function () {
        return "Color Picker";
    }

    this.setup = function () {
        wickEditor.fabric.canvas.on('mouse:down', function (e) {
            if(wickEditor.currentTool instanceof Tools.Dropper) {
                
                var image = new Image();
                image.onload = function () {
                    var mouse = wickEditor.inputHandler.mouse;
                    var color = GetColorAtCoords(image, mouse.x*window.devicePixelRatio, mouse.y*window.devicePixelRatio, "hex");
                    wickEditor.tools.paintbrush.color = color;
                    wickEditor.syncInterfaces();
                };
                image.src = wickEditor.fabric.canvas.toDataURL();
                
                wickEditor.syncInterfaces();
            }
        });
    }

}
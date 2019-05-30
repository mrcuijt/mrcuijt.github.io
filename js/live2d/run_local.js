function InitPoi(){
    loadlive2d('live2d', `${live2d_Path}model.json`,showConsoleTips("加载"));
    var url = `${live2d_Path}model.json`;
    loadModule(url).then(function(t){
        var i, e = new Uint8Array(t, 0, 3);
        i = 239 == e[0] && 187 == e[1] && 191 == e[2] ? String.fromCharCode.apply(null, new Uint8Array(t, 3)) : String.fromCharCode.apply(null, new Uint8Array(t));
        i = JSON.parse(i);
		// 定义 live2d 模块组
        window.live2d.modules = [];
		// 如果模块组中装扮数大于 2
        if(i && i.textures && i.textures.length > 2){
            var length = i.textures.length;
            for(var j = 0; j < length; j++){
                var first = i.textures.shift();
                i.textures.push(first);
                var blob = new Blob([JSON.stringify(i)], {type: "text/plain;charset=utf-8"});
                window.URL = window.URL || window.webkitURL;
                live2d.modules[j] = window.URL.createObjectURL(blob);
            }
			window.live2d.module = live2d.modules[0];
        }else{
			window.live2d.module = url;
		}
    });
}

function loadModule(t) {
    var promise = new Promise(function (resolve, reject) {
        var e = new XMLHttpRequest;
        e.open("GET", t, !0);
        e.responseType = "arraybuffer";
        e.onload = function () {
            switch (e.status) {
                case 200:
                    resolve(e.response);
                    break;
                default:
                    console.error("Failed to load (" + e.status + ") : " + t)
                    reject();
            }
        };
        e.send(null);
    });
    return promise;
}

function ChangePoi(){
    loadlive2d('live2d', window.live2d.module,showConsoleTips("更换"));
    var first = live2d.modules.shift();
    live2d.modules.push(first);
    window.live2d.module = live2d.modules[0];
}
function showConsoleTips(content){
    var style_green = "font-family:'微软雅黑';font-size:1em;background-color:#34a853;color:#fff;padding:4px;";
    var style_green_light = "font-family:'微软雅黑';font-size:1em;background-color:#42d268;color:#fff;padding:4px;";
    console.log("%cPoiLive2d%cPoi模型" + content + "完成", style_green, style_green_light);$("#live2d").animate({opacity:'1'},100);
}
setTimeout("InitPoi()",500);
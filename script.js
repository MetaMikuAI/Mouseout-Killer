// ==UserScript==
// @name         Mouseout Killer
// @author       MetaMiku
// @description  禁用某某通视频学习web对鼠标离开的eventlisteners - (修改自keepcalmandbelogical的脚本mouse events ad killer)
// @warning      本脚本请在下载后24h内删除，本脚本未进行后台检验，由此脚本造成的一切后果由使用者自负
// @version      0.1
// @match        *://*.chaoxing.com/*
// @downloadURL  https://github.com/MetaMikuAI/Mouseout-Killer/blob/main/script.js
// @license      MIT
// ==/UserScript==

(function() {
    Window.prototype.addEventListener = (function() {
        var f = Window.prototype.addEventListener;
        return function(type, handler) {
            if (type.toLowerCase() !== "mouseout") {
                f.apply(this, arguments);
            }
        };
    })();
})();

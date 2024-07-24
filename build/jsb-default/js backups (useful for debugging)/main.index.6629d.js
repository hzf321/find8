window.__require = function t(e, o, n) {
function i(c, s) {
if (!o[c]) {
if (!e[c]) {
var r = c.split("/");
r = r[r.length - 1];
if (!e[r]) {
var l = "function" == typeof __require && __require;
if (!s && l) return l(r, !0);
if (a) return a(r, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = r;
}
var u = o[c] = {
exports: {}
};
e[c][0].call(u.exports, function(t) {
return i(e[c][1][t] || t);
}, u, u.exports, t, e, o, n);
}
return o[c].exports;
}
for (var a = "function" == typeof __require && __require, c = 0; c < n.length; c++) i(n[c]);
return i;
}({
OrangeDialog: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "bdbf3RLZZFMa4QNxIkpdf+0", "OrangeDialog");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), a = this && this.__decorate || function(t, e, o, n) {
var i, a = arguments.length, c = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, o, c) : i(e, o)) || c);
return a > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("../tool/amuseControl"), s = t("../tool/amuseGameData"), r = cc._decorator, l = r.ccclass, u = r.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.avatarIcon = null;
e.contentBox = null;
e.editBox = null;
e.callback = null;
e.clickid = 0;
return e;
}
e.prototype.start = function() {
var t = this;
this.editBox.string = s.agData.userData.gameName;
c.amuseControl.amuseResUtil.loadSprite("head/haed" + s.agData.userData.avatarId, this.avatarIcon);
this.clickid = s.agData.userData.avatarId;
for (var e = function(e) {
var n = o.contentBox.children[e], i = cc.find("mask/icon", n).getComponent(cc.Sprite);
c.amuseControl.amuseResUtil.loadSprite("head/haed" + (e + 1), i.getComponent(cc.Sprite));
n.on(cc.Node.EventType.TOUCH_END, function() {
t.changeIcon(e + 1);
}, o);
}, o = this, n = 0; n < this.contentBox.children.length; n++) e(n);
};
e.prototype.initData = function(t) {
this.callback = t.callback;
};
e.prototype.onClick_agreen = function() {
s.agData.userData.gameName = this.editBox.string;
c.amuseControl.amuseSoundTool.commonBtnClick();
s.agData.userData.avatarId = this.clickid;
s.agData.storageData();
this.callback && this.callback();
this.node.destroy();
};
e.prototype.onClick_close = function() {
c.amuseControl.amuseSoundTool.commonBtnClick();
this.node.destroy();
};
e.prototype.onClick_cannel = function() {
c.amuseControl.amuseSoundTool.commonBtnClick();
this.node.destroy();
};
e.prototype.changeIcon = function(t) {
this.clickid = t;
c.amuseControl.amuseResUtil.loadSprite("head/haed" + t, this.avatarIcon);
};
a([ u(cc.Sprite) ], e.prototype, "avatarIcon", void 0);
a([ u(cc.Node) ], e.prototype, "contentBox", void 0);
a([ u(cc.EditBox) ], e.prototype, "editBox", void 0);
return a([ l ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../tool/amuseControl": "amuseControl",
"../tool/amuseGameData": "amuseGameData"
} ],
PlanetDialog: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "87fb2mrp1VFOI1j4qX/zAH6", "PlanetDialog");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), a = this && this.__decorate || function(t, e, o, n) {
var i, a = arguments.length, c = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, o, c) : i(e, o)) || c);
return a > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("../tool/amuseControl"), s = cc._decorator, r = s.ccclass, l = (s.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.callback = null;
return e;
}
e.prototype.start = function() {};
e.prototype.initData = function(t) {
this.callback = t.callback;
};
e.prototype.onClick_cancel = function() {
c.amuseControl.amuseSoundTool.commonBtnClick();
this.node.destroy();
};
e.prototype.onClick_closeBtn = function() {
c.amuseControl.amuseSoundTool.commonBtnClick();
this.node.destroy();
};
return a([ r ], e);
}(cc.Component));
o.default = l;
cc._RF.pop();
}, {
"../tool/amuseControl": "amuseControl"
} ],
PurpleDialog: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5a09auqmsBG27JJ2bvnIpkk", "PurpleDialog");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), a = this && this.__decorate || function(t, e, o, n) {
var i, a = arguments.length, c = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, o, c) : i(e, o)) || c);
return a > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("../tool/amuseControl"), s = t("../tool/amuseGameData"), r = cc._decorator, l = r.ccclass, u = r.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.bg = null;
e.playerIcon = null;
e.userIcon = null;
e.winNode = null;
e.failNode = null;
e.img = null;
e.callback = null;
return e;
}
e.prototype.initData = function(t) {
this.img = t.img;
this.playerIcon.spriteFrame = this.img;
this.callback = t.callback;
if (t.state) {
this.winNode.active = !0;
this.failNode.active = !1;
} else {
this.winNode.active = !1;
this.failNode.active = !0;
}
};
e.prototype.onLoad = function() {
c.amuseControl.amuseResUtil.loadSprite("head/haed" + s.agData.userData.avatarId, this.userIcon);
};
e.prototype.start = function() {
c.amuseControl.adapterBg(this.bg);
};
e.prototype.onClick_continueBtn = function() {
c.amuseControl.amuseSoundTool.commonBtnClick();
s.agData.userData.isHall = !0;
s.agData.storageData();
cc.director.loadScene(c.strong.flower);
this.node.destroy();
};
e.prototype.onClick_close = function() {
c.amuseControl.amuseSoundTool.commonBtnClick();
this.node.destroy();
};
a([ u(cc.Node) ], e.prototype, "bg", void 0);
a([ u(cc.Sprite) ], e.prototype, "playerIcon", void 0);
a([ u(cc.Sprite) ], e.prototype, "userIcon", void 0);
a([ u(cc.Node) ], e.prototype, "winNode", void 0);
a([ u(cc.Node) ], e.prototype, "failNode", void 0);
return a([ l ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../tool/amuseControl": "amuseControl",
"../tool/amuseGameData": "amuseGameData"
} ],
RocketDiaolg: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "9335d26T05DjJw8MacCCseS", "RocketDiaolg");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), a = this && this.__decorate || function(t, e, o, n) {
var i, a = arguments.length, c = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, o, c) : i(e, o)) || c);
return a > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("../tool/amuseControl"), s = t("../tool/amuseGameData"), r = cc._decorator, l = r.ccclass, u = (r.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.callback = null;
return e;
}
e.prototype.start = function() {
s.agData.showBanner();
};
e.prototype.initData = function(t) {
this.callback = t.callback;
};
e.prototype.onClick_continue_btn = function() {
c.amuseControl.amuseSoundTool.commonBtnClick();
this.callback && this.callback();
this.node.destroy();
s.agData.closeBanner();
};
e.prototype.onClick_backHall = function() {
c.amuseControl.amuseSoundTool.commonBtnClick();
this.node.destroy();
s.agData.closeBanner();
s.agData.userData.isHall = !0;
s.agData.storageData();
cc.director.loadScene(c.strong.flower);
};
return a([ l ], e);
}(cc.Component));
o.default = u;
cc._RF.pop();
}, {
"../tool/amuseControl": "amuseControl",
"../tool/amuseGameData": "amuseGameData"
} ],
SpiritDialog: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "373fe8INcZH8KIbG9PDCZWr", "SpiritDialog");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), a = this && this.__decorate || function(t, e, o, n) {
var i, a = arguments.length, c = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, o, c) : i(e, o)) || c);
return a > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("../tool/amuseControl"), s = t("../tool/amuseGameData"), r = cc._decorator, l = r.ccclass, u = r.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.title = null;
e.pause_sprite = null;
e.setting_sprite = null;
e.soundBox = null;
e.musicBox = null;
e.zhengdongBox = null;
e.setting_pausebtn = null;
e.setting_ok = null;
e.callback = null;
return e;
}
e.prototype.start = function() {
this.init();
s.agData.showBanner();
};
e.prototype.initData = function(t) {
this.callback = t.callback;
if (t.isGame) {
this.title.spriteFrame = this.pause_sprite;
this.setting_ok.active = !0;
this.setting_pausebtn.active = !1;
} else {
this.title.spriteFrame = this.setting_sprite;
this.setting_ok.active = !0;
this.setting_pausebtn.active = !1;
}
};
e.prototype.init = function() {
if (c.amuseControl.amuseSoundTool.musicSwitch) {
this.musicBox.getChildByName("setting_on").active = !0;
this.musicBox.getChildByName("setting_off").active = !1;
} else {
this.musicBox.getChildByName("setting_on").active = !1;
this.musicBox.getChildByName("setting_off").active = !0;
}
if (c.amuseControl.amuseSoundTool.effectSwitch) {
this.soundBox.getChildByName("setting_on").active = !0;
this.soundBox.getChildByName("setting_off").active = !1;
} else {
this.soundBox.getChildByName("setting_on").active = !1;
this.soundBox.getChildByName("setting_off").active = !0;
}
if (c.amuseControl.amuseSoundTool.shockSwitch) {
this.zhengdongBox.getChildByName("setting_on").active = !0;
this.zhengdongBox.getChildByName("setting_off").active = !1;
} else {
this.zhengdongBox.getChildByName("setting_on").active = !1;
this.zhengdongBox.getChildByName("setting_off").active = !0;
}
};
e.prototype.onClick_musicbtn = function() {
c.amuseControl.amuseSoundTool.commonBtnClick();
c.amuseControl.amuseSoundTool.switchMusic();
if (c.amuseControl.amuseSoundTool.musicSwitch) {
this.musicBox.getChildByName("setting_on").active = !0;
this.musicBox.getChildByName("setting_off").active = !1;
} else {
this.musicBox.getChildByName("setting_on").active = !1;
this.musicBox.getChildByName("setting_off").active = !0;
}
};
e.prototype.onClick_soundbtn = function() {
c.amuseControl.amuseSoundTool.commonBtnClick();
c.amuseControl.amuseSoundTool.switchEffect();
if (c.amuseControl.amuseSoundTool.effectSwitch) {
this.soundBox.getChildByName("setting_on").active = !0;
this.soundBox.getChildByName("setting_off").active = !1;
} else {
this.soundBox.getChildByName("setting_on").active = !1;
this.soundBox.getChildByName("setting_off").active = !0;
}
};
e.prototype.onClick_zhengdongbtn = function() {
c.amuseControl.amuseSoundTool.commonBtnClick();
c.amuseControl.amuseSoundTool.switchShock();
if (c.amuseControl.amuseSoundTool.shockSwitch) {
this.zhengdongBox.getChildByName("setting_on").active = !0;
this.zhengdongBox.getChildByName("setting_off").active = !1;
} else {
this.zhengdongBox.getChildByName("setting_on").active = !1;
this.zhengdongBox.getChildByName("setting_off").active = !0;
}
};
e.prototype.onClick_continue_btn = function() {
c.amuseControl.amuseSoundTool.commonBtnClick();
this.node.destroy();
s.agData.closeBanner();
this.callback && this.callback();
};
e.prototype.onClick_ok_btn = function() {
c.amuseControl.amuseSoundTool.commonBtnClick();
this.callback && this.callback();
this.node.destroy();
s.agData.closeBanner();
};
e.prototype.onClick_PrivacyPolicy_btn = function() {
c.amuseControl.amuseSoundTool.commonBtnClick();
cc.sys.openURL(s.agData.privacyPolicyUrl);
};
e.prototype.onClick_Termsofservicebtn = function() {
cc.sys.openURL(s.agData.termsofServiceUrl);
c.amuseControl.amuseSoundTool.commonBtnClick();
};
a([ u(cc.Sprite) ], e.prototype, "title", void 0);
a([ u(cc.SpriteFrame) ], e.prototype, "pause_sprite", void 0);
a([ u(cc.SpriteFrame) ], e.prototype, "setting_sprite", void 0);
a([ u(cc.Node) ], e.prototype, "soundBox", void 0);
a([ u(cc.Node) ], e.prototype, "musicBox", void 0);
a([ u(cc.Node) ], e.prototype, "zhengdongBox", void 0);
a([ u(cc.Node) ], e.prototype, "setting_pausebtn", void 0);
a([ u(cc.Node) ], e.prototype, "setting_ok", void 0);
return a([ l ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../tool/amuseControl": "amuseControl",
"../tool/amuseGameData": "amuseGameData"
} ],
SummerDialog: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "98460XFFs1JCI9f0VmFuXBW", "SummerDialog");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), a = this && this.__decorate || function(t, e, o, n) {
var i, a = arguments.length, c = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, o, c) : i(e, o)) || c);
return a > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("../tool/amuseControl"), s = t("../tool/amuseGameData"), r = cc._decorator, l = r.ccclass, u = (r.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.ADcallback = null;
e.restartCallBack = null;
return e;
}
e.prototype.start = function() {
s.agData.showBanner();
};
e.prototype.initData = function(t) {
this.ADcallback = t.ADcallback;
this.restartCallBack = t.restartCallBack;
};
e.prototype.onClick_AD_btn = function() {
var t = this;
c.amuseControl.amuseSoundTool.commonBtnClick();
s.agData.showVideo(function() {
t.scheduleOnce(function() {
t.ADcallback && t.ADcallback();
t.node.destroy();
s.agData.closeBanner();
});
});
};
e.prototype.onClick_restart = function() {
c.amuseControl.amuseSoundTool.commonBtnClick();
this.restartCallBack && this.restartCallBack();
this.node.destroy();
s.agData.closeBanner();
};
return a([ l ], e);
}(cc.Component));
o.default = u;
cc._RF.pop();
}, {
"../tool/amuseControl": "amuseControl",
"../tool/amuseGameData": "amuseGameData"
} ],
YellowDialog: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "288ffaP2ZJMYZaoB90GcwU0", "YellowDialog");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), a = this && this.__decorate || function(t, e, o, n) {
var i, a = arguments.length, c = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, o, c) : i(e, o)) || c);
return a > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("../tool/amuseControl"), s = t("../tool/amuseGameData"), r = cc._decorator, l = r.ccclass, u = (r.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.callback = null;
return e;
}
e.prototype.start = function() {
s.agData.showBanner();
};
e.prototype.initData = function(t) {
this.callback = t.callback;
};
e.prototype.onClick_Agreen = function() {
c.amuseControl.amuseSoundTool.commonBtnClick();
this.callback && this.callback();
this.node.destroy();
s.agData.closeBanner();
};
e.prototype.onClick_PrivacyPolicy_btn = function() {
c.amuseControl.amuseSoundTool.commonBtnClick();
cc.sys.openURL(s.agData.privacyPolicyUrl);
};
e.prototype.onClick_Termsofservicebtn = function() {
c.amuseControl.amuseSoundTool.commonBtnClick();
cc.sys.openURL(s.agData.termsofServiceUrl);
};
return a([ l ], e);
}(cc.Component));
o.default = u;
cc._RF.pop();
}, {
"../tool/amuseControl": "amuseControl",
"../tool/amuseGameData": "amuseGameData"
} ],
amuseControl: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "7fe7eKmHWtOBpfO6ERHigxH", "amuseControl");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.circle = o.strong = o.amuseControl = void 0;
var n = t("./amuseSoundTool"), i = t("./amuseResUtil"), a = function() {
function t() {
this.sceneNode = null;
this.imgId = 0;
this.amuseSoundTool = new n.amuseSoundTool();
this.eventTarget = new cc.EventTarget();
this.amuseResUtil = i.amuseResUtil;
this.designWidth = 1280;
this.designHeight = 720;
this.isIpadFix = !1;
this.isIphoneXSMaxFix = !1;
this.iphoneXSMaxY = 0;
this.isLiuhaiFix = !1;
this.liuhaiY = 0;
}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.setsceneNode = function(t) {
this.sceneNode = t;
};
t.prototype.getsceneNode = function() {
return this.sceneNode;
};
t.prototype.timeChange = function(t) {
t = +t;
var e = Math.floor(t / 60), o = Math.floor(t % 60);
return (e < 10 ? "0" + e : e.toString()) + ":" + (o < 10 ? "0" + o : o.toString());
};
t.prototype.getRandomInt = function(t, e) {
return Math.floor(Math.random() * (e - t + .999999999)) + t;
};
t.prototype.adapterBg = function(t) {
var e = cc.winSize.width / t.width, o = cc.winSize.height / t.height;
t.scale = Math.max(e, o);
};
t.prototype.changePos = function(t, e) {
if (!cc.isValid(t) || !cc.isValid(e)) return cc.v3(0, 0);
var o = t.parent.convertToWorldSpaceAR(t.position);
return e.parent.convertToNodeSpaceAR(o);
};
t.prototype.delayCallBack = function(t, e, o) {
var n = cc.director.getScene().getChildByName("Canvas");
cc.isValid(o) && (n = o);
cc.tween(n).delay(t).call(function() {
e && e();
}).start();
};
t.prototype.playSp = function(t, e, o, n) {
var i = this;
void 0 === o && (o = !1);
void 0 === n && (n = null);
t.setCompleteListener(function() {
n && i.delayCallBack(.02, function() {
n();
}, t.node);
t.setCompleteListener(null);
});
t.setAnimation(0, e, o);
};
t.prototype.stopSp = function(t) {
t.setCompleteListener(null);
};
t.prototype.addSequenceSp = function(t, e, o, n) {
void 0 === o && (o = !1);
n ? t.addAnimation(0, e, o, n) : t.addAnimation(0, e, o);
};
t._instance = null;
return t;
}();
o.amuseControl = a.getInstance();
o.strong = {
sunset: "sunset",
flower: "flower",
bright: "bright"
};
o.circle = {
PurpleDialog: "PurpleDialog",
SummerDialog: "SummerDialog",
RocketDiaolg: "RocketDiaolg",
SpiritDialog: "SpiritDialog",
YellowDialog: "YellowDialog",
OrangeDialog: "OrangeDialog",
PlanetDialog: "PlanetDialog"
};
cc._RF.pop();
}, {
"./amuseResUtil": "amuseResUtil",
"./amuseSoundTool": "amuseSoundTool"
} ],
amuseGameData: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "57cabiblbxOB7KtkV6MiZG/", "amuseGameData");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.sound = o.storage = o.agData = void 0;
var n, i = t("./amuseStorage"), a = function() {
function t() {
this.privacyPolicyUrl = "https://sites.google.com/view/difference-discoverer-privacy-/halaman-muka";
this.termsofServiceUrl = "https://sites.google.com/view/difference-discoverer-terms-of/halaman-muka";
this.levelAll = 30;
this.userData = {
isClause: !1,
tishiNum: 1,
level: 1,
isHall: !1,
isGudie: !1,
finishLevel5: !1,
gameName: "StrongBanana",
avatarId: 1
};
cc.game.on(cc.game.EVENT_HIDE, function() {
this.storageData();
}, this);
}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.storageData = function() {
i.amuseStorage.setStorageJSON(n.gamedata, this.userData);
};
t.prototype.setVideoFailCb = function(t) {
window.onClosefailCb = null;
window.onClosefailCb = t;
};
t.prototype.showVideo = function(t) {
t();
};
t.prototype.showBanner = function() {
cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showbanner", "()V");
};
t.prototype.closeBanner = function() {
cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hidebanner", "()V");
};
t.prototype.openUrl = function() {
cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "openUrl", "()V");
};
t.prototype.setGamestop = function(t) {
window.gamestop = t;
};
t.prototype.setGamerecovery = function(t) {
window.gamerecovery = t;
};
t._instance = null;
return t;
}();
o.agData = a.getInstance();
(function(t) {
t.gamedata = "gamedata";
})(n = o.storage || (o.storage = {}));
(function(t) {
t.bgm = "bgm";
t.click = "click";
t.correct = "correct";
t.err = "err";
t.fail = "fail";
t.win = "win";
})(o.sound || (o.sound = {}));
window.onCloseFinishCb = function() {};
window.onCloseVdieoFinishCb = function() {
window.onCloseFinishCb();
};
window.onCloseVdieofailCb = function() {
window.onClosefailCb();
};
window.onClosefailCb = function() {};
window.gamestop = function() {};
window.gamerecovery = function() {};
cc._RF.pop();
}, {
"./amuseStorage": "amuseStorage"
} ],
amuseResBind: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b835cS/qxNLbakyyg5HTNea", "amuseResBind");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), a = this && this.__decorate || function(t, e, o, n) {
var i, a = arguments.length, c = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, o, c) : i(e, o)) || c);
return a > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
cc.Component.prototype.addAutoReleaseAsset = function(t) {
var e = this.node.getComponent(s);
cc.isValid(e) || (e = this.node.addComponent(s));
e.addAutoReleaseAsset(t);
};
cc.Component.prototype.addAutoReleaseAssets = function(t) {
var e = this.node.getComponent(s);
cc.isValid(e) || (e = this.node.addComponent(s));
for (var o = 0, n = t; o < n.length; o++) {
var i = n[o];
e.addAutoReleaseAsset(i);
}
};
var c = cc._decorator.ccclass, s = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.dynamicsAssets = [];
return e;
}
e.prototype.addAutoReleaseAsset = function(t) {
if (cc.isValid(t)) {
t.addRef();
this.dynamicsAssets.push(t);
}
};
e.prototype.onDestroy = function() {
for (var t = 0; t < this.dynamicsAssets.length; t++) cc.isValid(this.dynamicsAssets[t]) && this.dynamicsAssets[t].decRef();
this.dynamicsAssets = [];
};
return a([ c ], e);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {} ],
amuseResUtil: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d8022bhaGtI34HO+9B4gPxl", "amuseResUtil");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.amuseResUtil = void 0;
var n = t("./amuseResBind"), i = t("./amuseControl"), a = function() {
function t() {}
t.bindResAsset = function(t, e) {
var o = t.getComponent(n.default);
cc.isValid(o) || (o = t.addComponent(n.default));
o.addAutoReleaseAsset(e);
};
t.releaseRes = function(t) {
cc.isValid(t) && t.refCount <= 0 && cc.assetManager.releaseAsset(t);
};
t.loadAsset = function(t, e, o) {
cc.resources.load(t, e, o);
};
t.preloadAsset = function(t, e) {
cc.resources.preload(t, e);
};
t.loadSprite = function(t, e, o) {
var n = this;
e.newUrl = t;
e.spriteFrame = null;
cc.resources.load(t, cc.SpriteFrame, function(i, a) {
if (i) o && n.loadSprite(o, e); else if (cc.isValid(e) && e.newUrl == t) {
e.addAutoReleaseAsset(a);
e.spriteFrame = a;
} else n.releaseRes(a);
});
};
t.showDialog = function(t, e, o) {
cc.resources.load("prefeb/" + t, cc.Prefab, function(n, a) {
if (!n) {
var c = cc.instantiate(a);
i.amuseControl.amuseResUtil.bindResAsset(c, a);
var s = i.amuseControl.getsceneNode();
if (c && s) {
e && c.getComponent(t).initData && c.getComponent(t).initData(e);
s.addChild(c);
var r = c.getChildByName("content");
r.scale = 0;
cc.Tween.stopAllByTarget(r);
cc.tween(r).to(.32, {
scale: 1
}, {
easing: "backOut"
}).start();
}
o && o();
}
});
};
t.showToast = function(t) {
cc.resources.load("prefeb/toast", cc.Prefab, function(e, o) {
if (!e) {
var n = cc.instantiate(o);
i.amuseControl.amuseResUtil.bindResAsset(n, o);
var a = i.amuseControl.getsceneNode();
if (n && a) {
n.active = !0;
a.addChild(n);
n.getChildByName("label").getComponent(cc.Label).string = t;
cc.Tween.stopAllByTarget(n);
n.opacity = 255;
cc.tween(n).to(.15, {
scale: 1.2
}).to(.15, {
scale: 1
}).delay(.5).to(.5, {
opacity: 0
}).call(function() {
n.destroy();
}).start();
}
}
});
};
return t;
}();
o.amuseResUtil = a;
cc._RF.pop();
}, {
"./amuseControl": "amuseControl",
"./amuseResBind": "amuseResBind"
} ],
amuseScroll: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6742eFjCRhCdpnyZSMeH66r", "amuseScroll");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), a = this && this.__decorate || function(t, e, o, n) {
var i, a = arguments.length, c = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, o, c) : i(e, o)) || c);
return a > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, r = (c.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
if (this.node.getComponent(cc.ScrollView)) {
this.node.on("scrolling", this._event_update_opacity, this);
this.node.getComponent(cc.ScrollView).content.on(cc.Node.EventType.CHILD_REMOVED, this._event_update_opacity, this);
this.node.getComponent(cc.ScrollView).content.on(cc.Node.EventType.CHILD_REORDER, this._event_update_opacity, this);
} else cc.error("不存在ScrollView组件！");
};
e.prototype._get_bounding_box_to_world = function(t) {
var e = t._contentSize.width, o = t._contentSize.height, n = cc.rect(-t._anchorPoint.x * e, -t._anchorPoint.y * o, e, o);
t._calculWorldMatrix();
n.transformMat4(n, t._worldMatrix);
return n;
};
e.prototype._check_collision = function(t) {
var e = this._get_bounding_box_to_world(this.node.getComponent(cc.ScrollView).content.parent), o = this._get_bounding_box_to_world(t);
e.width += .5 * e.width;
e.height += .5 * e.height;
e.x -= .25 * e.width;
e.y -= .25 * e.height;
return e.intersects(o);
};
e.prototype._event_update_opacity = function() {
var t = this;
this.node.getComponent(cc.ScrollView).content.children.forEach(function(e) {
var o = t._get_bounding_box_to_world(t.node.getComponent(cc.ScrollView).content.parent);
o.width += .5 * o.width;
o.height += .5 * o.height;
o.x -= .25 * o.width;
o.y -= .25 * o.height;
e.opacity = t._check_collision(e) ? 255 : 0;
});
};
return a([ s ], e);
}(cc.Component));
o.default = r;
cc._RF.pop();
}, {} ],
amuseSoundTool: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "090fcgAZWxOM6pwykHoyPvy", "amuseSoundTool");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.amuseSoundTool = void 0;
var n = t("./amuseStorage"), i = function() {
function t() {
this.btnClickEffect = null;
this.bgmMusic = null;
this.currMusic = null;
this.musicSwitch = n.amuseStorage.getBoolByKey("kk_setup_music", !0);
this.effectSwitch = n.amuseStorage.getBoolByKey("kk_setup_effect", !0);
this.shockSwitch = n.amuseStorage.getBoolByKey("kk_setup_shock", !0);
}
t.prototype.initBtnClickEffect = function() {
var t = this;
this.btnClickEffect || cc.resources.load("sound/click", cc.AudioClip, function(e, o) {
if (!e && cc.isValid(t)) {
t.btnClickEffect = o;
o.addRef();
}
});
};
t.prototype.initbgmMusic = function() {
var t = this;
this.bgmMusic || cc.resources.load("sound/bgm", cc.AudioClip, function(e, o) {
if (!e && cc.isValid(t)) {
t.bgmMusic = o;
t.commonbgmMusic();
o.addRef();
}
});
};
t.prototype.switchMusic = function() {
this.musicSwitch = !this.musicSwitch;
n.amuseStorage.setBoolByKey("kk_setup_music", this.musicSwitch);
this.musicSwitch ? this.currMusic && this.playMusic(this.currMusic) : this.stopMusic();
};
t.prototype.switchEffect = function() {
this.effectSwitch = !this.effectSwitch;
n.amuseStorage.setBoolByKey("kk_setup_effect", this.effectSwitch);
this.effectSwitch || cc.audioEngine.stopAllEffects();
};
t.prototype.switchShock = function() {
this.shockSwitch = !this.shockSwitch;
n.amuseStorage.setBoolByKey("kk_setup_shock", this.shockSwitch);
};
t.prototype.playMusic = function(t, e) {
void 0 === e && (e = !0);
if (t) {
this.currMusic = t;
this.musicSwitch && cc.audioEngine.playMusic(t, e);
}
};
t.prototype.playEffect = function(t, e, o) {
void 0 === e && (e = !1);
void 0 === o && (o = null);
if (t) {
if (this.effectSwitch) {
var n = cc.audioEngine.play(t, e, 1);
o && cc.audioEngine.setFinishCallback(n, o);
return n;
}
return null;
}
};
t.prototype.playEffectWithPath = function(t, e) {
void 0 === e && (e = !1);
t && this.effectSwitch && cc.resources.load(t, cc.AudioClip, function(o, n) {
o ? cc.log("加载音效资源失败" + t) : cc.audioEngine.play(n, e, 1);
});
};
t.prototype.stopMusic = function() {
cc.audioEngine.stopMusic();
};
t.prototype.stopAll = function() {
cc.audioEngine.stopAll();
};
t.prototype.pauseAll = function() {
this.musicSwitch && cc.audioEngine.pauseAll();
};
t.prototype.resumeAll = function() {
this.musicSwitch && cc.audioEngine.resumeAll();
};
t.prototype.stopEffect = function(t) {
cc.audioEngine.stopEffect(t);
};
t.prototype.pause = function(t) {
cc.audioEngine.pause(t);
};
t.prototype.resume = function(t) {
this.musicSwitch && cc.audioEngine.resume(t);
};
t.prototype.commonBtnClick = function() {
this.playEffect(this.btnClickEffect, !1);
};
t.prototype.commonbgmMusic = function() {
this.playMusic(this.bgmMusic);
};
return t;
}();
o.amuseSoundTool = i;
cc._RF.pop();
}, {
"./amuseStorage": "amuseStorage"
} ],
amuseStorage: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f021e0ydDZC+qJMjJKjbysY", "amuseStorage");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.amuseStorage = void 0;
var n = function() {
function t() {}
t.setStringByKey = function(t, e) {
cc.sys.localStorage.setItem(t, e);
};
t.getStringByKey = function(t, e) {
e = e || "";
return cc.sys.localStorage.getItem(t) || e;
};
t.setBoolByKey = function(t, e) {
this.setStringByKey(t, e ? "1" : "0");
};
t.getBoolByKey = function(t, e) {
e = e || !1;
var o = cc.sys.localStorage.getItem(t);
return o ? "1" == o : e;
};
t.setIntegerByKey = function(t, e) {
this.setStringByKey(t, e.toString());
};
t.getIntegerByKey = function(t, e) {
var o = cc.sys.localStorage.getItem(t);
return o ? parseInt(o) : e;
};
t.getStorageJSON = function(t) {
var e = cc.sys.localStorage.getItem(t);
return e instanceof Array && e.length < 1 ? null : e ? JSON.parse(e) : null;
};
t.setStorageJSON = function(t, e) {
cc.sys.localStorage.setItem(t, JSON.stringify(e));
};
t.removeByKey = function(t) {
cc.sys.localStorage.removeItem(t);
};
return t;
}();
o.amuseStorage = n;
cc._RF.pop();
}, {} ],
bright: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3f30aa1wRVDbLr8Lgi0ltz2", "bright");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), a = this && this.__decorate || function(t, e, o, n) {
var i, a = arguments.length, c = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, o, c) : i(e, o)) || c);
return a > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./tool/amuseStorage"), s = t("./tool/amuseControl"), r = t("./tool/amuseGameData"), l = cc._decorator, u = l.ccclass, p = l.property, d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.loading_bg = null;
e.loading_bg2 = null;
e.loadingBox = null;
e.gotoHallBox = null;
e.loading_play = null;
e.load_play = null;
e.resNum = 6;
e.nowNum = 0;
return e;
}
e.prototype.start = function() {
var t = this;
if (cc.sys.platform === cc.sys.IPAD) {
this.getComponent(cc.Canvas).fitHeight = !1;
this.getComponent(cc.Canvas).fitWidth = !0;
}
s.amuseControl.adapterBg(this.loading_bg);
s.amuseControl.adapterBg(this.loading_bg2);
s.amuseControl.amuseSoundTool.initBtnClickEffect();
s.amuseControl.amuseSoundTool.initbgmMusic();
var e = c.amuseStorage.getStorageJSON(r.storage.gamedata);
e && (r.agData.userData = e);
console.log(r.agData.userData, " agData.userData");
s.amuseControl.setsceneNode(this.node);
if (r.agData.userData.isClause) {
this.gotoHallBox.active = !0;
this.loadingBox.active = !1;
cc.tween(this.loading_play).to(.5, {
scale: 1.1
}).to(.5, {
scale: 1
}).union().repeatForever().start();
} else {
this.gotoHallBox.active = !1;
this.loadingBox.active = !1;
s.amuseControl.amuseResUtil.showDialog(s.circle.YellowDialog, {
callback: function() {
r.agData.userData.isClause = !0;
t.gotoHallBox.active = !0;
t.loadingBox.active = !1;
r.agData.storageData();
cc.tween(t.loading_play).to(.5, {
scale: 1.1
}).to(.5, {
scale: 1
}).union().repeatForever().start();
}
});
}
r.agData.setVideoFailCb(function() {
cc.resources.load("prefeb/toast", cc.Prefab, function(t, e) {
if (!t) {
var o = cc.instantiate(e);
s.amuseControl.amuseResUtil.bindResAsset(o, e);
var n = s.amuseControl.getsceneNode();
if (o && n) {
o.active = !0;
n.addChild(o);
o.getChildByName("label").getComponent(cc.Label).string = "No ads at the moment";
cc.Tween.stopAllByTarget(o);
o.opacity = 255;
cc.tween(o).to(.15, {
scale: 1.2
}).to(.15, {
scale: 1
}).delay(.5).to(.5, {
opacity: 0
}).call(function() {
o.destroy();
}).start();
}
}
});
});
};
e.prototype.onClick_gotoPlay = function() {
var t = this;
this.gotoHallBox.active = !1;
this.loadingBox.active = !0;
s.amuseControl.amuseSoundTool.commonBtnClick();
cc.tween(this.load_play).to(2, {
angle: -360
}).call(function() {
t.load_play.angle = 0;
}).union().repeatForever().start();
cc.loader.loadResDir("prefeb", function(e) {
if (e) cc.error(e); else {
console.log("prefeb assets in  have been loaded.");
t.progressBarEvent();
}
});
cc.loader.loadResDir("sunImg", function(e) {
if (e) cc.error(e); else {
console.log("sunImg assets in  have been loaded.");
t.progressBarEvent();
}
});
cc.loader.loadResDir("fightImg", function(e) {
if (e) cc.error(e); else {
console.log("fightImg assets in  have been loaded.");
t.progressBarEvent();
}
});
cc.loader.loadResDir("meinvImg", function(e, o) {
if (e) cc.error(e); else {
r.agData.levelAll = o.length;
console.log("meinvImg assets in  have been loaded.");
t.progressBarEvent();
}
});
cc.director.preloadScene(s.strong.sunset, function() {
cc.log("game scene preloaded");
t.progressBarEvent();
});
cc.director.preloadScene(s.strong.flower, function() {
cc.log("hall scene preloaded");
t.progressBarEvent();
});
};
e.prototype.progressBarEvent = function() {
this.nowNum++;
this.nowNum == this.resNum && this.scheduleOnce(function() {
if (r.agData.userData.isHall) cc.director.loadScene(s.strong.flower); else {
s.amuseControl.imgId = r.agData.userData.level;
cc.director.loadScene(s.strong.sunset);
}
}, .05);
};
e.prototype.showShiPing = function() {
console.log("android---------------showShiPing------------------");
r.agData.showVideo(function() {
console.log("zzzzzzzzzzzzzzzzzzzzwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
});
};
e.prototype.showbanner = function() {
console.log("android---------------showbanner------------------");
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showbanner", "()V");
};
e.prototype.hidebanner = function() {
console.log("android---------------hidebanner------------------");
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hidebanner", "()V");
};
a([ p(cc.Node) ], e.prototype, "loading_bg", void 0);
a([ p(cc.Node) ], e.prototype, "loading_bg2", void 0);
a([ p(cc.Node) ], e.prototype, "loadingBox", void 0);
a([ p(cc.Node) ], e.prototype, "gotoHallBox", void 0);
a([ p(cc.Node) ], e.prototype, "loading_play", void 0);
a([ p(cc.Node) ], e.prototype, "load_play", void 0);
return a([ u ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"./tool/amuseControl": "amuseControl",
"./tool/amuseGameData": "amuseGameData",
"./tool/amuseStorage": "amuseStorage"
} ],
flower: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "014741UGutBway3J/ZL6r3K", "flower");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), a = this && this.__decorate || function(t, e, o, n) {
var i, a = arguments.length, c = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, o, c) : i(e, o)) || c);
return a > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./tool/amuseControl"), s = t("./tool/amuseGameData"), r = cc._decorator, l = r.ccclass, u = r.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.bg = null;
e.maskBox = null;
e.preBtn = null;
e.nextBtn = null;
e.levelNum = null;
e.username = null;
e.icon = null;
e.nowIndex = 0;
e.speedNum = .7;
return e;
}
e.prototype.start = function() {
this.nowIndex = s.agData.userData.level;
if (cc.sys.platform === cc.sys.IPAD) {
this.getComponent(cc.Canvas).fitHeight = !1;
this.getComponent(cc.Canvas).fitWidth = !0;
}
this.updataInfo();
c.amuseControl.setsceneNode(this.node);
c.amuseControl.adapterBg(this.bg);
var t = this.maskBox.getChildByName("fine_2");
t.getChildByName("mask").active = !1;
this.levelNum.string = "" + this.nowIndex;
c.amuseControl.amuseResUtil.loadSprite("sunImg/sun_" + this.nowIndex, t.getChildByName("img").getComponent(cc.Sprite));
if (this.nowIndex >= 30) {
this.preBtn.active = !0;
this.nextBtn.active = !1;
} else if (this.nowIndex <= 1) {
this.preBtn.active = !1;
this.nextBtn.active = !0;
} else {
this.preBtn.active = !0;
this.nextBtn.active = !0;
}
this.preBtn.on(cc.Node.EventType.TOUCH_END, this.onClick_preBtn, this);
this.nextBtn.on(cc.Node.EventType.TOUCH_END, this.onClick_nextBtn, this);
for (var e = 0; e < this.maskBox.children.length; e++) this.maskBox.children[e].on(cc.Node.EventType.TOUCH_END, this.onClick_img, this);
};
e.prototype.updataInfo = function() {
this.username.string = s.agData.userData.gameName;
c.amuseControl.amuseResUtil.loadSprite("head/haed" + s.agData.userData.avatarId, this.icon);
};
e.prototype.onClick_setting = function() {
c.amuseControl.amuseSoundTool.commonBtnClick();
c.amuseControl.amuseResUtil.showDialog(c.circle.SpiritDialog, {
isGame: !1
});
};
e.prototype.showToast = function(t) {
c.amuseControl.amuseResUtil.showToast(t);
};
e.prototype.onClick_preBtn = function() {
var t = this;
c.amuseControl.amuseSoundTool.commonBtnClick();
this.preBtn.off(cc.Node.EventType.TOUCH_END, this.onClick_preBtn, this);
this.nextBtn.off(cc.Node.EventType.TOUCH_END, this.onClick_nextBtn, this);
cc.log("上一页");
this.nowIndex = this.nowIndex - 1;
this.nowIndex <= 1 && (this.nowIndex = 1);
this.levelNum.string = "" + this.nowIndex;
for (var e = 0; e < this.maskBox.children.length; e++) {
var o = this.maskBox.children[e];
cc.Tween.stopAllByTarget(o);
if (-520 == o.x) {
this.nowIndex > s.agData.userData.level ? o.getChildByName("mask").active = !0 : o.getChildByName("mask").active = !1;
c.amuseControl.amuseResUtil.loadSprite("sunImg/sun_" + this.nowIndex, o.getChildByName("img").getComponent(cc.Sprite));
cc.tween(o).to(this.speedNum, {
position: cc.v3(0, 0)
}).start();
} else 520 == o.x ? o.x = -520 : 0 == o.x && cc.tween(o).to(this.speedNum, {
position: cc.v3(520, 0)
}).call(function() {
t.preBtn.on(cc.Node.EventType.TOUCH_END, t.onClick_preBtn, t);
t.nextBtn.on(cc.Node.EventType.TOUCH_END, t.onClick_nextBtn, t);
}).start();
}
if (this.nowIndex >= 30) {
this.preBtn.active = !0;
this.nextBtn.active = !1;
} else if (this.nowIndex <= 1) {
this.preBtn.active = !1;
this.nextBtn.active = !0;
} else {
this.preBtn.active = !0;
this.nextBtn.active = !0;
}
};
e.prototype.onClick_nextBtn = function() {
var t = this;
c.amuseControl.amuseSoundTool.commonBtnClick();
cc.log("下一页");
this.preBtn.off(cc.Node.EventType.TOUCH_END, this.onClick_preBtn, this);
this.nextBtn.off(cc.Node.EventType.TOUCH_END, this.onClick_nextBtn, this);
this.nowIndex = this.nowIndex + 1;
this.nowIndex >= 30 && (this.nowIndex = 30);
this.levelNum.string = "" + this.nowIndex;
for (var e = 0; e < this.maskBox.children.length; e++) {
var o = this.maskBox.children[e];
cc.Tween.stopAllByTarget(o);
if (-520 == o.x) o.x = 520; else if (520 == o.x) {
this.nowIndex > s.agData.userData.level ? o.getChildByName("mask").active = !0 : o.getChildByName("mask").active = !1;
c.amuseControl.amuseResUtil.loadSprite("sunImg/sun_" + this.nowIndex, o.getChildByName("img").getComponent(cc.Sprite));
cc.tween(o).to(this.speedNum, {
position: cc.v3(0, 0)
}).start();
} else 0 == o.x && cc.tween(o).to(this.speedNum, {
position: cc.v3(-520, 0)
}).call(function() {
t.preBtn.on(cc.Node.EventType.TOUCH_END, t.onClick_preBtn, t);
t.nextBtn.on(cc.Node.EventType.TOUCH_END, t.onClick_nextBtn, t);
}).start();
}
if (this.nowIndex >= 30) {
this.preBtn.active = !0;
this.nextBtn.active = !1;
} else if (this.nowIndex <= 1) {
this.preBtn.active = !1;
this.nextBtn.active = !0;
} else {
this.preBtn.active = !0;
this.nextBtn.active = !0;
}
};
e.prototype.onClick_blueBook = function() {
c.amuseControl.amuseSoundTool.commonBtnClick();
c.amuseControl.amuseResUtil.showToast("The feature is not available yet");
};
e.prototype.onClick_img = function() {
c.amuseControl.amuseSoundTool.commonBtnClick();
cc.log(this.nowIndex);
if (this.nowIndex > s.agData.userData.level) c.amuseControl.amuseResUtil.showDialog(c.circle.PlanetDialog); else {
c.amuseControl.imgId = this.nowIndex;
s.agData.userData.isHall = !1;
s.agData.storageData();
cc.director.loadScene(c.strong.sunset);
}
};
e.prototype.onClick_startBtn = function() {
c.amuseControl.amuseSoundTool.commonBtnClick();
c.amuseControl.imgId = s.agData.userData.level;
s.agData.userData.isHall = !1;
s.agData.storageData();
cc.director.loadScene(c.strong.sunset);
};
e.prototype.click_changeinfo = function() {
var t = this;
c.amuseControl.amuseSoundTool.commonBtnClick();
c.amuseControl.amuseResUtil.showDialog(c.circle.OrangeDialog, {
callback: function() {
t.updataInfo();
}
});
};
a([ u(cc.Node) ], e.prototype, "bg", void 0);
a([ u(cc.Node) ], e.prototype, "maskBox", void 0);
a([ u(cc.Node) ], e.prototype, "preBtn", void 0);
a([ u(cc.Node) ], e.prototype, "nextBtn", void 0);
a([ u(cc.Label) ], e.prototype, "levelNum", void 0);
a([ u(cc.Label) ], e.prototype, "username", void 0);
a([ u(cc.Sprite) ], e.prototype, "icon", void 0);
return a([ l ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./tool/amuseControl": "amuseControl",
"./tool/amuseGameData": "amuseGameData"
} ],
newhand: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "9a1e0lTY71PmJruz9bjJlQK", "newhand");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), a = this && this.__decorate || function(t, e, o, n) {
var i, a = arguments.length, c = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, o, c) : i(e, o)) || c);
return a > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, r = c.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.dong1_top = null;
e.dongdong1_bottom = null;
e.hand1 = null;
e.dong2_top = null;
e.dongdong2_bottom = null;
e.hand2 = null;
return e;
}
e.prototype.start = function() {};
e.prototype.showdong1 = function() {
var t = this;
this.dong1_top.active = !0;
this.dongdong1_bottom.active = !0;
this.hand1.active = !1;
this.dong1_top.width = 500;
this.dong1_top.height = 500;
this.dongdong1_bottom.width = 500;
this.dongdong1_bottom.height = 500;
cc.Tween.stopAllByTarget(this.dong1_top);
cc.Tween.stopAllByTarget(this.dongdong1_bottom);
cc.tween(this.dong1_top).to(.5, {
width: 80,
height: 80
}).start();
cc.tween(this.dongdong1_bottom).to(.5, {
width: 80,
height: 80
}).delay(.1).call(function() {
t.hand1.active = !0;
}).start();
};
e.prototype.hidedong1 = function() {
this.dong1_top.active = !1;
this.dongdong1_bottom.active = !1;
this.hand1.active = !1;
};
e.prototype.showdong2 = function() {
var t = this;
this.dong2_top.active = !0;
this.dongdong2_bottom.active = !0;
this.hand2.active = !1;
this.dong2_top.width = 500;
this.dong2_top.height = 500;
this.dongdong2_bottom.width = 500;
this.dongdong2_bottom.height = 500;
cc.Tween.stopAllByTarget(this.dong2_top);
cc.Tween.stopAllByTarget(this.dongdong2_bottom);
cc.tween(this.dong2_top).to(.5, {
width: 80,
height: 80
}).start();
cc.tween(this.dongdong2_bottom).to(.5, {
width: 80,
height: 80
}).delay(.1).call(function() {
t.hand2.active = !0;
}).start();
};
a([ r(cc.Node) ], e.prototype, "dong1_top", void 0);
a([ r(cc.Node) ], e.prototype, "dongdong1_bottom", void 0);
a([ r(cc.Node) ], e.prototype, "hand1", void 0);
a([ r(cc.Node) ], e.prototype, "dong2_top", void 0);
a([ r(cc.Node) ], e.prototype, "dongdong2_bottom", void 0);
a([ r(cc.Node) ], e.prototype, "hand2", void 0);
return a([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
sunset: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "73ed6/QdxxO+pIbRjS+FY/O", "sunset");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), a = this && this.__decorate || function(t, e, o, n) {
var i, a = arguments.length, c = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, o, c) : i(e, o)) || c);
return a > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c, s = t("./prefeb/newhand"), r = t("./tool/amuseControl"), l = t("./tool/amuseGameData"), u = cc._decorator, p = u.ccclass, d = u.property;
(function(t) {
t[t.discover = 0] = "discover";
t[t.wrong = 1] = "wrong";
t[t.repeat = 2] = "repeat";
})(c || (c = {}));
var h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.bg = null;
e.pipeibg = null;
e.originalImg = null;
e.finishImg = null;
e.tishi_qipao = null;
e.gameFindPrefab2 = null;
e.gameFindPrefab = null;
e.gameErrPrefab = null;
e.gameTishiPrefab = null;
e.game_tuowei = null;
e.imgSignBox = null;
e.yeziBox = null;
e.level = null;
e.timeAll = null;
e.reduceTime = null;
e.mask = null;
e.heartBox = null;
e.emptyheartBox = null;
e.pipeiNode = null;
e.movePaly1 = null;
e.movePaly2 = null;
e.userIcon1 = null;
e.userIcon2 = null;
e.levelNum = null;
e.soundHallBtn = null;
e.musicHallBtn = null;
e.meinv_Data = [];
e.meinvY = 175;
e.meinvScale = .372;
e.yeziAllNum = 10;
e.meinvFindNum = 0;
e.meinvOutTime = 0;
e.lovelyIsPrompt = !1;
e.timer = null;
e.isStop = !1;
e.oneErr = !1;
e.audioClips = [];
e.newhandNode = null;
e.duishouIcon = null;
e.gameoverBool = !1;
e.move1Y = 128;
e.move2Y = 0;
return e;
}
e.prototype.start = function() {
var t = this;
l.agData.setGamestop(function() {
r.amuseControl.amuseSoundTool.pauseAll();
});
l.agData.setGamerecovery(function() {
r.amuseControl.amuseSoundTool.resumeAll();
});
if (cc.sys.platform === cc.sys.IPAD) {
this.getComponent(cc.Canvas).fitHeight = !1;
this.getComponent(cc.Canvas).fitWidth = !0;
}
this.resetAll();
r.amuseControl.setsceneNode(this.node);
r.amuseControl.adapterBg(this.bg);
r.amuseControl.adapterBg(this.pipeibg);
this.onEvent();
this.init();
this.startDownTime();
this.loadRes();
this.pipeiAnim();
cc.resources.loadDir("sound", cc.AudioClip, function(e, o) {
if (!e && cc.isValid(t)) {
t.audioClips = o;
t.addAutoReleaseAssets(o);
}
});
};
e.prototype.onEvent = function() {
this.originalImg.on(cc.Node.EventType.TOUCH_END, this.imgEvent, this);
this.finishImg.on(cc.Node.EventType.TOUCH_END, this.imgEvent, this);
};
e.prototype.resetAll = function(t) {
t || (this.meinv_Data = []);
this.imgSignBox.getChildByName("origBox").destroyAllChildren();
this.imgSignBox.getChildByName("finishBox").destroyAllChildren();
this.imgSignBox.getChildByName("errBox").destroyAllChildren();
this.imgSignBox.getChildByName("tishiBox").destroyAllChildren();
this.imgSignBox.getChildByName("lizi").destroyAllChildren();
this.mask.active = !1;
this.oneErr = !1;
this.isStop = !1;
this.timer = null;
this.lovelyIsPrompt = !1;
this.meinvFindNum = 0;
this.init();
this.gameoverBool = !1;
};
e.prototype.checkNewHand = function() {
var t = this;
l.agData.userData.isGudie || 1 != r.amuseControl.imgId || cc.resources.load("prefeb/newhand", cc.Prefab, function(e, o) {
if (!e) {
var n = cc.instantiate(o);
r.amuseControl.amuseResUtil.bindResAsset(n, o);
t.node.addChild(n);
t.newhandNode = n.getComponent(s.default);
t.newhandNode.showdong1();
}
});
};
e.prototype.pipeiAnim = function() {
var t = this;
this.pipeiNode.active = !0;
this.pipeiNode.getChildByName("palyer_1");
for (var e = this.pipeiNode.getChildByName("palyer_2").getChildByName("mask"), o = !1, n = function(n) {
var i = e.children[n], a = r.amuseControl.getRandomInt(1, 20);
r.amuseControl.amuseResUtil.loadSprite("head/haed" + a, i.getComponent(cc.Sprite));
cc.Tween.stopAllByTarget(i);
cc.tween(i).by(.15, {
y: -120
}).call(function() {
if (-120 == i.y) {
var t = r.amuseControl.getRandomInt(1, 20);
r.amuseControl.amuseResUtil.loadSprite("head/haed" + t, i.getComponent(cc.Sprite));
i.y = 240;
}
}).union().repeat(20).delay(.5).call(function() {
if (!o) {
cc.log("结束");
t.checkNewHand();
for (var n = 0; n < e.children.length; n++) {
var i = e.children[n];
if (0 == i.y) {
t.duishouIcon = i.getComponent(cc.Sprite).spriteFrame;
cc.find("mask/icon", t.movePaly2).getComponent(cc.Sprite).spriteFrame = t.duishouIcon;
t.autoFind();
}
}
t.pipeiNode.active = !1;
}
o = !0;
}).start();
}, i = 0; i < e.children.length; i++) n(i);
};
e.prototype.autoFind = function() {
var t = this, e = this.movePaly2.getChildByName("num").getComponent(cc.Label).string;
if (!(parseInt(e) >= 10 || this.gameoverBool)) {
var o = 3, n = 5;
if (9 == parseInt(e)) {
o = 300;
n = 300;
}
var i = Math.random() * (n - o) + o;
this.scheduleOnce(function() {
t.findNodeNum(t.movePaly2, !0);
t.autoFind();
}, i);
}
};
e.prototype.findNodeNum = function(t, e) {
for (var o = this, n = t.getChildByName("finishBox"), i = t.getChildByName("num").getComponent(cc.Label), a = 0, c = 0; c < n.children.length; c++) {
a++;
var s = n.children[c], u = s.getChildByName("nofinish"), p = s.getChildByName("finish");
if (u.active) {
u.active = !1;
p.active = !0;
i.string = a + "";
break;
}
}
if (e && parseInt(i.string) >= 10) {
this.mask.active = !0;
this.gameoverBool = !0;
this.scheduleOnce(function() {
r.amuseControl.amuseResUtil.showDialog(r.circle.PurpleDialog, {
state: !1,
img: o.duishouIcon,
meinv_Data: o.meinv_Data,
callback: function() {
if (r.amuseControl.imgId + 1 <= l.agData.levelAll) {
r.amuseControl.imgId = r.amuseControl.imgId + 1;
o.resetAll();
o.init();
o.startDownTime();
o.loadRes();
} else {
l.agData.userData.isHall = !0;
l.agData.storageData();
cc.director.loadScene(r.strong.flower);
}
}
});
}, .5);
}
var d = this.movePaly1.getChildByName("num").getComponent(cc.Label).string, h = this.movePaly2.getChildByName("num").getComponent(cc.Label).string;
cc.Tween.stopAllByTarget(this.movePaly1);
cc.Tween.stopAllByTarget(this.movePaly2);
if (parseInt(d) >= parseInt(h)) {
cc.tween(this.movePaly1).to(.5, {
position: cc.v3(this.movePaly1.x, this.move1Y)
}).start();
cc.tween(this.movePaly2).to(.5, {
position: cc.v3(this.movePaly2.x, this.move2Y)
}).start();
} else {
cc.tween(this.movePaly1).to(.5, {
position: cc.v3(this.movePaly1.x, this.move2Y)
}).start();
cc.tween(this.movePaly2).to(.5, {
position: cc.v3(this.movePaly2.x, this.move1Y)
}).start();
}
};
e.prototype.init = function() {
this.levelNum.string = "" + r.amuseControl.imgId;
r.amuseControl.amuseSoundTool.effectSwitch ? this.soundHallBtn.getChildByName("line").active = !1 : this.soundHallBtn.getChildByName("line").active = !0;
r.amuseControl.amuseSoundTool.musicSwitch ? this.musicHallBtn.getChildByName("line").active = !1 : this.musicHallBtn.getChildByName("line").active = !0;
for (var t = 0; t < this.yeziBox.children.length; t++) {
var e = this.yeziBox.children[t].getComponent(sp.Skeleton);
r.amuseControl.playSp(e, "1_an_stop");
}
this.changeQiPaoNum();
r.amuseControl.amuseResUtil.loadSprite("head/haed" + l.agData.userData.avatarId, this.userIcon1);
r.amuseControl.amuseResUtil.loadSprite("head/haed" + l.agData.userData.avatarId, this.userIcon2);
this.mask.active = !1;
this.tishi_qipao.active = !1;
this.reduceTime.active = !1;
this.timeAll.active = !1;
for (t = 0; t < this.heartBox.children.length; t++) {
this.heartBox.children[t].active = !0;
this.emptyheartBox.children[t].active = !1;
}
var o = this.movePaly1.getChildByName("finishBox");
for (t = 0; t < o.children.length; t++) o.children[t].getChildByName("finish").active = !1;
var n = this.movePaly2.getChildByName("finishBox");
for (t = 0; t < n.children.length; t++) n.children[t].getChildByName("finish").active = !1;
};
e.prototype.startDownTime = function() {};
e.prototype.downTimeEvent = function() {};
e.prototype.errReduceTime = function() {
for (var t = this.heartBox.children.length - 1; t >= 0; t--) {
var e = this.heartBox.children[t], o = this.emptyheartBox.children[t];
if (e.active) {
e.active = !1;
o.active = !0;
var n = o.getComponent(sp.Skeleton);
r.amuseControl.playSp(n, "posui");
break;
}
}
};
e.prototype.changeQiPaoNum = function() {
if (l.agData.userData.tishiNum > 0) {
this.tishi_qipao.getChildByName("ad_label").active = !1;
this.tishi_qipao.getChildByName("num_label").active = !0;
this.tishi_qipao.getChildByName("num_label").getComponent(cc.Label).string = l.agData.userData.tishiNum.toString();
} else {
this.tishi_qipao.getChildByName("ad_label").active = !0;
this.tishi_qipao.getChildByName("num_label").active = !1;
}
};
e.prototype.loadRes = function() {
var t = this;
r.amuseControl.amuseResUtil.loadSprite("sunImg/sun_" + r.amuseControl.imgId, this.originalImg.getComponent(cc.Sprite));
r.amuseControl.amuseResUtil.loadSprite("fightImg/fight_" + r.amuseControl.imgId, this.finishImg.getComponent(cc.Sprite));
cc.resources.load("meinvImg/moon" + r.amuseControl.imgId, cc.JsonAsset, function(e, o) {
if (e) cc.log(e); else {
r.amuseControl.amuseResUtil.bindResAsset(t.node, o);
var n = o.json;
if (n && n.path) {
t.meinv_Data = n.path;
for (var i = 0; i < t.meinv_Data.length; i++) t.meinv_Data[i].isFind = !1;
}
}
});
};
e.prototype.yeziLight = function(t) {
for (var e = this, o = this.movePaly1.getChildByName("finishBox"), n = null, i = 0; i < o.children.length; i++) {
var a = o.children[i];
if (a.getChildByName("nofinish").active) {
n = a;
break;
}
}
if (cc.isValid(n)) {
var c = this.yeziBox.children[this.meinvFindNum - 1].getComponent(sp.Skeleton), s = cc.instantiate(this.game_tuowei);
this.imgSignBox.getChildByName("lizi").addChild(s);
s.setPosition(t);
var l = r.amuseControl.changePos(n, s);
cc.Tween.stopAllByTarget(s);
cc.tween(s).to(1, {
position: l
}).call(function() {
e.findNodeNum(e.movePaly1);
e.scheduleOnce(function() {
s.destroy();
}, .3);
r.amuseControl.playSp(c, "2_bianliang");
r.amuseControl.addSequenceSp(c, "3_liang_stop");
}).start();
}
};
e.prototype.findSignSucc = function(t, e) {
for (var o = 0; o < 2; o++) {
var n = cc.instantiate(this.gameFindPrefab2), i = 0;
if (0 == o) {
i = t.y * this.meinvScale + this.meinvY;
this.imgSignBox.getChildByName("origBox").addChild(n);
} else {
this.imgSignBox.getChildByName("finishBox").addChild(n);
i = t.y * this.meinvScale - this.meinvY;
}
var a = cc.v3(t.x * this.meinvScale, i);
n.setPosition(a);
n.width = e.blockSize.wid * this.meinvScale;
n.height = e.blockSize.hei * this.meinvScale;
cc.Tween.stopAllByTarget(n);
n.scale = 0;
cc.tween(n).to(.3, {
scale: 1.5
}).to(.1, {
scale: 1.3
}).start();
}
};
e.prototype.findSignErr = function(t) {
var e = t, o = cc.instantiate(this.gameErrPrefab);
this.imgSignBox.getChildByName("errBox").addChild(o);
o.setPosition(e);
this.errSignAnim(o);
var n = null;
if (e.y > 0) {
n = cc.instantiate(this.gameErrPrefab);
this.imgSignBox.getChildByName("errBox").addChild(n);
n.setPosition(cc.v3(e.x, e.y - 2 * this.meinvY));
} else {
n = cc.instantiate(this.gameErrPrefab);
this.imgSignBox.getChildByName("errBox").addChild(n);
n.setPosition(cc.v3(e.x, e.y + 2 * this.meinvY));
}
n && this.errSignAnim(n);
};
e.prototype.imgEvent = function(t) {
var e = t.getLocation(), o = this.imgSignBox.convertToNodeSpaceAR(cc.v3(e.x, e.y)), n = this.checkImgSign(o);
if (n.type == c.discover) {
if (this.lovelyIsPrompt) {
this.lovelyIsPrompt = !1;
this.imgSignBox.getChildByName("tishiBox").destroyAllChildren();
}
this.meinvFindNum = this.meinvFindNum + 1;
this.findSignSucc(cc.v3(n.agData.centerPos.x, n.agData.centerPos.y), n.agData);
this.yeziLight(o);
if (this.newhandNode && 1 == this.meinvFindNum) {
if (this.newhandNode) {
this.newhandNode.hidedong1();
this.newhandNode.showdong2();
}
} else if (this.newhandNode && 2 == this.meinvFindNum) {
if (this.newhandNode) {
this.newhandNode.node.destroy();
this.newhandNode = null;
}
l.agData.userData.isGudie = !0;
l.agData.storageData();
}
this.playCommonSound(l.sound.correct);
this.meinvFindNum >= this.yeziAllNum && this.gameEnd();
} else if (n.type == c.wrong) {
this.playCommonSound(l.sound.err);
this.errReduceTime();
this.findSignErr(o);
this.oneErr = !0;
} else {
this.playCommonSound(l.sound.err);
this.errReduceTime();
this.findSignErr(o);
this.oneErr = !0;
}
};
e.prototype.checkImgSign = function(t) {
for (var e = null, o = null, n = 0; n < this.meinv_Data.length; n++) {
var i, a = this.meinv_Data[n], s = a.centerPos.x * this.meinvScale;
i = t.y > 0 ? a.centerPos.y * this.meinvScale + this.meinvY : a.centerPos.y * this.meinvScale - this.meinvY;
var r = a.blockSize.wid * this.meinvScale, l = a.blockSize.hei * this.meinvScale;
if (!a.isFind && t.x <= s + r / 2 && t.x >= s - r / 2 && t.y <= i + l / 2 && t.y >= i - l / 2) {
if (a.isFind) {
e = c.repeat;
cc.log("找到重复的了");
} else {
cc.log("找到了");
e = c.discover;
o = a;
a.isFind = !0;
}
return {
type: e,
agData: o
};
}
e = c.wrong;
cc.log("没找到");
}
return {
type: e,
agData: o
};
};
e.prototype.errSignAnim = function(t) {
cc.Tween.stopAllByTarget(t);
cc.tween(t).to(.05, {
angle: 15
}).to(.05, {
angle: 0
}).to(.05, {
angle: -15
}).to(.07, {
angle: 10
}).to(.07, {
angle: 0
}).to(.07, {
angle: -10
}).to(.1, {
angle: 7
}).to(.1, {
angle: 0
}).to(.1, {
angle: -7
}).to(.1, {
angle: 3
}).to(.1, {
angle: 0
}).call(function() {
t.destroy();
}).start();
};
e.prototype.gameEnd = function() {
var t = this;
cc.log("游戏结束");
this.mask.active = !0;
this.gameoverBool = !0;
this.playCommonSound(l.sound.win);
if (l.agData.userData.level + 1 <= l.agData.levelAll && r.amuseControl.imgId == l.agData.userData.level) {
l.agData.userData.level = l.agData.userData.level + 1;
l.agData.storageData();
}
this.scheduleOnce(function() {
r.amuseControl.amuseResUtil.showDialog(r.circle.PurpleDialog, {
state: !0,
img: t.duishouIcon,
meinv_Data: t.meinv_Data,
callback: function() {
if (r.amuseControl.imgId + 1 <= l.agData.levelAll) {
r.amuseControl.imgId = r.amuseControl.imgId + 1;
t.resetAll();
t.init();
t.startDownTime();
t.loadRes();
} else {
l.agData.userData.isHall = !0;
l.agData.storageData();
cc.director.loadScene(r.strong.flower);
}
}
});
}, 1);
};
e.prototype.getDownTime = function() {
var t = r.amuseControl.imgId;
return t >= 1 && t <= 5 ? 300 : t >= 6 && t <= 10 ? 180 : t >= 11 && t <= 15 ? 150 : t >= 16 && t <= 20 ? 120 : t >= 21 && t <= 25 ? 90 : 60;
};
e.prototype.timeOutEvent = function() {
var t = this;
r.amuseControl.amuseResUtil.showDialog(r.circle.SummerDialog, {
ADcallback: function() {
t.meinvOutTime = 60;
l.agData.userData.tishiNum++;
l.agData.storageData();
t.changeQiPaoNum();
t.startDownTime();
},
restartCallBack: function() {
t.resetAll(!0);
t.init();
t.startDownTime();
cc.log(t.meinv_Data, "this.meinv_Data");
for (var e = 0; e < t.meinv_Data.length; e++) t.meinv_Data[e].isFind = !1;
}
});
};
e.prototype.onClick_back = function() {
var t = this;
r.amuseControl.amuseSoundTool.commonBtnClick();
this.isStop = !0;
r.amuseControl.amuseResUtil.showDialog(r.circle.RocketDiaolg, {
callback: function() {
t.isStop = !1;
}
});
};
e.prototype.onClick_pause = function() {
var t = this;
r.amuseControl.amuseSoundTool.commonBtnClick();
this.isStop = !0;
r.amuseControl.amuseResUtil.showDialog(r.circle.SpiritDialog, {
isGame: !0,
callback: function() {
r.amuseControl.amuseSoundTool.effectSwitch ? t.soundHallBtn.getChildByName("line").active = !1 : t.soundHallBtn.getChildByName("line").active = !0;
r.amuseControl.amuseSoundTool.musicSwitch ? t.musicHallBtn.getChildByName("line").active = !1 : t.musicHallBtn.getChildByName("line").active = !0;
t.isStop = !1;
}
});
};
e.prototype.onClick_tishi = function() {
var t = this;
r.amuseControl.amuseSoundTool.commonBtnClick();
if (this.lovelyIsPrompt) r.amuseControl.amuseResUtil.showToast("Prompt already exists"); else {
for (var e = null, o = 0; o < this.meinv_Data.length; o++) if (!this.meinv_Data[o].isFind) {
e = this.meinv_Data[o];
break;
}
if (l.agData) if (l.agData.userData.tishiNum <= 0) {
cc.log("看广告");
l.agData.showVideo(function() {
t.showTiShi(e);
});
} else {
l.agData.userData.tishiNum = l.agData.userData.tishiNum - 1;
l.agData.storageData();
this.changeQiPaoNum();
this.showTiShi(e);
}
}
};
e.prototype.showTiShi = function(t) {
if (t) {
this.lovelyIsPrompt = !0;
for (var e = 0; e < 2; e++) {
var o = cc.instantiate(this.gameTishiPrefab);
this.imgSignBox.getChildByName("tishiBox").addChild(o);
var n, i = t.centerPos.x * this.meinvScale;
n = 0 == e ? t.centerPos.y * this.meinvScale + this.meinvY : t.centerPos.y * this.meinvScale - this.meinvY;
o.setPosition(i, n);
cc.Tween.stopAllByTarget(o);
cc.tween(o).to(.5, {
scale: .5
}).to(.5, {
scale: .7
}).union().repeatForever().start();
}
}
};
e.prototype.onClick_musicChange = function() {
r.amuseControl.amuseSoundTool.commonBtnClick();
r.amuseControl.amuseSoundTool.switchMusic();
r.amuseControl.amuseSoundTool.musicSwitch ? this.musicHallBtn.getChildByName("line").active = !1 : this.musicHallBtn.getChildByName("line").active = !0;
};
e.prototype.onClick_soundChange = function() {
r.amuseControl.amuseSoundTool.commonBtnClick();
r.amuseControl.amuseSoundTool.switchEffect();
r.amuseControl.amuseSoundTool.effectSwitch ? this.soundHallBtn.getChildByName("line").active = !1 : this.soundHallBtn.getChildByName("line").active = !0;
};
e.prototype.onClick_exit = function() {
r.amuseControl.amuseSoundTool.commonBtnClick();
l.agData.userData.isHall = !0;
l.agData.storageData();
cc.director.loadScene(r.strong.flower);
};
e.prototype.playCommonSound = function(t, e) {
void 0 === e && (e = !1);
for (var o = 0; o < this.audioClips.length; o++) if (this.audioClips[o].name == t) return r.amuseControl.amuseSoundTool.playEffect(this.audioClips[o], e);
return null;
};
a([ d(cc.Node) ], e.prototype, "bg", void 0);
a([ d(cc.Node) ], e.prototype, "pipeibg", void 0);
a([ d(cc.Node) ], e.prototype, "originalImg", void 0);
a([ d(cc.Node) ], e.prototype, "finishImg", void 0);
a([ d(cc.Node) ], e.prototype, "tishi_qipao", void 0);
a([ d(cc.Prefab) ], e.prototype, "gameFindPrefab2", void 0);
a([ d(cc.Prefab) ], e.prototype, "gameFindPrefab", void 0);
a([ d(cc.Prefab) ], e.prototype, "gameErrPrefab", void 0);
a([ d(cc.Prefab) ], e.prototype, "gameTishiPrefab", void 0);
a([ d(cc.Prefab) ], e.prototype, "game_tuowei", void 0);
a([ d(cc.Node) ], e.prototype, "imgSignBox", void 0);
a([ d(cc.Node) ], e.prototype, "yeziBox", void 0);
a([ d(cc.Label) ], e.prototype, "level", void 0);
a([ d(cc.Node) ], e.prototype, "timeAll", void 0);
a([ d(cc.Node) ], e.prototype, "reduceTime", void 0);
a([ d(cc.Node) ], e.prototype, "mask", void 0);
a([ d(cc.Node) ], e.prototype, "heartBox", void 0);
a([ d(cc.Node) ], e.prototype, "emptyheartBox", void 0);
a([ d(cc.Node) ], e.prototype, "pipeiNode", void 0);
a([ d(cc.Node) ], e.prototype, "movePaly1", void 0);
a([ d(cc.Node) ], e.prototype, "movePaly2", void 0);
a([ d(cc.Sprite) ], e.prototype, "userIcon1", void 0);
a([ d(cc.Sprite) ], e.prototype, "userIcon2", void 0);
a([ d(cc.Label) ], e.prototype, "levelNum", void 0);
a([ d(cc.Node) ], e.prototype, "soundHallBtn", void 0);
a([ d(cc.Node) ], e.prototype, "musicHallBtn", void 0);
return a([ p ], e);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"./prefeb/newhand": "newhand",
"./tool/amuseControl": "amuseControl",
"./tool/amuseGameData": "amuseGameData"
} ]
}, {}, [ "bright", "OrangeDialog", "PlanetDialog", "PurpleDialog", "RocketDiaolg", "SpiritDialog", "SummerDialog", "YellowDialog", "flower", "newhand", "sunset", "amuseControl", "amuseGameData", "amuseResBind", "amuseResUtil", "amuseScroll", "amuseSoundTool", "amuseStorage" ]);

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/bright');
require('./assets/script/dialog/OrangeDialog');
require('./assets/script/dialog/PlanetDialog');
require('./assets/script/dialog/PurpleDialog');
require('./assets/script/dialog/RocketDiaolg');
require('./assets/script/dialog/SpiritDialog');
require('./assets/script/dialog/SummerDialog');
require('./assets/script/dialog/YellowDialog');
require('./assets/script/flower');
require('./assets/script/prefeb/newhand');
require('./assets/script/sunset');
require('./assets/script/tool/amuseControl');
require('./assets/script/tool/amuseGameData');
require('./assets/script/tool/amuseResBind');
require('./assets/script/tool/amuseResUtil');
require('./assets/script/tool/amuseScroll');
require('./assets/script/tool/amuseSoundTool');
require('./assets/script/tool/amuseStorage');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
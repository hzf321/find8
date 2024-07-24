
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
require('./assets/script/cup');
require('./assets/script/dialog/AmeliaPop');
require('./assets/script/dialog/AvaPop');
require('./assets/script/dialog/EmilyPop');
require('./assets/script/dialog/EvelynPop');
require('./assets/script/dialog/IsabellaPop');
require('./assets/script/dialog/MiaPop');
require('./assets/script/dialog/SophiaPop');
require('./assets/script/flask');
require('./assets/script/glass');
require('./assets/script/prefeb/newhand');
require('./assets/script/tool/princessControl');
require('./assets/script/tool/princessGameData');
require('./assets/script/tool/princessResBind');
require('./assets/script/tool/princessResUtil');
require('./assets/script/tool/princessScroll');
require('./assets/script/tool/princessSoundTool');
require('./assets/script/tool/princessStorage');

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
 
import { princessStorage } from "./tool/princessStorage";
import { delay, dell, princessControl } from "./tool/princessControl";
import { pgData, storage } from "./tool/princessGameData";

const { ccclass, property } = cc._decorator;
 
@ccclass
export default class cup extends cc.Component {

    @property(cc.Node)
    loading_bg: cc.Node = null;

    @property(cc.Node)
    loading_bg2: cc.Node = null;
 
    @property(cc.Node)
    loadingBox: cc.Node = null;

    @property(cc.Node)
    gotoHallBox: cc.Node = null;

    @property(cc.Node)
    loading_play: cc.Node = null;

    @property(cc.Node)
    load_play: cc.Node = null;

    private resNum = 6;
    private nowNum = 0;

    start() {
        if (cc.sys.platform === cc.sys.IPAD) {
            this.getComponent(cc.Canvas).fitHeight = true;
            this.getComponent(cc.Canvas).fitWidth = false;
        }
        princessControl.adapterBg(this.loading_bg);
        princessControl.adapterBg(this.loading_bg2);
        princessControl.princessSoundTool.initBtnClickEffect();
        princessControl.princessSoundTool.initbgmMusic();

        let playroomStorage = princessStorage.getStorageJSON(storage.gamedata);
        if (playroomStorage) {
            pgData.userData = playroomStorage;
        }

        console.log( pgData.userData, " pgData.userData")
        princessControl.setsceneNode(this.node);

        if (!pgData.userData.isClause) {
            this.gotoHallBox.active = false;
            this.loadingBox.active = false;
            princessControl.princessResUtil.showDialog(dell.MiaPop, {
                callback: () => {
                    pgData.userData.isClause = true;
                    this.gotoHallBox.active = true;
                    this.loadingBox.active = false;
                    pgData.storageData();
                    cc.tween(this.loading_play).to(0.5, { scale: 1.1 }).to(0.5, { scale: 1 }).union().repeatForever().start();
                }
            });
        } else {
            this.gotoHallBox.active = true;
            this.loadingBox.active = false;

            cc.tween(this.loading_play).to(0.5, { scale: 1.1 }).to(0.5, { scale: 1 }).union().repeatForever().start();
        }


        pgData.setVideoFailCb(()=>{
            cc.resources.load("prefeb/toast", cc.Prefab, (err, prefab) => {
                if (err) {
                    return;
                }
                
                let toast = cc.instantiate(prefab);
                princessControl.princessResUtil.bindResAsset(toast, prefab);
                let parentNode = princessControl.getsceneNode();
                if (toast && parentNode) {
                    toast.active = true;
                    parentNode.addChild(toast);
                    let toastLabel = toast.getChildByName("label");
                    toastLabel.getComponent(cc.Label).string = "Sorry, no ads available at the moment. Please try again later!";
                    cc.Tween.stopAllByTarget(toast);
                    toast.opacity = 255;
                    cc.tween(toast).to(0.15, { scale: 1.2 }).to(0.15, { scale: 1 }).delay(0.5).to(0.5, { opacity: 0 }).call(() => {
                        toast.destroy();
                    }).start();
                }
            })
        });
 

    }


    onClick_gotoPlay() {
        this.gotoHallBox.active = false;
        this.loadingBox.active = true;
        princessControl.princessSoundTool.commonBtnClick();

        cc.tween(this.load_play).to(2, {angle: -360}).call(()=>{
            this.load_play.angle = 0;
        }).union().repeatForever().start();
          
        cc.loader.loadResDir("prefeb", (err, assets) => {
            if (err) {
                cc.error(err);
                return;
            }
            console.log('prefeb assets in  have been loaded.');
            this.progressBarEvent();
        });
        cc.loader.loadResDir("openImg", (err, assets) => {
            if (err) {
                cc.error(err);
                return;
            }
            console.log('openImg assets in  have been loaded.');
            this.progressBarEvent();
        });
        cc.loader.loadResDir("strongImg", (err, assets) => {
            if (err) {
                cc.error(err);
                return;
            }
            console.log('strongImg assets in  have been loaded.');
            this.progressBarEvent();
        });
        cc.loader.loadResDir("familyData", (err, assets) => {
            if (err) {
                cc.error(err);
                return;
            }
            pgData.levelAll = assets.length;
            console.log('familyData assets in  have been loaded.');
            this.progressBarEvent();
        });

        cc.director.preloadScene(delay.flask, (err, assets) => {
            cc.log("game scene preloaded");
            this.progressBarEvent();
        });
        cc.director.preloadScene(delay.glass, (err, assets) => {
            cc.log("hall scene preloaded");
            this.progressBarEvent();
        });

    }

    progressBarEvent() {
        this.nowNum++;
        if (this.nowNum == this.resNum) {
            this.scheduleOnce(() => {
                if (pgData.userData.isHall) {
                    cc.director.loadScene(delay.glass);
                } else {
                    princessControl.imgId = pgData.userData.level;
                    cc.director.loadScene(delay.flask);
                }
            }, 0.05)
        }
    }


    showShiPing() {
        console.log("android---------------showShiPing------------------")
        pgData.showVideo(()=>{
            console.log("zzzzzzzzzzzzzzzzzzzzwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
          })
    }


    showbanner() {
        console.log("android---------------showbanner------------------")
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showbanner", "()V");
    }


    hidebanner() {
        console.log("android---------------hidebanner------------------")
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hidebanner", "()V");
    }
}


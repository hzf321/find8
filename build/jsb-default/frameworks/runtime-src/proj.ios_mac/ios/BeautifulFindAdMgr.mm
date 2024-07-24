

#import "BeautifulFindAdMgr.h"
#include "cocos2d.h"
//#include "platform/CCApplication.h"
#include "cocos/base/CCScheduler.h"
#include "cocos/scripting/js-bindings/jswrapper/SeApi.h"
#import "AppDelegate.h"

@implementation BeautifulFindAdMgr
       
static BeautifulFindAdMgr* _instance = nil;

BOOL myBoolVariable = NO;

+ (BeautifulFindAdMgr*) shareInstance {
   static dispatch_once_t onceToken ;
   dispatch_once(&onceToken, ^{
       _instance = [[self alloc] init] ;
   }) ;
   
   return _instance ;
}

- (void)initsdk:(UIViewController*) view {
   NSLog(@"BeautifulFindAdMgr====== 初始化sdk" );
   self.viewController = view;
   [UnityAds initialize:@"5663397" testMode:NO initializationDelegate:self];
}

+ (void)testlog{
   NSLog(@" - testtest  test------------------------ " );
   
}

// Implement initialization callbacks to handle success or failure:
#pragma mark : UnityAdsInitializationDelegate
- (void)initializationComplete {
    NSLog(@"BeautifulFindAdMgr====== UnityAdsInitializationDelegate initializationComplete" );
    // Pre-load an ad when initialization succeeds, so it is ready to show:
    //[self loadReward];

    [UnityAds load:@"Rewarded_iOS" loadDelegate:[BeautifulFindAdMgr shareInstance]];
}

- (void)initializationFailed:(UnityAdsInitializationError)error withMessage:(NSString *)message {
   NSLog(@"BeautifulFindAdMgr====== UnityAdsInitializationDelegate initializationFailed with message: %@", message );
}

// Implement load callbacks to handle success or failure after initialization:
#pragma mark: UnityAdsLoadDelegate
- (void)unityAdsAdLoaded:(NSString *)placementId {
   NSLog(@"BeautifulFindAdMgr====== UnityAdsLoadDelegate unityAdsAdLoaded %@", placementId);
    myBoolVariable = YES;
    //[self showReward];
}

- (void)unityAdsAdFailedToLoad:(NSString *)placementId
                     withError:(UnityAdsLoadError)error
                   withMessage:(NSString *)message {
    NSLog(@"BeautifulFindAdMgr====== UnityAdsLoadDelegate unityAdsAdFailedToLoad %@", placementId);
}

+ (void)loadReward{
   NSLog(@"BeautifulFindAdMgr====== loadReward" );
        
    if (myBoolVariable) {
        cocos2d::Application::getInstance()->getScheduler()->performFunctionInCocosThread([=](){
            se::ScriptEngine::getInstance()->evalString("window['gamestop']()");
        });
        [BeautifulFindAdMgr showReward];
    }else {
        cocos2d::Application::getInstance()->getScheduler()->performFunctionInCocosThread([=](){
            se::ScriptEngine::getInstance()->evalString("window['onCloseVdieofailCb']()");
        });
        
        [UnityAds load:@"Rewarded_iOS" loadDelegate:[BeautifulFindAdMgr shareInstance]];
    }
 
}

+ (void)loadInterstitial{
   NSLog(@"BeautifulFindAdMgr====== loadInterstitial" );
   [UnityAds load:@"Interstitial_iOS" loadDelegate:[BeautifulFindAdMgr shareInstance]];
}

+ (void)showReward{
   NSLog(@"BeautifulFindAdMgr====== 观看激励视频 " );
   [UnityAds show:[BeautifulFindAdMgr shareInstance].viewController placementId:@"Rewarded_iOS" showDelegate:[BeautifulFindAdMgr shareInstance]];
}

- (void)showInterstitial{
   NSLog(@"BeautifulFindAdMgr====== 观看插屏 " );
   [UnityAds show:self.viewController placementId:@"Interstitial_iOS" showDelegate:self];
}

#pragma mark: UnityAdsShowDelegate
- (void)unityAdsShowComplete:(NSString *)placementId withFinishState:(UnityAdsShowCompletionState)state {
   NSLog(@"BeautifulFindAdMgr====== UnityAdsShowDelegate unityAdsShowComplete %@ %ld", placementId, state);
   if ([placementId isEqualToString:@"Rewarded_iOS"] && state == kUnityShowCompletionStateCompleted) {
       // Reward the user.
       NSLog(@"BeautifulFindAdMgr====== 视频看完回调" );
       cocos2d::Application::getInstance()->getScheduler()->performFunctionInCocosThread([=](){
           se::ScriptEngine::getInstance()->evalString("window['gamerecovery']()");
       });
       cocos2d::Application::getInstance()->getScheduler()->performFunctionInCocosThread([=](){
           se::ScriptEngine::getInstance()->evalString("window['onCloseVdieoFinishCb']()");
       });
       myBoolVariable = NO;
       [UnityAds load:@"Rewarded_iOS" loadDelegate:[BeautifulFindAdMgr shareInstance]];
   }
}

- (void)unityAdsShowFailed: (NSString *)placementId withError: (UnityAdsShowError)error withMessage: (NSString *)message{
    NSLog(@"BeautifulFindAdMgr====== unityAdsShowFailed %@", message );
    //    cocos2d::Application::getInstance()->getScheduler()->performFunctionInCocosThread([=](){
    //        se::ScriptEngine::getInstance()->evalString("window['onCloseVdieofailCb']()");
    //    });
    myBoolVariable = NO;
}

- (void)unityAdsShowStart: (NSString *)placementId{
   NSLog(@"BeautifulFindAdMgr====== unityAdsShowStart" );
}

- (void)unityAdsShowClick: (NSString *)placementId{
   NSLog(@"BeautifulFindAdMgr====== unityAdsShowClick" );
}

@end


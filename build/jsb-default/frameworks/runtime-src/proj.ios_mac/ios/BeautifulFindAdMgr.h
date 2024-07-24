#import <UnityAds/UnityAds.h>
 
@interface BeautifulFindAdMgr : NSObject<UnityAdsInitializationDelegate, UnityAdsLoadDelegate, UnityAdsShowDelegate>
 
@property (assign, nonatomic) BOOL testMode;

+ (BeautifulFindAdMgr*) shareInstance;
@property(nonatomic, strong) UIViewController* viewController;

- (void)initsdk:(UIViewController*) view;
+ (void)showReward;
- (void)showInterstitial;

+ (void)loadReward;
+ (void)loadInterstitial;

@end


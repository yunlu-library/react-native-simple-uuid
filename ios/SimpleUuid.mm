#import "SimpleUuid.h"

@implementation SimpleUuid
RCT_EXPORT_MODULE()

- (NSString *)v4
{
  return [[NSUUID UUID] UUIDString];
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeSimpleUuidSpecJSI>(params);
}

@end

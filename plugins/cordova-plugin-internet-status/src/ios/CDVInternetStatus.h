#import <Cordova/CDV.h>

@interface CDVInternetStatus : CDVPlugin

- (void) getStatus:(CDVInvokedUrlCommand*)command;

@end
#import <Cordova/CDV.h>
#import "CDVInternetStatus.h"
#import "CDVReachability.h"

const int CONNECTED = 1;
const int DISCONNECTED = 0;

@implementation CDVInternetStatus

- (void)getStatus:(CDVInvokedUrlCommand*)command
{
    int statusCode = CONNECTED;

    if ([[CDVReachability reachabilityForInternetConnection]currentReachabilityStatus]==NotReachable)
        statusCode = DISCONNECTED;

    CDVPluginResult* result = [CDVPluginResult
    resultWithStatus:CDVCommandStatus_OK
    messageAsInt:statusCode];

    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

@end
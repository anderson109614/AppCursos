# cordova-plugin-internet-status

Simple plugin that returns the internet status. (Android and iOS)

## Installation

    $ cordova plugin add cordova-plugin-internet-status
    
## Usage

```js
internet.getStatus(function(status) {
   switch(status) {
       case internet.CONNECTED: console.log('Connected !'); break;
       case internet.DISCONNECTED: console.log('Disconnected...');
   }
});
```
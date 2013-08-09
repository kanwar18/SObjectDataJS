jQuery(document).ready(function() {
    console.log("onLoad: jquery ready");
	document.addEventListener("deviceready", onDeviceReady,false);
});

// When this function is called, cordova has been initialized and is ready to roll 
function onDeviceReady() {
    console.log("onDeviceReady: cordova ready");
	//Call getAuthCredentials to get the initial session credentials
    cordova.require("salesforce/plugin/oauth").getAuthCredentials(
        function(creds) {
            appStart( _.extend(creds, {userAgent: navigator.userAgent}) );
        }, 
        function(error) { 
            console.log("Auth failed: " + error); 
        });

}

function appStart(creds)
{
    // Force init
    Force.init(creds, null, null, cordova.require("salesforce/plugin/oauth").forcetkRefresh);

    onApplicationReady();
}



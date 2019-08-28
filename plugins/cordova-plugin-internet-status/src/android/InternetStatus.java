package com.slkerndnme.cordova.internetstatus;

import org.apache.cordova.*;
import org.json.JSONArray;
import org.json.JSONException;

import android.content.Context;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;

public class InternetStatus extends CordovaPlugin {

    private static final int CONNECTED = 1;
    private static final int DISCONNECTED = 0;

    @Override
    public boolean execute(String action, JSONArray data, CallbackContext callbackContext) throws JSONException {

        if (action.equals("getStatus")) {

            int statusCode = CONNECTED;

            if (!this.isNetworkAvailable())
                statusCode = DISCONNECTED;

            callbackContext.success(statusCode);

            return true;

        } else {
            
            return false;
        }
    }

    private boolean isNetworkAvailable() {

        ConnectivityManager connectivityManager
                = (ConnectivityManager) this.cordova.getActivity().getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo activeNetworkInfo = connectivityManager.getActiveNetworkInfo();

        return activeNetworkInfo != null && activeNetworkInfo.isConnected();
    }
}

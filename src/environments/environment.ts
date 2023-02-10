// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const URL = "https://uparkingpreview-default-rtdb.firebaseio.com/";
export const environment = {
  production: false,
   firebaseConfig : {
    apiKey: "AIzaSyAWYL1oWzFTeofhaVjCzPA2r5fQtG8sdNI",
    authDomain: "uparkingpreview.firebaseapp.com",
    databaseURL: "https://uparkingpreview-default-rtdb.firebaseio.com",
    projectId: "uparkingpreview",
    storageBucket: "uparkingpreview.appspot.com",
    messagingSenderId: "80721971155",
    appId: "1:80721971155:web:a944e814209ec922fd5126",
    measurementId: "G-LS2B7T4FFK"
  },
  urlConfing:{
    USERURL: `${URL}imgMapParking`,
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

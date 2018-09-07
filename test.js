var worldDataHistoryURL = "https://www.worldtradingdata.com/api/v1/history?symbol=GOOG&sort=newest&api_token=wCkgn297Yi5vIlVNQDirTf4yTAhQa8mFePWPWjVirgxkm76UqPQAXv1jhOQp";
var url = "https://www.worldtradingdata.com/api/v1/history?symbol=GOOG&sort=newest&api_token=wCkgn297Yi5vIlVNQDirTf4yTAhQa8mFePWPWjVirgxkm76UqPQAXv1jhOQp";


// $.get("worldDataHistoryURL", function(data, status){
//     if (status == "success") {
//         //   stockMarketArray = getValuesFromDataWorldData(data);
//           console.log("** din functie market", data);

//           return ;
//     }
//     else {
//       console.log("o eroare pe la server");
      
//     }
// });


$.ajax({
    url: url,
    type: "get", //send it through get method
    // data: { 
    //     symbol: "GOOG", 
    //     sort: "newest", 
    //     token: "wCkgn297Yi5vIlVNQDirTf4yTAhQa8mFePWPWjVirgxkm76UqPQAXv1jhOQp"
    // },
    success: function(response) {
        console.log("** din functie market", response);
    },
    error: function(xhr) {
        console.log("o eroare pe la server");

    }
  });
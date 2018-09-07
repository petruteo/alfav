// var theURL = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=30Y6LPCCQV16RA06";
apiKeys = ["181WZWBXFFYIPY99", "W7E0EWH7V30SXW0O", "PK6YJ2BT5GVLKS9H", "1QZMWT8HGNHYT57V", "OPL9S15RXJ83FE46"]; // "30Y6LPCCQV16RA06"
var theURL = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=FB&interval=1min&apikey=";
var theMarketURL = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=^GSPC&interval=1min&apikey=30Y6LPCCQV16RA06";
var weeklyURL = "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=MSFT&apikey=30Y6LPCCQV16RA06"
var worldDataHistoryURL = "https://www.worldtradingdata.com/api/v1/history?symbol=GOOG&sort=newest&api_token=wCkgn297Yi5vIlVNQDirTf4yTAhQa8mFePWPWjVirgxkm76UqPQAXv1jhOQp"
// var worldDataHistoryURL = "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=MSFT&apikey=30Y6LPCCQV16RA06"

var symbols100 = ["MSFT", "AMZN", "FB", "BRK-B", "JPM", "GOOG", "GOOGL", "JNJ", "XOM", "BAC", "V", "UNH", "WFC", "PFE", "T", "HD", "CVX", "VZ", "INTC", "CSCO", "PG", "MA", "BA", "MRK", "C", "KO", "NVDA", "CMCSA", "DIS", "DWDP", "NFLX", "PEP", "ABBV", "ORCL", "WMT", "AMGN", "ADBE", "MDT", "MCD", "MMM", "IBM", "PM", "HON", "ABT", "UNP", "MO", "GE", "TXN", "ACN", "CRM", "NKE", "PYPL", "COST", "QCOM", "LLY", "GILD", "BMY", "UTX", "TMO", "BKNG", "SLB", "LOW", "AVGO", "COP", "UPS", "USB", "GS", "CAT", "NEE", "LMT", "AXP", "CVS", "BIIB", "SBUX", "BDX", "EOG", "TJX", "ANTM", "PNC", "MS", "CELG", "AMT", "AET", "CSX", "AGN", "ADP", "DHR", "CB", "ISRG", "MDLZ", "OXY", "MU", "SCHW", "FDX", "CME", "BLK", "CL", "WBA", "CHTR"];

var delay = 0;

var linkCreator = (stockSymbol, apiKeyArrPosition) => {
  console.log(apiKeyArrPosition, "pozitie folosita pentru array");
  return "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + stockSymbol + "&interval=1min&apikey=" + apiKeys[apiKeyArrPosition];
};

var linkCreatorWeekly = (stockSymbol, apiKeyArrPosition) => {
  console.log(apiKeyArrPosition, "pozitie folosita pentru array");
  return "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=" + stockSymbol + "&apikey=" + apiKeys[apiKeyArrPosition];
};


//--------------------------------------------------------
// FUNCTION pearsonCorrelation
//--------------------------------------------------------
function pearsonCorrelation(independent, dependent) {
  // covariance
  let independent_mean = arithmeticMean(independent);
  let dependent_mean = arithmeticMean(dependent);
  let products_mean = meanOfProducts(independent, dependent);
  let covariance = products_mean - (independent_mean * dependent_mean);

  // standard deviations of independent values
  let independent_standard_deviation = standardDeviation(independent);

  // standard deviations of dependent values
  let dependent_standard_deviation = standardDeviation(dependent);

  // Pearson Correlation Coefficient
  let rho = covariance / (independent_standard_deviation * dependent_standard_deviation);

  return rho;
}

//--------------------------------------------------------
// FUNCTION arithmeticMean
//--------------------------------------------------------
function arithmeticMean(data) {
  let total = 0;

  // note that incrementing total is done within the for loop
  for (let i = 0, l = data.length; i < l; total += data[i], i++);

  return total / data.length;
}

//--------------------------------------------------------
// FUNCTION mean_of_products
//--------------------------------------------------------
function meanOfProducts(data1, data2) {
  let total = 0;

  // note that incrementing total is done within the for loop
  for (let i = 0, l = data1.length; i < l; total += (data1[i] * data2[i]), i++);

  return total / data1.length;
}

//--------------------------------------------------------
// FUNCTION standardDeviation
//--------------------------------------------------------
function standardDeviation(data) {
  let squares = [];

  for (let i = 0, l = data.length; i < l; i++) {
    squares[i] = Math.pow(data[i], 2);
  }

  let mean_of_squares = arithmeticMean(squares);
  let mean = arithmeticMean(data);
  let square_of_mean = Math.pow(mean, 2);
  let variance = mean_of_squares - square_of_mean;
  let std_dev = Math.sqrt(variance);

  return std_dev;
}

//--------------------------------------------------------
// GET DATA FUNCTIONS AND DEFINITIONS
//--------------------------------------------------------


//--------------------------------------------------------

function getValuesFromData(data) {
  var timeSeries = data['Time Series (1min)'];
  var result = [];
  var closeEntries = [];

  for (var key in timeSeries) {
    if (timeSeries.hasOwnProperty(key)) {
      result.push(timeSeries[key]);
    }
  }

  for (i = 0; i < result.length; i++) {
    closeEntries.push(parseFloat(result[i][Object.keys(result[i])[3]]).toFixed(4))
  }
  // console.log("+++++", result);
  return closeEntries.reverse();
}

// getValuesFromDataWorldData

function getValuesFromDataWorldData(data) {
  var timeSeries = data['history'];
  var result = [];
  var closeEntries = [];

  for (var key in timeSeries) {
    if (timeSeries.hasOwnProperty(key)) {
      result.push(timeSeries[key]);
    }
  }

  for (i = 0; i < result.length; i++) {
    closeEntries.push(parseFloat(result[i][Object.keys(result[i])[3]]).toFixed(4))
  }
  console.log("+++++", result);
  return closeEntries.reverse();
}

//--------------------------------------------------------
// Wait for elements

function waitForElement() {
  if ((symbolDataArr.length == symbolArr.length * 2)) {
    //variable exists, do what you want
    // console.log(symbolArr[i], "Stock value:", stockValuesArray);
    // console.log("market index ETF = VOO:", stockMarketArray);
    // var rho = pearsonCorrelation(stockValuesArray.map(x => parseFloat(x)), stockMarketArray.map(x => parseFloat(x)));
    // console.log("- din script JS - Corelatia este: ", rho);
    console.log("+++ data arr de arr ", symbolDataArr);
    arrCorelator(symbolDataArr);

  }
  else {
    setTimeout(waitForElement, 1500);
  }
}

//--------------------------------------------------------
// AJAX SUCCESS TO BE DELAYED

function processAjaxCallToBeDelayed(data, url, symbolReceived) {
  var minute = new Date().getMinutes();
  var secunde = new Date().getSeconds();
  console.log(url, ", din doAjax, la minutul:", minute, ":", secunde);

  var symbol = symbolReceived // data['Meta Data']['2. Symbol']

  stockValuesArray = getValuesFromData(data);
  if (stockValuesArray.length == 0) {
    //stockValuesArray = stockValuesArray.push((data));
    console.log(data);
    // doAjax(url, symbolReceived);

  }
  symbolDataArr.push(symbolReceived);
  symbolDataArr.push(stockValuesArray);

  // symbolReceived = "FAKE";
  // var lastRefreshed = data['Meta Data']['3. Last Refreshed']
  // var lastTradePriceOnly = data['Time Series (1min)'][lastRefreshed]['4. close']


  // console.log("*****", getValuesFromData(data));
  // console.log(data);

  // var lastVolume = data['Time Series (1min)'][lastRefreshed]['5. volume']
  //console.log(lastTradePriceOnly);

  // $('#stockSymbol').html(symbol);
  // $('#stockAsk').html(lastTradePriceOnly);
  // $('#stockVolume').html(lastVolume);
  // $("#stockIndicator").hide();

}

//--------------------------------------------------------
// CALCULATE THE CORRELATIONS AND PRINT THEM
function arrCorelator(symbolDataArr) {
  var internalCorrelation = 1;
  var correlationArr = [];
  for (i = 0; i < symbolDataArr.length; i++) {

    if (i % 2 == 1) {
      var indexCorrelation = pearsonCorrelation(symbolDataArr[i].map(x => parseFloat(x)), stockMarketArray.map(x => parseFloat(x)));
      correlationArr.push(symbolDataArr[i - 1] + " si S&P 500");
      correlationArr.push(indexCorrelation);
      console.log("corelatie intre ", symbolDataArr[i - 1], " si S&P 500 este ", indexCorrelation);
      for (j = 1; j < symbolDataArr.length; j += 2) {
        if (i != j) {
          console.log("i si j: ", i, j) //, "i ->", symbolDataArr[i], "j ->", symbolDataArr[j - 1]);

          internalCorrelation = pearsonCorrelation(symbolDataArr[i].map(x => parseFloat(x)), symbolDataArr[j].map(x => parseFloat(x)));
          console.log(symbolDataArr[i - 1], " & ", symbolDataArr[j - 1], " - correlation coefficient = ", internalCorrelation);
        }

      }
    }

  }


}

//--------------------------------------------------------
// GET SYMBOL DATA
//--------------------------------------------------------

function doAjax(url, symbolReceived, delayExtender) {
  $.ajax({
    url: url,
    dataType: 'json',
    contentType: "application/json",
    success: function (response) {
      setTimeout(function () {
        processAjaxCallToBeDelayed(response, url, symbolReceived);
      }, delay++ * 0000);
    }



    // success: function (data) {
    //   var delay = 0;

    //   setTimeout(processAjaxCallToBeDelayed(data, url, symbolReceived), delay++ * 13000);

    //   // console.log("** din functie stock", stockValuesArray);

    // }
  });
}

//--------------------------------------------------------
// GET MARKET REFERENCE DATA
//--------------------------------------------------------
function doMarketAjax(url) {
  $.ajax({
    url: url,
    dataType: 'json',
    contentType: "application/json",
    success: function (data) {
      stockMarketArray = getValuesFromData(data);
      // console.log("** din functie market", stockMarketArray);

      // return marketArray;

    }
  });
}

//--------------------------------------------------------
// GET MARKET REFERENCE DATA
//--------------------------------------------------------
function doWorldDataAjax(url) {
  // $.ajax({
  //   url: url,
  //   dataType: 'json',
  //   contentType: "application/json",
  //   success: function (data) {
  //     stockMarketArray = getValuesFromDataWorldData(data);
  //     console.log("** din functie market", stockMarketArray);

  //     // return marketArray;

  //   }
  // });

  $.ajax({
    url: url,
    type: "get", 
    success: function(response) {
        // console.log("** din functie market", response);
        stockMarketArray = getValuesFromDataWorldData(response);
        console.log("** din functie market", stockMarketArray);

        return marketArray;
    },
    error: function(xhr) {
        console.log("o eroare pe la server");

    }
  });

}


//--------------------------------------------------------
//--------------------------------------------------------
//-------------------------MAIN STUFF-------------------------------
//--------------------------------------------------------
//--------------------------------------------------------


$(document).ready(function () {
  $("#stockIndicator").show();

  //initiate an array of symbols and their data
  symbolArr = ["FB", "AAPL", "AMZN", "NFLX"];
  symbolArr = symbols100;
  symbolDataArr = [];

  //get the market array 
  // var stockMarketArray = doMarketAjax(theMarketURL);

  // get each stock and compare correlation with the market 
  // for (var i = 0; i < symbolArr.length; i++) {
  //   // console.log("++", symbolArr[i], linkCreator(symbolArr[i]));

  //   var stockValuesArray;
  //   var delay = 0;
  //   doAjax(linkCreatorWeekly(symbolArr[i], (i % 4)), symbolArr[i], i);
  // }

  //--------------------------------------------------------
  // WAIT FOR ELEMENTS AND THEN START CALCULATIONS

  // waitForElement();

  doWorldDataAjax(worldDataHistoryURL);


});
//--------------------------------------------------------
//--------------------------------------------------------
//-------------------------END MAIN-------------------------------
//--------------------------------------------------------



//--------------------------------------------------------
// SOME WEIRD STUFF - DAI CLICK SI CAUTA SIMBOLUL PE UNDEVA - DE VAZUT 
$('.ajaxtrigger').click(function () {
  $("#stockIndicator").show();
  doAjax(theURL);
  return false;
});

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
}
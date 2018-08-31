// var theURL = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=30Y6LPCCQV16RA06";
var theURL = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=FB&interval=1min&apikey=30Y6LPCCQV16RA06";


$(document).ready(function () {
  $("#stockIndicator").show();
  doAjax(theURL);

  $('.ajaxtrigger').click(function () {
    $("#stockIndicator").show();
    doAjax(theURL);
    return false;
  });

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
  }

  function doAjax(url) {
    $.ajax({
      url: url,
      dataType: 'json',
      contentType: "application/json",
      success: function (data) {

        var symbol = data['Meta Data']['2. Symbol']
        var lastRefreshed = data['Meta Data']['3. Last Refreshed']
        var lastTradePriceOnly = data['Time Series (1min)']

        var timeSeries = data['Time Series (1min)'];
        var result = [];
        var closeEntries = [];

        for (var key in timeSeries) {
          if (timeSeries.hasOwnProperty(key)) {
            result.push(timeSeries[key]);
          }
        }

        for (i = 0; i < result.length; i++) {
          closeEntries.push(result[i][Object.keys(result[i])[3]])
        }

        console.log(closeEntries);
        console.log(result);

        var lastVolume = data['Time Series (1min)'][lastRefreshed]['5. volume']
        //console.log(lastTradePriceOnly);

        $('#stockSymbol').html(symbol);
        $('#stockAsk').html(lastTradePriceOnly);
        $('#stockVolume').html(lastVolume);
        $("#stockIndicator").hide();
      }
    });
  }
});
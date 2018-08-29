var theURL = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=demo";

$(document).ready(function() {
  $("#stockIndicator").show();
  doAjax(theURL);

  $('.ajaxtrigger').click(function() {
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
      success: function(data) {

        var symbol = data['Meta Data']['2. Symbol']
        var lastRefreshed = data['Meta Data']['3. Last Refreshed']
        var lastTradePriceOnly = data['Time Series (1min)'][lastRefreshed]['4. close']
        var lastVolume = data['Time Series (1min)'][lastRefreshed]['5. volume']

        $('#stockSymbol').html(symbol);
        $('#stockAsk').html(lastTradePriceOnly);
        $('#stockVolume').html(numberWithCommas(lastVolume));
        $("#stockIndicator").hide();
      }
    });
  }
});
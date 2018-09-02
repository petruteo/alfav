var theURL = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=30Y6LPCCQV16RA06";
var theURL2 = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=^GSPC&interval=1min&apikey=30Y6LPCCQV16RA06";
var delay = 0;

$.ajax({

    url: theURL,
    dataType: 'json',
    contentType: "application/json",
    success: function (response) {
        setTimeout(function () {
            console.log(response);
        }, delay++ * 13000);
    }
});

$.ajax({

    url: theURL2,
    dataType: 'json',
    contentType: "application/json",
    success: function (response) {
        setTimeout(function () {
            console.log(response);
        }, delay++ * 13000);
    }
});

$.ajax({

    url: theURL,
    dataType: 'json',
    contentType: "application/json",
    success: function (response) {
        setTimeout(function () {
            console.log(response);
        }, delay++ * 13000);
    }
});


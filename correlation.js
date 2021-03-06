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



// var stock = ["175.4400", "175.4200", "175.3800", "175.3500", "175.3501", "175.4000", "175.4800", "175.3800", "175.3400", "175.3500", "175.3600", "175.4300", "175.4000", "175.4400", "175.4000", "175.4100", "175.4000", "175.4500", "175.4200", "175.4200", "175.4600", "175.4100", "175.3500", "175.2800", "175.2467", "175.3000", "175.3216", "175.2933", "175.3200", "175.2900", "175.4000", "175.3200", "175.2800", "175.1600", "175.1100", "175.0951", "175.1100", "175.1200", "175.1200", "175.1100", "175.2000", "175.2202", "175.3100", "175.3902", "175.4500", "175.4400", "175.5000", "175.5570", "175.4700", "175.4700", "175.4118", "175.3950", "175.4300", "175.5100", "175.5300", "175.6000", "175.5900", "175.5750", "175.5900", "175.4800", "175.4600", "175.3300", "175.2700", "175.1951", "175.2449", "175.3300", "175.2300", "175.1913", "175.2500", "175.1600", "175.3401", "175.2500", "175.2300", "175.3000", "175.4200", "175.3900", "175.4300", "175.5100", "175.4499", "175.4900", "175.4400", "175.5000", "175.5700", "175.5400", "175.6200", "175.6700", "175.6400", "175.5800", "175.6050", "175.6000", "175.7350", "175.6500", "175.7800", "175.7300", "175.7400", "175.7500", "175.6900", "175.6825", "175.6699", "175.7200"];
// var wholeMarket = ["266.0100", "266.0200", "265.9600", "265.9000", "265.9100", "265.8800", "265.9900", "265.9800", "265.9800", "266.0020", "266.0000", "266.0200", "266.0700", "266.0360", "266.0781", "266.0699", "266.0400", "266.1136", "266.0900", "266.0500", "266.1100", "266.0500", "266.0516", "266.0500", "266.0600", "266.1100", "266.1200", "266.0800", "266.1500", "266.1600", "266.2700", "266.2450", "266.1600", "266.1400", "266.1100", "266.1600", "266.1900", "266.1600", "266.1700", "266.0800", "266.1300", "266.2300", "266.2600", "266.3100", "266.3100", "266.3600", "266.3600", "266.3400", "266.3000", "266.3176", "266.3100", "266.2800", "266.3100", "266.3100", "266.3400", "266.4000", "266.3900", "266.4148", "266.4400", "266.4450", "266.3900", "266.2000", "266.1900", "266.1800", "266.2101", "266.2000", "266.1000", "266.0300", "266.0900", "266.0800", "266.2900", "266.2700", "266.2200", "266.3100", "266.4300", "266.5000", "266.5700", "266.6400", "266.6350", "266.6450", "266.5000", "266.5900", "266.6400", "266.5500", "266.5500", "266.6600", "266.5400", "266.4700", "266.5100", "266.5600", "266.6400", "266.6300", "266.7400", "266.7198", "266.7300", "266.7100", "266.7610", "266.7600", "266.8100", "266.6900"];

var stock = [175.4400, 175.4200, 175.3800, 175.3500, 175.3501, 175.4000, 175.4800, 175.3800, 175.3400, 175.3500, 175.3600, 175.4300, 175.4000, 175.4400, 175.4000, 175.4100, 175.4000, 175.4500, 175.4200, 175.4200, 175.4600, 175.4100, 175.3500, 175.2800, 175.2467, 175.3000, 175.3216, 175.2933, 175.3200, 175.2900, 175.4000, 175.3200, 175.2800, 175.1600, 175.1100, 175.0951, 175.1100, 175.1200, 175.1200, 175.1100, 175.2000, 175.2202, 175.3100, 175.3902, 175.4500, 175.4400, 175.5000, 175.5570, 175.4700, 175.4700, 175.4118, 175.3950, 175.4300, 175.5100, 175.5300, 175.6000, 175.5900, 175.5750, 175.5900, 175.4800, 175.4600, 175.3300, 175.2700, 175.1951, 175.2449, 175.3300, 175.2300, 175.1913, 175.2500, 175.1600, 175.3401, 175.2500, 175.2300, 175.3000, 175.4200, 175.3900, 175.4300, 175.5100, 175.4499, 175.4900, 175.4400, 175.5000, 175.5700, 175.5400, 175.6200, 175.6700, 175.6400, 175.5800, 175.6050, 175.6000, 175.7350, 175.6500, 175.7800, 175.7300, 175.7400, 175.7500, 175.6900, 175.6825, 175.6699, 175.7200];
var wholeMarket = [266.0100, 266.0200, 265.9600, 265.9000, 265.9100, 265.8800, 265.9900, 265.9800, 265.9800, 266.0020, 266.0000, 266.0200, 266.0700, 266.0360, 266.0781, 266.0699, 266.0400, 266.1136, 266.0900, 266.0500, 266.1100, 266.0500, 266.0516, 266.0500, 266.0600, 266.1100, 266.1200, 266.0800, 266.1500, 266.1600, 266.2700, 266.2450, 266.1600, 266.1400, 266.1100, 266.1600, 266.1900, 266.1600, 266.1700, 266.0800, 266.1300, 266.2300, 266.2600, 266.3100, 266.3100, 266.3600, 266.3600, 266.3400, 266.3000, 266.3176, 266.3100, 266.2800, 266.3100, 266.3100, 266.3400, 266.4000, 266.3900, 266.4148, 266.4400, 266.4450, 266.3900, 266.2000, 266.1900, 266.1800, 266.2101, 266.2000, 266.1000, 266.0300, 266.0900, 266.0800, 266.2900, 266.2700, 266.2200, 266.3100, 266.4300, 266.5000, 266.5700, 266.6400, 266.6350, 266.6450, 266.5000, 266.5900, 266.6400, 266.5500, 266.5500, 266.6600, 266.5400, 266.4700, 266.5100, 266.5600, 266.6400, 266.6300, 266.7400, 266.7198, 266.7300, 266.7100, 266.7610, 266.7600, 266.8100, 266.6900];

var rho = pearsonCorrelation(stock, wholeMarket);
console.log("Corelatia este: ", rho);

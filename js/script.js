var url = 'https://restcountries.eu/rest/v2/name/';
var urlRegion = 'https://restcountries.eu/rest/v2/region/';
var urlCapital = 'https://restcountries.eu/rest/v2/capital/';
var countriesList = $('#countries');

$('#search').click(searchCountries);
$('#search-region').click(searchByRegion);
$('#search-capital').click(searchByCapital);

function searchCountries() {
    var countryName = $('#country-name').val();
    if (!countryName.length) countryName = 'Poland';
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
}

function searchByRegion() {
    var regionName = $('#country-name').val();
    if (!regionName.length) regionName = 'Europe';
    var url = urlRegion + regionName;
    $.getJSON(url, showCountriesList);
}

function searchByCapital() {
    var capitalName = $('#country-name').val();
    if (!capitalName.length) capitalName = 'Warsaw';
    var url = urlCapital + capitalName;
    $.getJSON(url, showCountriesList);
}

function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item) {
        var itemClass = item.alpha3Code;
        $('<ul>').appendTo(countriesList).addClass(itemClass);
        $('<h4>').text(item.name).appendTo('.' + itemClass);
        $('<img>').attr('src',item.flag).appendTo('.' + itemClass);
        $('<li>').text('ISO codes: ' + itemClass + ', ' + item.alpha2Code)
            .appendTo('.' + itemClass);
        $('<li>').text('capital city: ' + item.capital)
            .appendTo('.' + itemClass);
    });
}

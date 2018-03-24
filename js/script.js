var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
    var countryName = $('#country-name').val();
    if (!countryName.length) countryName = 'Poland';
//    var countryUrl = url + countryName;

//    $.getJSON(countryUrl, showCountriesList);
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
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

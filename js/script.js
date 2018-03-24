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
        $('<li>').text(item.name + ' | capital city: ' + item.capital).appendTo(countriesList).text();
    });
}

var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');
var element = 0;

$('#search').click(searchCountries);

function searchCountries() {
    var countryName = $('#country-name').val();
    if(!countryName.length) countryName = 'Poland';
    $.ajax({
        url: url  + countryName,
        type: 'GET',
        success: showCountriesList
    });

}
function showCountriesList(resp) {
    var countries = []; 
    
    resp.forEach(function(item) {
        countries.push(
            $('<li>')
                .append($('<p>').text("Country: " + item.name))
                .append($('<p>').text("Capital: " + item.capital))
                .append($('<p>').text("Region: " + item.region))
                .append($('<p>').text("Population: " + item.population))
                .append($('<img>').attr("src", item.flag))
        );
    });

    countriesList.empty().append(countries);
}

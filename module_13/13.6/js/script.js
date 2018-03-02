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
    //Ostatnim krokiem jest napisanie samej logiki wyszukiwania. 
    //Do tego celu użyjemy jQuery'owego ajaxa. 
    //Żądanie spróbujcie skonstruować sami na podstawie dokumentacji.
}
function showCountriesList(resp) {
    var countrie = $('#countrie');
    countriesList.empty();
    var i = 0;
    element = $("el" + i);
    console.log(element);
    resp.forEach(function(item) {
        $('<li id="+'element'+">').appendTo(countriesList);
        $('<p>').text("Country: " + item.name).appendTo(element);
        $('<p>').text("Capital: " + item.capital).appendTo(element);
        $('<img>').attr("src",item.flag).appendTo(element);
        i += 1;
    });
}
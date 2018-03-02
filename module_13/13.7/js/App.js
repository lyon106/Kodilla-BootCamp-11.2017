var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': '2770',
  'X-Auth-Token': '26ac24773467a6bb1724e6a7e7574959'
};

$.ajaxSetup({
	headers: myHeaders
});

$.ajax({
    url: baseUrl + '/board',
    method: 'GET',
    success: function(response) {
      setupColumns(response.columns);
    }
});

function setupColumns(columns) {
    columns.forEach(function (column) {
      var col = new Column(column.id, column.name);
      board.createColumn(col);
      setupCards(col, column.cards);
    });
}
function setupCards(col, cards) {
	cards.forEach(function (card) {
        var cardObj = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
    	col.createCard(cardObj);
  	})
}

/*
Ostatnim elementem jest dodanie karty do kolumny za pomocą metody createCard(), którą tworzyliśmy w module 10 (można ją znaleźć w pliku Column.js).

To koniec modyfikowania pliku App.js. Są tutaj jednak pewne zmiany, których trzeba dokonać w plikach Card.js i Column.js. Przejdźmy najpierw do pliku Column.js.
*/
(function () {
  if (typeof TTT === "undefined") {
    window.TTT = window.TTT || {};
  }


  var View = TTT.View = function (game, $el) {
    this.game = game;
    this.board = $el
  };

  View.prototype.bindEvents = function () {
  };

  View.prototype.makeMove = function ($square) {
  };

  View.prototype.setupBoard = function () {


    for(var row = 1; row < 4; row++) {
      var $row = $("<div class='row'></div>");
      for(var col = 1; col < 4; col++) {
        var $square = $("<div class='square'></div>");
        $square.attr("data-colid", col);
        $square.attr("data-rowid", row);
        $row.append($square);
      }
      this.board.append($row);
    }
    // debugger
  };

})();

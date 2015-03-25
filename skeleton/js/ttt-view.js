(function () {
  if (typeof TTT === "undefined") {
    window.TTT = window.TTT || {};
  }


  var View = TTT.View = function (game, $el) {
    this.game = game;
    this.board = $el
  };

  View.prototype.bindEvents = function () {
    var that = this;
    this.board.on("click", ".square", function(pos){
      var $square = $(event.target);
      that.makeMove.bind(that)($square);
    });
  };

  View.prototype.makeMove = function ($square) {
    var position = [$square.data("rowid"), $square.data("colid")];
    var mark = this.game.currentPlayer;
    if (!this.game.board.isEmptyPos(position)) {
      alert("Not an empty square!");
    } else {
      this.game.playMove(position);
      if ( mark === "x") {
        $square.attr("class", "square selected xmark");
      } else {
        $square.attr("class", "square selected omark");
      }
      $square.html(mark);
    }
    if (this.game.board.isOver()) {

      var $footer = $("footer");
      var $winMessage = $("<div class='winline'>Congratulations, you are the winner " + mark + "</div>")
      $footer.append($winMessage);
      this.board.off();
    }
  };

  View.prototype.setupBoard = function () {
    for(var row = 0; row < 3; row++) {
      var $row = $("<div class='row'></div>");
      for(var col = 0; col < 3; col++) {
        var $square = $("<div class='square'></div>");
        $square.attr("data-colid", col);
        $square.attr("data-rowid", row);
        $row.append($square);
      }

      this.board.append($row);
      $row.addClass("group");
    }
    // debugger
  };

})();

import {Chess} from "./js/legal/chess.js";


var board = null
var game = new Chess()


var whiteSquareGrey = '#a9a9a9'
var blackSquareGrey = '#696969'


window.addEventListener('load', function () {
// Connection opened
    // Send a ping event every 10 seconds

    function removeGreySquares () {
      $('#myBoard .square-55d63').css('background', '')
    }

    function greySquare (square) {
      var $square = $('#myBoard .square-' + square)

      var background = whiteSquareGrey
      if ($square.hasClass('black-3c85d')) {
        background = blackSquareGrey
      }

      $square.css('background', background)
    }


    function onDragStart (source, piece) {
      // do not pick up pieces if the game is over
      if (game.game_over()) return false


      // only pick up pieces for White
      if (piece.search(/^b/) !== -1) return false
    }

    function onDrop (source, target) {
      removeGreySquares()

      // see if the move is legal
      var move = game.move({
        from: source,
        to: target,
        promotion: 'q' // NOTE: always promote to a queen for example simplicity
      })

      // illegal move
      if (move === null) return 'snapback'

      if (game.game_over()) {
        console.log("game over")
      }
      if (game.in_checkmate()) {
        console.log("checkmate")
      }

      document.getElementById('loading').style.visibility = "visible";
      fetch("http://localhost:8000/chess", {
        method: "POST",
        body: JSON.stringify({
          fen: game.fen()
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then((response) => response.json())
        .then((json) => {
          let data = json.response;
          var mv;
          if (data.length == 4) {
            mv = {
              from: json.response.substring(0,2),
              to: json.response.substring(2, 4),
            }

        }
        else {
          mv = {
            from: json.response.substring(0,2),
            to: json.response.substring(2, 4),
            promotion: json.response.substring(4, 5)
          }
        }
          console.log("AI move is:" + JSON.stringify(mv))
          game.move(mv);
          board.position(game.fen())
          document.getElementById('loading').style.visibility = "hidden";
        } 
      );
    }

    function onMouseoverSquare (square, piece) {
      // get list of possible moves for this square
      var moves = game.moves({
        square: square,
        verbose: true
      })

      // exit if there are no moves available for this square
      if (moves.length === 0) return

      // highlight the square they moused over
      greySquare(square)

      // highlight the possible squares for this piece
      for (var i = 0; i < moves.length; i++) {
        greySquare(moves[i].to)
      }
    }

    function onMouseoutSquare (square, piece) {
      removeGreySquares()
    }

    function onSnapEnd () {
      board.position(game.fen())
      if (game.in_checkmate()) {
        if (game.turn() === "w") {
          alert("You lose!")
        }
        else {
          alert("You win!")
        }
      }
      if (game.in_draw()) {
        alert("Draw!")
      }
    }

    function onMoveEnd (oldPos, newPos) {
      if (game.in_checkmate()) {
        if (game.turn() === "w") {
          alert("You lose!")
        }
      }
    }


    var config = {
      draggable: true,
      position: 'start',
      onDragStart: onDragStart,
      onDrop: onDrop,
      onMouseoutSquare: onMouseoutSquare,
      onMouseoverSquare: onMouseoverSquare,
      onSnapEnd: onSnapEnd,
      onMoveEnd: onMoveEnd,
    }

    const board = ChessBoard('myBoard', config);

});

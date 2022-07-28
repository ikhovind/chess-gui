import {Chess} from "./js/legal/chess.js";


var board = null
var game = new Chess()


var whiteSquareGrey = '#a9a9a9'
var blackSquareGrey = '#696969'


window.addEventListener('load', function () {
  var socket = new WebSocket('ws://34.88.111.133:3389');

// Connection opened
  socket.addEventListener('open', function (event) {
// Listen for messages
    socket.addEventListener('message', function (event) {
      var mv;
      if (event.data.length === 4) {
        mv = {
          from: event.data.substring(0,2),
          to: event.data.substring(2,4)
        }
        game.move(mv);
        board.position(game.fen())
      }
      else {
        console.log("second: " + event.data);
        mv = {
          from: event.data.substring(2),
          to: event.data.substring(2, 4),
          promotion: event.data.substring(4, 5)
        }
        game.move(mv);
        board.position(game.fen())
      }
      document.getElementById('loading').style.visibility = "hidden";
    });


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

      // make random legal move for black
      //window.setTimeout(makeRandomMove, 250);
      socket.send(source + target);
      document.getElementById('loading').style.visibility = "visible";
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
      if (game.game_over() && game.in_check()) {
        alert("You win!")
      }
    }

    var config = {
      draggable: true,
      position: 'start',
      onDragStart: onDragStart,
      onDrop: onDrop,
      onMouseoutSquare: onMouseoutSquare,
      onMouseoverSquare: onMouseoverSquare,
      onSnapEnd: onSnapEnd
    }

    const board = ChessBoard('myBoard', config);

  });
})


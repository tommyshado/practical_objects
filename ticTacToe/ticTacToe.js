// YOUR CODE BELOW
const ticTacToe = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ],
  move: function(char, arrayGrab, innerElem) {
    if (this.board[arrayGrab][innerElem] === null){
      this.board[arrayGrab][innerElem] = char;
      return this.board;
    }
  },
  clear: function() {
    this.board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]
    return this.board;
  }
}

// test 

describe('ticTacToe', () => {
  // save a stringified copy of your ticTacToe board
  let boardCopy = JSON.stringify(ticTacToe.board);

  // before each test, reset the board with it's initial values
  beforeEach(() => {
    ticTacToe.board = JSON.parse(boardCopy);
  })

  it('is an object', () => {
    expect(typeof ticTacToe).toEqual('object');
  });

  describe('board', () => {
    it('is a propery of ticTacToe', () => {
      expect('board' in ticTacToe).toEqual(true);
    });

    it('is an array', () => {
      expect(Array.isArray(ticTacToe.board)).toEqual(true);
    });

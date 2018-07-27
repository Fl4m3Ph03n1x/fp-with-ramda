const getWinningMove = require("../../src/assignment-02");

test('Find connect 4 left diagonal', ( ) => {

  const grid = [
    [ null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null ],
    [ "®" , "®" , null, null, null, null, null ],
    [ "©" , "®" , null, null, "©" , "®" , "®"  ],
    [ "®" , "®" , "®" , "©" , "®" , "©" , "©"  ],
    [ "®" , "©" , "©" , "®" , "©" , "®" , "©"  ],
  ];

  const result = [
    [2, 0],
    [3, 1],
    [4, 2],
    [5, 3]
  ];

  expect( getWinningMove( grid ) ).toEqual( result );
});

test('Find connect 4 right diagonal', ( ) => {

  const grid = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, "®" , null, null, null, null, "®" ],
    ["©" , "©" , null, null, "©" , "®" , "®" ],
    ["®" , "®" , "®" , "©" , "®" , "©" , "©" ],
    ["®" , "©" , "©" , "®" , "©" , "®" , "©" ],
  ];

  const result = [
    [2, 6],
    [3, 5],
    [4, 4],
    [5, 3]
  ];

  expect( getWinningMove( grid ) ).toEqual( result );
});

test('Find connect 4 horizontal', ( ) => {
  const grid = [
    [ null, null, null, null, null, null, null  ],
    [ null, null, null, null, null, null, null  ],
    [ null, "®" , null, null, null, null, "®"   ],
    [ "©" , "©" , "©" , "©" , null, null, "®"   ],
    [ "®" , "®" , "®" , "©" , "®" , "©" , "©"   ],
    [ "®" , "©" , "©" , "®" , "©" , "®" , "©"   ],
  ];

  const result = [
    [3, 0],
    [3, 1],
    [3, 2],
    [3, 3]
  ];

  expect( getWinningMove( grid ) ).toEqual( result );
});

test('Find connect 4 vertical', ( ) => {
  const grid = [
    [ null, null, null, null, null, null, null  ],
    [ null, null, null, null, null, null, null  ],
    [ "®",  "®" , null, null, null, null, "®"   ],
    [ "®" , "©" , "©" , "©" , null, null, "®"   ],
    [ "®" , "®" , "®" , "©" , "®" , "©" , "©"   ],
    [ "®" , "©" , "©" , "®" , "©" , "®" , "©"   ],
  ];

  const result = [
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0]
  ];

  expect( getWinningMove( grid ) ).toEqual( result );
});

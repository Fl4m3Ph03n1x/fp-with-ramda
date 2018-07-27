const R = require( "ramda" );

const notNil = R.complement( R.isNil );
const notEmpty = R.complement( R.isEmpty );
const mapIndexed = R.addIndex( R.map );
const reduceIndexed = R.addIndex( R.reduce );

const byRow = obj => R.pipe(
  R.head,
  R.eqProps( "row", obj )
);

const byColumn = obj => R.pipe(
  R.head,
  R.eqProps( "column", obj )
);

const byRightDiagonal = obj => R.any( 
  ({ row, column }) => {
    const lowRow = obj.row + 1,
      leftCol = obj.column - 1,
      upRow = obj.row - 1,
      rightCol = obj.column + 1;

    return ( row === lowRow && column === leftCol ) || ( row === upRow && column === rightCol );
  } 
);

const byLeftDiagonal = obj => R.any( 
  ({ row, column }) => {
    const lowRow = obj.row + 1,
      leftCol = obj.column + 1,
      upRow = obj.row - 1,
      rightCol = obj.column - 1;

    return ( row === lowRow && column === leftCol ) || ( row === upRow && column === rightCol );
  } 
);

const groupMovesBy = predicate => R.reduce(
  ( acc, obj ) => {
    
    const listIndex = R.findIndex( predicate(obj), acc );

    if( listIndex === -1 )
      return R.append( [obj], acc );

    return R.adjust( R.append( obj ), listIndex ,acc);
  },
  []
);

const getRows = groupMovesBy( byRow );
const getColumns = groupMovesBy( byColumn );
const getRightDiagonals = groupMovesBy( byRightDiagonal );
const getLeftDiagonals = groupMovesBy( byLeftDiagonal );

const calcWinningMove = R.pipe(
  R.map(
    R.pipe(
      R.groupWith( ( a, b ) => notNil( a.value ) && notNil( b.value ) && R.eqProps("value", a, b) ),
      R.filter( array => array.length >= 4 )
    ), 
  ),
  R.filter( notEmpty ),
  R.chain( R.chain( R.map( ({ row, column }) => [ row, column ] ) ) )
);

const convertGrid = reduceIndexed(
  ( acc, array, i ) => [...acc, ...mapIndexed( ( value, j ) => ( { row: i, column: j, value } ), array ) ],
  [ ]
);

const getWinningMove = R.pipe(
  convertGrid,
  grid => [
    calcWinningMove( getRows( grid ) ),
    calcWinningMove( getColumns( grid ) ),
    calcWinningMove( getRightDiagonals( grid ) ),
    calcWinningMove( getLeftDiagonals( grid ) )
  ],
  R.filter( notEmpty ),
  R.unnest
);

module.exports = getWinningMove;
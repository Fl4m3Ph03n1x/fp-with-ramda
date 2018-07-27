const { pipe, converge, path } = require("ramda");

const hoursDiff = ( t1, t2 ) => ( new Date( t2 * 1000 ) - new Date( t1 * 1000 ) ) / 36e5;

const getDayLightHours = pipe(
  converge( hoursDiff , [ path( [ "sys", "sunrise" ] ), path( [ "sys", "sunset" ] ) ] ),
  Math.floor
);

module.exports = getDayLightHours;
// When mocking a third party library, you can NOT do:
// import <library> from <location>. You will get an infinite loop.

// Instead you need to use requireActual:
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
  return moment(timestamp);
};

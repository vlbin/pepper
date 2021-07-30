const classname = (...classes) => {
  let res = classes.reduce((prev, curr) => {
    if (curr instanceof Object) {
      for (let key in curr) {
        if (curr[key] === true) {
          return prev + ' ' + key;
        } else {
          return prev;
        }
      }
    } else {
      return prev + ' ' + curr;
    }
  });
  return res;
};

export default classname;

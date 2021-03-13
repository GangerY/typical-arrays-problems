
exports.min = function min (array) {
  if(array && array.length > 0) {
    let i;
    let res = array[0];
    for(i = 0; i < array.length; i++) {
      if(res > array[i]) {
        res = array[i];
      }
    }
    return res;
  }
  else 
    return 0;
}

exports.max = function max (array) {
  if(array && array.length > 0) {
    let i;
    let res = array[0];
    for(i = 0; i < array.length; i++) {
      if(res < array[i]) {
        res = array[i];
      }
    }
    return res;
  }
  else 
    return 0;
}

exports.avg = function avg (array) {
  if(array && array.length > 0) {
    let i;
    let res = 0;
    for(i = 0; i < array.length; i++) {
      res += array[i];
    }
    return res/i;
  }
  else 
    return 0;
}

const analyzeArray = function (something) {
  let avrg = 0,
    mi = 0,
    ma = 0,
    le = 0;
  let sum = 0;
  if (something.length > 0) {
    mi = something[0];
    ma = something[0];
    le = something.length;
    for (let aThing of something) {
      sum += aThing;
      mi = mi > aThing ? aThing : mi;
      ma = ma < aThing ? aThing : ma;
    }
    avrg = sum / le || 0;
  }
  return {
    average: avrg,
    min: mi,
    max: ma,
    Alength: le,
  };
};

export { analyzeArray };

// for a given range (ex: 10 weeks of data where just 6 are given), returns
// the expected result.

// useful for doing expectations on quarter plans


function expected(range) {
  
  len = range[0].length;
  done = 0;
  sum = 0;
  exp = 0;
  
  for (i = 0; i < len; i++) { 
    
    sum = sum + range[0][i];
    if (range[0][i] != ''){
      done = done + 1;
    };
  };
  
  
  exp = (sum / done) * len;
  return(exp);
};
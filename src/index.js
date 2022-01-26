module.exports = function check(str, bracketsConfig) {
  let pairs = {}; // First, we make hashtable to keep our brackets pairs;
  bracketsConfig.forEach((item) => {
    pairs[item[0]] = item[1];
  });

  let stack = [];
  for (let i = 0; i < str.length; i++) {
    const elem = str[i];

    // Check for same brackets;
    if (pairs[elem] === elem && stack[stack.length - 1] === elem) {
      stack.pop();
      continue;
    }

    // Check for ordinary brackets;
    if (pairs[elem]) {
      stack.push(elem);
    } else {
      if (elem !== pairs[stack.pop()]) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
};

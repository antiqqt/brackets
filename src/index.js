module.exports = function check(str, bracketsConfig) {
  // First, we make hashtable to keep our brackets pairs
  let pairs = {};
  bracketsConfig.forEach((item) => {
    pairs[item[0]] = item[1];
  });

  // Then we implement a stack
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    const elem = str[i];

    // Check for same brackets
    if (pairs[elem] === elem && stack[stack.length - 1] === elem) {
      stack.pop();
      continue;
    }

    // Check for ordinary brackets
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

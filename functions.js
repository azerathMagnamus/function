// DEFINE YOUR FUNCTIONS HERE BASED ON THE PROVIDED CRITERIA
function includes(item, array) {
  j = 0;
  let lengthy = array.length;
  for (n = 0; n < lengthy; n++) {
    if (item === array[n]) {
      j = 5;
      return true;
      console.log("true");
    }
  }
  if (j != 5) {
    return false;
  }
}

function indexOf(item, array) {
  j = 0;
  let lengthy = array.length;
  for (n = 0; n < lengthy; n++) {
    if (item === array[n]) {
      j = 5;
      return n;
      console.log("true");
    }
  }
  if (j != 5) {
    return -1;
  }
}

function reverse(array) {
  j = [];
  let lengthy = array.length;
  for (n = lengthy - 1; n >= 0; n--) {
    g = array[n];
    j.push(g);
  }
  return j;
}
function slice(n1, n2, array) {
  j = [];
  for (n = n1; n < n2; n++) {
    g = array[n];
    j.push(g);
  }
  return j;
}
function concat(array1, array2) {
  j = [];
  let length1 = array1.length;
  for (n = 0; n < length1; n++) {
    g = array1[n];

    j.push(g);
  }
  let length2 = array2.length;
  for (n = 0; n < length2; n++) {
    x = array2[n];

    j.push(x);
  }

  return j;
}

function join(sep, array) {
  p = "";
  let lengthy = array.length;
  for (n = 0; n < lengthy; n++) {
    if (n < lengthy - 1) {
      j = array[n];
      v = j + sep;
      p += v;
    } else {
      b = array[lengthy - 1];
      v = b;
      p += v;
    }
  }
  return p;
}

function max(array) {
  let lengthy = array.length;
  maximum = array[0];
  for (n = 0; n < lengthy; n++) {
    if (array[n] > maximum) {
      maximum = array[n];
    }
  }
  return maximum;
}

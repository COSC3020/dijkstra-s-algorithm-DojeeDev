const fs = require('fs');
  
eval(fs.readFileSync('code.js')+'');

var tests = [
  [
    [ //input 
      [[1, 1], [2,1]],
      [[3, 1]],
      [[3,1], [4,2], [5,2]],
      [],
      [],
      []
    ],
    0, [0, 1, 1, 2, 3, 3] // source node, expected output
  ],
  [
    [
      [[1,7], [3,8]],
      [[0,6], [2,3], [3,6], [5,5], [6,6]],
      [[0,7]],
      [[7,1]],
      [[2,7]],
      [[1,1], [3,4]],
      [[7,6]],
      [[6,7]]
    ],
    0, [0, 7, 10, 8, Infinity, 12, 13, 9]
  ],
  [ // source is an isolated node
    [
      [],
      [[0,1], [3,5]]
    ],
    0, [0, Infinity]
  ]



]

function test(g, s, o) { // o = expected output
  if (JSON.stringify(dijkstra(g,s)) == JSON.stringify(o)) { return true; }
  return false;
}

for (var i = 0; i < tests.length; i++) {
  var t = tests[i];
  if (!(test(t[0], t[1], t[2]))) {
    console.error("counterexample, tests index: " + i);
  }
}
 

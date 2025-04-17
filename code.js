function dijkstra(graph, sourceNode) {
  var distances = new Array(graph.length);
  var unmarked = new Set();

  for (var i = 0; i < graph.length; i++) {
    unmarked.add(i);
  }

  distances.fill(Infinity);
  distances[sourceNode] = 0;

  while (unmarked.size > 0) {

    //find min unmarked vertex
    var min = Infinity; 
    var v = -1;
    for (const vert of unmarked) {
      if (distances[vert] <= min) {
        min = distances[vert];
        v = vert;
      }
    }

    unmarked.delete(v);

    if (min != Infinity) {
      for (var i = 0; i < graph[v].length; i++) { //loop through neighbors of v
        var p = graph[v][i]; // is item of edge list in form [edge index, weight] p for pair
        distances[p[0]] = Math.min(distances[p[0]], distances[v] + p[1]);
      }
    }
  }
  return distances;
}
/*
 sources:
 https://www.geeksforgeeks.org/how-to-iterate-over-set-elements-in-javascript/
*/

// graph format 
/*
[
  [[edge, weight], ...]],
  ...
  ]
*/

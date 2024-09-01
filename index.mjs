function knightMoves(startPos, endPos) {
  let shortestPath;
  let path = [startPos];
  let q = [path];
  while (q.length > 0) {
    let paths = moveKnight(q.shift());
    for (let a = 0; a < paths.length; a++) {
      for (let i = 0; i < paths[a].length; i++) {
        if (paths[a][paths[a].length - 1].toString() == endPos.toString()) {
          shortestPath = paths[a];
          return `You made it in ${
            shortestPath.length
          } moves! Here's your path: ${JSON.stringify(shortestPath)}`;
        }
      }
      q.push(paths[a]);
    }
  }
}

function moveKnight(path) {
  let paths = [];
  const [row, col] = path[path.length - 1];
  const positions = [
    [row + 2, col - 1],
    [row + 2, col + 1],
    [row + 1, col - 2],
    [row + 1, col + 2],
    [row - 2, col - 1],
    [row - 2, col + 1],
    [row - 1, col + 2],
    [row - 1, col - 2],
  ];

  for (let a = 0; a < positions.length; a++) {
    let pathCopy = path.slice();
    if (
      positions[a].every((position) => position >= 0 && position < 8) === true
    ) {
      pathCopy.push(positions[a]);
      paths.push(pathCopy);
    }
  }
  return paths;
}
console.log(knightMoves([3, 3], [4, 3])); // [ [ 3, 3 ], [ 5, 2 ], [ 6, 4 ], [ 4, 3 ] ]

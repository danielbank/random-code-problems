// TEST CASE INPUT:
// [[4,3,1],[3,2,4],[3],[4],[]]

// ************************************************************************
// ************************************************************************

//  OLD BFS SOLUTION, SLOWER THAN 97.5% OF SUBMISSIONS

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */

const allPathsSourceTarget = (graph) => {
    const paths = [];
    const visit = (graphIndex, currentNode = { index: 0, path: []}) => {
        return {
            index: graphIndex,
            path: currentNode.path.concat(graphIndex),
        };
    };
    const queue = [() => visit(0)];
    while(queue.length > 0) {
        const currentNode = queue.shift()();
        console.log(currentNode.index, currentNode.path);
        if (currentNode.index === graph.length - 1) {
            paths.push(currentNode.path);
        } else {
            const nextNodeGetters = graph[currentNode.index].map(i => () => visit(i, currentNode) );
            queue.push(...nextNodeGetters);
        }
    }
    return paths;
};

// ************************************************************************
// ************************************************************************

// WORKING ON A NEW DFS SOLUTION, MY BIG ISSUE IS WRAPPED ARRAYS

const allPathsSourceTarget = (graph, currentIndex = 0, currentPath = []) => {
  const clonedPath = [...currentPath, currentIndex];
  console.log('currentPath: ', currentPath);
  console.log('this index: ', graph[currentIndex]);
  return graph[currentIndex].map(nextIndex => {
    if (graph[nextIndex].length > 0) return allPathsSourceTarget(graph, nextIndex, clonedPath);
    return [...clonedPath, nextIndex];
  });
};

// SO I TRIED USING A FLATTEN FUNCTION BUT THAT COLLAPSES DEEPER NESTS

const flatten = (items) => {
  const flat = [];

  items.forEach(item => {
    if (Array.isArray(item)) {
      flat.push(...flatten(item));
    } else {
      flat.push(item);
    }
  });

  return flat;
}

const allPathsSourceTarget = (graph, currentIndex = 0, currentPath = []) => {
  const clonedPath = [...currentPath, currentIndex];
  console.log('currentPath: ', currentPath);
  console.log('this index: ', graph[currentIndex]);
  return graph[currentIndex].map(nextIndex => {
    if (graph[nextIndex].length > 0) {
      const foo = allPathsSourceTarget(graph, nextIndex, clonedPath);
      return flatten(allPathsSourceTarget(graph, nextIndex, clonedPath));
    }
    return [...clonedPath, nextIndex];
  });
};

// EVEN WHEN I JUST DO A SHALLOW FLATTEN, THE PATHS STILL COLLAPSE THE SAME WAY

const flattenOnce = (items) => {
  const flat = [];

  items.forEach(item => {
    if (Array.isArray(item)) {
      flat.push(...item);
    } else {
      flat.push(item);
    }
  });

  return flat;
}

const allPathsSourceTarget = (graph, currentIndex = 0, currentPath = []) => {
  const clonedPath = [...currentPath, currentIndex];
  return graph[currentIndex].map(nextIndex => {
    if (graph[nextIndex].length > 0) {
      const foo = allPathsSourceTarget(graph, nextIndex, clonedPath);
      console.log(foo);
      console.log(flattenOnce(foo));
      return flattenOnce(foo);

    }
    return [...clonedPath, nextIndex];
  });
};

// NEW DFS SOLUTION WORKS, NOTE ALMOST FLATTEN FUNCTION FLATTENS TO LAST ARRAY
// IT NEEDS TO BE CALLED ON THE FINAL RESULT, NOT DONE RECUSIVELY (PREVIOUS PROBLEM)
// NEW SOLUTION IS FASTER THAN 47.50% OF SUBMISSIONS

const almostFlatten = (items) => {
  const flat = [];

  items.forEach(item => {
    if (Array.isArray(item) && !Array.isArray(item[0])) {
      flat.push(item);
    } else if (Array.isArray(item)) {
      flat.push(...almostFlatten(item));
    } else {
      flat.push(item);
    }
  });

  return flat;
}

const traverseGraph = (graph, currentIndex = 0, currentPath = []) => {
  const clonedPath = [...currentPath, currentIndex];
  return graph[currentIndex].map(nextIndex => {
    if (graph[nextIndex].length > 0) return traverseGraph(graph, nextIndex, clonedPath);
    return [...clonedPath, nextIndex];
  });
};

const allPathsSourceTarget = (graph) => {
  return almostFlatten(traverseGraph(graph));
};

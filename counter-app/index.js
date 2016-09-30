import { h, diff, patch } from "virtual-dom";
import createElement from "virtual-dom/create-element";

var tree;
var rootNode;

const CounterApp = ({ count, increment }) => (
  <div>
    <span>{count}</span>
    <button onclick={increment}>
      Increment
    </button>
  </div>
);

function increment() {
  count += 1;

  var newTree = CounterApp({ count, increment });
  var patches = diff(tree, newTree);
	console.log(JSON.stringify(patches));
  rootNode = patch(rootNode, patches);
  tree = newTree;
}

var count = 0;

tree = CounterApp({ count, increment });
console.log(tree);
console.log(JSON.stringify(tree));
rootNode = createElement(tree);
document.body.appendChild(rootNode);


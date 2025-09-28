// index.js
// import "./styles.css";

import { Node, LinkedList } from "./linkedClass.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("mouse");
list.prepend("anteloped");
list.append("kitten");
list.append("dear");
list.append("zebra");
list.append("lion");

console.log(list.toMyString());

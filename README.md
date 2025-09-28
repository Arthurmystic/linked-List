# Linked List

This project is a simple implementation of a **singly linked list** in JavaScript.  
It was built for learning purposes to understand how linked lists work under the hood — adding, removing, traversing, and searching nodes without relying on built-in arrays.

The main code is in src/linkedClass.js
---

## Features

- Create a linked list
- Insert new nodes
- Remove nodes
- Search for values
- Find index of a value
- Check if a value exists
- Convert the list into a readable string

---

## Methods

| Method               | Description                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| `append(value)`       | Adds a new node with the given value at the end of the list.                |
| `prepend(value)`      | Adds a new node with the given value at the start of the list.              |
| `size()`              | Returns the number of nodes in the list.                                   |
| `head`                | Returns the first node of the list.                                        |
| `tail`                | Returns the last node of the list.                                         |
| `at(index)`           | Returns the node at a specific index (0-based).                            |
| `pop()`               | Removes the last element from the list.                                    |
| `contains(item)`      | Returns `true` if the list contains the item, otherwise `false`.            |
| `find(item)`          | Returns the index of the item, or `-1` if not found.                        |
| `toMyString()`        | Returns a string representation of the list, e.g. `10 -> 20 -> 30 -> null` |

---

## Example Usage

```js
const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);

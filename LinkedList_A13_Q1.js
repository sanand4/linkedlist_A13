class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function createNewList(list1, list2) {
  let newList = null;
  let current = null;

  while (list1 !== null && list2 !== null) {
    let newNode = null;

    if (list1.data >= list2.data) {
      newNode = new Node(list1.data);
      list1 = list1.next;
    } else {
      newNode = new Node(list2.data);
      list2 = list2.next;
    }

    if (newList === null) {
      newList = newNode;
      current = newNode;
    } else {
      current.next = newNode;
      current = newNode;
    }
  }

  // Append remaining nodes from list1, if any
  if (list1 !== null) {
    current.next = list1;
  }

  // Append remaining nodes from list2, if any
  if (list2 !== null) {
    current.next = list2;
  }

  return newList;
}

// Linked List 1: 5 -> 2 -> 3 -> 8
let list1 = new Node(5);
list1.next = new Node(2);
list1.next.next = new Node(3);
list1.next.next.next = new Node(8);

// Linked List 2: 1 -> 7 -> 4 -> 5
let list2 = new Node(1);
list2.next = new Node(7);
list2.next.next = new Node(4);
list2.next.next.next = new Node(5);

// Create a new linked list using list1 and list2
let newList = createNewList(list1, list2);

// Display the new linked list
let current = newList;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}

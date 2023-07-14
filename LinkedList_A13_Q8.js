class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

function deleteNodeAtPosition(head, position) {
  if (head === null) {
    return;
  }

  if (position === 1) {
    head = head.next;
    if (head !== null) {
      head.prev = null;
    }
    return head;
  }

  let current = head;
  let count = 1;

  // Traverse to the node at the given position
  while (current !== null && count < position) {
    current = current.next;
    count++;
  }

  // If the node is found, update the pointers to delete the node
  if (current !== null) {
    current.prev.next = current.next;
    if (current.next !== null) {
      current.next.prev = current.prev;
    }
    current = null;
  }

  return head;
}
// Doubly Linked List: 1 <-> 3 <-> 4
let head = new Node(1);
let node2 = new Node(3);
let tail = new Node(4);

head.next = node2;
node2.prev = head;
node2.next = tail;
tail.prev = node2;

// Delete the node at position 3
head = deleteNodeAtPosition(head, 3);

// Display the modified list
let current = head;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}

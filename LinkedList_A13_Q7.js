class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

function reverseDoublyLinkedList(head) {
  if (head === null || head.next === null) {
    return head;
  }

  let current = head;
  let temp = null;

  // Swap the next and prev pointers of each node
  while (current !== null) {
    temp = current.prev;
    current.prev = current.next;
    current.next = temp;
    current = current.prev;
  }

  // Swap the head and tail pointers
  if (temp !== null) {
    head = temp.prev;
  }

  return head;
}
// Doubly Linked List: 10 <-> 8 <-> 4 <-> 2
let head = new Node(10);
let node2 = new Node(8);
let node3 = new Node(4);
let tail = new Node(2);

head.next = node2;
node2.prev = head;
node2.next = node3;
node3.prev = node2;
node3.next = tail;
tail.prev = node3;

// Reverse the doubly linked list
head = reverseDoublyLinkedList(head);

// Display the reversed list
let current = head;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}

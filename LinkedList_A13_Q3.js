class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function reverseKNodes(head, k) {
  if (head === null || head.next === null || k <= 1) {
    return head;
  }

  let current = head;
  let prev = null;
  let next = null;
  let count = 0;

  // Reverse the first k nodes
  while (current !== null && count < k) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    count++;
  }

  // If there are more nodes, recursively reverse the next k nodes
  if (next !== null) {
    head.next = reverseKNodes(next, k);
  }

  return prev;
}
// Linked List: 1 -> 2 -> 2 -> 4 -> 5 -> 6 -> 7 -> 8
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(2);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);

// Reverse every 4 nodes in the linked list
head = reverseKNodes(head, 4);

// Display the modified linked list
let current = head;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function reverseAlternateKNodes(head, k, isReverse) {
  if (head === null) {
    return null;
  }

  let current = head;
  let prev = null;
  let next = null;
  let count = 0;

  // Reverse k nodes if isReverse is true
  // Otherwise, skip k nodes
  while (current !== null && count < k) {
    if (isReverse) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    } else {
      prev = current;
      current = current.next;
    }
    count++;
  }

  // If isReverse is true, recursively reverse the next k nodes
  // Otherwise, recursively skip the next k nodes
  if (isReverse) {
    head.next = reverseAlternateKNodes(current, k, !isReverse);
    return prev;
  } else {
    prev.next = reverseAlternateKNodes(current, k, !isReverse);
    return head;
  }
}
// Linked List: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);
head.next.next.next.next.next.next.next.next = new Node(9);

// Reverse every alternate 3 nodes in the linked list
head = reverseAlternateKNodes(head, 3, true);

// Display the modified linked list
let current = head;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}

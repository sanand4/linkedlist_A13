class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function deleteLastOccurrence(head, key) {
  if (head === null) {
    return null;
  }

  let current = head;
  let lastOccurrence = null;
  let prevLastOccurrence = null;
  let prev = null;

  // Traverse the linked list to find the last occurrence of the key
  while (current !== null) {
    if (current.data === key) {
      lastOccurrence = current;
      prevLastOccurrence = prev;
    }
    prev = current;
    current = current.next;
  }

  // If the last occurrence is found, update the next pointer of the previous node
  if (lastOccurrence !== null) {
    if (prevLastOccurrence === null) {
      // If the last occurrence is the head node, update the head
      head = head.next;
    } else {
      // Skip the last occurrence by updating the next pointer of the previous node
      prevLastOccurrence.next = lastOccurrence.next;
    }
  }

  return head;
}
// Linked List: 1 -> 2 -> 3 -> 5 -> 2 -> 10
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(5);
head.next.next.next.next = new Node(2);
head.next.next.next.next.next = new Node(10);

// Delete the last occurrence of key = 2
head = deleteLastOccurrence(head, 2);

// Display the modified linked list
let current = head;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}

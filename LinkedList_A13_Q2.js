class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function removeDuplicates(head) {
  if (head === null) {
    return null;
  }

  let current = head;

  while (current.next !== null) {
    if (current.data === current.next.data) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
}

// Linked List: 11 -> 11 -> 11 -> 21 -> 43 -> 43 -> 60
let head = new Node(11);
head.next = new Node(11);
head.next.next = new Node(11);
head.next.next.next = new Node(21);
head.next.next.next.next = new Node(43);
head.next.next.next.next.next = new Node(43);
head.next.next.next.next.next.next = new Node(60);

// Remove duplicate nodes from the linked list
head = removeDuplicates(head);

// Display the modified linked list
let current = head;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function mergeSortedLists(head1, head2) {
  if (head1 === null) {
    return head2;
  }
  if (head2 === null) {
    return head1;
  }

  let dummy = new Node(0);
  let current = dummy;

  while (head1 !== null && head2 !== null) {
    if (head1.data <= head2.data) {
      current.next = head1;
      head1 = head1.next;
    } else {
      current.next = head2;
      head2 = head2.next;
    }
    current = current.next;
  }

  if (head1 !== null) {
    current.next = head1;
  }

  if (head2 !== null) {
    current.next = head2;
  }

  return dummy.next;
}
// Linked List 1: 5 -> 10 -> 15
let head1 = new Node(5);
head1.next = new Node(10);
head1.next.next = new Node(15);

// Linked List 2: 2 -> 3 -> 20
let head2 = new Node(2);
head2.next = new Node(3);
head2.next.next = new Node(20);

// Merge the two sorted lists
let mergedHead = mergeSortedLists(head1, head2);

// Display the merged list
let current = mergedHead;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}

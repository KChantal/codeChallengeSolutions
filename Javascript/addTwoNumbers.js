/**
 * Definition for singly-linked list.
 **/
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  if (!l1 && !l2) return null;
  else if (l1.val === 0) return l2;
  else if (l2.val === 0) return l1;

  let head1 = l1;
  let head2 = l2;
  let sum1 = '';
  let sum2 = '';

  while (head1) {
    const value = head1.val;
    sum1 += value.toString();
    head1 = head1.next;
  }
  while (head2) {
    const value = head2.val;
    sum2 += value.toString();
    head2 = head2.next;
  }

  const num1 = parseInt(sum1.split('').reverse().join(''));
  const num2 = parseInt(sum2.split('').reverse().join(''));

  const result = (num1 + num2).toString().split('').reverse();
  let LL = new ListNode(parseInt(result[0]));
  let CopyLL = LL;
  let i = 1;

  while (result[i] !== undefined) {
    CopyLL.next = new ListNode(parseInt(result[i]));
    CopyLL = CopyLL.next;
    i++;
  }

  return LL;
};

const List1 = new ListNode(0);
List1.next = new ListNode(8);
List1.next.next = new ListNode(6);

const List2 = new ListNode(5);
List2.next = new ListNode(6);
List2.next.next = new ListNode(4);

console.log(addTwoNumbers(List1, List2));

// const arr1 = [0, 8, 6, 5, 6, 8, 3, 5, 7];
// const arr2 = [6, 7, 8, 0, 8, 5, 8, 9, 7];

// const n1 = parseInt(
//   arr1
//     .map((n) => n.toString())
//     .reverse()
//     .join('')
// );

// const n2 = parseInt(
//   arr2
//     .map((n) => n.toString())
//     .reverse()
//     .join('')
// );
// console.log(n1);
// console.log(n2)

// const n3 = n1 + n2;
// console.log(n3)

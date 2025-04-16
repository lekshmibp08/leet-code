/*You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.*/

/*
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    printList() {
        if(this.size === 0) {
            return console.log("Empty");            
        }
        let listValues = "";
        let curr = this.head;
        while(curr) {
            listValues += `${curr.value} => `;
            curr = curr.next;
        }
        console.log(listValues);        
    }
    appendNode(value) {
        const node = new Node(value);
        if(this.size === 0) {
            this.head = node;
        } else {
            let curr = this.head;
            while(curr.next !== null) {
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++
    }
    convertArray(arr) {
        arr.forEach(element => {
            this.appendNode(element);
        });
    }
}


let addTwoNumbers = function(l1, l2) {
    function findListValue(list) {
        let curr = list.head;
        let listValue = '';

        while(curr !== null) {
            listValue += curr.value;
            curr = curr.next;
        }        
        return listValue;
    }
    
    let list1 = findListValue(l1)
    let list2 = findListValue(l2);

    console.log(list1);
    console.log(list2);
    
    
    let sum = Number(list1) + Number(list2);
    let sumArr = sum.toString().split('').reverse().map(Number);
    let sumList =  new LinkedList();
    sumList.convertArray(sumArr);
    return sumList;
};

const list1 = new LinkedList();
const list2 = new LinkedList();

list1.convertArray([2,4,3,2])
list2.convertArray([1,6,4,9])

const result = addTwoNumbers(list1, list2);
result.printList()      // 1 => 8 => 0 => 4 => 


//    const addTwoNumbers = (l1, l2) => {
//        let dummyHead = new Node(0);
//        let current = dummyHead;
//        let p = l1.head;
//        let q = l2.head;
//        let carry = 0;
//    
//        while (p !== null || q !== null) {
//            const x = (p !== null) ? p.value : 0;
//            const y = (q !== null) ? q.value : 0;
//            const sum = carry + x + y;
//    
//            carry = Math.floor(sum / 10);
//            current.next = new Node(sum % 10);
//            current = current.next;
//    
//            if (p !== null) p = p.next;
//            if (q !== null) q = q.next;
//        }
//    
//        if (carry > 0) {
//            current.next = new Node(carry);
//        }
//    
//        const resultList = new LinkedList();
//        resultList.head = dummyHead.next;
//    
//        // Count size
//        let temp = resultList.head;
//        while (temp) {
//            resultList.size++;
//            temp = temp.next;
//        }
//    
//        return resultList;
//    };



class Node {
	constructor(value = null, nextNode = null) {
	this.value = value;
	this.nextNode = nextNode;
	}
}

class LinkedList {
	constructor() {
	this.head = null;
	this.tail = null;
	this.length = 0;
	}

	append(value) {
		const newNode = new Node(value);

		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			// Tails next node will be newNode
			this.tail.nextNode = newNode;
			this.tail = newNode;
		}

		this.length++;
	}

	prepend(value) {
		const newNode = new Node(value);

		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			// Adds new head and points to previous head
			newNode.nextNode = this.head;
			this.head = newNode;
		}

		this.length++;
	}

	size() {
		return this.length;
	}

	head() {
		return this.head;
	}

	tail() {
		return this.tail;
	}

	at(index) {
		if (index < 0 || index >= this.length) {
			return null;
		}

		let currentNode = this.head;
		let currentIndex = 0;

		while (currentIndex < index) {
			currentNode = currentNode.nextNode;
			currentIndex++;
		}
		return currentNode;
	}

	pop() {
		if (this.length === 0) {
			return null;
		}

		let currentNode = this.head;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			while (currentNode.nextNode !== this.tail) {
			currentNode = currentNode.nextNode;
			}

			currentNode.nextNode = null;
			this.tail = currentNode;
		}

		this.length--;
		return currentNode;
	}

	contains(value) {
		let currentNode = this.head;

		while (currentNode) {
			if (currentNode.value === value) {
			return true;
			}

			currentNode = currentNode.nextNode;
		}

		return false;
	}

	find(value) {
		let currentNode = this.head;
		let currentIndex = 0;

		while (currentNode) {
			if (currentNode.value === value) {
			return currentIndex;
			}

			currentNode = currentNode.nextNode;
			currentIndex++;
		}

		return null;
	}

	toString() {
		let currentNode = this.head;
		let result = "";

		while (currentNode) {
			result += `(${currentNode.value}) -> `;
			currentNode = currentNode.nextNode;
		}

		result += "null";
		return result;
	}

	// inserts new value at at the provided index
	insertAt(value, index) {
		let currentNode = this.head;
		let currentIndex = 0;

		while (currentIndex <= index) {

			if (index - 1 == currentIndex){
				let storeNextNode = currentNode.nextNode

				const newNode = new Node(value)
				currentNode.nextNode = newNode
				newNode.nextNode = storeNextNode
			}


			currentNode = currentNode.nextNode
			currentIndex += 1
		}
		
	}

	removeAt(index) {
		if (index < 0 || index >= this.length) {
			return null;
		}
	
		let currentIndex = 0;
		let currentNode = this.head;
		let previousNode = null;
	
		while (currentIndex < index) {
			previousNode = currentNode;
			currentNode = currentNode.nextNode;
			currentIndex++;
		}
	
		if (previousNode === null) {
			// Removing the head node
			currentNode = currentNode.nextNode;
		} else {
			previousNode.nextNode = currentNode.nextNode;
		}
	
		if (currentNode === this.tail) {
			// Removing the tail node
			this.tail = previousNode;
		}
	
		this.length--;
		return currentNode;
	}
	
}

const list = new LinkedList();

list.append(1);
list.append(2);
list.prepend(0);
list.append('haha');
list.insertAt('TESTING',2)
list.removeAt(2)



console.log(list.toString()); // (0) -> (1) -> (2) -> (3) -> null

console.log(list.size()); // 4

console.log(list.at(3).value); // 2

console.log(list.pop().value); // 3

console.log(list.contains(2)); // true

console.log(list.find(0)); // 0
console.log(list.find(3)); // null
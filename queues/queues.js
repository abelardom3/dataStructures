


// code queues



class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}



class Queue {

    constructor() {
        this.first = null
        this.last = null
        this.length = 0

    }



    enqueue(data) {
        const node = new Node(data)
        if (!this.first) {
            this.first = node
            this.last = node

        } else {
            this.last.next = node
            this.last = node
        }

        this.length++
        return this
    }




    dequeue() {
        const trackingNode = this.first

        if (this.first === this.last) {
            this.first = null
            this.last = null
        }
        else {
            this.first = this.first.next
        }
        this.length--
        return trackingNode
    }



}

const q = new Queue()


q.enqueue('1st person')
q.enqueue('2nd person')
q.enqueue('3rd person')
q.enqueue('4th person')
// q.dequeue()
// q.dequeue()
// q.dequeue()
// q.dequeue()

console.log(q)



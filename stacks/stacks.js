

// code stack 

// creates our object
class Node {

    constructor(data) {
        // this = Object.create()
        this.data = data
        this.next = "bottom of plate"
        // return this;
    }

}




class Stack {

    constructor() {
        this.top = null
        this.bottom = null
        this.length = 0
    }




    popper() {
        let top = this.top
        if (!this.top) {
            return -1
        }

        if (this.length === 1) {

            this.top = null
            this.bottom = null

        } else {

            this.top = this.top.next

        }
        this.length--
        return top

    }




    push(data) {
        const node = new Node(data)
        if (!this.top) {
            this.top = node
            this.bottom = node

        } else {
            let temp = this.top
            this.top = node
            this.top.next = temp
        }
        this.length++
        return this

    }


}






const stack = new Stack()

stack.push('chip pancake')
stack.push('buttermilk pancake')
stack.push('mint pancake')
stack.push('vanilla pancake')


console.log(stack)



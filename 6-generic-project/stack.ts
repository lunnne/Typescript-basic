{
  interface Stack<T>{
    readonly size: number; 
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T>= {
    readonly value: T;
    readonly next?: StackNode<T>;
  }; 

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0; //
    private head?: StackNode<T>;
    get size() {
      return this._size;
    }
    constructor(private capacity: number) {}
    push(value: T) {
      if (this.size === this.capacity) {
        throw new Error('Stack is full');
      }
      this._size++;
      const node = { value, next: this.head };
      this.head = node;
    }

    pop(): T {
      if (this.head == null) {
        throw new Error('Stack is Empty');
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl<string>(10);
  stack.push('Elle1');
  stack.push('koala2');
  stack.push('bob3');

  while (stack.size !== 0) {
    console.log(stack.pop());
  }

}

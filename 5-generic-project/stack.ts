{
  interface Stack {
    readonly size: number; 
    push(value: string): void;
    pop(): string;
  }

  type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
  }; 

  class StackImpl implements Stack {
    private _size: number = 0; //
    private head?: StackNode;
    get size() {
      return this._size;
    }
    constructor(private capacity: number) {}
    push(value: string) {
      if (this.size === this.capacity) {
        throw new Error('Stack is full');
      }
      this._size++;
      const node: StackNode = { value, next: this.head };
      this.head = node;
    }

    pop(): string {
      if (this.head == null) {
        throw new Error('Stack is Empty');
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl(10);
  stack.push('Elle1');
  stack.push('koala2');
  stack.push('bob3');

  while (stack.size !== 0) {
    console.log(stack.pop());
  }
}

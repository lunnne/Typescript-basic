{
  interface Stack {
    readonly size: number; //내부에서 결정되는 사이즈
    push(value: string): void;
    pop(): string;
  }

  type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
  }; //불변성을 위해 readonly를 써주는게 좋다.

  //조건 언어 자체에서 제공하는 array를 쓰지 않고 구현하기
  //array라는 자료구조를 쓰지 않고
  //연결 list 를 쓰면 됩니다. 아이템마다 node가 하나씩 있다.
  //힌트! 단일연결리스트, 이중연결리스트

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

{
  /**
   * JavaScript
   * Primitive : String, number, boolean, bigint, symbol, null, undefine
   * Object : function, array.....
   */

  // number
  const num: number = -6;

  // string
  const str: string = 'yeai';

  // boolean
  const boal: boolean = true;

  // undefined
  let name = undefined; //💩
  let age: number | undefined;
  age = undefined;
  age = 1;

  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // 💩
  let person2: string | null;

  // unknown 💩 : any 보단 겸손한편..
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any 💩
  let anything: any = 0;
  anything = 'hello';

  // void --return 하는게 없을때, 변수에 쓰진 않는다.
  function print(): void {
    console.log('hello');
    return;
  }

  //never --절대 리턴 불가, 그것을 명시하기 위해 쓰입니다.
  function throwError(message: string): never {
    // message -> server(log)
    throw new Error(message);
  }

  // object -- 너무 광범위해서 💩
  let obj: object;
  function acceptSomeObject(obj: object) {
    acceptSomeObject({ name: 'ellie' });
    acceptSomeObject({ animal: 'dog' });
  }
}

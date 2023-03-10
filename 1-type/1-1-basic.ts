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
  let name = undefined; //π©
  let age: number | undefined;
  age = undefined;
  age = 1;

  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // π©
  let person2: string | null;

  // unknown π© : any λ³΄λ¨ κ²ΈμννΈ..
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any π©
  let anything: any = 0;
  anything = 'hello';

  // void --return νλκ² μμλ, λ³μμ μ°μ§ μλλ€.
  function print(): void {
    console.log('hello');
    return;
  }

  //never --μ λ λ¦¬ν΄ λΆκ°, κ·Έκ²μ λͺμνκΈ° μν΄ μ°μλλ€.
  function throwError(message: string): never {
    // message -> server(log)
    throw new Error(message);
  }

  // object -- λλ¬΄ κ΄λ²μν΄μ π©
  let obj: object;
  function acceptSomeObject(obj: object) {
    acceptSomeObject({ name: 'ellie' });
    acceptSomeObject({ animal: 'dog' });
  }
}

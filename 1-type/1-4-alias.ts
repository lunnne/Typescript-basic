{
  /**
   * Type Aliases --> 타입스크립트의 타입이 강력한 이유!!
   * 직접 원하는 타입을 지정하는 것!
   */

  type Text = string;
  const name: Text = 'ellie';
  const address: Text = 'korea';
  type Num = number;

  // 원시 타입 뿐만 아니라, 오브젝트 타입도 정의 가능
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'ellie',
    age: 12,
  };

  /**
   * String Literal Types
   */
  type Name = 'name';
  let ellieName: Name;
  ellieName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true;
}

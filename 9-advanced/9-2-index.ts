{
  const obj = {
    name: 'ellie',
  };
  obj.name; // ellie
  obj['name']; // ellie

  type Animal = {
    name: string;
    age: number;
    sex: 'male' | 'female';
  };

  type Name = Animal['name']; // string
  const text: Name = 'hello';

  type Sex = Animal['sex']; //'male' | 'female'
  type Keys = keyof Animal; // 'name' | 'age' | 'sex'
  const key: Keys = 'age';

  type Person = {
    name: string;
    gender: Animal['sex'];
  };
  const person: Person = {
    name: 'ellie',
    gender: 'female',
  };
}

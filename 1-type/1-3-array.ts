{
    // Array
    const fruits: string[] = ['apple', 'banana']
    const scores: Array<number> = [1,2,3]
    //readonly를 이용하기 위해서는 string [], readonly를 이용하는 경우가 많다. 
    //조금더 일관성 있게 작성하려면 위의 방식으로 작성하는 것이 좋다. 
    function printArray(fruits : readonly string []) {

    }

     // Tuple -> interface, type alias, class
     let student : [string, number]
     student = ['name', 123]
     student[0]; // name
     student[1]; // 123
      // destructure 식으로 사용할 수도 있다. 
     const [name, age] = student;
}

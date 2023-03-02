{
  /**
   * Intersection Types : &
   * 다양한 타입을 하나로 묶어 선언할 수 있음
   */

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: string;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work());
  }

  // 함수 호출 할때, 모든 property를 작성해줘야함
  internWork({
    name: 'six',
    score: 123,
    employeeId: 'six',
    work: () => {},
  });
}

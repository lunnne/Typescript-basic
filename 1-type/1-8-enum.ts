{
  /**
   * Enum
   * 여러상수값을 모아 정의해주는 것
   * 다른 프로그래밍언어에서 Enum은 흔한 개념이지만, 자바스크립트에서는 enum 타입이 존재하지 않는다.
   * 타입스크립트에서 따로 존재함
   */

  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  // 최대한 enum에 가깝게 표현할 수 있는 방법으로는 object.freeze를 쓸 수는 있습니다. (수정 불가)
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  //TypeScript
  enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday); //1 따로 값을 지정하지 않으면 0으로 시작

  //Enum의 문제❗타입이 정확히 보장되지 않음. 계속.. 컴파일시 에러 못잡아낸닷!
  let day: Days = Days.Thursday;
  day = Days.Tuesday;
  day = 10; // 다른 타입도 할당 가능..
  console.log(day);
  
  //Enum 대신 Uniontype 활용 가능!
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  let dayOfWeek: DaysOfWeek = 'Monday';

  /**
   * 주의할점, 다른 언어에서는 enum이 굉장히 유용하지만, TS에서 enum은 가능한한 쓰지 않는 것이 좋습니다.
   * 따라서, enum은 충분히 union string literal 로 대체 가능하기 때문에, 유니온타입 이용해서 타입보장하며 사용할수 있습니다.
   * 엘리님의 경험에서는, 대부분의 케이스는 유니온 타입!
   * 안드로이드 개발에서 코틀린이나 스위프트라는 언어를 이용하기 때문에, 유니온 타입을 웹 클라이언트에서 프로그램을 하고, 모바일클라이언트와 의사소통할 필요가 없다면
   * enum을 사용할 일은 별로 없습니다.!!
   */
}

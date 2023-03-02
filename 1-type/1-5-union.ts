{
  /**
   * Union Types : OR
   * 활용도 good👍👍👍
   */

  type Direction = 'left' | 'right' | 'up' | 'down';
  // function move(direction: Direction) {
  //   console.log(direction);
  // }
  move('up'); //모든 가능한 인자를 담아서 ❗딱 하나만 담을 수 있는 타입을 만들고싶을때! Union 이용

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  //실전예제 function : login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  // type LoginState = SuccessState | FailState;
  // function login(id: string, password: string): LoginState {
  //   return {
  //     response: {
  //       body: 'logged in!',
  //     },
  //   };
  // }

  // /** quiz
  //  * printLoginState(state: LoginState)
  //  * success -> 💫 body
  //  * fail -> 😢 reason
  //  * */
  // function printLoginState(state: LoginState): void {
  //   if ('response' in state) {
  //     console.log(`😀${state.response.body}`);
  //   } else {
  //     console.log(`😢${state.reason}`);
  //   }
  // }
}

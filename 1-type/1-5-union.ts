{
  /**
   * Union Types : OR
   * νμ©λ goodπππ
   */

  type Direction = 'left' | 'right' | 'up' | 'down';
  // function move(direction: Direction) {
  //   console.log(direction);
  // }
  move('up'); //λͺ¨λ  κ°λ₯ν μΈμλ₯Ό λ΄μμ βλ± νλλ§ λ΄μ μ μλ νμμ λ§λ€κ³ μΆμλ! Union μ΄μ©

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  //μ€μ μμ  function : login -> success, fail
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
  //  * success -> π« body
  //  * fail -> π’ reason
  //  * */
  // function printLoginState(state: LoginState): void {
  //   if ('response' in state) {
  //     console.log(`π${state.response.body}`);
  //   } else {
  //     console.log(`π’${state.reason}`);
  //   }
  // }
}

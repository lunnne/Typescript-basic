{
  //discriminated Union. 차별적인 Union?
  //어떤 case든 공통적인 property를 가지고 있으므로써 코드를 구분하기 쉽게 만들어준다.
  //실전예제 function : login -> success, fail

  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    result: 'fail';
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(id: string, password: string): LoginState {
    return {
      result: 'success',
      response: {
        body: 'logged in!',
      },
    };
  }

  /** quiz
   * printLoginState(state: LoginState)
   * success -> 💫 body
   * fail -> 😢 reason
   * */
  function printLoginState(state: LoginState) {
    if (state.result === 'success') {
      console.log(`😀${state.response.body}`);
    } else {
      console.log(`😢${state.reason}`);
    }
  }
}

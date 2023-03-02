{
  /**
   * Let's make a game 🕹
   */

  type Operation = 'up' | 'down' | 'left' | 'right';
  type Position = {
    x: number;
    y: number;
  };

  let position = { x: 0, y: 0 };
  function move(operation: Operation): Position {
    switch (operation) {
      case 'up':
        position = { x: position.x, y: position.y + 1 };
        break;
      case 'down':
        position = { x: position.x, y: position.y - 1 };

        break;
      case 'left':
        position = { x: position.x - 1, y: position.y };

        break;
      case 'right':
        position = { x: position.x + 1, y: position.y };

        break;
      default:
        throw new Error('invalid operation');
    }
    return position;
  }

  //   Ellie
  // type Command = 'up' | 'down' | 'left' | 'right';

  // let position = { x: 0, y: 0 };

  // function move(command: Command) {
  //   switch (command) {
  //     case 'up':
  //       position.y +=1;
  //       break;
  //     case 'down':
  //       position.y -= 1;
  //       break;
  //     case 'left':
  //       position.x -= 1;
  //       break;
  //     case 'right':
  //       position.x += 1;
  //       break;
  //     default:
  //       throw Error(`unknown direction:${command}`);
  //   }
  // }

  console.log(position); // { x: 0, y: 0}
  move('up');
  console.log(position); // { x: 0, y: 1}
  move('down');
  console.log(position); // { x: 0, y: 0}
  move('left');
  console.log(position); // { x: -1, y: 0}
  move('right');
  console.log(position); // { x: 0, y: 0}
}

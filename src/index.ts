import { number, string } from "yargs";
import { clear, print, askQuestion, enterValidInput } from "./console";
import { moveRover } from "./main";

interface roverObjModel {
  gridX: number,
  gridY: number,
  xCoordinate: number,
  yCoordinate: number,
  inputDirection: string,
  inputString: string
}

export let roverObj: roverObjModel = {
  gridX: 0,
  gridY: 0,
  xCoordinate: 0,
  yCoordinate: 0,
  inputDirection: " ",
  inputString: " ",
};

const direction: Array<string> = ["N", "S", "W", "E"];

export function startRover(): void {
  clear(false);
  print("--------------------------");
  print("| Welcome to Mars rover! |");
  print("--------------------------");

  askQuestion(
    `Please enter the grid size of plateau (ex: 5 5)`,
    getPlateauGridSize
  );
}

function getPlateauGridSize(grid: string): void {
  if (grid.split(" ").length == 2) {
    const [a, b] = grid.split(" ");
    if (Number.isNaN(parseInt(a)) || Number.isNaN(parseInt(b))) {
      return enterValidInput();
    } else {
      roverObj.gridX = parseInt(a);
      roverObj.gridY = parseInt(b);
      return getRoverStartPosition(roverObj.gridX, roverObj.gridY);
    }
  }
}

function getRoverStartPosition(gridX: number, gridY: number) {
  print("--------------------------");
  askQuestion(
    `Please enter the rover X and Y co-ordinates to start (Ex: 4 3)`,
    getCoordinates
  );
}

function getCoordinates(input: string){
  const x = parseInt(input.split(" ")[0]);
  const y = parseInt(input.split(" ")[1]);
  if(x && x <= roverObj.gridX && y && y <= roverObj.gridY)
  {
    roverObj.xCoordinate = x;
    roverObj.yCoordinate = y;
    askQuestion(
      `Please enter the rover starting direction (Possible Values are n, s, w, e)`,
      getStartPosition
    );
    
  }
  else
  {
    enterValidInput();
  }
}

function getStartPosition(str: string) {
  const direction = isDirection(str.toUpperCase());
  if (direction) {
    roverObj.inputDirection = str.toUpperCase();
    print("--------------------------");
    askQuestion(
      `Please enter the input string to move the rover (Ex: LMMMLMMR)`,
      getInputString
    );
  } 
  else 
  {
    enterValidInput();
  }
  
}

function getInputString(str: string) {
  if (!/[^MLR]/g.test(str)) {
    roverObj.inputString = str;
    moveRover();
  } else {
    enterValidInput;
  }
}

function isDirection(input: string) {
  return direction.includes(input);
}


startRover();

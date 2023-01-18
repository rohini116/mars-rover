import { number, string } from "yargs";
import { clear, print, askQuestion } from "./console";
import {moveRover} from "./main";

interface roverObjModel {
  gridX?: number,
  gridY?: number,
  xCoordinate?: number;
  yCoordinate?: number;
  inputDirection?: string;

inputString?: string;
}

let roverObj: roverObjModel;

const direction: Array<string> = ["n", "S", "w", "e"];

export function startRover(): void {
  clear(false);
  print("--------------------------");
  print("| Welcome to Mars rover! |");
  print("--------------------------");

  askQuestion(
    `Please enter the grid size of plateau ex: 5 5`,
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
    `Please enter the rover position to start Ex: 4 3 S`,
    getStartPosition
  );
}

function getStartPosition(inputString: string) {
  const [x, y, d] = inputString.split(" ");
  if (parseInt(x) && parseInt(y) && isDirection(d)) {
    roverObj.xCoordinate = parseInt(x);
    roverObj.yCoordinate = parseInt(y);
    roverObj.inputDirection = d;
    print("--------------------------");
    askQuestion(
      `Please enter the input string to move the rover Ex: LMMMLMMR`,
      getInputString
    );
  }
  else{
    enterValidInput;
  }
  
}

function getInputString(str: string){
  if(!(/[^MLR]/g.test(str)))
  {
    roverObj.inputString = str;
    moveRover(roverObj);
  }
  else
  {
    enterValidInput;
  }
}

function isDirection(input: string) {
  return direction.includes(input);
}
export function enterValidInput(): void {
  print("***************************************");
  print("You did not entered the valid input. 😭");
  askQuestion("Press ENTER to restart! ", startRover);
}

startRover();

import { roverObj, startRover } from "./index";
import { print, askQuestion ,enterValidInput } from "./console";
import { string } from "yargs";

export function moveRover(){
    startMovement();
}

function detectLeftdirection() {
  switch(roverObj.inputDirection) {
    case "N":
      roverObj.inputDirection = "W";
      break;
    case "W":
      roverObj.inputDirection = "S";
      break;
    case "S":
      roverObj.inputDirection = "E";
      break;
    case "E":
      roverObj.inputDirection = "N";
      break;
  }
  
}
function detectRightdirection() {
  switch (roverObj.inputDirection) {
    case "N":
      roverObj.inputDirection = "E";
      break;
    case "E":
      roverObj.inputDirection = "S";
      break;
    case "S":
      roverObj.inputDirection = "W";
      break;
    case "W":
      roverObj.inputDirection = "N";
      break;
  }
  
}
function moveForward() {
  var flag = true;
  switch (roverObj.inputDirection) {
    case "N":
      roverObj.yCoordinate++;
      roverObj.yCoordinate > roverObj.gridY ? (flag = false) : flag;
      break;
    case "S":
      roverObj.yCoordinate--;
      roverObj.yCoordinate <= 0 ? (flag = false) : flag;
      break;
    case "E":
      roverObj.xCoordinate++;
      roverObj.xCoordinate > roverObj.gridX ? (flag = false) : flag;
      break;
    case "W":
      roverObj.xCoordinate--;
      roverObj.xCoordinate <= 0 ? (flag = false) : flag;
      break;
  }
  return flag;
}
function startMovement() {
  let success = true;
  const len = roverObj.inputString.length;
  const str = roverObj.inputString;

  let index = 0;
  const moved = () => {
    switch (str[index]) {
      case "L":
        detectLeftdirection();
        index++;
        check();
        break;
      case "R":
        detectRightdirection();
        index++;
        check()
        break;
      case "M":
        if (!moveForward()) {
          index = len;
          success = false;
        }
        index++;
        check();
        break;
    }
    function check() {
      index < len
        ? moved()
        : success == true
        ? printRoverFinalPosition()
        : enterValidInput("Rover moved out of grid.");
    }
  };
  moved();
}

function printRoverFinalPosition(): void{
  const outString: string = roverObj.xCoordinate.toString() + " " + roverObj.yCoordinate.toString() + " " + roverObj.inputDirection;
  print(outString);
  askQuestion("Press ENTER to restart! ", startRover);
}
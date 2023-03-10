import * as readline from "node:readline";
import { startRover } from "./index";

export function print(str: any): void {
  console.log(str);
  console.log();
}

export function clear(addTopBorder: boolean): void {
  console.clear();
  if (addTopBorder) {
    print("------------------------------------");
  }
}

// NOTE: this "createInterface" function is built into node and is referring to the console interface - NOT a TypeScript interface!
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// this function allows us to prompt the user with a question, and call a callback function with whatever string has been input
export function askQuestion(question: string, callback: (arg: string) => void) {
  reader.question(`${question} `, callback);
}

export function enterValidInput(msg?: string): void {
  print("***************************************");
  print((msg ? msg : "Please Enter valid input") + " 😭");
  askQuestion("Press ENTER to restart! ", startRover);
}
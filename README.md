MarsRover

A robotic rover is to be landed by NASA on a plateau on Mars.

This plateau, which is curiously rectangular, must be navigated by the rover so that their on-board cameras can get a complete view of the surrounding terrain to send back to Earth.

A rover’s position and location is represented by a combination of x and y co-ordinates and a letter representing one of the four cardinal compass points. The plateau is divided up into a grid to simplify navigation. An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North.

In order to control a rover , NASA sends a simple string of letters. The possible letters are ‘L’, ‘R’ and ‘M’. ‘L’ and ‘R’ makes the rover spin 90 degrees left or right respectively, without moving from its current spot. ‘M’ makes the rover move forward one grid position, and maintain the same heading.

Creating the application


This app is a mini-adventure story which runs in the console.

👉 First, fork and clone this repository.

👉 Then run this command:

npm install
👉 You can then run

npm start
❗ NOTE: If you look in package.json you'll see that npm start is actually just an alias for nodemon index.ts. Using the nodemon tool means you don't have to stop and start the application every time you change the code. Nodemon will automatically spot when files have changed and restart your application.

If you ever need to actually stop your application you can press the key combination Ctrl + C to interrupt and kill the application.

How it Works


The terminal all get the plateau grid size, rover's starting position and the input string to move the rover. Which will then go through the code logic and provide final position of the rover.

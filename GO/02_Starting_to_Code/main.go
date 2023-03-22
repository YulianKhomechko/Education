package main

import (
	"math/rand"
	"myapp02/game"
)

func main() {
	var firstNumber = rand.Intn(8) + 2 // from 2 to 10
	var secondNumber = rand.Intn(8) + 2
	var subtraction = rand.Intn(8) + 2
	// if you don't assign a value, it will take the default value.
	// for stings, it's an empty string, and for numbers it's 0
	var answer = firstNumber*secondNumber - subtraction

	game.RunGame(firstNumber, secondNumber, subtraction, answer)
}

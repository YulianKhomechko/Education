package main

import "fmt"

func main() {
	// one way - declare, then assign (two steps)
	var firstNumber int
	firstNumber = 42

	// second way - declare type and name and assign value
	var secondNumber = 24

	// third way: declare name, assign value, and let go to figure out the type
	subtraction := firstNumber - secondNumber

	fmt.Println(subtraction)
}

package main

import (
	"fmt"
	"math"
)

func main() {
	answer := 7 + 3*4
	fmt.Println("Answer: ", answer)

	radius := 12.0
	area := math.Pi * radius * radius

	fmt.Println("area is: ", area)

	// INTEGER DIVISION
	half := 1 / 2
	fmt.Println("half with integer division", half) // it will be 0 because integer division works only with integer values

	halfFloat := 1.0 / 2.0
	fmt.Println("half with float division", halfFloat) // 0.5

	badThreeSquared := 3 ^ 2 // won't work as in other programming languages, because
	// ^ in go means bitwise xor operator
	fmt.Println(badThreeSquared) // 1

	// to raise to a power
	goodThreeSquared := math.Pow(3.0, 2.0)
	fmt.Println(goodThreeSquared)

	// modulus
	reminder := 50 % 3 // what lefts after division 50 / 3
	fmt.Println(reminder)

	// unary operator
	x := 3
	x++ // x = x + 1
	fmt.Println("x is now", x)

	x-- // x = x - 1
	fmt.Println("x is now", x)

	// --x // does not work in go

	// y := x++ // does not work in go
}

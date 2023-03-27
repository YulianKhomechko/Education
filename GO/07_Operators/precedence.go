package main

import "fmt"

func main() {
	// precedence
	// multiplication

	a := 12.0 * 3.0 / 4.0
	b := (12.0 * 3.0) / 4.0
	c := 12.0 * (3.0 / 4.0)

	fmt.Println("a:", a, "b:", b, "c:", c) // a: 9 b: 9 c 9

	// integer division
	unclear := 12 * (3 / 4)         //  (3 / 4) integer division, so it will be 0
	fmt.Println("unclear", unclear) // 0

	f := 12.0 / 3.0 / 4.0
	fmt.Println("f:", f)
	// parenthesis have a highest precedence
	f = 12.0 / (3.0 / 4.0)
	fmt.Println("now f is:", f)

	// addition / subtraction
	fmt.Println()
	x := 12 + 3 - 4
	y := (12 + 3) - 4
	z := 12 + (3 - 4)
	fmt.Println("x:", x, "y:", y, "z:", z) // x: 11 y: 11 z: 11

	// parenthesis, multiplication/division, addition/subtraction
	x = 12 + 3*4
	y = (12 + 3) * 4
	z = 12 + (3 * 4)
	fmt.Println("x:", x, "y:", y, "z:", z) // x: 24 y: 60 z: 24

}

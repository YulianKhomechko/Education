package main

import "fmt"

// assignment operator

func main() {
	x := 12

	x++
	fmt.Println("x:", x) // 13

	x--
	fmt.Println("x:", x) // 12

	y := 10
	y *= 2 // y = y * 2
	fmt.Println("y:", y)

	y /= 2 // y = y / 2
	fmt.Println("y:", y)

	y += 2 // y = y + 2
	fmt.Println("y:", y)

	y -= 2 // y = y - 2
	fmt.Println("y:", y)

	// z := y -= 8 can't to that in GO
}

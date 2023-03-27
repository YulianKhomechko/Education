package main

import "fmt"

// reference types (pointers, slices, maps, functions, channels)

// interface type

func main() {
	x := 10

	// pointer points to a specific location in memory
	myFirstPointer := &x

	fmt.Println("x is", x)
	fmt.Println("myFirstPointer is", myFirstPointer)

	// * - go to the address in memory to which pointer points
	// and change its value
	*myFirstPointer = 15

	fmt.Println("x is now", x)

	changeValueOfPointer(&x)

	fmt.Println(x)
}

// pointers allow us to change value of a particular variable without even passing it, and without it being available in the scope
func changeValueOfPointer(num *int) {
	*num = 25
}

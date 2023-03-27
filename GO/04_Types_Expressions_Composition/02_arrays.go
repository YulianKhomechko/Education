package main

import "fmt"

// aggregate types (array, struct)

// reference types (pointers, slices, maps, functions, channels)

// interface type

func main() {
	var myStringsArr [3]string // you can specify the max length of an array

	myStringsArr[0] = "cat"
	myStringsArr[1] = "dog"
	myStringsArr[2] = "fish"
	//myStringsArr[3] = "elephant" error, because we specified the max length 3

	fmt.Println("First element in array is", myStringsArr[0])
	fmt.Println("Second element in array is", myStringsArr[1])
	fmt.Println("Third element in array is", myStringsArr[2])

	var myIntArr [5]int

	myIntArr[0] = 1
	myIntArr[1] = 1
	myIntArr[2] = 2
	myIntArr[3] = 3
	myIntArr[4] = 5

	fmt.Println("First element in array is", myIntArr[0])
	fmt.Println("Second element in array is", myIntArr[1])
	fmt.Println("Third element in array is", myIntArr[2])
	fmt.Println("4th element in array is", myIntArr[3])
	fmt.Println("5th element in array is", myIntArr[4])
}

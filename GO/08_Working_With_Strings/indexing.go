package main

import "fmt"

func main() {
	// indexes start at 0
	courseName := "Learn GO for Beginners Crash Course"

	// from 0 to 12
	fmt.Println(courseName[0])         // 76 - a rune, which is a 32bit integer, representing a unicode character
	fmt.Println(string(courseName[0])) // L - transform rune to string

	for i := 0; i < len(courseName); i++ {
		fmt.Println(string(courseName[i]))
	}
}

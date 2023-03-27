package main

import (
	"fmt"
	"strings"
)

func main() {
	courses := []string{
		"Learn GO for Beginners Crash Course",
		"Learn JAVA for Beginners Crash Course",
		"Learn Python for Beginners Crash Course",
		"Learn JavaScript for Beginners Crash Course",
	}

	for _, val := range courses {
		if strings.Contains(val, "GO") {
			fmt.Printf("GO is found in \"%s\". Index is %d", val, strings.Index(val, "GO"))
		}
	}

	newString := "GO is a great programming language. GO for it!"

	fmt.Println()
	// check if begins with a string
	fmt.Println(strings.HasPrefix(newString, "GO"))     // true
	fmt.Println(strings.HasSuffix(newString, "Python")) // false
	fmt.Println(strings.HasSuffix(newString, "!"))      // true
	fmt.Println(strings.HasPrefix(newString, "!"))      // false

	fmt.Println(strings.Count(newString, "GO"))     // counts all occurrences of a substring in string
	fmt.Println(strings.Count(newString, "Fish"))   // 0
	fmt.Println(strings.Index(newString, "GO"))     // 0
	fmt.Println(strings.Index(newString, "Python")) // -1 - because not found

	// last occurrence
	fmt.Println(strings.LastIndex(newString, "GO")) // 36
}

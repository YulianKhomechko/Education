package main

import (
	"fmt"
	"strings"
)

func main() {
	newString := "GO is a great programming language. GO for it!"

	if strings.Contains(newString, "GO") {
		// -1 everywhere. or we can use strings.ReplaceAll()
		// newString = strings.Replace(newString, "GO", "Golang", -1)
		newString = strings.Replace(newString, "GO", "Golang", 1)
		fmt.Println(newString)
	}

	// string comparison
	a := "A"
	if a == "A" {
		fmt.Println("a is equal to A")
	}

	if "A" > "B" {
		fmt.Println("A is greater than B")
	} else {
		fmt.Println("A is not greater than B")
	}

	badEmail := "  me@here.com  "
	// remove leading and trailing spaces
	badEmail = strings.TrimSpace(badEmail)
	fmt.Printf("=%s=", badEmail)
}

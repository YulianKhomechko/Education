package main

import (
	"fmt"
	"golang.org/x/text/cases"
	"golang.org/x/text/language"
	"strings"
)

// Dealing with case

func main() {
	myString := "This is a clear example of why we search in one case only"

	searchString := strings.ToLower(myString)

	if strings.Contains(searchString, "this") {
		fmt.Println("Found it")
	} else {
		fmt.Println("Did not found it")
	}

	// other case functions
	fmt.Println(strings.ToLower(myString))
	fmt.Println(strings.ToUpper(myString))
	caser := cases.Title(language.English)
	fmt.Println(caser.String(myString))

}

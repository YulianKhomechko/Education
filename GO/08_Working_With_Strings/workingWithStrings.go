package main

import (
	"fmt"
	"strings"
)

func main() {
	fmt.Println() // blank line

	text := "Hello World" // Hello World

	fmt.Println(text)
	fmt.Println()

	fmt.Println("Bytes:")
	for i := 0; i < len(text); i++ {
		fmt.Printf("%x ", text[i])
	}

	// RUNE is a 32bit integer which represents a unicode character
	fmt.Println()
	fmt.Println("Index\tRune\tString")

	for idx, value := range text {
		fmt.Println(idx, "\t", value, "\t", string(value))
	}

	text = "Γειά σου Κόσμε"

	fmt.Println()
	fmt.Println("Index\tRune\tString")

	for idx, value := range text {
		fmt.Println(idx, "\t", value, "\t", string(value))
	}

	fmt.Println()

	// join strings together
	fmt.Println("Three ways to concatenate strings together")

	h := "Hello "
	w := "World"

	// string concatenation
	myString := h + w // not the most efficient way
	fmt.Println(myString)

	// using fmt - more efficient
	myString = fmt.Sprintf("%s%s", h, w) // Sprintf returns a new string
	fmt.Println(myString)

	// string builder - the most efficient
	var sb strings.Builder
	sb.WriteString(h)
	sb.WriteString(w)
	fmt.Println(sb.String())

	fmt.Println()
	text = "ABCDEFGHIJKLMNQRSTUVWXYZ"

	fmt.Println("Getting a substring")
	// from 0 to 13 element(character)
	fmt.Println(text[0:13])

}

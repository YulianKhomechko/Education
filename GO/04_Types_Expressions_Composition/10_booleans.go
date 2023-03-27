package main

import "fmt"

func main() {
	apples := 18
	oranges := 9

	// boolean expression
	// boolean expressions are often referred as condition
	fmt.Println(apples == oranges)
	fmt.Println(apples != oranges)

	// You can test value only of the same type
	//if apples == "10" {
	// error
	//}

	// < > <= >= == !=
	fmt.Printf("%d > %d: %t", apples, oranges, apples > oranges)
	fmt.Println()

	fmt.Printf("%d < %d: %t", apples, oranges, apples < oranges)
	fmt.Println()

	fmt.Printf("%d >= %d: %t", apples, oranges, apples >= oranges)
	fmt.Println()

	fmt.Printf("%d <= %d: %t", apples, oranges, apples <= oranges)
	fmt.Println()
}

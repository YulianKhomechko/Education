package main

import (
	"fmt"
	"sort"
)

// Reference Types - Pointers, slices, maps, functions, channels

func main() {
	var animals []string
	// append add to the end
	animals = append(animals, "dog")
	animals = append(animals, "cat")
	animals = append(animals, "fish")
	animals = append(animals, "horse")
	animals = append(animals, "a dog")

	fmt.Println(animals)

	for i, x := range animals {
		fmt.Println(i, x)
	}

	fmt.Println("Element 0 is", animals[0])
	// start from position 0, and give 2 elements
	fmt.Println("First two elements are", animals[0:2])

	fmt.Println("The slice is", len(animals), "elements long")

	// sorting
	fmt.Println("Is it sorted?", sort.StringsAreSorted(animals))

	isSorted := sort.StringsAreSorted(animals)

	if !isSorted {
		sort.Strings(animals)
		fmt.Println("Is it sorted now?", sort.StringsAreSorted(animals))
		fmt.Println(animals)
	}

	animals = deleteFromSlice(animals, 0)
	fmt.Println(animals)
}

func deleteFromSlice(a []string, i int) []string {
	a[i] = a[len(a)-1] // copy the last element of the slice and replace element with provided index
	a[len(a)-1] = ""   // replace the last element with an empty string
	a = a[:len(a)-1]   //

	return a
}

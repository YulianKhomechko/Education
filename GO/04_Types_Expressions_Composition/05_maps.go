package main

import "fmt"

// Reference Types - Pointers, slices, maps, functions, channels
// maps are keys and values

func main() {
	// map is reference type
	// so you don't need pointers
	intMap := make(map[string]int) // key string, value - int

	// the order might be different
	intMap["one"] = 1
	intMap["two"] = 2
	intMap["three"] = 3
	intMap["four"] = 4
	intMap["five"] = 5

	for key, value := range intMap {
		fmt.Println(key, value)
	}

	delete(intMap, "four")
	fmt.Println("------")

	for key, value := range intMap {
		fmt.Println(key, value)
	}

	el, exist := intMap["four"]

	if exist {
		fmt.Println(el, "is in map")
	} else {
		fmt.Println(el, "is not in map")
	}

	// maps are incredibly fast
	intMap["two"] = 4 // replace value of key "two"
}

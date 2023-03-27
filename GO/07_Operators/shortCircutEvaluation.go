package main

import (
	"errors"
	"fmt"
)

func main() {
	a := 12
	b := 0

	//c := divideTwoNumbers(a, b)
	//
	//if c == 2 {
	//	fmt.Println("we found a two")
	//}
	//
	//// short-circuiting
	//// second part of code will be evaluated only if first one is true
	//// works from left to rights
	//
	//if b != 0 && divideTwoNumbers(a, b) == 2 {
	//	fmt.Println("Found 2")
	//}

	c, err := divideTwoNumbers(a, b)
	if err != nil {
		fmt.Println(err)
	} else {
		if c == 2 {
			fmt.Println("We found 2")
		}
	}
}

func divideTwoNumbers(x, y int) (int, error) {
	if y == 0 {
		return 0, errors.New("cannot divide by 0")
	}

	return x / y, nil
}

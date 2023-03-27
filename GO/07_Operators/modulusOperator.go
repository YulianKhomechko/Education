package main

import "fmt"

func main() {
	// does one number divided exactly into another

	x := 12
	y := 3

	if x%y == 0 {
		fmt.Println(y, "Divides exactly into", x)
	} else {
		fmt.Println(y, "does not divide exactly into", x)
	}

	//thisMonth := 12
	//fmt.Println("The month after", thisMonth, "is", thisMonth+1)

	for m := 1; m <= 12; m++ {
		fmt.Println("the month after", m, "is", m%12+1)
	}
}

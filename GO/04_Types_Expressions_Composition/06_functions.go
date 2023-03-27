package main

import "fmt"

// Reference Types - Pointers, slices, maps, functions, channels
// Function type

type Animal struct {
	Name         string
	Sound        string
	NumberOfLegs int
}

// receiver it comes after func keyword and before function name
func (a *Animal) Says() {
	fmt.Printf("A %s says %s", a.Name, a.Sound)
	fmt.Println()
}

func (a *Animal) HowManyLegs() {
	fmt.Printf("%s has %d legs", a.Name, a.NumberOfLegs)
	fmt.Println()
}

func main() {
	var dog Animal
	dog.Name = "dog"
	dog.Sound = "woof"
	dog.NumberOfLegs = 4
	dog.Says()

	cat := Animal{
		Name:         "cat",
		Sound:        "meow",
		NumberOfLegs: 4,
	}

	cat.Says()
	cat.HowManyLegs()

	z := addTwoNumbers(2, 4)
	fmt.Println(z)

	fmt.Println("Sum many", sumMany(1, 1, 2, 3, 5, 8, 13))

}

// name return type
//func addTwoNumbers(x, y int) (sum int) {
//	// naked return
//	// not recommended to use
//	sum = x + y
//	return
//}

func addTwoNumbers(x, y int) int {
	return x + y
}

// variable number of arguments
// variatic function - function that takes variable numbers of arguments
func sumMany(nums ...int) int {
	total := 0

	for _, x := range nums {
		//total = total + x
		total += x
	}

	return total
}

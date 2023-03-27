package main

import "fmt"

func main() {

	age := 10
	name := "Jack"
	rightHanded := true

	fmt.Printf("%s is %d years old. Righthanded %t", name, age, rightHanded)
	fmt.Println()

	ageInTenYears := age + 10
	fmt.Printf("In ten years, %s will be %d years old", name, ageInTenYears)
	fmt.Println()

	isTeenager := age >= 13
	fmt.Printf("is a teenager: %t", isTeenager)
	fmt.Println()

}

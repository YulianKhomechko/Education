package main

import (
	"fmt"
	"myappScope/packageone"
)

// package level variable, they are available inside whole package
var one = "One"
var myVar = "package level variable"

func main() {
	// block level variable will override package level variable
	// It's a bad practice, and you should avoid such collisions
	var one = "this is a block level variable"
	//var blockVar = "this is block level variable"

	fmt.Println(one)

	myFunc()

	newString := packageone.PublicVariable
	// when the name starts from lover case letter it is considered private, not exported
	// it will be available only inside the package where it is declared
	//secondString := packageone.privateVarriable

	// when the name starts from upper case letter it is public, exported
	fmt.Println("From packageone:", newString)

	// available
	packageone.Exported()

	// not available, because starts from lowercase letter
	//packageone.notExported()
}

func myFunc() {
	// variables declared inside a function are available only inside this function
	// var one = "the number one"

	fmt.Println(one)
}

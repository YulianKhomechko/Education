package main

import "fmt"

// basic types (numbers, strings, booleans)
var myInt int

// exist, but should not be used in the most cases
//var myInt16 int16 // 16bit integer
//var myInt32 int32 // 32bit integer
//var myInt64 int64 // 64bit integer

var myUint uint // only positive int

var myFloat32 float32 // 32bit float
var myFloat64 float64 // 64bit float

func main() {

	myInt = 10
	myUint = 12

	myFloat32 = 0.1
	myFloat64 = 0.01

	fmt.Println(myInt, myUint, myFloat32, myFloat64)

	myString := ""

	fmt.Println(myString)

	var myBool = true
	//myBool = "yellow"
	myBool = false

	fmt.Println(myBool)

}

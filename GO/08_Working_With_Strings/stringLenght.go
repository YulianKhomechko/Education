package main

import "fmt"

func main() {
	courseName := "Learn GO for Beginners Crash Course"

	fmt.Println(courseName[0])
	fmt.Println(string(courseName[0]))

	for i := 0; i < len(courseName); i++ {
		fmt.Println(string(courseName[i]))
	}

	fmt.Println()
	fmt.Println("Length of course name is", len(courseName))

	var mySlice []string
	mySlice = append(mySlice, "one")
	mySlice = append(mySlice, "two")
	mySlice = append(mySlice, "three")

	fmt.Println("My slice has", len(mySlice), "elements")
	fmt.Println(mySlice)

	fmt.Println("The last element in my slice is", mySlice[len(mySlice)-1])
	fmt.Println("The last element in my slice is", mySlice[len(mySlice)-1])
}

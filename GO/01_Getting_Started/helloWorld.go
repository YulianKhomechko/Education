package main

// fmt package of standard library
import "fmt" // fmt - format

func main() {
	// everything between curly braces is called **block of code**
	//fmt.Println("Hello World!")    // Println prints text on its own line
	//fmt.Print("This is some text") // Print just prints text
	//fmt.Print("This is some more text")

	var whatToSay string
	whatToSay = "Hello World! @from sayHelloWorld func"

	//var text = "Hello World! @from sayHelloWorld func"
	// := assignment operator
	text := "Hello World! @from sayHelloWorld func"

	sayHelloWorld(whatToSay)
	sayHelloWorld(text)
}

func sayHelloWorld(whatToSay string) {
	fmt.Println(whatToSay)
}

package main

import (
	"bufio"
	"fmt"
	"myapp/doctor"
	"os"
	"strings"
)

// os - operating system

func main() {
	// Stdin - standard input
	reader := bufio.NewReader(os.Stdin)

	whatToSay := doctor.Intro()

	fmt.Println(whatToSay)

	// will run forever
	for {
		fmt.Print("-> ")
		// _ - blank identifier
		// ReadString allows us to catch whatever user types
		userInput, _ := reader.ReadString('\n')

		// -1 - replace every occurrence
		userInput = strings.Replace(userInput, "\r\n", "", -1)
		userInput = strings.Replace(userInput, "\n", "", -1)

		// fmt.Println(userInput)

		if userInput == "quit" {
			fmt.Println("bye-bye")
			break
		} else {
			fmt.Println(doctor.Response(userInput))
		}

	}

}

package main

import (
	"fmt"
	"github.com/eiannone/keyboard"
	"log"
)

func main() {
	err := keyboard.Open()
	// nil - nothing (like null)
	if err != nil {
		log.Fatal(err)
	}

	// everything that  is after defer won't be executed immediately, buy only when
	// following function is executed
	defer func() {
		_ = keyboard.Close()
	}()

	coffees := make(map[int]string)
	coffees[1] = "Cappuccino"
	coffees[1] = "Cappuccino"
	coffees[1] = "Cappuccino"
	coffees[1] = "Cappuccino"

	fmt.Println("MENU")
	fmt.Println("----")
	fmt.Println("1. Cappuccino")
	fmt.Println("2. Late")
	fmt.Println("3. Americano")
	fmt.Println("4. Mocha")
	fmt.Println("5. Macchiato")
	fmt.Println("6. Espresso")
	fmt.Println("Q - Quit the program")

	for {
		char, _, err := keyboard.GetSingleKey()
		if err != nil {
			log.Fatal(err)
		}

		t := fmt.Sprintf("You chose %q", char)

		fmt.Println(t)

		if char == 'q' || char == 'Q' {
			break
		}
	}

	fmt.Println("Program is exiting")
}

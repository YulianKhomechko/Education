package main

import (
	"fmt"
	"github.com/eiannone/keyboard"
)

// Channels
// Channels allow to send information from one place to another
// They are used for go routines

//func main() {
//	// go routine
//	// it will run concurrently - at the same time
//	go doSomething("Hello World")
//
//	fmt.Println("This is another message")
//
//	for {
//		// do nothing
//	}
//}
//
//func doSomething(s string) {
//	until := 0
//
//	for {
//		fmt.Println("s is", s)
//		until = until + 1
//
//		if until >= 5 {
//			break
//		}
//	}
//}

var keyPressChan chan rune

func main() {
	keyPressChan = make(chan rune)

	go listenForKeyPress()

	fmt.Println("Press any key, or q to quit")

	keyboard.Open()
	defer func() {
		keyboard.Close()
	}()

	for {
		char, _, _ := keyboard.GetSingleKey()

		if char == 'q' || char == 'Q' {
			break
		}

		keyPressChan <- char
	}
}

// channels are used to communicate between go routines, to pass data from one part of your program
// to another part of your program that runs in the background as a routine
// one of the most powerful features of go

func listenForKeyPress() {
	for {
		key := <-keyPressChan
		fmt.Println("You pressed", string(key))
	}
}

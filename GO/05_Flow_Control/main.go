package main

import (
	"bufio"
	"flow/mylogger"
	"os"
	"time"
)

import "fmt"

func main() {
	// three part loop
	for i := 0; i <= 10; i++ {
		fmt.Println("i is", i)
	}

	i := 1000

	// while loop in GO (loop with condition)
	for i > 100 {
		i -= 10
		fmt.Println(i)
	}

	reader := bufio.NewReader(os.Stdin)
	ch := make(chan string)

	go mylogger.ListenForLog(ch)

	fmt.Println("Enter something")

	for i := 0; i < 5; i++ {
		fmt.Print("-> ")
		input, _ := reader.ReadString('\n')
		ch <- input
		time.Sleep(time.Second)
	}

	// do while loop in GO

}

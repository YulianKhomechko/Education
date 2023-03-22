package game

import (
	"bufio"
	"fmt"
	"os"
)

// constants never change
const prompt = "and press ENTER when ready"

func RunGame(firstNumber int, secondNumber int, subtraction int, answer int) {
	reader := bufio.NewReader(os.Stdin)

	// display a welcome / instructions
	fmt.Println("Guess the Number Game")
	fmt.Println("---------------------")
	fmt.Println("") // blank line

	fmt.Println("Think of a number between 1 and 10", prompt)

	reader.ReadString('\n')

	// take them through the games
	// space will be inserted automatically
	fmt.Println("Multiply your number by", firstNumber, prompt)
	reader.ReadString('\n')

	fmt.Println("Now multiply the result by", secondNumber, prompt)
	reader.ReadString('\n')

	fmt.Println("Divide the result by the number you originally though of")
	reader.ReadString('\n')

	fmt.Println("Now subtract", subtraction, prompt)
	reader.ReadString('\n')

	// give them the answer
	fmt.Println("The answer is", answer)
}

package game

import (
	"bufio"
	"fmt"
	"math/rand"
	"os"
	"os/exec"
	"runtime"
	"strings"
	"time"
)

const (
	ROCK     = 0
	PAPER    = 1
	SCISSORS = 2
)

type Game struct {
	DisplayChan chan string
	RoundChan   chan int
	Round       Round
}

type Round struct {
	RoundNumber   int
	PlayerScore   int
	ComputerScore int
}

var reader = bufio.NewReader(os.Stdin)

func (g *Game) Rounds() {
	// use select to process input in channels
	// print to screen
	// keep track of round number

	for {
		select {
		case round := <-g.RoundChan:
			g.Round.RoundNumber = g.Round.RoundNumber + round
			g.RoundChan <- 1

		case msg := <-g.DisplayChan:
			fmt.Println(msg)
		}

	}
}

func (g *Game) ClearScreen() {
	if strings.Contains(runtime.GOOS, "windows") {
		// windows
		cmd := exec.Command("cmd", "/c", "cls")
		cmd.Stdout = os.Stdout
		cmd.Run()
	} else {
		// linux or mac
		cmd := exec.Command("clear")
		cmd.Stdout = os.Stdout
		cmd.Run()
	}
}

func (g *Game) PrintIntro() {
	// *** print out some instructions
	fmt.Println("Rock, Paper & Scissors")
	fmt.Println("----------------------")
	fmt.Println("Game is played for three rounds, and best of three wins the game. Good luck!")
	fmt.Println()
}

func (g *Game) PlayRound() bool {
	rand.Seed(time.Now().UnixNano())

	playerValue := -1

	fmt.Println()
	fmt.Println("Round: ", g.Round.RoundNumber)
	fmt.Println("--------")
	fmt.Print("Please, enter rock paper or scissors -> ")

	playerChoice, _ := reader.ReadString('\n')
	playerChoice = strings.Replace(playerChoice, "\r\n", "", -1)
	playerChoice = strings.Replace(playerChoice, "\n", "", -1)

	computerValue := rand.Intn(2)

	if playerChoice == "rock" {
		playerValue = ROCK
	} else if playerChoice == "paper" {
		playerValue = PAPER
	} else if playerChoice == "scissors" {
		playerValue = SCISSORS
	} else {
		playerValue = -1
	}

	g.DisplayChan <- "\n"
	g.DisplayChan <- fmt.Sprintf("Player chose %s", strings.ToUpper(playerChoice)) // Sprintf returns a string

	switch computerValue {
	case ROCK:
		fmt.Println("Computer chose ROCK")
		break
	case PAPER:
		fmt.Println("Computer chose PAPER")
		break
	case SCISSORS:
		fmt.Println("Computer chose SCISSORS")
		break
	default:
	}

	if playerValue == computerValue {
		g.DisplayChan <- "It's a draw"
		return false
	} else {
		// *** refactor the logic to keep track of score and print
		// messages to two new functions, computerWins and playerWins
		switch playerValue {
		case ROCK:
			if computerValue == PAPER {
				g.computerWins()
			} else {
				g.playerWins()
			}
			break
		case PAPER:
			if computerValue == SCISSORS {
				g.computerWins()
			} else {
				g.playerWins()
			}
			break
		case SCISSORS:
			if computerValue == ROCK {
				g.computerWins()
			} else {
				g.playerWins()
			}
			break
		default:
			// *** decrement i by 1, since we're repeating the round
			g.DisplayChan <- "Invalid Choice"
			return false
		}
	}
	return true
}

func (g *Game) playerWins() {
	g.Round.ComputerScore++
	g.DisplayChan <- "Computer Wins!"
}

func (g *Game) computerWins() {
	g.Round.PlayerScore++
	g.DisplayChan <- "Player Wins!"
}

func (g *Game) PrintSummary() {
	g.DisplayChan <- "Final score"
	g.DisplayChan <- "-----------"
	g.DisplayChan <- fmt.Sprintf("Player: %d/3, Computer %d/3", g.Round.PlayerScore, g.Round.ComputerScore)
	g.DisplayChan <- "\n"
	if g.Round.PlayerScore > g.Round.ComputerScore {
		g.DisplayChan <- "Player wins game!"
	} else {
		g.DisplayChan <- "Computer wins game!"
	}
}

package main

import (
	"bufio"
	"fmt"
	"github.com/eiannone/keyboard"
	"log"
	"os"
	"strconv"
	"strings"
)

var reader *bufio.Reader

type User struct {
	UserName       string
	UserAge        int
	FavoriteNumber float64
	OwnsDog        bool
}

func main() {
	reader = bufio.NewReader(os.Stdin)

	var user User

	user.UserName = readString("What is your name?")
	fmt.Println("Your name is", user.UserName)

	user.UserAge = readInt("How old are you?")
	fmt.Println(user.UserAge)

	user.FavoriteNumber = readFloat("What is your favorite number?")
	fmt.Println(user.FavoriteNumber)

	for {
		userOwnsDog := readString("Do you have a dog ()?")

		if userOwnsDog == "y" {
			user.OwnsDog = true
			break
		} else if userOwnsDog == "n" {
			user.OwnsDog = false
			break

		} else {
			fmt.Println("Wrong answer")
		}
	}

	user.OwnsDog = readBool("Do you have a dog (y/n)?")

	//fmt.Println("Your name is"+userName+". and you are", userAge, "years old")
	//fmt.Println(fmt.Sprintf("Your name is %s. You are %d years old.", userName, userAge))
	fmt.Printf("Your name is %s. You are %d years old.\nAnd your favorite number is %.2f. Has a dog: %t", user.UserName, user.UserAge, user.FavoriteNumber, user.OwnsDog)
}

func prompt() {
	fmt.Print("=> ")
}

func readString(s string) string {
	for {
		fmt.Println(s)
		prompt()

		userInput, err := reader.ReadString('\n')
		userInput = strings.Replace(userInput, "\r\n", "", -1)
		userInput = strings.Replace(userInput, "\n", "", -1)

		if err != nil || userInput == "" {
			fmt.Println("Please a valid name")
		} else {
			return userInput
		}
	}

}

func readInt(s string) int {
	for {
		fmt.Println(s)
		prompt()

		userInput, _ := reader.ReadString('\n')
		userInput = strings.Replace(userInput, "\r\n", "", -1)
		userInput = strings.Replace(userInput, "\n", "", -1)

		num, err := strconv.Atoi(userInput)

		if err != nil {
			fmt.Println("Please enter a whole number")
		} else {
			return num
		}
	}
}

func readFloat(s string) float64 {
	for {
		fmt.Println(s)
		prompt()

		userInput, _ := reader.ReadString('\n')
		userInput = strings.Replace(userInput, "\r\n", "", -1)
		userInput = strings.Replace(userInput, "\n", "", -1)

		num, err := strconv.ParseFloat(userInput, 64)

		if err != nil {
			fmt.Println("Please enter a number")
		} else {
			return num
		}
	}
}

func readBool(s string) bool {
	err := keyboard.Open()

	if err != nil {
		log.Fatal(err)
	}

	defer func() {
		_ = keyboard.Close()
	}()

	for {
		fmt.Println(s)

		char, _, err := keyboard.GetSingleKey()

		if err != nil {
			log.Fatal(err)
		}

		if strings.ToLower(string(char)) != "y" && strings.ToLower(string(char)) != "n" {
			fmt.Println("Please, type y or n")
		} else if char == 'n' || char == 'N' {
			return false
		} else if char == 'y' || char == 'Y' {
			return true
		}

	}
}

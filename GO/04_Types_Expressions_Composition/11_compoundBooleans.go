package main

import "fmt"

type Employee struct {
	Name     string
	Age      int
	Salary   int
	FullTime bool
}

func main() {
	jack := Employee{
		Name:     "Jack Smith",
		Age:      27,
		Salary:   40000,
		FullTime: false,
	}

	jill := Employee{
		Name:     "Jill Johnes",
		Age:      33,
		Salary:   30000,
		FullTime: true,
	}

	var employees []Employee

	//employees[0] = jack
	//employees[1] = jill

	employees = append(employees, jack, jill)

	for _, x := range employees {
		if x.Age >= 30 {
			fmt.Println(x.Name, "is 30 or older")
		} else {
			fmt.Println(x.Name, "is under 30")
		}

		if x.Age > 30 && x.Salary > 25000 {
			fmt.Println(x.Name, "makes more than 25000, and the age is over 30")
		} else {
			fmt.Println(x.Name, "either younger than 30, or makes less than 25000")
		}

		if x.Age > 30 || x.Salary > 25000 {
			fmt.Println(x.Name, "makes more than 25000, or the age is over 30")
		} else {
			fmt.Println(x.Name, "younger than 30, and makes less than 25000")
		}

		// && logical AND
		// || logical OR

		if (x.Age > 30 || x.Salary < 5000) && x.FullTime {
			fmt.Println(x.Name, "meet our unclear criteria")
		}
	}

}

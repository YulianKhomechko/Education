package main

import (
	"fmt"
	"types04/staff"
)

var employees = []staff.Employee{
	{FirstName: "John", LastName: "Smith", Salary: 300000, FullTime: true},
	{FirstName: "Lisa", LastName: "Johnson", Salary: 250000, FullTime: true},
	{FirstName: "Adam", LastName: "Anderson", Salary: 200000, FullTime: false},
	{FirstName: "Margaret", LastName: "Carter", Salary: 500000, FullTime: true},
}

func main() {
	myStaff := staff.Office{
		AllStaff: employees,
	}

	fmt.Println(myStaff.All())
	fmt.Println(myStaff.Overpaid())
}

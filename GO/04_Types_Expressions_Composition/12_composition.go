package main

import "fmt"

// composition

type Vehicle struct {
	NumberOfWheels     int
	NumberOfPassengers int
}

type Car struct {
	Make       string
	Model      string
	Year       int
	IsElectric bool
	isHybrid   bool
	// Embed Vehicle type into Car
	Vehicle Vehicle
}

func (v *Vehicle) ShowDetails() {
	fmt.Println("Number of passengers", v.NumberOfPassengers)
	fmt.Println("Number of wheels", v.NumberOfWheels)
}

func (c *Car) Show() {
	fmt.Println("Make", c.Make)
	fmt.Println("Model", c.Model)
	fmt.Println("Year", c.Year)
	fmt.Println("isElectric:", c.IsElectric)
	fmt.Println("isHybrid", c.isHybrid)
	c.Vehicle.ShowDetails()
}

func main() {
	suv := Vehicle{
		NumberOfWheels:     4,
		NumberOfPassengers: 6,
	}

	volvoXC90 := Car{
		Year:       2021,
		Make:       "Volvo",
		Model:      "XC90 T8",
		IsElectric: false,
		isHybrid:   true,
		Vehicle:    suv,
	}

	volvoXC90.Show()
	volvoXC90.Vehicle.ShowDetails()

	fmt.Println()

	teslaModelX := Car{
		Make:       "Tesla",
		Model:      "Model X",
		Year:       2021,
		IsElectric: true,
		isHybrid:   false,
		Vehicle:    suv,
	}

	teslaModelX.Vehicle.NumberOfPassengers = 8

	teslaModelX.Show()
}

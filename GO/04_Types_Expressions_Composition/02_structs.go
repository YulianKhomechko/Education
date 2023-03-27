package main

import "fmt"

// struct can hold many pieces of information

type Car struct {
	NumberOfTires int
	Luxury        bool
	BucketSeats   bool
	Make          string
	Model         string
	Year          int
}

func main() {
	//var myCar Car
	//myCar.NumberOfTires = 4
	//myCar.Luxury = false
	//myCar.Make = "Volkswagen"

	myCar := Car{
		NumberOfTires: 4,
		Luxury:        true,
		BucketSeats:   true,
		Make:          "Volkswagen",
		Model:         "XC90",
		Year:          2019,
	}

	fmt.Printf("My car has %d tires. My car's make is %s, model: %s. It was made in %d\n", myCar.NumberOfTires, myCar.Make, myCar.Model, myCar.Year)
}

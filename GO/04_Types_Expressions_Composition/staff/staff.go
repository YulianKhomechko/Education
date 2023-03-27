package staff

type Employee struct {
	FirstName string
	LastName  string
	Salary    int
	FullTime  bool
}

type Office struct {
	AllStaff []Employee
}

func (e *Office) All() []Employee {
	return e.AllStaff
}

func (e *Office) Overpaid() []Employee {
	var overpaid []Employee

	for _, x := range e.AllStaff {
		if x.Salary > 300000 {
			overpaid = append(overpaid, x)
		}
	}

	return overpaid
}

func (e *Office) Underpaid() []Employee {
	var underpaid []Employee

	for _, x := range e.AllStaff {
		if x.Salary < 150000 {
			underpaid = append(underpaid, x)
		}
	}

	return underpaid
}

// starts from lower case letter, so it is not visible outside of the package where they was created
func (e *Office) notVisible() {

}

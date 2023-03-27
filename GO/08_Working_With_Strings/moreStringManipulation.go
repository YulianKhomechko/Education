package main

import (
	"fmt"
	"strings"
)

func main() {
	str := "alpha alpha alpha alpha alpha alpha alpha alpha"

	// replace a specific one
	newStr := replaceNth(str, "alpha", "replaced", 2)
	fmt.Println(newStr)
}

func replaceNth(str, old, new string, n int) string {
	// index
	i := 0

	for j := 1; j <= n; j++ {
		x := strings.Index(str[i:], old)

		if x == -1 {
			break
		}

		// have found it
		i += x // x will be the index of found string

		if j == n {
			return str[:i] + new + str[i+len(old):]
		}

		i += len(old)
	}

	return str
}

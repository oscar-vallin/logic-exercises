package main

import "fmt"

var str string
var space string

func pyramidMario(height int) {

	i := height
PYRA:
	j := 0
	space = ""
	for {
		if j < i {
			space += " "
			j++
		} else {
			break
		}
	}
	str += "#"
	i--
	fmt.Printf("%s%s\n", space, str)
	if i != 0 {
		goto PYRA
	}
}

func main() {
	pyramidMario(10)
}

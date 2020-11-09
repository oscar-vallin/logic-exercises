package main

import "fmt"

var str string
var space string

func doblePyramid(height int) {

	i := height
PYRA:
	space = ""
	j := 0
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
	fmt.Printf("%s%s  %s%s\n", space, str, str, space)
	if i != 0 {
		goto PYRA
	}
}

func main() {

	doblePyramid(5)
}

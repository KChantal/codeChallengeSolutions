package main

import "fmt"

func main() {
	fmt.Println("Please enter a number: ")

	var num int
	fmt.Scanln(&num)

	result := fibonacci(num)
	fmt.Println(result)
}

func fibonacci(n int) int {
	if n <= 1 {
		return 0
	} else if n == 2 {
		return 1
	}
	return fibonacci(n-1) + fibonacci(n-2)
}

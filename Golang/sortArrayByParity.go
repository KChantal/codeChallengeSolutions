package main

import "fmt"

func main() {
	fmt.Println("Please enter an array: ")

	// Test array
	array := []int{1, 2, 3, 4, 5, 6, 7, 8}

	result := sortByParity(array)
	fmt.Println(result)
}

func sortByParity(arr []int) []int {
	even := []int{}
	odd := []int{}

	for i := 0; i < len(arr); i++ {
		if arr[i]%2 == 0 {
			even = append(even, arr[i])
		} else {
			odd = append(odd, arr[i])
		}
	}
	even = append(even, odd...)

	return even
}

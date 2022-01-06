package main

import "fmt"

func main() {
	// Test array
	array := []int{2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1}

	result := findDuplicates(array)
	fmt.Println(result)
}

func findDuplicates(array []int) []int {
	duplicates := []int{}
	tracker := map[int]int{}

	for i := 0; i < len(array); i++ {
		if tracker[array[i]] == 1 {
			duplicates = append(duplicates, array[i])
		} else {
			tracker[array[i]] = 1
		}
	}
	return duplicates
}

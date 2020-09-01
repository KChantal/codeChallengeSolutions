package main

import "fmt"

func main() {
	// Test array
	array := []int{1, 1, 2, 2, 2, 3, 3, 3, 4, 4}

	result := removeDuplicates(array)
	fmt.Println(result)
}

// Using map and new array
func removeDuplicates(array []int) []int {
	seen := map[int]bool{}
	uniqueNums := []int{}

	for i := 0; i < len(array); i++ {
		if seen[array[i]] == true {
			continue
		} else {
			seen[array[i]] = true
			uniqueNums = append(uniqueNums, array[i])
		}
	}
	return uniqueNums
}

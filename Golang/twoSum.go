package main

import "fmt"

func main() {
	fmt.Println("Please enter an array: ")

	// Test array
	nums := []int{1, 10, 20, 15, 5, 7}
	target := 20

	result := twoSum(nums, target)
	fmt.Println(result)
}

func twoSum(nums []int, target int) []int {
	indeces := []int{}
	pairs := map[int]int{}

	for i := 0; i < len(nums); i++ {
		summand := target - nums[i]

		if _, ok := pairs[summand]; ok {
			indeces = append(indeces, pairs[summand], i)
			return indeces
		} else {
			pairs[nums[i]] = i
		}
	}
	return indeces
}

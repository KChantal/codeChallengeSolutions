// From Codewars challenge 'Quarter of the year'
package kata

import (
	"math"
)

func QuarterOf(month int) int {
	var float_month float64 = float64(month)
	quarter := math.Ceil(float_month / 3)
	return int(quarter)
}

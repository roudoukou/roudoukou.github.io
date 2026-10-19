package main
/* 
import "fmt"
import "time"
 */

import (
	"fmt"
	"time"
)

func main() {
	// golang 中的表达式, 加";" , 和不加 都可以, 建议是不加
	fmt.Println(" hello Go!")
	time.Sleep(1 * time.Second);
}
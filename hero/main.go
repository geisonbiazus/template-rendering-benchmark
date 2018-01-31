package main

import (
	"bytes"
	"fmt"
	"time"
)

func main() {
	listSize := 10000
	startTime := time.Now()
	buffer := new(bytes.Buffer)
	RenderTemplate(listSize, buffer)
	print(buffer.String())
	fmt.Println(time.Since(startTime))
}

func print(result string) {
	// fmt.Println(result)
}

package main

import (
	"bytes"
	"fmt"
	"html/template"
	"log"
	"time"
)

var tpl *template.Template

func init() {
	tpl = template.Must(template.ParseGlob("./template/*"))
}

func main() {
	var data []int

	for i := 1; i <= 10000; i++ {
		data = append(data, i)
	}

	startTime := time.Now()
	var buffer bytes.Buffer

	err := tpl.ExecuteTemplate(&buffer, "index.gohtml", data)
	if err != nil {
		log.Fatalln(err)
	}
	print(buffer.String())
	fmt.Println(time.Since(startTime))
}

func print(result string) {
	// fmt.Println(result)
}

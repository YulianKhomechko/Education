package main

import (
	"encoding/json"
	"html/template"
	"log"
	"net/http"
	"strconv"
	rps "webapp/rpc"
)

func homePage(w http.ResponseWriter, r *http.Request) {
	renderTemplate(w, "index.html")
}

func playRound(w http.ResponseWriter, r *http.Request) {
	playerChoise, _ := strconv.Atoi(r.URL.Query().Get("c"))
	result := rps.PlayRound(playerChoise)

	out, err := json.MarshalIndent(result, "", "  ")
	if err != nil {
		log.Println(err)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(out)
}

func main() {
	http.HandleFunc("/play", playRound)
	// specify route and handler function
	http.HandleFunc("/", homePage)

	log.Println("Starting web server on port 8080")
	// start server
	http.ListenAndServe(":8080", nil)

}

func renderTemplate(w http.ResponseWriter, page string) {
	//html := `<strong>Hello World</strong>`
	//
	//// set header
	//w.Header().Set("Content-Type", "text/html")
	//// send response
	//fmt.Fprint(w, html)

	t, err := template.ParseFiles(page)
	if err != nil {
		return
	}

	t.Execute(w, nil)
}

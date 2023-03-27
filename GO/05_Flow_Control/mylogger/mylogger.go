package mylogger

import "log"

func ListenForLog(ch chan string) {

	for {
		// assign whatever was passed to the channel to msg variable
		msg := <-ch
		log.Println(msg)
	}
}

# EarthQuakes

A Full-Stack web-app that gives you a list of the last detected earthquakes by INGV.

## Description

As a side project I decided to build this web-app, it currently only shows events in the last 7 days and with a ML greater that 2.5 but i plan to fix this.
Although INGV offers an [API service](http://terremoti.ingv.it/webservices_and_software) the response is quite slow so I decided to build my own API with Flask, scraping the data directly from the web page, obtaining a much faster service.

## Getting Started

### Dependencies

* React
* Python (Flask, Requests and BeautifulSoup 4 are required)

### Executing

* Download and extract the repo
* Start the main.py file in the BE directory
* Start the react project in the FE directory

### Roadmap
I plan to fix the 7 days issue and implement a filter function (for ML and date) in the near future

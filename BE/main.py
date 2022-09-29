import requests
from bs4 import BeautifulSoup
import flask
from flask import jsonify

app = flask.Flask(__name__)
app.config["DEBUG"] = True


def get_from_table(rawlist):
    rawlist.pop(0)

    finallist = []
    for event in rawlist:
        data = event.find_all("td")
        obj = {
            "date": data[0].text.replace("\xa0", " ").replace(" \n", ""),
            "ML": data[1].text.split("\xa0")[1],
            "place": data[2].text,
            "ipo": data[3].text,
            "lat": data[4].text,
            "lon": data[5].text,
            "url": data[0].find('a')["href"],
            "id": data[0].find('a')["href"].split("/")[-1]
        }
        finallist.append(obj)
    return finallist

@app.route('/api/v1/getevents', methods=['GET'])
def check_key():
    finallist = []
    r = requests.get("http://terremoti.ingv.it/")
    soup = BeautifulSoup(r.text, 'lxml')
    pages = soup.find("ul", {"class":"pagination"}).find_all("li")
    pages.pop(0)
    pages.pop(0)
    pages.pop(-1)

    rawlist = soup.find("table").find_all("tr")
    finallist += get_from_table(rawlist)

    for urls in pages:
        r = requests.get(urls.find("a")["href"])
        soup = BeautifulSoup(r.text, 'lxml')
        rawlist = soup.find("table").find_all("tr")
        finallist += get_from_table(rawlist)

    toReturn = jsonify(finallist)
    toReturn.headers.add('Access-Control-Allow-Origin','*')
    return toReturn

if __name__ == "__main__":
    app.run('0.0.0.0')
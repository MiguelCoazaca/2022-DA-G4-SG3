from os import abort
from flask import Flask
from flask import render_template
app = Flask(__name__)
@app.route('/enlaces')
def enlaces():
	enlaces=[{"url":"http://www.google.es","texto":"Google"},
			{"url":"http://www.twitter.com","texto":"Twitter"},
			{"url":"http://www.facbook.com","texto":"Facebook"},
			]
	return render_template("template4.html",enlaces=enlaces)
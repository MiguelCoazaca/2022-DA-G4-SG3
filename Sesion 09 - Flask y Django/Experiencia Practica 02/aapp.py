from os import abort
from flask import Flask
from flask import render_template
app = Flask(__name__)
@app.route('/enlaces')
def enlaces():
	enlaces=[{"url":"https://www.youtube.com/","texto":"Youtube"},
			{"url":"https://www.instagram.com/","texto":"Instagram"},
			{"url":"https://www.ucsm.edu.pe/","texto":"UCSM"},
            {"url":"https://www.skype.com/es/","texto":"Skype"},
			{"url":"https://telegram.org/","texto":"Telegram"},
			]
	return render_template("enlaces.html",enlaces=enlaces)
from os import abort
from flask import Flask
from flask import render_template
app = Flask(__name__)
@app.route('/saludo')
def saluda(nombre="Nadia"):
    return render_template("saludo.html",nombre=nombre,curso="Desarrollo de Aplicaciones")
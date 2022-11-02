from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

from django.template import loader

def index(request):
    template = loader.get_template('pasaje.html')
    return HttpResponse(template.render())
def ind(request):
    mensaje="Buenas tardes %r" %request.GET["name"],", información complementaria se le enviará a %r" %request.GET["mail"]
    return HttpResponse(mensaje)
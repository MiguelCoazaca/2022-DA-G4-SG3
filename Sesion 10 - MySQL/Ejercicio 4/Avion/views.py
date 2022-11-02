from django.shortcuts import render, redirect
from django.http import HttpResponse
from . models import Pasenger
from . forms import PasengerForm
# Create your views here.
def inicio(request):
    return render(request,'paginas/inicio.html')

def nosotros(request):
    return render(request,'paginas/nosotros.html')

def pasajero(request):
    pasajero = Pasenger.objects.all()
    return render(request, 'pasajero/index.html',{'pasajero':pasajero})

def crear(request):
    formulario = PasengerForm(request.POST or None, request.FILES or None)
    if formulario.is_valid():
        formulario.save()
        return redirect('pasajero')
    return render(request, 'pasajero/crear.html',{'formulario':formulario})

def editar(request,id):
    pasajero = Pasenger.objects.get(id=id)
    formulario = PasengerForm(request.POST or None, request.FILES or None, instance=pasajero)
    if formulario.is_valid() and request.POST:
        formulario.save()
        return redirect('pasajero')
    return render(request, 'pasajero/editar.html',{'formulario':formulario})

def eliminar(request,id):
    pasajero = Pasenger.objects.get(id=id)
    pasajero.delete()
    return redirect('pasajero')
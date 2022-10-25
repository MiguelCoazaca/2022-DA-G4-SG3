from http.client import ResponseNotReady
import json
from operator import is_
from pickle import NONE
import re
from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Employee
from .formulario import EmployeeForm

# Create your views here.

def inicio(request):
    return render(request, 'paginas/inicio.html')

def nosotros(request):
    return render(request, 'paginas/nosotros.html')

def empleado(request):
    empleado = Employee.objects.all()
    return render(request,'empleado/index.html',{'empleado': empleado})

def mentores(request):
    return render(request,'paginas/mentores.html')

def agregar(request):
    formulario = EmployeeForm(request.POST or None, request.FILES or None)
    if formulario.is_valid():
        formulario.save()
        return redirect('empleado')
    return render(request, 'empleado/agregar.html',{'formulario': formulario})

def actualizar(request, id):
    empleado = Employee.objects.get(id=id)
    formulario = EmployeeForm(request.POST or None, request.FILES or None, instance=empleado)
    if formulario.is_valid() and request.POST:
        formulario.save()
        return redirect('empleado')
    return render(request, 'empleado/editar.html' ,{'formulario':formulario})

def eliminar(request,id):
    empleado = Employee.objects.get(id=id)
    empleado.delete()
    return redirect('empleado')


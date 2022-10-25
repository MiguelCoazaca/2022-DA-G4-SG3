from distutils.command.upload import upload
from pyexpat import model
from tabnanny import verbose
from django.db import models

# Create your models here.
class Employee(models.Model):
    id = models.AutoField(primary_key = True)
    firstname = models.CharField(max_length=100, verbose_name = 'Nombre')
    lastname = models.CharField(max_length=100, verbose_name = 'Apellido')
    age = models.CharField(max_length=2, verbose_name = 'Edad')
    imagen = models.ImageField(upload_to = 'imagenes/',verbose_name = 'Imagen', null = True)

    def __str__(self) :
        person1 = "Nombre:" + self.firstname + "---" + "Apellido:" + self.lastname + "---" + "Edad:"+self.age
        return person1

    def delete(self, using=None, keep_parents = False):
        self.imagen.storage.delete(self.imagen.name)
        super().delete()
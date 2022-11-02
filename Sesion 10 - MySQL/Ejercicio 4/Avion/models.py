from django.db import models

# Create your models here.
class Pasenger(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100, verbose_name='Nombre')
    apellido = models.CharField(max_length=100, verbose_name='Apellido')
    dia = models.CharField(max_length=2, verbose_name='Dia')
    mes = models.CharField(max_length=2, verbose_name='Mes')
    anio = models.CharField(max_length=4, verbose_name='Año')
    num_asiento = models.CharField(max_length=4, verbose_name='NUmero de Asiento')
    imagen = models.ImageField(upload_to='fotos/',verbose_name='Foto',null=True)
    Desarrollo_Web = models.ImageField(upload_to='desarrollo/',null=True)
    Testing = models.ImageField(upload_to='testing/',null=True)
    Cybersecurity = models.ImageField(upload_to='seguridad/',null=True)
    Data_Base = models.ImageField(upload_to='bases/',null=True)


    def __str__(self):
        passenger = "Nombre:"+self.nombre+"---"+"Apellido:"+self.apellido+"---"+"Fecha Nacimiento: "+"Dia:"+self.dia+"---"+"Mes:"+self.mes+"---"+"Año"+self.anio+"---"+"Numero de Asiento:"+self.num_asiento
        return passenger

    def delete(self,using=None, keep_parents=False):
        self.imagen.storage.delete(self.imagen.name)
        super().delete()
from django.db import models

# Create your models here.

#tabla categoria
class Categoria(models.Model):
    nombre = models.CharField(max_length=60)
    referencia = models.IntegerField
#Tabla productos
class Productos(models.Model):
    nombre = models.CharField(max_length=60)
    descripcion = models.CharField(max_length=60)
    modelo = models.CharField(max_length=25)
    referencia = models.IntegerField(max_length=8)
    marca = models.CharField(max_length=60)
    cantidad = models.DecimalField
    precio = models.DecimalField
#llave foranea
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    hika= models.IntegerField
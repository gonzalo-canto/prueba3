from __future__ import unicode_literals # Necesario para usar el unicode
from django.db import models
import uuid # Necesario para utilizar el Primary key
from django.urls import reverse 

class Pais(models.Model):
    nombre = models.CharField(max_length=50)
    codigo = models.CharField(max_length=2)

    def __str__(self):
        return self.nombre
        
    class Meta:
        verbose_name = 'Pais'
        verbose_name_plural = 'Paises' 

class Hotel(models.Model):

    nombre = models.CharField(max_length=100 , help_text='Nombre del establecimiento')
    cantidad_Habitaciones = models.CharField(max_length=4, help_text='Cantidad de habitaciones disponibles')
    precio_Dia = models.CharField(max_length=8)
    foto = models.CharField(max_length=200)
    tipo = models.CharField(max_length=6)
    pais = models.ForeignKey(Pais, on_delete= models.CASCADE) #el primer parametro es la clave foranea
    disponibilidad_Inmediata = models.CharField(max_length=2)
    categoria = models.CharField(max_length=200 , null=True)
    ano = models.CharField(max_length=200, null=True)
    motor = models.CharField(max_length=200, null=True)
    cilindrada = models.CharField(max_length=200, null=True)
    air_bags = models.CharField(max_length=2, null=True)
    duenos = models.CharField(max_length=200, null=True)



    def __unicode__(self):
            return self.nombre
 
    def __str__(self):
            return f'{self.nombre}'

    #Nota: El unicode sirve para mostrar como identificador en la visual del admin

    class Meta:
        verbose_name = 'Hotel'
        verbose_name_plural = 'Hoteles'

# Create your models here.

class Cliente(models.Model):
    nombre = models.CharField(max_length=50)
    rut = models.CharField(max_length=9)
    email = models.EmailField(max_length=50)
    numero = models.IntegerField(default=1)
    pais = models.ForeignKey(Pais, on_delete= models.CASCADE) #el primer parametro es la clave foranea
    
    def __str__(self):
        return f'{self.nombre}, {self.rut}' 
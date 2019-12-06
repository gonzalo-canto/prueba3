from django.contrib import admin
from .models import Hotel, Cliente, Pais

# Register your models here.

class ClienteAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'rut', 'email', 'numero', 'pais')
    search_fields = ['nombre', 'rut']
    list_filter = ('nombre',)

class HotelAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'cantidad_Habitaciones', 'tipo', 'precio_Dia', 'foto', 'pais', 'disponibilidad_Inmediata', 'categoria', 'ano', 'motor', 'cilindrada', 'air_bags', 'duenos')
    search_fields = ['nombre', 'tipo']
    list_filter = ('nombre',)

class PaisAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'codigo')

admin.site.register(Hotel, HotelAdmin)
admin.site.register(Pais, PaisAdmin)
admin.site.register(Cliente, ClienteAdmin)

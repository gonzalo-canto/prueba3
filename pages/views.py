from django.shortcuts import render, redirect
from .models import Cliente, Hotel, Pais
from django.contrib import messages

# Create your views here.

def HomePageView(request):
    return render(request, 'pages/inicio.html') #el segudno parametro es donde va  a buscar el template a ocupar (automaticamente va a buscar a template)

def GaleriaPageView(request):
    return render(request, 'pages/galeria.html')

def NoticiasPageView(request):
    return render(request, 'pages/noticias.html')

def SobreNosotrosPageView(request):
    return render(request, 'pages/sobrenosotros.html')

def RegistroClientesPageView(request):

    #vamos a definir una variable para mandarla al a pag
    paises = Pais.objects.all()
    variables = {
        'paises' : paises
    }

    if request.POST :
        cliente = Cliente()
        cliente.nombre = request.POST.get('nombre')
        cliente.rut = request.POST.get('rut')
        cliente.email = request.POST.get('correo')
        cliente.numero = request.POST.get('telefono')
        pais = Pais()
        pais.id = request.POST.get('selector1')
        cliente.pais = pais

        try:
            cliente.save()
            variables['resultado'] = "Cliente creado con exito. Gracias por unirte al programa."
        except:
            variables['resultado'] = "No se ha podido crear el cliente."

    return render(request, 'pages/registroclientes.html', variables)

def RegistroHotelesPageView(request):

    #vamos a definir una variable para mandarla al a pag
    paises = Pais.objects.all()
    variables = {
        'paises' : paises
    }

    if request.POST :
        hotel = Hotel()
        hotel.nombre = request.POST.get('nombre')
        hotel.cantidad_Habitaciones = request.POST.get('cantidad')
        hotel.precio_Dia = request.POST.get('precio')
        hotel.foto = request.POST.get('foto')
        hotel.tipo = request.POST.get('selector1')
        
        pais = Pais()
        pais.id = request.POST.get('selector2')
        hotel.pais = pais

        hotel.disponibilidad_Inmediata = request.POST.get('selector3')
        hotel.categoria = request.POST.get('categoria')
        hotel.ano = request.POST.get('ano')
        hotel.motor = request.POST.get('motor')
        hotel.cilindrada = request.POST.get('cilindrada')
        hotel.air_bags = request.POST.get('selector4')
        hotel.duenos = request.POST.get('duenos')


        try:
            hotel.save()
            variables['resultado'] = "Hotel creado con exito. Gracias por unirte al programa."
        except:
            variables['resultado'] = "No se ha podido crear el hotel."

    return render(request, 'pages/registrohoteles.html', variables)

def ListadoClientesPageView(request):

    clientes = Cliente.objects.all() #aca tendremos todos los autmoviles de la bbdd

    return render(request, 'pages/listadoclientes.html', {'clientes' : clientes}) #con el tercer parametro le pasamos los datos de los clientes como diccioanrio







def ListadoHotelesPageView(request):

    hoteles = Hotel.objects.all() #aca tendremos todos los autmoviles de la bbdd

    return render(request, 'pages/listadoautos.html', {'hoteles' : hoteles}) #con el tercer parametro le pasamos los datos de los clientes como diccioanrio






def EliminarClientePageView(request, id): #el id es para identificar el cliente a eliminar
    #busca el cliente que queremos eliminar
    client = Cliente.objects.get(id=id)

    try:
        client.delete()
        resultado = "Cliente eliminado correctamente."
        messages.success(request, resultado)
    except:
        resultado = "No se ha podido eliminar el cliente."
        messages.error(request, resultado)

    return redirect('listadoclientes') #lo llamamos por el alias de la urls

def ModificarClientePageView(request, id):
    #buscamos el automovil y la marca para el combobox
    cliente = Cliente.objects.get(id = id)
    paises = Pais.objects.all()

    #ahora tenemos que mandar esas varaibles a la vista
    variables = {
        'cliente': cliente,
        'paises' : paises
    }

    if request.POST :
        cliente = Cliente()
        cliente.id = request.POST.get('id') #esto se lo agregamos, ya que tambien tenemos que traer el id
        cliente.nombre = request.POST.get('nombre')
        cliente.rut = request.POST.get('rut')
        cliente.email = request.POST.get('correo')
        cliente.numero = request.POST.get('telefono')

        pais = Pais()
        pais.id = request.POST.get('selector1')
        cliente.pais = pais

        try:
            cliente.save()
            messages.success(request, "Cliente modificado correctamente.")
        except:
            messages.error(request, "no se ha podido modificar el cliente.")
        return redirect('listadoclientes')

    return render(request, 'pages/modificarcliente.html', variables)

def ApartamentosPageView(request):

    hoteles = Hotel.objects.all() #aca tendremos todos los autmoviles de la bbdd

    return render(request, 'pages/apartamentos.html', {'hoteles' : hoteles}) #con el tercer parametro le pasamos los datos de los hoteles como diccioanrio
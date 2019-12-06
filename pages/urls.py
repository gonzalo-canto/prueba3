from django.urls import path
from .views import HomePageView, NoticiasPageView, RegistroClientesPageView, SobreNosotrosPageView, GaleriaPageView, RegistroHotelesPageView, ListadoClientesPageView, ModificarClientePageView, ApartamentosPageView, EliminarClientePageView, ListadoHotelesPageView

urlpatterns = [
    path('', HomePageView, name='inicio'),
    path('noticias/', NoticiasPageView, name='noticias'),
    path('galeria/', GaleriaPageView, name='galeria'),
    path('sobrenosotros/', SobreNosotrosPageView, name='sobrenosotros'),
    path('registroclientes/', RegistroClientesPageView, name='registroclientes'),
    path('listadoclientes/', ListadoClientesPageView, name='listadoclientes'),
    path('modificarcliente/<id>/', ModificarClientePageView, name="modificarcliente"),
    path('eliminarcliente/<id>/', EliminarClientePageView, name='eliminarcliente'),
    path('ventadeautos/', RegistroHotelesPageView, name='registrohoteles'),
    path('comprar/', ApartamentosPageView, name='apartamentos'),
    path('listadoautos/', ListadoHotelesPageView, name='listadohotel'),
]
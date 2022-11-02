from django.urls import path;
from . import views
from django.conf import settings
from django.contrib.staticfiles.urls import static
urlpatterns = [
    path('', views.inicio, name='inicio'),
    path('nosotros', views.nosotros, name='nosotros'),
    path('pasajero', views.pasajero, name='pasajero'),
    path('pasajero/crear', views.crear, name='crear'),
    path('pasajero/editar', views.editar, name='editar'),
    path("eliminar/<int:id>", views.eliminar, name="eliminar"),
    path('pasajero/editar/<int:id>', views.editar, name="editar"),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
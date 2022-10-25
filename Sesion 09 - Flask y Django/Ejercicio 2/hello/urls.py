from django.urls import path
from . import views
from django.conf import settings
from django.contrib.staticfiles.urls import static

urlpatterns = [
 path("", views.inicio, name="Home"),
 path("nosotros", views.nosotros, name="nosotros"),
 path("empleado", views.empleado, name="empleado"),
 path("mentores", views.mentores, name="mentores"),
 path("empleado/agregar", views.agregar, name="agregar"),
 path("empleado/editar", views.actualizar, name="actualizar"),
 path("eliminar/<int:id>", views.eliminar, name="eliminar"),
 path('empleado/editar/<int:id>', views.actualizar, name="actualizar"),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
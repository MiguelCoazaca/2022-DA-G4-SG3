from django.urls import path
from pasaje import views

urlpatterns = [
    path("", views.index, name="index"),
    path('ind/',views.ind),
]
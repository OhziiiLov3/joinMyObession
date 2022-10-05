from django.urls import path
from . import views 

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    # path('/appoitments', views.getAppointments, name="appointments"),
    # path('/appoitments/<str:pk>', views.getAppointment, name="appointment"),
]
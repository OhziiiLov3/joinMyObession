from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/appointments/',
        '/api/appointments/create/',

        '/api/appointments/upload/',

        '/api/appointments/<id>/reviews/',

        '/api/appointments/top/',
        '/api/appointments/<id>/',

        '/api/appointments/delete/<id>/',
        '/api/appointments/update/<id>/',
    ]
    return Response(routes)

# @api_view(['GET'])
# def getAppointments(request):
#     return JsonResponse(appointments)

# @api_view(['GET'])
# def getAppointment(request,pk):
#     appointment = None

#     return JsonResponse(appointment)


from django.db import models
from django.contrib.auth.models import User
# Create your models here.



class Appointments(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL,null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(null=True,blank=True)
    location = models.CharField(max_length=200, null=True, blank=True)
    appointmentDate = models.DateField(auto_now_add=False, auto_now=False, blank=True)
    timestamp= models.DateField(auto_now_add=True, auto_now=False, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name



from django.contrib.auth.base_user import AbstractBaseUser, BaseUserManager
from django.contrib.auth.models import PermissionsMixin, AbstractUser
from django.db import models
from django.contrib.auth.models import User
from django.utils.timezone import timezone
from datetime import datetime
from rest_framework import generics
from django.utils.translation import ugettext_lazy as _
from datetime import datetime


class CustomUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    email = models.EmailField(max_length=15, unique=True)
    mobile = models.CharField(max_length=15, unique=True)
    crated_at = models.DateTimeField(default=datetime.now)
    password = models.CharField(max_length=100)


class Add(models.Model):
    name = models.CharField(max_length=100, default=' ')
    description = models.TextField(default=' ')
    price = models.CharField(default='0',max_length=100)
    loaction = models.CharField(default=' ', max_length=100)
    date = models.DateTimeField(default= datetime.now)
    customuser = models.ForeignKey(CustomUser,on_delete=models.CASCADE)



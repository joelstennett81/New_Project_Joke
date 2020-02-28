from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework.routers import DefaultRouter
from rest_framework import permissions
from api import views

router = DefaultRouter()
router.register('Joke',views.JokeViewSet)

urlpatterns = router.urls

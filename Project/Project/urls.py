from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework import permissions
from api import views

router = DefaultRouter()
router.register('Joke',views.JokeViewSet)
urlpatterns = [
	path('api/',include('api.urls')),
	path('admin/',admin.site.urls),
	path('api_auth/',include('rest_framework.urls')),
]

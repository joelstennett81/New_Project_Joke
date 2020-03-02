
from django.shortcuts import render
from rest_framework import generics, viewsets
from .models import Joke
from .serializers import JokeSerializer
# Create your views here.

class JokeList(generics.ListCreateAPIView):
    queryset = Joke.objects.all()
    serializer_class = JokeSerializer

class JokeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Joke.objects.all()
    serializer_class = JokeSerializer

class JokeViewSet(viewsets.ModelViewSet):
    queryset = Joke.objects.all()
    serializer_class = JokeSerializer


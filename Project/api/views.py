from django.shortcuts import render
from rest_framework import generics, viewsets
from .models import Category,Type,Setup,Delivery,Flags,IDNum
from .serializers import CategorySerializer,TypeSerializer,SetupSerializer,DeliverySerializer,FlagsSerializer,IDNumSerializer
# Create your views here.

class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Hotel.objects.all().order_by('-created_at')
    serializer_class = CategorySerializer

class TypeList(generics.ListCreateAPIView):
    queryset = Type.objects.all()
    serializer_class = TypeSerializer

class TypeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Type.objects.all()
    serializer_class = TypeSerializer

class TypeViewSet(viewsets.ModelViewSet):
    queryset = Type.objects.all().order_by('-created_at')
    serializer_class = TypeSerializer

class SetupList(generics.ListCreateAPIView):
    queryset = Setup.objects.all()
    serializer_class = SetupSerializer

class SetupDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Setup.objects.all()
    serializer_class = SetupSerializer

class SetupViewSet(viewsets.ModelViewSet):
    queryset = Setup.objects.all().order_by('-created_at')
    serializer_class = SetupSerializer

class DeliveryList(generics.ListCreateAPIView):
    queryset = Delivery.objects.all()
    serializer_class = DeliverySerializer

class DeliveryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Type.objects.all()
    serializer_class = DeliverySerializer

class DeliveryViewSet(viewsets.ModelViewSet):
    queryset = Delivery.objects.all().order_by('-created_at')
    serializer_class = DeliverySerializer

class FlagsList(generics.ListCreateAPIView):
    queryset = Flags.objects.all()
    serializer_class = FlagsSerializer

class FlagsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Flags.objects.all()
    serializer_class = FlagsSerializer

class FlagsViewSet(viewsets.ModelViewSet):
    queryset = Flags.objects.all().order_by('-created_at')
    serializer_class = FlagsSerializer

class IDNumList(generics.ListCreateAPIView):
    queryset = IDNum.objects.all()
    serializer_class = IDNumSerializer

class IDNumDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = IDNum.objects.all()
    serializer_class = IDNumSerializer

class IDNumViewSet(viewsets.ModelViewSet):
    queryset = IDNum.objects.all().order_by('-created_at')
    serializer_class = IDNumSerializer




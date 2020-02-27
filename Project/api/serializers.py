from rest_framework import serializers
from . import models

class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        fields = ('categoryText')
        model = models.Category

class SetupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        fields = ('setupText')
        model = models.Setup
class TypeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        fields = ('typeText')
        model = models.Typeclass 
class DeliverySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        fields = ('deliveryTest')
        model = models.Delivery

class FlagsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        fields = ('flagText','isNSFW','isReligious','isReligious','isPolitical','isSexist')
        model = models.Flags

class IDNumSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        fields = ('idNum')
        model = models.IDNum


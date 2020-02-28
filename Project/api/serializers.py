from rest_framework import serializers
from . import models

class JokeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        fields = ('category','type','setup','delivery','isNSFW','isReligious','isPolitical','isSexist','idNum')
        model = models.Joke


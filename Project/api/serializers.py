from rest_framework import serializers
from . import models

class JokeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        fields = ('category','jokeType','setup','delivery','isNSFW','isRacist','isReligious','isPolitical','isSexist','idNum')
        model = models.Joke


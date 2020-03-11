from rest_framework import serializers
from . import models

class JokeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        fields = ('category','jokeType','joke','setup','delivery','isNSFW','isReligious','isRacist','isPolitical','isSexist','idNum')
        model = models.Joke


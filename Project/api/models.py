from django.db import models

class Joke(models.Model):
	category = models.CharField(max_length=50)
	jokeType = models.CharField(max_length = 50)
	joke = models.CharField(max_length = 500,blank=True)
	setup = models.CharField(max_length = 500,blank=True)
	delivery = models.CharField(max_length = 500,blank=True)
	isNSFW = models.BooleanField(max_length = 200)
	isReligious = models.BooleanField(max_length = 200)
	isRacist = models.BooleanField(max_length = 200)
	isPolitical = models.BooleanField(max_length = 200)
	isSexist = models.BooleanField(max_length = 200)
	idNum = models.IntegerField(default=0)
	objects = models.Manager()
	def __str__(self):
		return(f"Category: {self.category}, jokeType: {self.jokeType}, Joke: {self.joke}, Setup: {self.setup}, Delivery: {self.delivery}")
  


from django.db import models

class Joke(models.Model):
	category = models.CharField(max_length=50)
	jokeType = models.CharField(max_length = 50)
	joke = models.CharField(max_length = 500)
	setup = models.CharField(max_length = 500)
	delivery = models.CharField(max_length = 500)
	isNSFW = models.BooleanField(max_length = 200)
	isReligious = models.BooleanField(max_length = 200)
	isRacist = models.BooleanField(max_length = 200)
	isPolitical = models.BooleanField(max_length = 200)
	isSexist = models.BooleanField(max_length = 200)
	idNum = models.IntegerField(default=0)
	objects = models.Manager()
	def __str__(self):
		return(f"Category: {self.category}, Type: {self.jokeType}, Setup: {self.setup}, Delivery: {self.delivery}") 
  


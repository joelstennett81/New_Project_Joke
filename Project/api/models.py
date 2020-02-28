from django.db import models

class Joke(models.Model):
	category = models.CharField(max_length=50)
	type = models.CharField(max_length = 50)
	setup = models.CharField(max_length = 500)
	delivery = models.CharField(max_length = 500)
	isNSFW = models.CharField(max_length = 25)
	isReligious = models.CharField(max_length = 25)
	isPolitical = models.CharField(max_length = 25)
	isSexist = models.CharField(max_length = 25)
	idNum = models.IntegerField(default=0)
	
	def __str__(self):
		return(f"Category: {self.category}, Type: {self.type}, Setup: {self.setup}, Delivery: {self.delivery}") 
  


from django.db import models

class Category(models.Model):
    categoryText = models.CharField(max_length = 50)

class Type(models.Model):
    typeText = models.CharField(max_length = 50)
class Setup(models.Model):
    setupText = models.CharField(max_length = 500)
class Delivery(models.Model):
    deliveryText = models.CharField(max_length = 500)

class Flags(models.Model):
    flagText = models.CharField(max_length = 500)
    isNSFW = models.CharField(max_length = 50) 
    isReligious = models.CharField(max_length = 50)
    isPolitical = models.CharField(max_length = 50)
    isSexist = models.CharField(max_length = 50)
    
class IDNum(models.Model):
    idNum = models.IntegerField(default=0)


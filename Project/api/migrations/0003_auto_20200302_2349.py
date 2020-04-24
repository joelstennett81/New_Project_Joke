# Generated by Django 3.0.3 on 2020-03-03 05:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_remove_joke_flags'),
    ]

    operations = [
        migrations.AlterField(
            model_name='joke',
            name='isNSFW',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='joke',
            name='isPolitical',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='joke',
            name='isRacist',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='joke',
            name='isReligious',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='joke',
            name='isSexist',
            field=models.CharField(max_length=200),
        ),
    ]

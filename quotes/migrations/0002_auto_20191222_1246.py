# Generated by Django 3.0.1 on 2019-12-22 12:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quotes', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='quote',
            name='text',
            field=models.TextField(unique=True),
        ),
    ]

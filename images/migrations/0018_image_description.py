# Generated by Django 3.0.2 on 2020-01-31 20:15

from django.db import migrations
import history.fields


class Migration(migrations.Migration):

    dependencies = [
        ('images', '0017_auto_20200131_2013'),
    ]

    operations = [
        migrations.AddField(
            model_name='image',
            name='description',
            field=history.fields.HTMLField(blank=True, null=True),
        ),
    ]

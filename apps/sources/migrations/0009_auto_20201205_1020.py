# Generated by Django 3.1.4 on 2020-12-05 10:20

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sources', '0008_auto_20201203_2008'),
    ]

    operations = [
        migrations.AlterField(
            model_name='source',
            name='title',
            field=models.CharField(blank=True, max_length=250, null=True, verbose_name='title'),
        ),
        migrations.AlterField(
            model_name='sourceattribution',
            name='source',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='attributions', to='sources.source', verbose_name='source'),
        ),
    ]

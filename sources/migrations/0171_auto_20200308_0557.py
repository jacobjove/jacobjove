# Generated by Django 3.0.4 on 2020-03-08 05:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sources', '0170_auto_20200307_1037'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='sourcefactderivation',
            unique_together={('source', 'page_number', 'end_page_number', 'position')},
        ),
    ]

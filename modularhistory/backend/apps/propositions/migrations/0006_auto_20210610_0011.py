# Generated by Django 3.1.12 on 2021-06-10 00:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('propositions', '0005_argument_position'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='argument',
            unique_together={('position', 'conclusion')},
        ),
    ]
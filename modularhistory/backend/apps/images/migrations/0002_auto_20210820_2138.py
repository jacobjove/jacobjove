# Generated by Django 3.1.13 on 2021-08-20 21:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('images', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='image',
            name='hidden',
        ),
        migrations.RemoveField(
            model_name='image',
            name='tags',
        ),
        migrations.RemoveField(
            model_name='video',
            name='hidden',
        ),
        migrations.RemoveField(
            model_name='video',
            name='tags',
        ),
        migrations.AddField(
            model_name='image',
            name='deleted',
            field=models.DateTimeField(editable=False, null=True),
        ),
        migrations.AddField(
            model_name='video',
            name='deleted',
            field=models.DateTimeField(editable=False, null=True),
        ),
        migrations.AlterField(
            model_name='image',
            name='title',
            field=models.CharField(
                blank=True,
                help_text='This value can be used as a page header and/or title attribute.',
                max_length=120,
                verbose_name='title',
            ),
        ),
    ]
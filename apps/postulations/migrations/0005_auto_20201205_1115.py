# Generated by Django 3.1.4 on 2020-12-05 11:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('topics', '0002_auto_20201205_1020'),
        ('occurrences', '0012_auto_20201203_2307'),
        ('entities', '0006_auto_20201205_1020'),
        ('postulations', '0004_auto_20201203_2008'),
    ]

    operations = [
        migrations.AlterField(
            model_name='postulation',
            name='related_entities',
            field=models.ManyToManyField(related_name='postulations', through='postulations.EntityFactRelation', to='entities.Entity', verbose_name='related entities'),
        ),
        migrations.AlterField(
            model_name='postulation',
            name='related_occurrences',
            field=models.ManyToManyField(related_name='postulations', through='postulations.OccurrenceFactRelation', to='occurrences.Occurrence', verbose_name='related occurrences'),
        ),
        migrations.AlterField(
            model_name='postulation',
            name='related_topics',
            field=models.ManyToManyField(related_name='postulations', through='postulations.TopicFactRelation', to='topics.Topic', verbose_name='related topics'),
        ),
        migrations.AlterField(
            model_name='postulation',
            name='supportive_facts',
            field=models.ManyToManyField(related_name='supported_postulations', through='postulations.PostulationSupport', to='postulations.Postulation', verbose_name='supportive facts'),
        ),
    ]

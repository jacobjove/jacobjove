# Generated by Django 3.0.2 on 2020-03-03 13:55

from django.db import migrations, models
import django.db.models.deletion
import history.fields


class Migration(migrations.Migration):

    dependencies = [
        ('entities', '0044_auto_20200303_1341'),
    ]

    operations = [
        migrations.CreateModel(
            name='Idea',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
                ('description', history.fields.HTMLField(blank=True, null=True)),
                ('promoters', models.ManyToManyField(blank=True, related_name='ideas', to='entities.Entity')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='EntityIdea',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('entity', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='entity_ideas', to='entities.Entity')),
                ('idea', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='entity_ideas', to='entities.Idea')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]

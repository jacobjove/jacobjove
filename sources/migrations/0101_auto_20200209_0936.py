# Generated by Django 3.0.2 on 2020-02-09 09:36

from django.db import migrations, models
import django.db.models.deletion
import history.fields.file_field
import history.fields


class Migration(migrations.Migration):

    dependencies = [
        ('sources', '0100_auto_20200209_0921'),
    ]

    operations = [
        migrations.CreateModel(
            name='Journal',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=200, null=True, unique=True)),
                ('description', history.fields.HTMLField(blank=True, null=True)),
                ('file', history.fields.file_field.SourceFileField(blank=True, null=True, upload_to='sources/')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='piece',
            name='type',
            field=models.CharField(choices=[('essay', 'Essay')], default='essay', max_length=10),
        ),
        migrations.CreateModel(
            name='JournalEntry',
            fields=[
                ('source_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='sources.Source')),
                ('page_number', models.PositiveSmallIntegerField(blank=True, null=True)),
                ('end_page_number', models.PositiveSmallIntegerField(blank=True, null=True)),
                ('journal', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='sources.Journal')),
            ],
            options={
                'abstract': False,
            },
            bases=('sources.source',),
        ),
    ]

# Generated by Django 3.1.2 on 2020-10-16 18:21

from django.db import migrations, models
import django.db.models.deletion
import modularhistory.fields
import modularhistory.fields.historic_datetime_field
import modularhistory.fields.json_field
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name='Occurrence',
            fields=[
                (
                    'id',
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name='ID',
                    ),
                ),
                ('date_is_circa', models.BooleanField(blank=True, default=False)),
                (
                    'computations',
                    modularhistory.fields.json_field.JSONField(
                        blank=True, default=dict, null=True
                    ),
                ),
                ('verified', models.BooleanField(blank=True, default=False)),
                (
                    'hidden',
                    models.BooleanField(
                        blank=True,
                        default=False,
                        help_text="Don't let this item appear in search results.",
                    ),
                ),
                (
                    'key',
                    models.UUIDField(default=uuid.uuid4, editable=False, unique=True),
                ),
                (
                    'date',
                    modularhistory.fields.historic_datetime_field.HistoricDateTimeField(
                        blank=True, null=True
                    ),
                ),
                (
                    'end_date',
                    modularhistory.fields.historic_datetime_field.HistoricDateTimeField(
                        blank=True, null=True
                    ),
                ),
                (
                    'summary',
                    modularhistory.fields.HTMLField(
                        blank=True, null=True, verbose_name='Summary'
                    ),
                ),
                (
                    'description',
                    modularhistory.fields.HTMLField(
                        blank=True, null=True, verbose_name='Description'
                    ),
                ),
                (
                    'postscript',
                    modularhistory.fields.HTMLField(
                        blank=True,
                        help_text='Content to be displayed below all related data',
                        null=True,
                        verbose_name='Postscript',
                    ),
                ),
            ],
            options={
                'ordering': ['-date'],
            },
        ),
        migrations.CreateModel(
            name='OccurrenceChain',
            fields=[
                (
                    'id',
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name='ID',
                    ),
                ),
                (
                    'description',
                    modularhistory.fields.HTMLField(
                        max_length=200, null=True, unique=True
                    ),
                ),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='OccurrenceChainInclusion',
            fields=[
                (
                    'id',
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name='ID',
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name='OccurrenceEntityInvolvement',
            fields=[
                (
                    'id',
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name='ID',
                    ),
                ),
                (
                    'importance',
                    models.PositiveSmallIntegerField(
                        choices=[
                            (1, 'Primary'),
                            (2, 'Secondary'),
                            (3, 'Tertiary'),
                            (4, 'Quaternary'),
                            (5, 'Quinary'),
                            (6, 'Senary'),
                            (7, 'Septenary'),
                        ],
                        default=1,
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name='OccurrenceImage',
            fields=[
                (
                    'id',
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name='ID',
                    ),
                ),
                (
                    'position',
                    models.PositiveSmallIntegerField(
                        blank=True,
                        help_text='Set to 0 if the image is positioned manually.',
                        null=True,
                    ),
                ),
            ],
            options={
                'ordering': ['position', 'image'],
            },
        ),
        migrations.CreateModel(
            name='OccurrenceLocation',
            fields=[
                (
                    'id',
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name='ID',
                    ),
                ),
                (
                    'importance',
                    models.IntegerField(
                        choices=[
                            (1, 'Primary'),
                            (2, 'Secondary'),
                            (3, 'Tertiary'),
                            (4, 'Quaternary'),
                            (5, 'Quinary'),
                            (6, 'Senary'),
                            (7, 'Septenary'),
                        ],
                        default=1,
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name='OccurrenceQuoteRelation',
            fields=[
                (
                    'id',
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name='ID',
                    ),
                ),
                ('position', models.PositiveSmallIntegerField(blank=True, null=True)),
                (
                    'occurrence',
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name='occurrence_quote_relations',
                        to='occurrences.occurrence',
                    ),
                ),
            ],
            options={
                'ordering': ['position', 'quote'],
            },
        ),
    ]

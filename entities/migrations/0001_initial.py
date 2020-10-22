# Generated by Django 3.1.2 on 2020-10-16 18:21

from django.db import migrations, models
import django.db.models.deletion
import django.db.models.functions.text
import modularhistory.fields
import modularhistory.fields.array_field
import modularhistory.fields.historic_datetime_field
import modularhistory.fields.json_field


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('images', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Affiliation',
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
                    'start_date',
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
            ],
        ),
        migrations.CreateModel(
            name='Categorization',
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
            ],
        ),
        migrations.CreateModel(
            name='Category',
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
                ('name', models.CharField(max_length=100, unique=True)),
                (
                    'part_of_speech',
                    models.CharField(
                        choices=[
                            ('noun', 'noun'),
                            ('adj', 'adjective'),
                            ('any', 'noun / adjective'),
                        ],
                        default='adj',
                        max_length=9,
                    ),
                ),
                (
                    'aliases',
                    modularhistory.fields.array_field.ArrayField(
                        base_field=models.CharField(max_length=100),
                        blank=True,
                        null=True,
                        size=None,
                    ),
                ),
                ('weight', models.PositiveSmallIntegerField(blank=True, default=1)),
                (
                    'parent',
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name='children',
                        to='entities.category',
                    ),
                ),
            ],
            options={
                'verbose_name_plural': 'categories',
                'ordering': [django.db.models.functions.text.Lower('name')],
            },
        ),
        migrations.CreateModel(
            name='Entity',
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
                    'type',
                    models.CharField(
                        choices=[
                            ('entities.person', 'person'),
                            ('entities.deity', 'deity'),
                            ('entities.group', 'group'),
                            ('entities.organization', 'organization'),
                        ],
                        db_index=True,
                        max_length=255,
                    ),
                ),
                (
                    'computations',
                    modularhistory.fields.json_field.JSONField(
                        blank=True, default=dict, null=True
                    ),
                ),
                ('name', models.CharField(max_length=100, unique=True)),
                (
                    'unabbreviated_name',
                    models.CharField(
                        blank=True, max_length=100, null=True, unique=True
                    ),
                ),
                (
                    'aliases',
                    modularhistory.fields.array_field.ArrayField(
                        base_field=models.CharField(max_length=100),
                        blank=True,
                        null=True,
                        size=None,
                    ),
                ),
                (
                    'birth_date',
                    modularhistory.fields.historic_datetime_field.HistoricDateTimeField(
                        blank=True, null=True
                    ),
                ),
                (
                    'death_date',
                    modularhistory.fields.historic_datetime_field.HistoricDateTimeField(
                        blank=True, null=True
                    ),
                ),
                ('description', modularhistory.fields.HTMLField(blank=True, null=True)),
                (
                    'affiliated_entities',
                    models.ManyToManyField(
                        blank=True,
                        related_name='_entity_affiliated_entities_+',
                        through='entities.Affiliation',
                        to='entities.Entity',
                    ),
                ),
                (
                    'categories',
                    models.ManyToManyField(
                        blank=True,
                        related_name='entities',
                        through='entities.Categorization',
                        to='entities.Category',
                    ),
                ),
            ],
            options={
                'verbose_name_plural': 'Entities',
                'ordering': ['name'],
            },
        ),
        migrations.CreateModel(
            name='Role',
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
                ('name', models.CharField(max_length=100, unique=True)),
                ('description', modularhistory.fields.HTMLField(blank=True, null=True)),
                (
                    'organization',
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name='roles',
                        to='entities.entity',
                    ),
                ),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='RoleFulfillment',
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
                    'start_date',
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
                    'affiliation',
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name='role_fulfillments',
                        to='entities.affiliation',
                    ),
                ),
                (
                    'role',
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name='fulfillments',
                        to='entities.role',
                    ),
                ),
            ],
            options={
                'unique_together': {('affiliation', 'role', 'start_date')},
            },
        ),
        migrations.CreateModel(
            name='Idea',
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
                ('name', models.CharField(max_length=100, unique=True)),
                ('description', modularhistory.fields.HTMLField(blank=True, null=True)),
                (
                    'promoters',
                    models.ManyToManyField(
                        blank=True, related_name='ideas', to='entities.Entity'
                    ),
                ),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='EntityImage',
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
                    'entity',
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name='entity_images',
                        to='entities.entity',
                    ),
                ),
                (
                    'image',
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name='image_entities',
                        to='images.image',
                    ),
                ),
            ],
            options={
                'unique_together': {('entity', 'image')},
            },
        ),
        migrations.AddField(
            model_name='entity',
            name='images',
            field=models.ManyToManyField(
                blank=True,
                related_name='entities',
                through='entities.EntityImage',
                to='images.Image',
            ),
        ),
        migrations.AddField(
            model_name='entity',
            name='parent_organization',
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                related_name='child_organizations',
                to='entities.entity',
            ),
        ),
        migrations.AddField(
            model_name='categorization',
            name='category',
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name='categorizations',
                to='entities.category',
            ),
        ),
        migrations.AddField(
            model_name='categorization',
            name='entity',
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name='categorizations',
                to='entities.entity',
            ),
        ),
        migrations.AddField(
            model_name='affiliation',
            name='affiliated_entity',
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to='entities.entity'
            ),
        ),
        migrations.AddField(
            model_name='affiliation',
            name='entity',
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name='affiliations',
                to='entities.entity',
            ),
        ),
        migrations.AddField(
            model_name='affiliation',
            name='roles',
            field=models.ManyToManyField(
                blank=True,
                related_name='affiliations',
                through='entities.RoleFulfillment',
                to='entities.Role',
            ),
        ),
        migrations.CreateModel(
            name='Deity',
            fields=[],
            options={
                'verbose_name_plural': 'Deities',
                'proxy': True,
                'indexes': [],
                'constraints': [],
            },
            bases=('entities.entity',),
        ),
        migrations.CreateModel(
            name='Group',
            fields=[],
            options={
                'verbose_name_plural': 'Groups',
                'proxy': True,
                'indexes': [],
                'constraints': [],
            },
            bases=('entities.entity',),
        ),
        migrations.CreateModel(
            name='Organization',
            fields=[],
            options={
                'verbose_name_plural': 'Organizations',
                'proxy': True,
                'indexes': [],
                'constraints': [],
            },
            bases=('entities.entity',),
        ),
        migrations.CreateModel(
            name='Person',
            fields=[],
            options={
                'verbose_name_plural': 'People',
                'proxy': True,
                'indexes': [],
                'constraints': [],
            },
            bases=('entities.entity',),
        ),
        migrations.CreateModel(
            name='EntityIdea',
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
                    'entity',
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name='entity_ideas',
                        to='entities.entity',
                    ),
                ),
                (
                    'idea',
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name='entity_ideas',
                        to='entities.idea',
                    ),
                ),
            ],
            options={
                'unique_together': {('entity', 'idea')},
            },
        ),
        migrations.AlterUniqueTogether(
            name='categorization',
            unique_together={('entity', 'category')},
        ),
        migrations.AlterUniqueTogether(
            name='affiliation',
            unique_together={('entity', 'affiliated_entity', 'start_date')},
        ),
    ]

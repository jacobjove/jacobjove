# Generated by Django 3.0.2 on 2020-02-02 02:33

from django.db import migrations
import history.fields


class Migration(migrations.Migration):

    dependencies = [
        ('entities', '0032_auto_20200202_0226'),
        ('quotes', '0027_auto_20200202_0228'),
        ('occurrences', '0041_auto_20200202_0212'),
        ('topics', '0021_auto_20200105_2237'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fact',
            name='text',
            field=history.fields.HTMLField(unique=True),
        ),
        migrations.AlterUniqueTogether(
            name='entityfactrelation',
            unique_together={('fact', 'entity')},
        ),
        migrations.AlterUniqueTogether(
            name='entitytopicrelation',
            unique_together={('topic', 'entity')},
        ),
        migrations.AlterUniqueTogether(
            name='factsupport',
            unique_together={('supported_fact', 'supportive_fact')},
        ),
        migrations.AlterUniqueTogether(
            name='occurrencefactrelation',
            unique_together={('fact', 'occurrence')},
        ),
        migrations.AlterUniqueTogether(
            name='occurrencetopicrelation',
            unique_together={('topic', 'occurrence')},
        ),
        migrations.AlterUniqueTogether(
            name='topicfactrelation',
            unique_together={('topic', 'fact')},
        ),
        migrations.AlterUniqueTogether(
            name='topicquoterelation',
            unique_together={('topic', 'quote')},
        ),
    ]

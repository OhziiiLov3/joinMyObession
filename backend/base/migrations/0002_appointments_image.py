# Generated by Django 3.1.2 on 2022-09-19 19:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointments',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]

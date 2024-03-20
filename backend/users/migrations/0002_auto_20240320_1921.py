# Generated by Django 3.2.24 on 2024-03-20 19:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='allergies',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='cooking_level',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='dietary_preferences',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='profile_picture',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='user',
            name='user_role',
            field=models.CharField(blank=True, choices=[['Recipe Creators', 'Recipe Creators'], ['Home Cooks', 'Home Cooks'], ['Culinary Experts', 'Culinary Experts']], max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='first_name',
            field=models.CharField(blank=True, max_length=150, verbose_name='first name'),
        ),
        migrations.AlterField(
            model_name='user',
            name='name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]

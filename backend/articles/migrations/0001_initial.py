# Generated by Django 3.0.3 on 2022-03-09 07:51

import articles.models
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('headline', models.CharField(max_length=50)),
                ('cover_image', models.ImageField(upload_to=articles.models.Article.nameFile)),
                ('description', models.CharField(blank=True, max_length=500)),
                ('posted_date', models.DateTimeField(auto_now_add=True)),
                ('update_at', models.DateTimeField(auto_now=True)),
                ('is_active', models.BooleanField(default=True)),
                ('posted_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='posted_by', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ('-posted_date',),
            },
        ),
    ]
from django.conf import settings
from django.db import models


class Recipe(models.Model):
    "Generated Model"
    title = models.CharField(
        max_length=255,
    )
    description = models.TextField()
    cuisine = models.CharField(
        max_length=100,
    )
    ingredients = models.TextField()
    steps = models.TextField()
    media = models.FileField(
        null=True,
        blank=True,
    )
    created_by = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="recipes_created",
    )
    rating = models.FloatField(
        null=True,
        blank=True,
    )


class Comment(models.Model):
    "Generated Model"
    recipe = models.ForeignKey(
        "recipes.Recipe",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="comments",
    )
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="comments",
    )
    content = models.TextField()
    created_at = models.DateTimeField(
        null=False,
        blank=False,
    )


# Create your models here.

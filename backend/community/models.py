from django.conf import settings
from django.db import models


class Follow(models.Model):
    "Generated Model"
    follower = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="following",
    )
    followed = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="followers",
    )


class RecipeCollection(models.Model):
    "Generated Model"
    title = models.CharField(
        max_length=255,
    )
    description = models.TextField()
    recipes = models.ManyToManyField(
        "recipes.Recipe",
        related_name="collections",
    )
    created_by = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="collections_created",
    )


# Create your models here.

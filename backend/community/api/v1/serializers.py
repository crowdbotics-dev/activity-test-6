from rest_framework import serializers
from community.models import Follow, RecipeCollection, Follow, RecipeCollection


class FollowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Follow
        fields = "__all__"


class RecipeCollectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeCollection
        fields = "__all__"

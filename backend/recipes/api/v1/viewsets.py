from rest_framework import authentication
from recipes.models import Recipe, Comment, Comment, Recipe, Comment, Recipe
from .serializers import (
    RecipeSerializer,
    CommentSerializer,
    CommentSerializer,
    RecipeSerializer,
    CommentSerializer,
    RecipeSerializer,
)
from rest_framework import viewsets


class RecipeViewSet(viewsets.ModelViewSet):
    serializer_class = RecipeSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Recipe.objects.all()


class CommentViewSet(viewsets.ModelViewSet):
    serializer_class = CommentSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Comment.objects.all()

from rest_framework import authentication
from community.models import (
    Follow,
    RecipeCollection,
    Follow,
    RecipeCollection,
    Follow,
    RecipeCollection,
)
from .serializers import (
    FollowSerializer,
    RecipeCollectionSerializer,
    FollowSerializer,
    RecipeCollectionSerializer,
    FollowSerializer,
    RecipeCollectionSerializer,
)
from rest_framework import viewsets


class FollowViewSet(viewsets.ModelViewSet):
    serializer_class = FollowSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Follow.objects.all()


class RecipeCollectionViewSet(viewsets.ModelViewSet):
    serializer_class = RecipeCollectionSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = RecipeCollection.objects.all()

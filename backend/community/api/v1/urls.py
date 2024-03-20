from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    FollowViewSet,
    RecipeCollectionViewSet,
    FollowViewSet,
    RecipeCollectionViewSet,
    FollowViewSet,
    RecipeCollectionViewSet,
    FollowViewSet,
    RecipeCollectionViewSet,
)

router = DefaultRouter()
router.register("follow", FollowViewSet)
router.register("recipecollection", RecipeCollectionViewSet)

urlpatterns = [
    path("", include(router.urls)),
]

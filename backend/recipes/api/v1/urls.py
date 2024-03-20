from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    RecipeViewSet,
    CommentViewSet,
    CommentViewSet,
    RecipeViewSet,
    CommentViewSet,
    RecipeViewSet,
    CommentViewSet,
    RecipeViewSet,
)

router = DefaultRouter()
router.register("recipe", RecipeViewSet)
router.register("comment", CommentViewSet)

urlpatterns = [
    path("", include(router.urls)),
]

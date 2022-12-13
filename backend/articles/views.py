from django.shortcuts import render
from rest_framework import viewsets, permissions, mixins
from .models import Article
from .serializers import ArticleSerializer, ArticleByUserSerializer
from authentication.models import User
from rest_framework.response import Response


# Create your views here.
class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class ArticleByAllUserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = ArticleByUserSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class ArticleByUserViewSet(mixins.ListModelMixin, viewsets.ViewSet):
    """
    A simple ViewSet for listing or retrieving logined user articles.
    """

    def list(self, request):
        print(request.user.id)
        queryset = Article.objects.filter(posted_by=request.user.id)
        serializer = ArticleSerializer(queryset, many=True)
        print('sdf' + str(len(serializer.data)))
        return Response(serializer.data)
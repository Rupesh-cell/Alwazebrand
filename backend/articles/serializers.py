from django.db.models import fields
from rest_framework import serializers
from .models import Article
from authentication.models import User



class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ['title', 'headline', 'cover_image', 'description', 'posted_by', 'posted_date']


class ArticleByUserSerializer(serializers.ModelSerializer):
    article = serializers.SerializerMethodField('get_article')

    def get_article(self, obj):
        print(obj)
        work = Article.objects.filter(posted_by=obj.id)
        serializer = ArticleSerializer(work, many=True)
        return serializer.data

    class Meta:
        model = User
        fields = ['article']
from rest_framework.serializers import ModelSerializer
from .models import Work
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Work
from authentication.models import User


class WorkSerializer(ModelSerializer):
    class Meta:
        model = Work
        fields = ['title', 'headline', 'cover_image', 'description', 'post_by', 'posted_date']


class WorkByUserSerializer(serializers.ModelSerializer):
    work = serializers.SerializerMethodField('get_works')

    def get_works(self, obj):
        print(obj)
        work = Work.objects.filter(post_by=obj.id)
        serializer = WorkSerializer(work, many=True)
        return serializer.data

    class Meta:
        model = User
        fields = ['work']
        #exclude = ['password', 'last_login', 'is_superuser', 'email', 'phone_number', 'address', 'post', 'is_active', 'is_staff', 'date_joined', 'groups', 'user_permissions']

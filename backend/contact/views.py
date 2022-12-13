from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Message
from .serializers import MessageSerializer
from rest_framework import serializers, viewsets
from rest_framework.permissions import AllowAny
from rest_framework import status
from rest_framework.response import Response

# Create your views here.
class MessageViewSet(ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    permission_classes = (AllowAny,)
    http_method_names = ['post']



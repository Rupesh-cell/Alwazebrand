from rest_framework.viewsets import ModelViewSet
from .serializers import WorkSerializer
from .models import Work
from rest_framework.viewsets import ModelViewSet
from rest_framework import viewsets, permissions, mixins, views
from .serializers import WorkSerializer, WorkByUserSerializer
from authentication.models import User
from rest_framework.response import Response


class WorkViewSet(ModelViewSet):
    """
    API endpoint for work
    """
    queryset = Work.objects.all()
    serializer_class = WorkSerializer


class WorkByAllUserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = WorkByUserSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class WorkByUserViewSet(mixins.ListModelMixin, viewsets.ViewSet):
    """
      A simple ViewSet for listing or retrieving logined user works.
    """


    def list(self, request):
        print(request.user.id)
        queryset = Work.objects.filter(post_by=request.user.id)
        serializer = WorkSerializer(queryset, many=True)
        print('sdf' + str(len(serializer.data)))
        return Response(serializer.data)

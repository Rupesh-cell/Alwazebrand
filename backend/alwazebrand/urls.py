from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers

from work.views import *
from articles.views import *
from contact.views import *

router = routers.DefaultRouter()

router.register(r'work', WorkViewSet,'get works')
router.register(r'article', ArticleViewSet, 'get articles')
router.register(r'message', MessageViewSet, 'get messages')
router.register(r'userwork', WorkByUserViewSet, 'get work by user')
router.register(r'alluserwork', WorkByAllUserViewSet, 'get work of all user')
router.register(r'userarticle', ArticleByUserViewSet, 'get article by user')
router.register(r'alluserarticle', ArticleByAllUserViewSet, 'get article of all user')



urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

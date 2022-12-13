from django.db import models
from authentication.models import User


 

class Work(models.Model):
    def nameFile(instance, filename):
        return '/'.join(['works', str(instance.title), filename])
    title = models.CharField(max_length=50, blank=False)
    headline = models.CharField(max_length=50, blank=False)
    cover_image = models.ImageField(upload_to=nameFile, blank=False)
    description = models.CharField(max_length=500, blank=True)
    post_by = models.ForeignKey(User, related_name="post_by", on_delete=models.CASCADE, blank=True, null=True)
    posted_date = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)



    def __str__(self):
        return f"{self.title}"

    class Meta:
        ordering = ("-posted_date",)

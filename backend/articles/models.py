from django.db import models
from authentication.models import User




class Article(models.Model):
    def nameFile(instance, filename):
        return '/'.join(['articles', str(instance.title), filename])
    title = models.CharField(max_length=50, blank=False)
    headline = models.CharField(max_length=50, blank=False)
    cover_image = models.ImageField(upload_to=nameFile, blank=False)
    description = models.CharField(max_length=500, blank=True)
    posted_by = models.ForeignKey(User, related_name="posted_by", on_delete=models.CASCADE, blank=False)
    posted_date = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.title}"

    class Meta:
        ordering = ("-posted_date",)
from django.db import models




class Message(models.Model):
    first_name = models.CharField(max_length=20, blank=False)
    last_name = models.CharField(max_length=30, blank=False)
    email = models.EmailField(
        max_length=150,
        verbose_name='email',
    )
    phone = models.CharField(max_length=17, blank=True, null=True)
    find_us = models.CharField(max_length=150, blank=True, null=True)
    work_industry = models.CharField(max_length=200, blank=True, null=True)
    message = models.CharField(max_length=500, blank=False)
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return 'message(first_name=' + self.first_name + ', id=' + str(self.id) + ')'





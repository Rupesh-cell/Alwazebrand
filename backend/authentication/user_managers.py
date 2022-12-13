from multiprocessing.sharedctypes import Value
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import Group
#from django.utils.translation import ugettext_lazy as _


class UserManager(BaseUserManager):
    def create_user(self,email,password=None):
        if not email:
            raise ValueError("Users must have an email address")
        if not password:
            raise ValueError("Users must have a password")

        user_obj = self.model(
            email= self.normalize_email(email),
            is_active=True,
            is_staff=True,

        )
        user_obj.set_password(password)
        user_obj.save(using=self._db)
        return user_obj

    def create_superuser(self,email,password=None):
        user= self.create_user(
            email,
            password=password,

        )
        user.is_staff = True
        user.is_active = True
        user.is_superuser = True
        user.save(using=self._db)
        return user
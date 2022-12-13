"""from django.contrib import admin
from django.contrib.auth import get_user_model

# Register your models here.
User = get_user_model()

admin.site.register(User,UserAdmin)"""



from cProfile import label
from django.contrib import admin
from django import forms
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from django.core.exceptions import ValidationError

from authentication.models import User

class UserCreationForm(forms.ModelForm):
    """
    A form for creating new users. include all the required fields, plus a repeated password.
    """
    password1 = forms.CharField(label='Password', widget=forms.PasswordInput)
    password2 = forms.CharField(label="Confirm Passwrod", widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ('email', 'phone_number', 'address', 'post')

    def clean_password2(self):
        # check that two password entries match
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")

        if password1 and password2 and password1 != password2:
            raise ValidationError("Password don't match")
        return password2

    def save(self, commit=True):
        # Save the provided password in hashed format
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
        return user

class UserChangeForm(forms.ModelForm):
    """
    A form for updating users. Includes all the fields on the user, but replaces the password field with admin's disabled password hash dislay field.
    """
    password = ReadOnlyPasswordHashField()

    class Meta:
        model = User
        fields = ('email', 'password', 'is_active', 'is_staff')


class UserAdmin(BaseUserAdmin):
    # the form to add and change user instances
    form = UserChangeForm
    add_form = UserCreationForm

    # fields to be used to displaying the user model.
    # these override the definitions on the userAdmin
    # that reference specific fields on auth.User.
    #list_display = ('email', 'is_staff')
    #list_filter = ('is_staff')

    list_display = ('email', 'phone_number', 'address', 'post', 'is_staff')
    list_filter = ('phone_number', 'address', 'post', 'is_staff',)





    fieldsets = (
        (None, {'fields': ('email', 'password', 'phone_number', 'address', 'post',)}),
        ('Permissions', {'fields': ('is_staff', )}),
    )
    # add_fieldsets is not a standard ModelAdmin attribute. UserAdmin
    # overrides get_fieldsets to use this attribute when creating a user.
    add_fieldsets = (
        (None, {
            'classes':('wide', ),
            'fields': ('email', 'password1', 'password2', 'phone_number', 'address', 'post',),
        }),
    )
    search_fields = ('email',)
    ordering = ('email', )
    filter_horizontal = ()

# register new UserAdmin
admin.site.register(User, UserAdmin)


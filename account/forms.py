# from forms.form import FormMixIn, CustomForm
import datetime

from django import forms
from django.conf import settings
from django.contrib.auth import authenticate
from django.contrib.auth.forms import UserCreationForm

from account.models import User


class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = User
        fields = ('username', 'email')


class LoginForm(forms.Form):
    user: User
    username = forms.CharField(label='Username', required=True, max_length=100, widget=forms.TextInput(attrs={ 'class': 'form-control' }))
    password = forms.CharField(label='Password', required=True, max_length=100, widget=forms.PasswordInput(attrs={ 'class': 'form-control' }))
    next = forms.CharField(required=False, widget=forms.HiddenInput())

    def clean(self):
        print(">>> Cleaning the login form...")
        username = self.cleaned_data.get('username')
        print(">>> The supplied username is %s." % username)
        if not User.objects.filter(username=username).exists() and User.objects.filter(email=username).exists():
            print(">>> No one with that username exists.  Checking for matching email addresses instead...")
            username = User.objects.filter(email=username)[0].username
            print(">>> The username that will be used for authentication is %s." % username)
        user = authenticate(username=username, password=self.cleaned_data.get('password'))
        if not user:
            raise forms.ValidationError('Invalid username and/or password.')
        self.user = user
        return self.cleaned_data


#     def clean_email(self):
#         email = self.cleaned_data.get('email')
#         if User.objects.filter(email=email).exists():
#             print(">>> ValidationError: An account with this email address has already been created.")
#             raise forms.ValidationError('An account with this email address has already been created.')
#         return email
#
#     def clean_username(self):
#         email = self.cleaned_data.get('email')
#         username = self.cleaned_data.get('username') if self.cleaned_data.get('username') else email
#         if User.objects.filter(email=email).count() > 0:
#             print(">>> ValidationError: An account with this username has already been created.")
#             raise forms.ValidationError('An account with this username has already been created.')
#         return username
#
#     def clean_first_name(self):
#         first_name = self.cleaned_data.get('first_name')
#         first_name = first_name.title()
#         return first_name
#
#     def clean_last_name(self):
#         last_name = self.cleaned_data.get('last_name')
#         last_name = last_name.title()
#         return last_name
#
#     def clean(self):
#         if self.cleaned_data.get('username') is None:
#             self.cleaned_data['username'] = self.cleaned_data.get('email')
#         if self.cleaned_data.get('password') != self.cleaned_data.get('password2'):
#             print(">>> ValidationError: Your passwords need to match. Please try again.")
#             raise forms.ValidationError('Your passwords need to match. Please try again.')
#         return self.cleaned_data


# class ChangeForm(FormMixIn, forms.ModelForm):
#     # Form for updating user information
#     form_id = 'changeform' # set in __init__ below
#     action = None # None means form submits to the current page
#     method = 'POST'
#     enctype = "multipart/form-data"
#     submit = 'Update'
#     classes = [ 'formlib-form form-horizontal' ] # list of default classes for the form: <form>
#     field_classes = [ '' ]
#
#     class Meta:
#         model = User
#         fields = [ 'first_name', 'last_name', 'email', 'username', 'address', 'address2', 'city', 'state', 'zip_code', 'date_of_birth', 'phone_number', ]
#         widgets = {
#             # 'name': forms.TextInput(attrs={'class': 'form-control'}),
#         }
#
#     def init(self):
#         self.fields['first_name'] = forms.CharField(required=True, max_length=100, initial=self.request.user.first_name, widget=forms.TextInput(attrs={ 'class':'form-control' }))
#         self.fields['last_name'] = forms.CharField(required=True, max_length=100, initial=self.request.user.last_name, widget=forms.TextInput(attrs={ 'class':'form-control' }))
#         self.fields['email'] = forms.EmailField(required=True, initial=self.request.user.email, widget=forms.TextInput(attrs={ 'class':'form-control' }))
#         self.fields['username'] = forms.CharField(required=True, initial=self.request.user.username, max_length=100, widget=forms.TextInput(attrs={ 'class':'form-control' }))
#         self.fields['address'] = forms.CharField(required=False, max_length=100, initial=self.request.user.address, widget=forms.TextInput(attrs={ 'class':'form-control' }))
#         self.fields['address2'] = forms.CharField(label='Address (line 2)', initial=self.request.user.address2, required=False, max_length=100, widget=forms.TextInput(attrs={ 'class':'form-control' }))
#         self.fields['city'] = forms.CharField(required=False, max_length=40, initial=self.request.user.city, widget=forms.TextInput(attrs={ 'class':'form-control' }))
#         self.fields['state'] = forms.CharField(required=False, max_length=2, initial=self.request.user.state, widget=forms.TextInput(attrs={ 'class':'form-control' }))
#         self.fields['zip_code'] = forms.CharField(required=False, max_length=5, initial=self.request.user.zip_code, widget=forms.TextInput(attrs={ 'class':'form-control' }))
#         self.fields['date_of_birth'] = forms.DateField(label='Date of birth', required=False, initial=self.request.user.date_of_birth, widget=forms.DateInput(attrs={ 'type': 'date', 'class':'form-control' }))
#         self.fields['phone_number'] = forms.CharField(required=False, max_length=20, initial=self.request.user.phone_number, widget=forms.TextInput(attrs={ 'class':'form-control' }))
#         # self.fields['picture'] = forms.ImageField(label='Profile picture', rinitial=self.request.user.pict, equired=False)
#         p = self.request.user
#
#     def clean_picture(self):
#         picture = self.cleaned_data.get("picture", False)
#         if picture and picture.file:
#             picture.file.seek(0)
#             mime = magic.from_buffer(picture.file.getvalue(), mime=True)
#             print(">>> The mime type is %s." % mime)
#             if mime not in ("image/png", "image/jpeg", "image/jpg"):
#                 raise forms.ValidationError("The file type must be JPG or PNG.")
#         return picture
#
#     def clean_username(self):
#         username = self.cleaned_data.get('username')
#         if username != self.request.user.username: # the username has been changed
#             try:
#                 user = User.objects.get(username=self.cleaned_data.get('username'))
#                 raise forms.ValidationError('This username has been taken.')
#             except User.DoesNotExist:
#                 pass
#         return username
#
#     def clean_date_of_birth(self):
#         if self.cleaned_data.get('date_of_birth') is not None and self.cleaned_data.get('date_of_birth') > datetime.date.today():
#             raise forms.ValidationError('This date is in the future. Currently, we only support users who were born in the past... (:')
#         return self.cleaned_data.get('date_of_birth')
#
#
# class PictureForm(FormMixIn, forms.Form):
#     form_id = 'pictureform'
#     action = '/account/profile.picture/'
#     method = 'POST'
#     submit = 'Upload'
#     classes = [ 'formlib-form form-horizontal' ]
#     field_classes = [ '' ]
#     is_ajax = True
#
#     picture = forms.ImageField(label='Profile picture', required=False)
#
#     def clean_picture(self):
#         picture = self.cleaned_data.get("picture", False)
#         picture.file.seek(0)
#         mime = magic.from_buffer(picture.file.getvalue(), mime=True)
#         print(">>> The mime type is %s." % mime)
#         if mime not in ("image/png", "image/jpeg", "image/jpg"):
#             raise forms.ValidationError("The file type must be JPG or PNG.")
#         return picture
#
#
# class ChangePasswordForm(CustomForm):
#     is_ajax = True
#     form_id = 'changepasswordform'
#     current_password = forms.CharField(label='Current password', required=True, max_length=100,
#                                        widget=forms.PasswordInput(attrs={'class': 'form-control'}))
#     password1 = forms.CharField(label='New password', required=True, max_length=100,
#                                 widget=forms.PasswordInput(attrs={'class': 'form-control'}))
#     password2 = forms.CharField(label='Confirm new password', required=True, max_length=100,
#                                 widget=forms.PasswordInput(attrs={'class': 'form-control'}))
#
#     def clean_current_password(self):
#         if not self.user.check_password(self.cleaned_data.get('current_password')):
#             raise forms.ValidationError('The password that you entered was incorrect.')
#         return self.cleaned_data.get('current_password')
#
#     def clean(self):
#         # check the two password are the same
#         if self.cleaned_data.get('password1') != self.cleaned_data.get('password2'):
#             raise forms.ValidationError('The new password did not match its confirmation value. Please try again.')
#         return self.cleaned_data

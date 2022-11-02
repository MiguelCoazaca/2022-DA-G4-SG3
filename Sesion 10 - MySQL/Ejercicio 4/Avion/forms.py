from django import forms
from .models import Pasenger

class PasengerForm(forms.ModelForm):
    class Meta:
        model = Pasenger
        fields = '__all__'
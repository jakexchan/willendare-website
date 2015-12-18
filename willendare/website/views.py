from django.shortcuts import render, redirect
from django.core.mail import mail_admins, BadHeaderError
from django.http import HttpResponse, HttpResponseRedirect

def index(request):
		return render(request, 'index.html')

def sendEmail(request):
	if request.method == 'POST':
			fullname = request.POST['fullname']
			email = request.POST['email']
			subject = request.POST['subject']
			message = request.POST['message']
			content = 'Fullname:' + fullname + ' \nEmail:' + email + ' \nMessage:' + message
			if subject and content and email:
				try:
						mail_admins(subject, content)
				except BadHeaderError:
						return HttpResponse('Invalid header found.')
				return HttpResponseRedirect('/thanks/')
			else:
				return HttpResponse('Make sure all fields are entered and valid.')

def thanks(request):
    return render(request, 'thanks.html')
from django.views import generic

from .models import Occurrence


class IndexView(generic.list.ListView):
    model = Occurrence
    template_name = 'occurrences/index.html'
    context_object_name = 'occurrences'

    def get_queryset(self):
        """Return the last five published questions."""
        return Occurrence.objects.order_by('-datetime')


class DetailView(generic.detail.DetailView):
    model = Occurrence
    template_name = 'occurrences/detail.html'


# def add(request):
#     """add an occurrence"""
#     num_divisions = request.GET.get('numDivisions') if 'numDivisions' in request.GET else None
#     form = CreateForm(request, num_divisions=(num_divisions if num_divisions else 3))
#     if request.method == 'POST': # just submitted the form
#         form = CreateForm(request, num_divisions=(num_divisions if num_divisions else 3))
#         if form.is_valid():
#             event = form.save()
#             return HttpResponseRedirect('/events/manage/')
#     context = {
#         'form': form,
#     }
#     return request.dmp.render('event.create.html', context)

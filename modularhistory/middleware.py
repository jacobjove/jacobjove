import logging

from django.core.exceptions import MiddlewareNotUsed
from pympler import muppy, tracker, classtracker
from django.template.base import Template

from modularhistory import settings


class PymplerMiddleware:
    """Run Pympler (memory profiler)."""

    def __init__(self, get_response):
        """Construct and configure the middleware, one time."""
        if True or not settings.DEBUG:
            raise MiddlewareNotUsed('PymplerMiddleware will not be used.')
        self.memory_tracker = tracker.SummaryTracker()
        self.class_tracker = classtracker.ClassTracker()
        self.class_tracker.track_class(Template)
        self.object_count = len(muppy.get_objects())
        self.get_response = get_response

    def __call__(self, request):
        # Code to be executed for each request before
        # the view (and later middleware) are called.

        self.class_tracker.create_snapshot()

        response = self.get_response(request)

        # Code to be executed for each request/response after
        # the view is called:
        self.memory_tracker.print_diff()
        object_count = len(muppy.get_objects())
        logging.info(f'{object_count} objects')

        self.class_tracker.create_snapshot()
        self.class_tracker.stats.print_summary()

        return response

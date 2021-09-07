import logging
from typing import TYPE_CHECKING, Iterable, Optional

from core.config.celery import USE_CELERY

if TYPE_CHECKING:
    from celery import Task


def delay(func: 'Task', *args, **kwargs):
    """
    Wrap Celery's `delay` method.

    Run the function asynchronously with Celery or synchronously without Celery,
    based on the `USE_CELERY` environment variable.
    """
    if USE_CELERY:
        func.delay(*args, **kwargs)
    else:
        logging.warning(
            f'Running {func.__name__} synchronously because Celery is disabled...'
        )
        func(*args, **kwargs)


def apply_async(
    func: 'Task', args: Optional[Iterable] = None, kwargs: Optional[dict] = None, **options
):
    """
    Wrap Celery's `apply_async` method.

    Run the function asynchronously with Celery or synchronously without Celery,
    based on the `USE_CELERY` environment variable.
    """
    if USE_CELERY:
        func.apply_async(args=args, kwargs=kwargs, **options)
    else:
        logging.warning(
            f'Running {func.__name__} synchronously because Celery is disabled...'
        )
        func(*args, **kwargs)

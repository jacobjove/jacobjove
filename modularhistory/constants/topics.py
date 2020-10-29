import os
from modularhistory import settings

with open(os.path.join(settings.BASE_DIR, 'topics/artifacts/topics.txt')) as artifact:
    TOPICS = [topic for topic in artifact.readlines()]

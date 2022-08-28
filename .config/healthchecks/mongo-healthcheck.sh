#!/bin/bash

# if mongo --quiet "$host/test" --eval 'quit(db.runCommand({ ping: 1 }).ok ? 0 : 2)'; then exit 0; fi
if mongo --quiet "localhost/test" --eval 'quit(db.runCommand({ ping: 1 }).ok ? 0 : 2)'; then exit 0; fi

echo "Oh no! Mongo is not running!"
exit 1

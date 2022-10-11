#!/bin/bash

if mongosh --quiet "localhost/test" --eval 'quit(db.runCommand({ ping: 1 }).ok ? 0 : 2)'; then
  exit 0
fi

exit 1

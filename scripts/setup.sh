#!/bin/bash

if [ "$NODE_ENV" = "development" ]; then npm ci; chmod g+w -R "/app/.next/"; else npm ci --omit=dev; fi

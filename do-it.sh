#!/bin/sh

for f in $(find graphql/schema -regex ".*WithoutUserBelief.*ts")
do 
  echo ""
  echo "$f"
  result=$(echo $f | sed -e 's/UserBelief/Belief/g')
  echo "$f --> $result"
  # mv -vn "$f" "$result" 
done
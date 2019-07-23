curl "http://localhost:4741/heros" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "hero": {
      "name": "'"${NAME}"'",
      "location": "'"${LOC}"'",
      "universe": "'"${UNI}"'"
    }
  }'

echo

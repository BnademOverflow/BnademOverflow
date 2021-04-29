{
  "schemaVersion": 2,
  "dockerfileLines": [
    "FROM socialengine/nginx-spa:latest",
    "COPY ./static /app",
    "RUN chmod -R 777 /app"
  ]
}
FROM openjdk:8-jre
MAINTAINER Open Source Community

VOLUME /tmp
ADD fra.jar app.jar
RUN bash -c 'touch /app.jar'

ENTRYPOINT ["java", "-jar", "/app.jar", "-Dspring.profiles.active=prod"]

EXPOSE 8080

FROM python:3-alpine3.15
# https://hub.docker.com/_/python
EXPOSE 3002
RUN /usr/local/bin/python -m pip install --upgrade pip
RUN pip install requests
COPY . .
# RUN pip install git+git://github.com/broadinstitute/cromwell-tools.git@v0.3.1
ENTRYPOINT [ "python", "feeder.py" ]

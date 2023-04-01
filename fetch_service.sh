#!/bin/bash

# check if port argument is provided
if [ $# -eq 0 ]; then
    echo "Please provide a port number"
    exit 1
fi

# get service name from /etc/services
service=$(grep -w "$1/tcp" /etc/services | awk '{print $1}')

# check if service is found
if [ -z "$service" ]; then
    echo "Service not found for port $1"
else
    echo "Service running on port $1: $service"
fi


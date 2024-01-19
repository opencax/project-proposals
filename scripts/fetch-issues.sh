#!/bin/bash

URL='https://api.github.com/repos/opencax/gsoc/issues?state=open&labels=GSoC+2024&per_page=50'

curl "$URL" > static/issues.json

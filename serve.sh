#!/bin/bash
python -m http.server 9090 &
firefox http://127.0.0.1:9090/index.xhtml

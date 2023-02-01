#!/bin/bash
echo files are uploading:
sudo scp -i ./shanklesh.pem ./shanklesh.txt  ubuntu@ec2-43-207-55-237.ap-northeast-1.compute.amazonaws.com:~/
echo uploaded successfully:
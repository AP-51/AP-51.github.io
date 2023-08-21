#!/bin/bash
H="`hostnamectl | grep hostname`"

echo ${H:18}

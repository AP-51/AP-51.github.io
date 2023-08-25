#!/bin/bash
hostname="`hostnamectl| grep -i hostname | grep -i static`"
if [ -d "./traceroutes/${hostname:20}" ]; then
   echo "lmao" > /dev/null 
else
    mkdir ./traceroutes/"${hostname:20}"
fi

personal_ip="random ass text (`curl ipinfo.io/ip`)"
for line in `strings ./lines.txt`
do 	
	echo $personal_ip > ./traceroutes/"${hostname:20}"/"${line:4 : -4}".txt
	traceroute -I $line >> ./traceroutes/"${hostname:20}"/"${line:4 : -4}".txt
done

exit

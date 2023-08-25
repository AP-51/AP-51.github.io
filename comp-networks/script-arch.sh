#!/bin/bash
hostname="`hostnamectl| grep -i hostname`"
if [ -d "./traceroutes/${hostname:18}" ]; then
   echo "lmao" > /dev/null 
else
    mkdir ./traceroutes/"${hostname:18}"
fi

personal_ip="random ass text (`curl ifconfig.me`)"
for line in `strings ./lines.txt`
do 	
	echo $personal_ip > ./traceroutes/"${hostname:18}"/"${line:4 : -4}".txt
	traceroute -I $line >> ./traceroutes/"${hostname:18}"/"${line:4 : -4}".txt
done

exit

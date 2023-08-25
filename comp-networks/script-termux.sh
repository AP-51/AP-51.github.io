#!/bin/bash
hostname=`hostname`
if [ -d "./traceroutes/${hostname}" ]; then
   echo "lmao" > /dev/null 
else
    mkdir ./traceroutes/"${hostname}"
fi

personal_ip="random ass text (`curl ipinfo.io/ip`)"
for line in `strings ./lines.txt`
do 	
	echo $personal_ip > ./traceroutes/"${hostname}"/"${line:4 : -4}".txt
	traceroute -I $line >> ./traceroutes/"${hostname}"/"${line:4 : -4}".txt
done

exit

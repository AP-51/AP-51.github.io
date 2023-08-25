#!/bin/bash
hostname=`hostname`
if [ -d "./traceroutes/${hostname}-2" ]; then
   echo "lmao" > /dev/null 
else
    mkdir ./traceroutes/"${hostname}-2"
fi

personal_ip="random ass text (`curl ipinfo.io/ip`)"
for line in `strings ./lines.txt`
do 	
	echo $personal_ip > ./traceroutes/"${hostname}-2"/"${line:4 : -4}".txt
	traceroute -I $line >> ./traceroutes/"${hostname}-2"/"${line:4 : -4}".txt
done

exit

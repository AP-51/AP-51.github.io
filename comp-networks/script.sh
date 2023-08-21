#!/bin/bash
personal_ip="random ass text (`curl ifconfig.me`)"
hostname="`hostnamectl| grep hostname`"
for line in `strings ./lines.txt`
do 	
	echo $personal_ip > ./traceroutes/"${hostname:18}""${line:4 : -4}".txt
	traceroute -I $line >> ./traceroutes/"${hostname:18}""${line:4 : -4}".txt
done

exit

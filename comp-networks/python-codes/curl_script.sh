i=0
for file in ./ip/*; do
	i=$((i+1))
	ip=`cat $file`
	echo $ip
	curl http://ip-api.com/batch --data "$ip" -o output-"$i".json
done

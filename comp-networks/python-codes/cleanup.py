import sys
import os
import json
from private import arr

n = int(sys.argv[1])

dir_path="../traceroutes/"
directory=os.fsencode(dir_path)

dick={}
other_dick={"1":[]}
key=1
for subdir, dirs, files in os.walk(directory):
    for file in files:
        filename = os.fsdecode(file)
        
        filepath = subdir.decode()+"/"+filename
        web=filename[:-4]
        dick[web]=[]

        with open(filepath,"r") as data:
            lines=data.readlines()
            start=0
            end=1
            for i in range(len(lines)):
                if(lines[i][4]!="*" and "traceroute" not in lines[i]):
                    for j in range(2,len(lines[i])):
                        if(lines[i][j]=="("):
                            start=j
                        elif(lines[i][j]==")"):
                            end=j
                            break
                        else:
                            continue
                    ip=lines[i][start+1:end]

                    if(n==1 and ip not in arr):
                        dick[web].append(ip)
                    elif(n==0):
                        line={"query":ip,"fields":"query,status,org,as,country,lat,lon"}
                        
                        if len(other_dick[str(key)])>=99:
                            key+=1
                            other_dick[str(key)]=[line]
                        else:
                            other_dick[str(key)].append(line)

#beautiful_dick=json.dumps(other_dick,indent=4)
#print(beautiful_dick)

if(n==0):
    i=1
    for dicks in other_dick:
        json_dick=json.dumps(other_dick[dicks])
        with open(f"ip{i}.json", "w") as outfile:
            outfile.write(json_dick)

if(n==1):
    pretty_dick=json.dumps(dick,indent=4)
    with open("pretty_dick.json","w") as outfile:
        outfile.write(pretty_dick)
#print(pretty_dick)

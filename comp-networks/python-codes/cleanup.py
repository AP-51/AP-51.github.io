import os
import json

dir_path="../traceroutes/"
directory=os.fsencode(dir_path)

dick={}
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
                    dick[web].append(ip)

pretty_dick=json.dumps(dick,indent=4)

#print(pretty_dick)

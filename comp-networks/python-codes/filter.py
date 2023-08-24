import os
import json 

p=open('private.py','w')

dir_path="./"
directory=os.fsencode(dir_path)
array=[]
pretty_ip=[]

for subdir,dirs,files in os.walk(directory):
    for file in files:
        filename = os.fsdecode(file)
        if "output-" in filename:
            file=open(filename)
            data=json.load(file)
            for ip in data:
                if(ip["status"]=="fail"):
                    array.append(ip["query"])
            if len(pretty_ip)<1:
                pretty_ip=data
            else:
                pretty_ip.append(data)
            file.close()
#print(array)
print(pretty_ip)
p.writelines(f"arr={array}\n")
pretty_data=json.dumps(pretty_ip,indent=4)

with open("../../pretty_ip.json","w") as outfile:
    outfile.write(pretty_data)


p.close()

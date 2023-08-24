import os
import json 

p=open('private.py','w')
file=open('output.json')

array=[]
data=json.load(file)
for ip in data:
    if(ip["status"]=="fail"):
        array.append(ip["query"])
#print(array)

p.writelines(f"arr={array}\n")
pretty_data=json.dumps(data,indent=4)

with open("../../pretty_ip.json","w") as outfile:
    outfile.write(pretty_data)


p.close()
file.close()

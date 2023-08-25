import json

group_list={}


f=open("./csvjson.json")
p=open("./py-data.json")

py_data=json.load(p)
nodes=py_data["nodes"]
edges=py_data["edges"]

data=json.load(f)


for d in data:
    if d["Tags"]=="":
        d["Tags"]="Unknown"

    if d["Tags"] in group_list:
        group_list[d["Tags"]].append(d["IP"])
    else:
        group_list[d["Tags"]]=[d["IP"]]

for dic in nodes:
    for key in group_list:
        if(dic["id"] in group_list[key]):
            dic["group"]=key
            break

new_data={"nodes":nodes,"edges":edges}
pretty_data=json.dumps(new_data, indent=4)

with open("data.json","w") as outfile:
    outfile.write(pretty_data)



f.close()


import json
from cleanup import dick

dick2={}

for key in dick:
    for i in range(len(dick[key])):
        if (dick[key][i] in dick2):
            if(i<len(dick[key])-1):
                if(dick[key][i+1] not in dick2[dick[key][i]]):
                    dick2[dick[key][i]].append(dick[key][i+1])
        else:
            if(i>=len(dick[key])-1):
                dick2[dick[key][i]]=[]
            else:
                dick2[dick[key][i]]=[dick[key][i+1]]

#pretty_dick=json.dumps(dick2,indent=4)
#print(pretty_dick)

#dick2 is adjacency list
nodes=[]
edges=[]

for key in dick2:
    ele={"id":key}
    nodes.append(ele)
    for i in range(len(dick2[key])):
        ele2={"from":key,"to":dick2[key][i]}
        edges.append(ele2)

#print(nodes)
#print(edges)

dick_json={"nodes":nodes,"edges":edges}
x=json.dumps(dick_json,indent=4)
print(x)



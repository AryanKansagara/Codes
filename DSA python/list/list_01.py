# creating a list in python 
#list are mutable 
#list can contain duplicate items 

"""
complexities for creating lists in python 
time complexity  =>O(1)
space complexity =>O(n)


"""

# blank list 
list = []
print("blank list ")
print(list)

# list of numbers
list2 = [10,20,30]
print("list of numbers :")
print(list2)


#list of strings 
list3 = ["Hello","world","welcome"]
print("List of strings: ")
print(list3)

#accessing using index
print(list3[0])
print(list3[1])

# another way of declaring list 
ls = [item for item in range(10)]
print(ls)
# removing elements

# using remove() method 
"""
complexities:
time complexity  =>O(n)
space complexity =>O(1)

"""

# list.remove(element_to_be_removed)
ls = [1,2,3,4,5,6,7,8,9,0]
print(ls)
ls.remove(1)
ls.remove(2)
print("List after removal of elements: ",ls)

# ----------------------------------------------------

# using pop function 
"""
complexities:
time complexity  =>O(1) if popping the last element || O(n) if popping at a given index
space complexity =>O(1)

"""

ls.pop()#removes the last element
print("List after using pop function: ",ls)

ls.pop(2)#remove the element from index 2 
print(ls)



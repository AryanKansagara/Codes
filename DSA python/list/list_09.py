# slicing a list 

# used to print a specified range of elements 

"""

1.[:index] -> beginning to a specified index 
2.[:-index] ->print elements index from end 
3.[index:] ->from specified index to the end 
4.[::-1] ->to print the list in reverse order

"""

ls = ['A','R','Y','A','N']
print(ls[:3])
print(ls[:-3])
print(ls[2:])
print(ls[::-1])

print(ls[-4:-1])# print elements using negative indices
# taking input as a python list 

string = input("Enter numbers(space - separated) : ")

ls = string.split()
print(ls)

# -------------------------------------------------

# eg.2
n = int(input("Enter the size of the list: "))

#store numbers in the list using map,split and strip functions

list2 = list(map(int,input("enter the elements of the list: ").strip().split()))[:n]

print(list2) 

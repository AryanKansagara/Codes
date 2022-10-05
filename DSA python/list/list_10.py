# List Comprehension 
# create list from other iterables like tuples, arrays, strings, lists
# basically list items are defined by a common property and satisfy a common expression

# syntax :
# ls = [item for item in range() if condition]

evenList = [x for x in range(1,11) if x%2==0]
print(evenList)

# ----------------------------------------------------

# method 2:
ls = []
for x in range(1,11):
	if(x%2==1):
		ls.append(x**2)
print(ls)
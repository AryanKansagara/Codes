# adding elements using append method

"""
Complexities for adding elements in a list 
time complexity  =>O(1)
space complexity =>O(1)

"""

ls = []
ls.append(1)
ls.append(2)
ls.append(3)
print(ls)

# --------------------------------------------

# adding elements using insert method 
"""
complexities:
time complexity  =>O(n)
space complexity =>O(1)
	
"""
ls2 = []
# insert(index_where_element_is_to_be_added,the_element_to_be_added)
ls2.insert(0,"first")
ls2.insert(1,"second")
print(ls2)

#-----------------------------------------------------------

#adding elements using extend method 
"""
complexities:
time complexity  =>O(n)
space complexity =>O(1)

"""

# we can add multiple elements using extend method 

ls3 = []
ls3.extend(["hello","world","this","is","Aryan"])
print(ls3)

# ------------------------------------------------------
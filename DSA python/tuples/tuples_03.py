# unpacking or packing a tuple 

# in unpacking we extract tuple values into a variable as follows:
tup = ("College_Name",2500,"Computer Engineering")

# unpacking
(college,students,branch) = tup

print(college)
print(students)
print(branch)

# unpacking using '*' 
# '*x' means remaining values will be assigned to x

# first and second will be assigned to a and b and remaining will be assigned to c
a,b,*c = (10,"hello","world","aryan","kansagara")
print(a)
print(b)
print(c)


# first and last will be assigned to x and z and remaining to y
x,*y,z = ('hello','world','I','am','number',4)
print(x)
print(y)
print(z)

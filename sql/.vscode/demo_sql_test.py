import mysql.connector

mydb = mysql.connector.connect(
    host = "localhost",
    user = "root",
    password = "password",
    database = "mydatabase"
)

# print(mydb)

cursorObject = mydb.cursor()

# mycursor.execute("""
#     CREATE TABLE STUDENT1(
#         NAME VARCHAR(20) NOT NULL,
#         BRANCH VARCHAR(50),
#         ROLL INT NOT NULL,
#         SECTION VARCHAR(5),
#         AGE INT
#     )
# """)

# sql = "INSERT INTO STUDENT VALUES (%s,%s,%s,%s,%s)"
# val = [("Nikhil", "CSE", "98", "A", "18"),
#        ("Nisha", "CSE", "99", "A", "18"),
#        ("Rohan", "MAE", "43", "B", "20"),
#        ("Amit", "ECE", "24", "A", "21"),
#        ("Anil", "MAE", "45", "B", "20"),
#        ("Megha", "ECE", "55", "A", "22"),
#        ("Sita", "CSE", "95", "A", "19")]

# cursorObject.executemany(sql,val)
# mydb.commit()

# query = "SELECT NAME,ROLL FROM STUDENT"
# cursorObject.execute(query)
# results = cursorObject.fetchall()

# for x in results:
#     print(x)

# query = "SELECT * FROM STUDENT WHERE AGE >=18 ORDER BY NAME ASC"
# query = "SELECT * FROM STUDENT LIMIT 2 OFFSET 3"
# query = "DELETE FROM STUDENT WHERE NAME = 'Anil'"

# cursorObject.execute(query)
# mydb.commit()
# results = cursorObject.fetchall()
# for x in results:
#     print(x)

mydb.close()
import mysql.connector

dataBase = mysql.connector.connect(
    host="localhost",
    user="root",
    password="password",
    database = "newdatabase"
)

cursorObject = dataBase.cursor()

# query = """CREATE TABLE FRUITS(
#     fruit_name VARCHAR(200),
#     taste VARCHAR(50),
#     Production_in INT
# )"""

# sql_query = "INSERT INTO FRUITS(fruit_name) VALUES('Apple') "
# # values = [('Apple',NULL,NULL)]
# cursorObject.execute(sql_query)

# sql_query2 = "INSERT INTO FRUITS(fruit_name,taste,Production_in) VALUES('Banana','Sweet',210) "
# cursorObject.execute(sql_query2)


# print("No. of Record inserted : ",cursorObject.rowcount)
# print("Inserted Id : ",cursorObject.lastrowid)

# cursorObject.execute("SELECT FRUITS FROM information_schema.tables;")

# results = cursorObject.fetchall()
# for x in results:
#     print(x)

query = """SELECT  
     table_name AS `Table`, 
     round(((data_length + index_length) / 1024 / 1024), 2) `Size in MB` 
FROM information_schema.TABLES 
WEHRE table_schema = "$newdatabase" AND table_name = "$FRUITS";"""

cursorObject.execute(query)
# dataBase.commit()
results = cursorObject.fetchall()

for item in results:
    print(item[0],"Size in MB: ",item[-1])

dataBase.close()        

# mongoDB

// refference: 
1 . https://www.youtube.com/watch?v=Ph1Z97X6xno&list=PLaXZ51Iti049yAGmBZ6LEOdTnZd47nQSb&index=11
2. https://www.youtube.com/watch?v=ofme2o29ngU&list=PLaXZ51Iti049yAGmBZ6LEOdTnZd47nQSb&index=5&t=81s

step 1 
https://www.mongodb.com/try/download/community
direct download // https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-5.0.10-signed.msi

step 2
install the msi

step 3
add the ststem environment
edit the system environment variables > environment variables > system variable > path > edit > new > C:\Program Files\MongoDB\Server\5.0\bin

step 4
open CMD 
mongo
show dbs
use mydb

// to test
db.books.insert({"name":"hi"})
show dbs
show collections
db.books.find()


to view the db
https://www.mongodb.com/try/download/compass
direct download // https://downloads.mongodb.com/compass/mongodb-compass-1.32.6-win32-x64.exe

open composs
new connections > mongodb://localhost/mydb > connect



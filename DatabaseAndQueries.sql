/*
ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'Melon@123';

flush privileges;
*/

#1-
CREATE DATABASE join_us;

#2-
CREATE TABLE users
(email VARCHAR(255),
created_at CURRENT_TIMESTAMP DEFAULT NOW());

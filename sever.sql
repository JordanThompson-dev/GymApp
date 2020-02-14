create database GymApp;

create table userInfo(
	user_id int primary key AUTO_INCREMENT=1000,
	f_name varchar(20) not null,
	l_name varchar(20) not null,
	email varchar(50)not null,
	user_pin varchar(4) check (len(user_pin)=4) not null,
	weight float(5, 2),
	height float(5, 2),
	age varchar(3),
	gender varchar(6)
	);

create table excersize(
	excersize_id int primary key AUTO_INCREMENT=2000,
	excersize_name char(20) not null,
	);

create table user_workout(
	workout_id int primary key AUTO_INCREMENT=3000,
	excersize_id int references excersize(excersize_id)
	);

create table workout(
	user_id int references userInfo(user_id),
	workout_id int primary key references user_workout(workout_id)
	workout_name varchar(10)
	);

create table workout_record(
	session_id int primary key AUTO_INCREMENT=4000,
	session_date date not null,
	workout_id int references user_workout(workout_id),
	
	);
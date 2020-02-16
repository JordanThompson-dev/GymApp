create database GymApp;

create table userInfo(
	user_id int primary key unique,
	f_name varchar(20) not null,
	l_name varchar(20) not null,
	email varchar(50)not null,
	user_pin varchar(4) check (len(user_pin)=4) not null,
	weight float(5, 2),
	height float(5, 2),
	age varchar(3),
	gender varchar(6)
	);

create table workout(
	user_id int references userInfo(user_id),
	workout_id int primary key unique
	workout_name varchar(10)
	);

create table workout_record(
	session_id int primary key unique,
	session_date date not null,
	workout_id int references user_workout(workout_id),
	push_ups int,
	pull_ups int,
	sit_ups int,
	chest_press int,
	bicep_curl int,
	
	);
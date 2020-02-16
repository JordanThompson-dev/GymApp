create database GymApp;

create table userInfo(
	user_id serial primary key,
	f_name varchar(20) not null,
	l_name varchar(20) not null,
	email varchar(50)not null,
	user_pin varchar(4) not null,
	weight decimal(5,2),
	height decimal(5,2),
	age varchar(3),
	gender varchar(6)
	);

alter table userInfo
add constraint check_min_length check (length(user_pin) = 4);

create table workout(
	user_id int references userInfo(user_id),
	workout_id serial primary key,
	workout_name varchar(10)
	);

create table workout_record(
	session_id serial primary key,
	session_date date not null,
	workout_id int references workout(workout_id),
	push_ups int,
	pull_ups int,
	sit_ups int,
	chest_press int,
	bicep_curl int
	);

INSERT INTO userinfo (f_name, l_name, email, user_pin, weight, height, age, gender)
	values ('joe', 'blogs', 'an_email@email.com', 1040, 100.05, 179.50, 28, 'male');

INSERT INTO userinfo (f_name, l_name, email, user_pin, weight, height, age, gender)
	values ('jane', 'biggs', 'email@email.com', 2040, 95.05, 149.50, 28, 'female');
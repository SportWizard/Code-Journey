CREATE SCHEMA IF NOT EXISTS code_journey;

USE code_journey;

CREATE TABLE IF NOT EXISTS courses (
    course_id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(70),
    type CHAR(1), /* Main (M) or Extra (E) */
    tier INT,
    PRIMARY KEY (course_id)
);

DESCRIBE courses;

INSERT INTO courses (name, type, tier) VALUES ('Python', 'M', 1);
INSERT INTO courses (name, type, tier) VALUES ('Java', 'M', 2);
INSERT INTO courses (name, type, tier) VALUES ('Advance Java', 'M', 3);
INSERT INTO courses (name, type, tier) VALUES ('Data Structures', 'M', 4);
INSERT INTO courses (name, type, tier) VALUES ('Advance Data Structure', 'M', 5);

INSERT INTO courses (name, type, tier) VALUES ('Web Development', 'E', 1);
INSERT INTO courses (name, type, tier) VALUES ('Version Control', 'E', 2);
INSERT INTO courses (name, type, tier) VALUES ('Database', 'E', 5);

SELECT * FROM courses;
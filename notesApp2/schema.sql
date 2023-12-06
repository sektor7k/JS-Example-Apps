CREATE DATABASE notes_app2;
USE notes_app2;

CREATE TABLE notes (
    id integer PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    contents TEXT NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO notes (title, contents)
VALUES
("My First Note", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum maxime sunt aliquam adipisci voluptate inventore esse beatae? Placeat eum rerum, quae repellat aliquid similique facere molestiae saepe doloribus consequuntur minima."),
("My Second Note", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum maxime sunt aliquam adipisci voluptate inventore esse beatae? Placeat eum rerum, quae repellat aliquid similique facere molestiae saepe doloribus consequuntur minima.");

INSERT INTO users (username, email, password) 
VALUES
("sektor7k","omeraydin2112@gmail.com", "35572277Om");
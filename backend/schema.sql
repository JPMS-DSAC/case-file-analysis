DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS cases;
DROP TABLE IF EXISTS case_raw;
DROP TABLE IF EXISTS lawyers;
DROP TABLE IF EXISTS judge;
DROP TABLE IF EXISTS sebi;



CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    title TEXT NOT NULL,
    content TEXT NOT NULL
);


CREATE TABLE case_raw (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL
);


CREATE TABLE cases (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    rule_id INTEGER SECONDARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    penalty TEXT NOT NULL,
    display_content TEXT NOT NULL

);


CREATE TABLE lawyers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    rule_id INTEGER SECONDARY KEY,
    case_id INTEGER SECONDARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL


);

CREATE TABLE sebi (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    rule_id INTEGER SECONDARY KEY,
    case_id INTEGER SECONDARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL

);


CREATE TABLE judge (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    rule_id INTEGER SECONDARY KEY,
    case_id INTEGER SECONDARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL


)
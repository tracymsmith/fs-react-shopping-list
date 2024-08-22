CREATE TABLE "shopping" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar(80),
	"quantity" number (10),
	"unit" varchar(80)
);

INSERT INTO shopping (name, quantity, unit)
VALUES
('apples', 1, 'bushel'),
('bananas', 4,'bunch'),
('beef', 5, 'lbs');




-- SELECT CONVERT (DECIMAL (10,2),YOURCOLUMN)
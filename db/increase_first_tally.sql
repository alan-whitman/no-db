UPDATE votes
SET "firstTally" = "firstTally" + 1
WHERE vote_id = $1;

SELECT * FROM votes ORDER BY vote_id DESC;
DELETE FROM votes WHERE vote_id = $1;
SELECT * FROM votes ORDER BY vote_id DESC;
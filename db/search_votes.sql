SELECT * 
FROM votes 
WHERE first ILIKE $1 OR second ILIKE $1 OR submitter ILIKE $1
ORDER BY vote_id DESC;
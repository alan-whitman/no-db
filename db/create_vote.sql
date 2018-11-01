INSERT INTO votes 
    (first, second, submitter, "firstTally", "secondTally")
VALUES 
    (${first}, ${second}, ${submitter}, 0, 0);
SELECT * FROM votes ORDER BY vote_id DESC;
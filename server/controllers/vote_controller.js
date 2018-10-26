let votes = {
    "data": [
        {
            "first": "Superman",
            "firstTally": 0,
            "second": "Batman",
            "secondtally": 0,
            "submitter": "Bob",
            "id": 0
        }
    ],

    "IPs": [
        "000.000.000.000", // IP Address Cache
        "111.222.333.444"
    ]
}

let id = 1;

module.exports = {
    getVotes(req, res)  {
        res.status(200).send(votes);
    },
    createVote(req, res)    {
        let { first, firstTally, second, secondTally, submitter } = req.body;
        let newVote = {first, firstTally, second, secondTally, submitter, id};
        // error checking
        for (let term in newVote)
            if (term.trim().length === 0) 
                res.status(400).send(votes);
        votes.data.push({});
        id++;
        res.status(200).send(votes);
    },
    updateVote(req, res)    {
        let { first, firstTally, second, secondTally, submitter } = req.body;
        let updatedVote.id = req.params.id;
        let updatedVote  {first, firstTally, second, secondTally}
     },
    deleteVote(req, res)    {

    }
}
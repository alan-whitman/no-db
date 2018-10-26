let votes = {
    data: [
        {
            "first": "Superman",
            "firstTally": 0,
            "second": "Batman",
            "secondtally": 0,
            "submitter": "Bob",
            "id": 0
        }
    ],

    IPs: [
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
        let { first, second, submitter } = req.body;
        let newVote = {first, second, submitter, id, firstTally: 0, secondTally: 0 };
        // error checking
        for (let term in newVote)
            if (term.trim().length === 0) 
                res.status(400).send(votes);
        votes.data.push(newVote);
        id++;
        res.status(200).send(votes);
    },
    updateVote(req, res)    {
        let { first, firstTally, second, secondTally, submitter } = req.body;
        updatedVote.id = Number(req.params.id);
        updatedVote = {first, firstTally, second, secondTally}
     },
    deleteVote(req, res)    {

    }
}
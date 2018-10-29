let votes = [
        // {
        //     "first": "Superman",
        //     "firstTally": 0,
        //     "second": "Batman",
        //     "secondtally": 0,
        //     "submitter": "Bob",
        //     "id": 0
        // }
];


let IPs = [
    "000.000.000.000", // IP Address Cache
    "111.222.333.444"
]


let id = 1;

module.exports = {
    getVotes(req, res)  {
        let searchStr = '';
        if (req.query.search)
            searchStr = req.query.search.toLowerCase();
        if (searchStr.trim() !== '')    {
            let filteredVotes = [];
            for (let i = 0; i < votes.length; i++)  {
                if (votes[i].first.toLowerCase().includes(searchStr) || votes[i].second.toLowerCase().includes(searchStr))  {
                    filteredVotes.push(votes[i]);
                }
            }
            res.status(200).send(filteredVotes);
        } else {
            res.status(200).send(votes);
        }
    },
    createVote(req, res)    {
        let { first, second, submitter } = req.body;
        let newVote = {first, second, submitter, id, firstTally: 0, secondTally: 0 };
        for (let term in newVote)   {
            if (term.trim().length === 0)   {
                res.status(400).send(votes);
                return;
            }
        }
        votes.push(newVote);
        id++;
        res.status(200).send(votes);
    },
    updateVote(req, res)    {
        let { first, second, submitter } = req.body;
        let updateId = parseInt(req.params.id);
        let updatedVote = {first, second, submitter};
        votes.forEach((vote, i)   =>  {
            if (vote.id === updateId)   {
                votes[i].first = updatedVote.first || votes[i].first;
                votes[i].second = updatedVote.second || votes[i].second;
                votes[i].submitter = updatedVote.submitter || votes[i].submitter;
                votes[i].firstTally = 0;
                votes[i].secondTally = 0;
            }
        })
        res.status(200).send(votes);
     },
    deleteVote(req, res)    {
        deleteId = parseInt(req.params.id);
        votes.forEach((vote, i) => {
            if (vote.id === deleteId)   {
                votes.splice(i, 1);
            }
        })
        res.status(200).send(votes)
    },
    increaseTally(req, res)   {
        let foundIt = false;
        let updateId = parseInt(req.params.id);
        let which = req.params.which === "first" ? "firstTally" : req.params.which === "second" ? "secondTally" : false;
        if (!which) {
            res.status(400).send(votes);
            return;
        }
        votes.forEach((vote, i) =>  {
           if (vote.id === updateId)
                votes[i][which]++;
                foundIt = true;
        });
        if (!foundIt)
            res.status(400).send(votes);
        else
            res.status(200).send(votes);
    }
}
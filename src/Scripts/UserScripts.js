export function calculateUser(ranks){
    //import user on login to calculate the user status
    let rank = { maxBench : 110, weight: 110, maxLegs: 120, maxDeadlift:170, pullUps:20}
    let userRankings = {}
    userRankings.ChestRanking = chestCalculation(rank.maxBench,rank.weight);
    userRankings.LegsRanking = legsCalculation(rank.maxLegs,rank.weight);
    userRankings.LowerBackRanking = lowerBack(rank.maxDeadlift,rank.weight);
    userRankings.UpperBackRanking = upperBack(rank.pullUps);
    userRankings.overAll = overAll(userRankings);
    return userRankings;
}

function chestCalculation (maxBench,weight){
    if(maxBench < weight*0.25) return 1;
    else if(maxBench < weight*0.5) return 2;
    else if(maxBench < weight*0.75) return 3;
    else if(maxBench < weight) return 4;
    else if(maxBench <= weight*1.1) return 5;
    else if(maxBench > weight *1.2) return 6;
}

function legsCalculation (maxLegs,weight){
    if(maxLegs < weight*0.25) return 1;
    else if(maxLegs < weight*0.75) return 2;
    else if(maxLegs < weight) return 3;
    else if(maxLegs < weight*1.25) return 4;
    else if(maxLegs <= weight*1.75) return 5;
    else if(maxLegs > weight *2) return 6;
}

function lowerBack(maxDeadlift,weight){
    if(maxDeadlift < weight*0.25) return 1;
    else if(maxDeadlift < weight*0.5) return 2;
    else if(maxDeadlift < weight) return 3;
    else if(maxDeadlift < weight*1.5) return 4;
    else if(maxDeadlift < weight*2) return 5;
    else if(maxDeadlift >= weight *2) return 6;
}

function upperBack(maxPullups){
    if(maxPullups < 1) return 1;
    if(maxPullups < 3) return 2;
    if(maxPullups < 5) return 3;
    if (maxPullups < 10) return 4;
    if(maxPullups < 15) return 5;
    if (maxPullups > 15) return 6;
}

function overAll (rankings) {
    let avg = ((rankings.ChestRanking +
         rankings.LegsRanking +
         rankings.LowerBackRanking + 
         rankings.UpperBackRanking)/4)

    return avg - avg%1;
}
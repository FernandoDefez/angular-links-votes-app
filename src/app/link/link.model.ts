export class Link 
{

    title: String;
    link: String;
    votes: Number;

    constructor(title: String, link: String, votes?: Number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    increaseVote(){
        this.votes +=1;
    }

    decreaseVote(){
        this.votes -=1;
    }

}
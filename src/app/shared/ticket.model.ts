export class Ticket {
    public assignee?: string;  
    public category: string;    
    public channel?: string;
    public confidency?: number;
    public description?: string; 
    public index: number;
    public subtopic: string; 
    public title?: string;
    public topic: string;

    constructor(category: string, index: number, subtopic: string, topic: string,
                assignee?: string,  channel?: string, confidency?: number, description?: string, title?: string, 
    ) {
        this.assignee = assignee,
        this.category = category,
        this.channel = channel,
        this.confidency = confidency,
        this.description = description,
        this.index = index,
        this.subtopic = subtopic,
        this.title = title,
        this.topic = topic
    }
}
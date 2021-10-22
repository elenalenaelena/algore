// import { Deserializable } from './deserializable.model';

export interface Ticket {
    index: number;
    created_at: String,
    message: String;
    category: String;
    topic: String;
    subtopic: String
    priority: number;
    status: String;
    deadline: String;
    channel: String;
    team: String;
    assignee: String;
    customer: String;
    contract_no: number;
    transaction_no: number;
    confidence: number;
}



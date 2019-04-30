import { Message } from "./message";


export class Conversation {
  id: string;
  createUsername: string;
  participants: [string];
  messages: [Message];
  title: string;
  other_participant: string;
  other_participant_id: string;
  last_message_date: string;
}
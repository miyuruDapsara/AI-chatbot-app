import { Message, IMessage } from "../model/message.model";

export class MessageDao {
  async createMessage(message: IMessage): Promise<IMessage> {
    try {
      const newMessage = new Message(message);
      return await newMessage.save();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getMessagesById(userid: string): Promise<IMessage[]> {
    try {
      return await Message.find({ userId: userid })
        .sort({ createdAt: -1 })
        .limit(5)
        .lean()
        .exec();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

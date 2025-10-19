import { Request, Response } from "express";
import { WebhookMessageDto, WebhookVerificationDto, WebhookVerificationResponseDto } from "../dto/webhookVerification.dto";
import { APP_CONFIG } from "../config/app.config";
import { MessageService } from './messaage.service';


export class WebhookService {
  private static instance: WebhookService;
  private  messageService: MessageService;


  private constructor() {
    this.messageService = MessageService.getInstance();
  }

  public static getInstance(): WebhookService {
    if (!WebhookService.instance) {
      WebhookService.instance = new WebhookService();
    }
    return WebhookService.instance;
  }

  public handleWebhookVerification( data: WebhookVerificationDto): WebhookVerificationResponseDto {

    const { mode, verify_token, challenge } = data;
    const password = APP_CONFIG.WEBHOOK_VERIFICATION_PASSWORD;

    if (data.mode === "subscribe" && data.verify_token === password) {
      console.log("✅ Webhook verified successfully");
      return {
        status: true,
        challenge: data.challenge,
      };
    }
    else{
       console.log("❌ Webhook verification failed");
       return {
         status: false,
         challenge: "",
       };
    }
   
  }


  public async handleReceiveMessage(data:WebhookMessageDto):Promise<boolean>{
     const message = data.entry[0].changes[0].value.messages[0].text.body;
     const phoneNumber = data.entry[0].changes[0].value.contacts[0].wa_id;
     const type = data.entry[0].changes[0].value.messages[0].type;
     const from = data.entry[0].changes[0].value.messages[0].from;
     const name = data.entry[0].changes[0].value.contacts[0].profile.name;


     const replyMessage = `Hello ${name} , your Message  Resevied.. `;


   const isReplyed =  await this.messageService.sendMessage(phoneNumber,replyMessage);
   if(!isReplyed){
    return true;
   }
     return false;

  }
  
}

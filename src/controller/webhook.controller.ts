import { Request, Response } from "express";
import { WebhookService } from '../service/webhook.service';



export class WebhookController {
  private webhookService: WebhookService;

  constructor() {
    this.webhookService = WebhookService.getInstance();
  }

  webhook = async (req: Request, res: Response) => {
    const mode = req.query["hub.mode"] as string;
    const verify_token = req.query["hub.verify_token"] as string;
    const challenge = req.query["hub.challenge"] as string;

    const data = {
      mode,
      verify_token,
      challenge,
    };

    const response = this.webhookService.handleWebhookVerification(data);

    if (response.status) {
      res.send(response.challenge);
      return;
    }
    res.send("Error! , wrong code..");
  };

  webhookMessege = async (req: Request, res: Response) => {
    console.log(JSON.stringify(req.body));
  };
}
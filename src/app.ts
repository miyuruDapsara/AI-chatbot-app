import { APP_CONFIG } from './config/app.config';
import express from "express";
import { MessageController } from './controller/message.controller';
import { WebhookController } from './controller/webhook.controller';
import mongoose from 'mongoose';


const app = express();
app.use(express.json());


const messageController = new MessageController();
app.post("/send-message",messageController.sendMessage);


const webhookController = new WebhookController();
app.get("/webhook",webhookController.webhook);
app.post("/webhook",webhookController.webhookMessege);



app.get("/health", (req, res) => { 
  res.send("Hello World!");
});


mongoose.connect(APP_CONFIG.MONGO_URI).then(()=>{
  console.log('connected to mongodb');
  app.listen(APP_CONFIG.PORT, () => {
    console.log(`Server is running on port : ${APP_CONFIG.PORT}`);
  });
  
}).catch((err)=>{
  console.log(err);
})



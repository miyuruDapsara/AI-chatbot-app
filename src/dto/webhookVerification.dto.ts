
export interface WebhookVerificationDto {
  mode: string;
  verify_token: string;
  challenge: string;
}

export interface WebhookVerificationResponseDto {
  status: boolean;
  challenge: string;
}


export interface WebhookMessageDto {
  object: string;
  entry: [
    {
      id: string;
      changes:[
        {
            value:{
                messaging_product:"whatsapp",
                metadata:{
                    display_phone_number:string,
                    phone_number_id:string
                }
                contact:[
                    {
                        profile:{
                            name:string
                        },
                        wa_id:string
                    }
                ],
                messages:[
                    {
                        from:string,
                        id:string,
                        timestamp:string,
                        text:{
                            body:string
                        }
                        type:string
                    }
                ]

            },
            field:string
        }
      ]
    }
  ]
}

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
      changes: [
        {
          value: {
            messaging_product: "whatsapp";
            metadata: {
              display_phone_number: string;
              phone_number_id: string;
            };
            contacts: [
              {
                profile: {
                  name: string;
                };
                wa_id: string;
              }
            ];
            messages: [
              {
                from: string;
                id: string;
                timestamp: string;
                text: {
                  body: string;
                };
                type: string;
              }
            ];
            errors: [{

            }],
            statuses: [{
              id: string;
              status: string;
              timestamp: string;
              recipient_id: string;
              conversation: {
                id: string;
                origin:{
                  type:string;
                }
              },
              pricing:{
                billable:boolean;
                pricing_model:string;
                category:string;
                type:string
              }
            }]
          };

          field: string;
        }
      ];
    }
  ];
}

//webhookmessagedto  eka aragatte  kalin program ek run karata passe ena json format eka chatgpt eken object type ekat convert karla




// WebhookVerificationDto

//represents the data WhatsApp sends when it tries to verify your webhook URL.
// During verification, WhatsApp sends a GET request containing parameters such as hub.mode, hub.verify_token, and hub.challenge.
// These values are mapped to the properties mode, verify_token, and challenge in your interface.
// Your backend uses this data to confirm that the request is legitimate by comparing the verify_token with 
// the one stored in your .env file.




// WebhookVerificationResponseDto

//defines the shape of the response that your backend sends back to WhatsApp after verification. 
// If the verification is successful, the response will include status: true and the challenge value, which WhatsApp expects to confirm the webhook connection.
// If it fails, it will include status: false and an empty challenge value




// WebhookMessageDto

//models the structure of the JSON payload that WhatsApp sends to your webhook when a user sends a message.
//The data includes information about your business account, message metadata, sender details, and the actual message text.
// For example, fields such as value.messages[0].text.body contain the message content, contacts[0].profile.
// name holds the sender’s display name, and metadata.phone_number_id identifies your WhatsApp business number. 
// By defining this interface, your controller can safely access deeply nested fields in the payload without errors, because TypeScript ensures the structure matches WhatsApp’s expected format.



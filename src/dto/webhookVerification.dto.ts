
export interface WebhookVerificationDto {
  mode: string;
  verify_token: string;
  challenge: string;
}

export interface WebhookVerificationResponseDto {
  status: boolean;
  challenge: string;
}
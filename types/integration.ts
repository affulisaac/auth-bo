export interface IntegrationFormData {
    accountLookUpUrl: string;
    appName: string;
    bgLight: string;
    canSkipPhoneNumber: boolean;
    createdBy: string;
    emailLookUpUrl: string;
    hoverState: string;
    primary: string;
    productLogo: string;
    productName: string;
    senderId: string;
    signingKey: string;
    validityPeriod: number;
    defaultChannel: 'USSD' | 'WhatsApp' | 'Email' | 'SMS' | 'QR Code';
  }
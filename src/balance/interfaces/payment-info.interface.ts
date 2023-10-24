export interface PaymentInfo {
  code: number;
  data: {
    balance: Array<{ currency: string; amount: number }>;
    paymaster: Array<any>;
    stripe: Array<any>;
  };
}

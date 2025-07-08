/// <mls shortName="tablePagamento" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

export interface Pagamento {
  id: number;
  pedidoId: number;
  metodo: string;
  dados: any;
  status?: string;
  details: PagamentoDetails;
}
export interface PagamentoDetails {
  comprovanteUrl?: string;
  gatewayRetorno?: any;
}

export const modelPrisma = `
model Pagamento {
  id Int @id @default(autoincrement())
  pedidoId Int 
  metodo String 
  dados Json 
  status String?
}
`;
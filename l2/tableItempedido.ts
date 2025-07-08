/// <mls shortName="tableItempedido" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

export interface ItemPedido {
  id: number;
  pedidoId: number;
  produtoId: number;
  quantidade: number;
  precoUnitario: number;
  details: ItemPedidoDetails;
}
export interface ItemPedidoDetails {
  observacoes?: string;
}

export const modelPrisma = `
model ItemPedido {
  id Int @id @default(autoincrement())
  pedidoId Int 
  produtoId Int 
  quantidade Int 
  precoUnitario Float
}
`;
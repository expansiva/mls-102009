/// <mls shortName="tablePedido" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

export interface Pedido {
  id: number;
  usuarioId: number;
  valorTotal: number;
  status?: string;
  dataCriacao: string;
  details: PedidoDetails;
}
export interface PedidoDetails {
  itensPedidoIds?: number[];
  pagamentoId?: number;
}

export const modelPrisma = `
model Pedido {
  id Int @id @default(autoincrement())
  usuarioId Int 
  valorTotal Float 
  status String? 
  dataCriacao DateTime
}
`;
/// <mls shortName="tableAgendamento" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

export interface Agendamento {
  id: number;
  data: string;
  hora: string;
  servico: string;
  clienteId: number;
  status: string;
  details: AgendamentoDetails;
}
export interface AgendamentoDetails {
  observacoes?: string;
  canceladoPor?: string;
  reagendadoParaId?: number;
}

export const modelPrisma = `
model Agendamento {
  id Int @id @default(autoincrement())
  data DateTime
  hora String
  servico String 
  clienteId Int 
  status String
}
`;
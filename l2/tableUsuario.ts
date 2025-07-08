/// <mls shortName="tableUsuario" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

export interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha?: string;
  tipo: string; // 'admin' | 'cliente'
  status?: string;
  facebookId?: string;
  instagramId?: string;
  details: UsuarioDetails;
}
export interface UsuarioDetails {
  historicoAgendamentos?: number[]; // agendamentoIds
  historicoPedidos?: number[]; // pedidoIds
  endereco?: string;
  telefone?: string;
}

export const modelPrisma = `
model Usuario {
  id Int @id @default(autoincrement())
  nome String email String senha String? tipo String status String? facebookId String? instagramId String?
}
`;
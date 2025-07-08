/// <mls shortName="tableContato" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

export interface Contato {
  id: number;
  nome: string;
  email: string;
  mensagem: string;
  dataEnvio: string;
  details: ContatoDetails;
}
export interface ContatoDetails {
  respondido?: boolean;
  resposta?: string;
}

export const modelPrisma = `
model Contato {
  id Int @id @default(autoincrement())
  nome String 
  email String 
  mensagem String 
  dataEnvio DateTime
}
`;
/// <mls shortName="tableCategoria" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

export interface Categoria {
  id: number;
  nome: string;
  details: CategoriaDetails;
}
export interface CategoriaDetails {
  descricao?: string;
  produtosIds?: number[];
}

export const modelPrisma = `
model Categoria {
  id Int @id @default(autoincrement())
  nome String
}
`;
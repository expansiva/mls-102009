/// <mls shortName="tableProduto" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

export interface Produto {
  id: number;
  nome: string;
  descricao?: string;
  preco: number;
  estoque: number;
  categoriaId: number;
  imagem?: string;
  destaque?: boolean;
  details: ProdutoDetails;
}
export interface ProdutoDetails {
  tags?: string[];
  comentariosIds?: number[];
}

export const modelPrisma = `
model Produto {
  id Int @id @default(autoincrement())
  nome String 
  descricao String? 
  preco Float 
  estoque Int 
  categoriaId Int 
  imagem String? 
  destaque Boolean?
}
`;
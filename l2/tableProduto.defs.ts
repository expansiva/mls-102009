/// <mls shortName="tableProduto" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "tableProduto",
    "type": "table",
    "group": "petshop",
    "tags": [
      "data",
      "table"
    ]
  },
  "references": {
    "widgets": [],
    "plugins": [],
    "statesRO": [],
    "statesRW": [],
    "statesWO": [],
    "imports": []
  },
  "planning": {
    "generalDescription": "Tabela de dados representando a entidade tableproduto.",
    "goal": "Armazenar informações da entidade tableproduto de forma estruturada.",
    "userStories": [
      {
        "story": "Como sistema, quero gerenciar dados da entidade tableproduto para uso no frontend e backend.",
        "derivedRequirements": []
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}


// <interfaces>
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
// </interfaces>


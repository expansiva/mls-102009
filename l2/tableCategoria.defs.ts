/// <mls shortName="tableCategoria" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "tableCategoria",
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
    "generalDescription": "Tabela de dados representando a entidade tablecategoria.",
    "goal": "Armazenar informações da entidade tablecategoria de forma estruturada.",
    "userStories": [
      {
        "story": "Como sistema, quero gerenciar dados da entidade tablecategoria para uso no frontend e backend.",
        "derivedRequirements": []
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}


// <interfaces>
export interface Categoria {
  id: number;
  nome: string;
  details: CategoriaDetails;
}
export interface CategoriaDetails {
  descricao?: string;
  produtosIds?: number[];
}
// </interfaces>


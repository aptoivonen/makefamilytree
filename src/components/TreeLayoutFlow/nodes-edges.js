export const initialNodes = [
  {
    id: "Eero",
    data: { label: "Eero" },
  },
  {
    id: "Margit",
    data: { label: "Margit" },
  },
  {
    id: "Aleksi",
    data: { label: "Aleksi" },
  },
  {
    id: "Maria",
    data: { label: "Maria" },
  },
  {
    id: "Ilkka",
    data: { label: "Ilkka" },
  },
  {
    id: "Juhani",
    data: { label: "Juhani" },
  },
  {
    id: "Lilja",
    data: { label: "Lilja" },
  },
  {
    id: "Paul",
    data: { label: "Paul" },
  },
];
initialNodes.forEach((node) => {
  node.type = "treeNode";
  node.position = { x: 0, y: 0 };
});

export const initialEdges = [
  { id: "ea", source: "Eero", target: "Aleksi" },
  { id: "em", source: "Eero", target: "Maria" },
  { id: "ei", source: "Eero", target: "Ilkka" },
  { id: "ma", source: "Margit", target: "Aleksi" },
  { id: "mm", source: "Margit", target: "Maria" },
  { id: "mi", source: "Margit", target: "Ilkka" },
  { id: "mj", source: "Maria", target: "Juhani" },
  { id: "ml", source: "Maria", target: "Lilja" },
  { id: "pj", source: "Paul", target: "Juhani" },
  { id: "pl", source: "Paul", target: "Lilja" },
];
initialEdges.forEach((edge) => {
  edge.type = "smoothstep";
  edge.animated = true;
});

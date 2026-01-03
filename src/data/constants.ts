export const ALL_TAGS = [
	"Estudo",
	"Configs",
	"Trabalho",
	"Pessoal",
	"Urgente",
	"Projeto",
] as const;

export const ALL_PRIORITIES = ["Baixa", "Média", "Alta"] as const;

export type Tag = (typeof ALL_TAGS)[number];
export type Priority = (typeof ALL_PRIORITIES)[number];

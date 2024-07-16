import type ICategoria from '@/interfaces/ICategoria';
import type IIngrediente from '@/interfaces/IIngrediente';
import type IReceita from '@/interfaces/IReceita';

async function obterDadosURL<T>(url: string) {
  const resposta = await fetch(url);
  return resposta.json() as T;
}

export async function obterCategorias(): Promise<ICategoria[]> {
  const categorias = await fetch(
    'https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json',
  );

  return await categorias.json();
}

export function obterIngredientes(): IIngrediente {
  return { ingredientes: [] };
}

export async function obterReceitas() {
  return obterDadosURL<IReceita[]>(
    'https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json',
  );
}

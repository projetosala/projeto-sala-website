import Header from '../components/Header';

export default function PageNotFound() {
  return (
    <Header
      title="Página não encontrada"
      description="Não foi possível encontrar a página que você está procurando, sinto muito."
      hasChevronDown={false}
    />
  );
}

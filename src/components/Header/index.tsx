import Logo from "../../assets/logo.svg";

import { Container, Content } from "./styles";

interface IHeaderProps {
  onOpenNewTransactionModal: () => void;
}

export default function Header({ onOpenNewTransactionModal }: IHeaderProps) {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="GeMoney" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}

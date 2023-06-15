import { GoBackButton, Icon } from "./GoBack.styled";

const GoBack = () => {
  return (
    <GoBackButton to="/">
      back <Icon />
    </GoBackButton>
  );
};

export default GoBack;

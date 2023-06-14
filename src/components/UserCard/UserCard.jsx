import {
  CardUser,
  ImageContainer,
  Logo,
  BackgroundCard,
  LineCard,
  AvatarBox,
  ContentCard,
  TweetsNumber,
  FollowButton,
  FollowingButton,
} from "./UserCard.styled";
import LogoSvg from "../../assets/logo.svg";
import BackgroundImg from "../../assets/backgroun-card.png";
import { useDispatch } from "react-redux";
import { changeUser } from "../../redux/usersSlice";

const UserCard = ({ card }) => {
  const dispatch = useDispatch();

  const HandleFollow = () => {
    dispatch(
      changeUser({ id: card.id, followers: card.followers + 1, follow: true })
    );
  };

  const HandleFollowing = () => {
    dispatch(
      changeUser({ id: card.id, followers: card.followers - 1, follow: false })
    );
  };

  return (
    <CardUser>
      <ImageContainer>
        <Logo src={LogoSvg} alt="logo go-it" />
        <BackgroundCard src={BackgroundImg} alt="message form" />
        <LineCard />
        <AvatarBox>
          <img src={card.avatar} alt="avatar" width={70} />
        </AvatarBox>
      </ImageContainer>
      <ContentCard>
        <TweetsNumber>{card.tweets} Tweets</TweetsNumber>
        <TweetsNumber>{card.followers} Followers</TweetsNumber>
        {card.follow ? (
          <FollowingButton onClick={HandleFollowing}>Following</FollowingButton>
        ) : (
          <FollowButton onClick={HandleFollow}>Follow</FollowButton>
        )}
      </ContentCard>
    </CardUser>
  );
};

export default UserCard;

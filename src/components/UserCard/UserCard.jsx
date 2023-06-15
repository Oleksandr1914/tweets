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

  function addComma(number) {
    const str = number.toString();
    const len = str.length;

    if (len <= 2) {
      return str;
    }

    let result = str[0] + str[1];
    let count = 0;

    for (let i = 2; i < len; i++) {
      if (count === 0 && i !== len - 1) {
        result += ",";
      }
      count++;
      result += str[i];
    }

    return result;
  }

  const HandleFollow = () => {
    dispatch(
      changeUser({
        id: card.id,
        followers: card.followers + 1,
        follow: "active",
      })
    );
  };

  const HandleFollowing = () => {
    dispatch(
      changeUser({
        id: card.id,
        followers: card.followers - 1,
        follow: "inactive",
      })
    );
  };

  const result = addComma(card.followers);

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
        <TweetsNumber>{result} Followers</TweetsNumber>
        {card.follow === "active" ? (
          <FollowingButton onClick={HandleFollowing}>Following</FollowingButton>
        ) : (
          <FollowButton onClick={HandleFollow}>Follow</FollowButton>
        )}
      </ContentCard>
    </CardUser>
  );
};

export default UserCard;

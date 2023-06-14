import styled from "styled-components";
import Ellipse from "../../assets/ellipse.png";

export const CardUser = styled.div`
  width: 380px;
  height: 460px;
  background-image: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 380px;
  height: 258px;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
`;

export const BackgroundCard = styled.img`
  position: absolute;
  top: 28px;
  left: 36px;
  width: 308px;
  height: 168px;
`;

export const LineCard = styled.div`
  position: absolute;
  top: 214px;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 8px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const AvatarBox = styled.div`
  position: absolute;
  top: 178px;
  left: 150px;
  z-index: 5;
  width: 89px;
  height: 89px;
  display: flex;
  justify-content: center;
  align-items: center;
  ::after {
    content: "";
    position: absolute;
    width: 89px;
    height: 89px;
    left: 0;
    top: 0;
    background-image: url(${Ellipse});
    background-repeat: no-repeat;
    background-size: 90px 90px;
  }
  img {
    position: relative;
    top: -2px;
    border-radius: 50%;
  }
`;

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 26px;
`;

export const TweetsNumber = styled.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  color: #ebd8ff;
`;

export const FollowButton = styled.button`
  margin-top: 10px;
  padding: 14px;
  width: 196px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  color: #373737;
`;

export const FollowingButton = styled.button`
  margin-top: 10px;
  padding: 14px;
  width: 196px;
  background-color: #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  color: #373737;
`;

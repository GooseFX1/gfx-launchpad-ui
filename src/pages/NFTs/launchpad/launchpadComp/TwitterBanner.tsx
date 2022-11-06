import styled from "styled-components";
import { checkMobile } from "../../../../utils";

const COINTANER = styled.div`
  position: relative;
  margin-bottom: 75px;
  @media(max-width: 500px){
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 35px 0;
  }

  .banner-img{
    @media(max-width: 500px){
      width: 90%;
      height: 465px;
    }
  }
`;

const TEXT = styled.div`
  font-size: 42px;
  font-weight: bold;
  text-align: left;
  position: absolute;
  top: 35px;
  margin-left: 4%;
  color: #ffffff;

  @media(max-width: 500px){
    font-size: 27px;
    top: 90px;
  }
`;

const CTA = styled.a`
  position: absolute;
  bottom: 35px;
  margin-left: 4%;
  width: 269px;
  height: 60px;
  background: white;
  border-radius: 29px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #00a5a1;
  cursor: pointer;
  @media(max-width: 500px){
    width: 200px;
    height: 52px;
    bottom: 46px;
  }

  &:hover {
    color: #00a5a1;
  }

  span {
    margin-right: 10px;
  }
`;

export const TwitterBanner = () => (
  <COINTANER>
    <TEXT>
      Stay updated with <br /> MultiChain Advisors!
    </TEXT>
    <CTA href="https://twitter.com/multichaininc" target="_blank">
      <span>Follow us</span>
      <img src="/img/assets/twitterIcon.png" alt="twitter-icon" />
    </CTA>
    <img className="banner-img"
      src={
        checkMobile()
          ? "/img/assets/twitterBannerMobile.png"
          : "/img/assets/twitterBanner.png"
      }
      alt="twitter-banner"
    />
  </COINTANER>
);

import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { logData } from "../../../../api";
import LaunchImg from "../../../../assets/launch.png";
import { SOCIAL_MEDIAS } from "../../../../constants";
import { checkMobile } from "../../../../utils";

const TEXT = styled.div`
  font-weight: 600;
  font-size: 50px;
  position: absolute;
  top: 100px;

  @media (max-width: 500px) {
    position: absolute;
    top: 200px;
    font-size: 30px;
    font-weight: 600;
    line-height: 1.5;
    text-align: center;
  }
`;

const APPLY_BTN = styled.button`
  background: #ffffff;
  border-radius: 29px;
  border: none;
  width: 219px;
  height: 60px;
  color: #00a5a1;
  font-weight: 600;
  font-size: 18px;
  position: absolute;
  bottom: 130px;
  margin-left: 0;

  @media (max-width: 500px) {
    border-radius: 37px;
    border: none;
    width: 150px;
    height: 47px;
    font-size: 14px;
    position: absolute;
    top: 350px;
    margin-left: 0;
    font-weight: bold;
  }
`;


const WRAPPER = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -2%;
  img {
    margin: 72px 0;
    display: block;
    height: 295px;

    @media (max-width: 500px) {
      margin: 45px auto;
      display: block;
      width: 90%;
      height: 465px;
    }
  }
`;

const LaunchCollection: FC = () => {
  const handleApplyClick = () => {
    window.open(SOCIAL_MEDIAS.nftCreatorForm);
  };
  useEffect(() => {
    logData("launchpad_page");
  }, []);

  return (
    <WRAPPER>
      <img
        src={checkMobile() ? "/img/assets/launchImgMobile.png" : LaunchImg}
        alt="launch-your-collection"
      />
      {checkMobile() ? (
        <TEXT>
          Launch your <br /> collection today!
        </TEXT>
      ) : (
        <TEXT>Launch your collection today!</TEXT>
      )}
      <APPLY_BTN onClick={handleApplyClick}>Apply</APPLY_BTN>
    </WRAPPER>
  );
};
export default LaunchCollection;

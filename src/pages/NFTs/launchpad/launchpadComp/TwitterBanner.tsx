import styled from "styled-components"

const COINTANER = styled.div`
    position: relative;
`
const TEXT = styled.div`
    font-size: 50px;
    font-weight: bold;
    text-align: left;
    position: absolute;
    top: 35px;
    left: 50px;
    color: #ffffff;
    margin-bottom: 42px;
`

const CTA = styled.div`
    position: absolute;
    bottom: 35px;
    left: 50px;
    width: 269px;
    height: 60px;
    background: white;
    border-radius: 29px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #00a5a1;

    span{
        margin-right: 10px;
    }
`


export const TwitterBanner = () => (
<COINTANER>
    <TEXT>Stay updated with <br /> MultiChain Advisors!</TEXT>
    <CTA>
        <span>Follow us</span>
        <img src='/img/assets/twitterIcon.png' alt='twitter-icon'/>
    </CTA>
    <img src='/img/assets/twitterBanner.png' alt='twitter-banner'/>
</COINTANER>
)
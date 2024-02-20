import styled from "styled-components";
import ThumbIcon from "./components/ThumbIcon";
import SentimentGauge from "./components/SentimentGauge";
import CardActions from "./components/CardActions";
import { mediaPath } from "src/config.js";
import "../../../css/main.css";

const Container = styled(({ type, picture, ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.type === "grid" ? "end" : "space-between"};
  aspect-ratio: 1;
  background-image: ${(props) =>
      props.type === "grid"
        ? `linear-gradient(
      to right,
      #00000044, 
      #00000000
    )`
        : `linear-gradient(
      to right,
      var(--color-black-transparent) 70px,
      var(--color-gradient-light-gray) 200px,
      var(--color-gradient-dark-gray) 50%,
      var(--color-gradient-light-gray)
    )`},
    ${(props) => `url(${props.picture})`};
  background-repeat: no-repeat;
  background-position: ${(props) =>
    props.type === "grid" ? "center" : "left"};
  background-size: ${(props) =>
    props.type === "grid" ? "cover" : "100%,250px auto"};
  width: 350px;
  height: 350px;

  /* Tablet */
  @media (min-width: 768px) {
    width: ${(props) => (props.type === "list" ? "100%" : "350px")};
    height: ${(props) => (props.type === "list" ? "142px" : "350px")};
  }
  /* Desktop */
  @media (min-width: 1100px) {
    width: ${(props) => (props.type === "list" ? "100%" : "350px")};
    height: ${(props) => (props.type === "list" ? "170px" : "350px")};
  }
`;
const Title = styled.h3`
  display: flex;
  align-items: flex-start;
  color: var(--color-white);
  padding: 0;
  margin-left: ${(props) => (props.type === "grid" ? "0px" : "220px")};
  margin-top: ${(props) => (props.type === "grid" ? "0px" : "16px")};
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  /* white-space: nowrap; */
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: ${(props) => (props.type === "grid" ? "74px" : "36px")};
  font-weight: 400;
  font-size: 30px;
  /* Desktop */
  @media (min-width: 1100px) {
    font-size: 36px;
  }
`;
const Description = styled.div`
  /* width: 230px; */
  /* border: 1px solid red; */
  height: 36px;
  color: var(--color-white);
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  margin-left: ${(props) => (props.type === "grid" ? "50px" : "275px")};
`;
const CardMain = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.type === "grid" ? "column" : "row")};
  gap: 16px;
  padding: 0 8px 8px 0;
  margin-top: 0px;
`;
const TextBoxCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: "8px";
`;
const IconTitleRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: ${(props) => (props.type === "grid" ? "end" : "start")};
`;

Card.defaultProps = {
  data: {},
  type: "grid",
};
export default function Card({ type, data, reload }) {
  return (
    <Container type={type} picture={`${mediaPath}${data.picture}`}>
      <CardMain type={type}>
        <TextBoxCol>
          <IconTitleRow type={type}>
            <ThumbIcon isPositive={data.votePositive - data.voteNegative > 0} />
            <Title type={type}>{data.name}</Title>
          </IconTitleRow>
          <Description type={type}>{data.description}</Description>
        </TextBoxCol>
        <CardActions data={data} type={type} reload={reload} />
      </CardMain>
      <SentimentGauge
        votePositive={data.votePositive}
        voteNegative={data.voteNegative}
      />
    </Container>
  );
}

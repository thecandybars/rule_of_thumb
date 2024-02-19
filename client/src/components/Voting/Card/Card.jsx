import styled from "styled-components";
import "src/css/main.css";
import ThumbIcon from "./components/ThumbIcon";
import SentimentGauge from "./components/SentimentGauge";
import Row from "src/common/LayoutComponents/Row";
import Column from "src/common/LayoutComponents/Column";
import CardActions from "./components/CardActions";
import { mediaPath } from "src/config.js";

const Container = styled(({ type, picture, ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.type === "grid" ? "end" : "space-between"};
  aspect-ratio: 1;
  background-image: ${(props) => `url(${props.picture}),`}
    linear-gradient(
      to right,
      rgba(100, 100, 100, 0),
      var(--color-dark-background) 350px,
      var(--color-darker-background) 50%,
      var(--color-dark-background)
    );
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-position: ${(props) =>
    props.type === "grid" ? "center" : "left"};
  background-size: ${(props) =>
    props.type === "grid" ? "cover" : "250px auto,100%"};

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
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  /* white-space: nowrap; */
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 74px;
  font-weight: 400;
  font-size: 30px;
  /* Desktop */
  @media (min-width: 1100px) {
    font-size: 36px;
  }
`;
const Description = styled.div`
  /* width: 230px; */
  height: 36px;
  color: var(--color-white);
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
`;
const RowColumn = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.type === "grid" ? "column" : "row")};
  margin: ${(props) =>
    props.type === "grid" ? "8px 32px 8px 0px" : "8px 8px 8px 250px"};
  gap: 8px;
`;
Card.defaultProps = {
  data: {},
  type: "grid",
};
export default function Card({ type, data, reload }) {
  return (
    <Container type={type} picture={`${mediaPath}${data.picture}`}>
      <Row style={{ gap: "8px", justifyContent: "space-between" }}>
        <ThumbIcon isPositive={data.votePositive - data.voteNegative > 0} />
        <RowColumn type={type}>
          <Column
            style={{
              gap: "16px",
            }}
          >
            <Title>{data.name}</Title>
            <Description>{data.description}</Description>
          </Column>
          <CardActions data={data} type={type} reload={reload} />
        </RowColumn>
      </Row>
      <SentimentGauge
        votePositive={data.votePositive}
        voteNegative={data.voteNegative}
      />
    </Container>
  );
}

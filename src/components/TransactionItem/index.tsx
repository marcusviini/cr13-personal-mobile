import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { ShortMonthNames } from "../../core/constants/months.constants";
import colors from "../../styles/colors";
import {
  Container,
  SubContainer,
  StyledTitle,
  StyledDate,
  StyledValue,
} from "./styles";

interface TransactionItemProps {
  title: string;
  date: Date;
  receive: boolean;
  value: number;
  concluded?: boolean;
  showConcludedStatus?: boolean;
  padding?: boolean;
}

const TransactionItem = ({
  title,
  date,
  receive,
  value,
  concluded,
  showConcludedStatus = false,
  padding = false,
}: TransactionItemProps) => {
  const delayedTransaction = !concluded && date < new Date();

  return (
    <Container style={padding && { paddingHorizontal: 20 }}>
      <SubContainer>
        <StyledDate delayed={!!delayedTransaction}>{`${date.getDate()} ${
          ShortMonthNames[date.getMonth()]
        }`}</StyledDate>
        <StyledTitle>{title}</StyledTitle>
      </SubContainer>
      <SubContainer>
        <StyledValue>
          {value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </StyledValue>
        <AntDesign
          name={receive ? "arrowup" : "arrowdown"}
          size={18}
          color={receive ? colors.green : colors.red}
        />
        {showConcludedStatus && (
          <AntDesign
            style={{ marginLeft: 4 }}
            name={concluded ? "checkcircle" : "minuscircle"}
            size={18}
            color={concluded ? colors.green : colors.red}
          />
        )}
      </SubContainer>
    </Container>
  );
};

export default TransactionItem;


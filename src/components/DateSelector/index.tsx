import { MaterialIcons } from "@expo/vector-icons";
import React, { Dispatch, useState } from "react";
import { MonthNames } from "../../core/constants/months.constants";
import colors from "../../styles/colors";

import { Card, Container, StyledDate } from "./styles";

interface DateSelectorProps {
  date: Date;
  setDate: Dispatch<React.SetStateAction<Date>>;
}

const DateSelector = ({ date, setDate }: DateSelectorProps) => {
  const setMonth = (months: number) => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + months);
    setDate(newDate);
  };

  return (
    <Container>
      <Card>
        <MaterialIcons
          onPress={() => setMonth(-1)}
          name="keyboard-arrow-left"
          size={24}
          color={colors.darkGray}
        />
        <StyledDate>
          {MonthNames[date.getMonth()]} - {date.getFullYear()}
        </StyledDate>
        <MaterialIcons
          onPress={() => setMonth(1)}
          name="keyboard-arrow-right"
          size={24}
          color={colors.darkGray}
        />
      </Card>
    </Container>
  );
};

export default DateSelector;


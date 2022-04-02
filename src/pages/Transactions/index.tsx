import React, { useState } from "react";
import DateSelector from "../../components/DateSelector";
import Page from "../../components/Page";
import TransactionItemSwipeable from "../../components/TransactionItemSwipeable";
import { Transaction } from "../../core/entities/transaction.entity";
import { ItemsContainer } from "./styles";

const mok: Transaction[] = [
  {
    title: "Luz",
    date: new Date("2021-03-09"),
    receive: false,
    value: 90.47,
    concluded: true,
  },
  {
    title: "Salário",
    date: new Date("2021-03-07"),
    receive: true,
    value: 3000,
    concluded: true,
  },
  {
    title: "Água",
    date: new Date("2021-03-05"),
    receive: false,
    value: 50.53,
    concluded: true,
  },
  {
    title: "Freela",
    date: new Date("2021-03-20"),
    receive: true,
    value: 500,
    concluded: false,
  },
];

const Transactions = () => {
  const [date, setDate] = useState<Date>(new Date());
  return (
    <Page removeHorizontalPadding>
      <DateSelector date={date} setDate={setDate} />
      <ItemsContainer>
        {mok
          .filter(
            (transaction) =>
              transaction.date.getMonth() == date.getMonth() &&
              transaction.date.getFullYear() == date.getFullYear()
          )
          .map((transaction) => (
            <TransactionItemSwipeable transaction={transaction} />
          ))}
      </ItemsContainer>
    </Page>
  );
};

export default Transactions;


import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../styles/colors";
import MainCard from "../../components/MainCard";
import Balance from "../../components/Balance";
import TransactionItem from "../../components/TransactionItem";
import { NoItemText } from "./styles";
import Page from "../../components/Page";
import { Transaction } from "../../core/entities/transaction.entity";

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
    date: new Date("2022-03-30"),
    receive: true,
    value: 500,
    concluded: false,
  },
];

const Dashboard = () => {
  const monthTransactions: Transaction[] = [];
  const pendingTransactions: Transaction[] = [];

  mok.map((item) => {
    item.concluded
      ? monthTransactions.push(item)
      : pendingTransactions.push(item);
  });

  return (
    <Page>
      <MainCard
        title="Saldo"
        icon={
          <Ionicons name="wallet-outline" size={20} color={colors.darkGray} />
        }
      >
        <Balance />
      </MainCard>
      <MainCard
        title="Transações do mês"
        collapse
        icon={
          <Ionicons name="swap-vertical" size={20} color={colors.darkGray} />
        }
      >
        {monthTransactions.length ? (
          monthTransactions.map((item, i) => (
            <TransactionItem
              key={i}
              title={item.title}
              date={item.date}
              receive={item.receive}
              value={item.value}
              concluded={item.concluded}
            />
          ))
        ) : (
          <NoItemText>Não há transações!</NoItemText>
        )}
      </MainCard>
      <MainCard
        title="Transações pendentes"
        subTitle="Próximos 30 dias"
        collapse
        icon={
          <MaterialCommunityIcons
            name="timer-sand"
            size={20}
            color={colors.darkGray}
          />
        }
      >
        {pendingTransactions.length ? (
          pendingTransactions.map((item, i) => (
            <TransactionItem
              key={i}
              title={item.title}
              date={item.date}
              receive={item.receive}
              value={item.value}
              concluded={item.concluded}
            />
          ))
        ) : (
          <NoItemText>Não há transações!</NoItemText>
        )}
      </MainCard>
    </Page>
  );
};

export default Dashboard;


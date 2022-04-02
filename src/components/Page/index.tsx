import React, { ReactNode } from "react";
import { View } from "react-native";
import NewTransactionButton from "../NewTransactionButton";
import SlideIn from "../SlideIn";

import { Container } from "./styles";

interface PageProps {
  removeHorizontalPadding?: boolean;
  removeVerticalPadding?: boolean;
  removeAddTransactionButton?: boolean;
  children: ReactNode;
}

const Page = ({
  children,
  removeHorizontalPadding,
  removeVerticalPadding,
  removeAddTransactionButton,
}: PageProps) => (
  <Container
    removeHorizontalPadding={!!removeHorizontalPadding}
    removeVerticalPadding={!!removeVerticalPadding}
  >
    {children}
    {!removeAddTransactionButton && (
      <View style={{ position: "absolute", bottom: 20, right: 20 }}>
        <SlideIn
          name="newtransaction"
          option={<View style={{ backgroundColor: "white", borderRadius: 20, height: 600 }} />}
        >
          <NewTransactionButton />
        </SlideIn>
      </View>
    )}
  </Container>
);

export default Page;


import React from "react";
import { Animated, useWindowDimensions } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { ItemContainer, TransitionContainer } from "./styles";
import TransactionItem from "../TransactionItem";
import { Ionicons, Entypo } from "@expo/vector-icons";
import colors from "../../styles/colors";
import { Transaction } from "../../core/entities/transaction.entity";

interface TransactionItemSwipeableProps {
  transaction: Transaction;
}

const TransactionItemSwipeable = ({
  transaction,
}: TransactionItemSwipeableProps) => {
  const { width } = useWindowDimensions();
  const excludedPaddingWidth = width - 40;

  function LeftActions(
    _: Animated.AnimatedInterpolation,
    dragX: Animated.AnimatedInterpolation
  ) {
    const scale = dragX.interpolate({
      inputRange: [0, excludedPaddingWidth],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });
    const translateX = dragX.interpolate({
      inputRange: [0, excludedPaddingWidth],
      outputRange: [-excludedPaddingWidth, 0],
      extrapolate: "clamp",
    });
    const translateTextX = dragX.interpolate({
      inputRange: [0, excludedPaddingWidth],
      outputRange: [excludedPaddingWidth / 2, 0],
      extrapolate: "clamp",
    });
    return (
      <Animated.View
        onTouchEnd={() => alert("end")}
        style={{
          width: "100%",
          backgroundColor: colors.lightGreen,
          justifyContent: "center",
          alignItems: "center",
          transform: [{ translateX }],
        }}
      >
        <Animated.Text
          style={{
            transform: [{ translateX: translateTextX }, { scale }],
          }}
        >
          <Entypo name="check" size={24} color={colors.white} />
        </Animated.Text>
      </Animated.View>
    );
  }

  function RightActions(
    _: Animated.AnimatedInterpolation,
    dragX: Animated.AnimatedInterpolation
  ) {
    const scale = dragX.interpolate({
      inputRange: [-excludedPaddingWidth, 0],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });

    const translateX = dragX.interpolate({
      inputRange: [-excludedPaddingWidth, 0],
      outputRange: [0, excludedPaddingWidth],
      extrapolate: "clamp",
    });

    const translateTextX = dragX.interpolate({
      inputRange: [-excludedPaddingWidth, 0],
      outputRange: [0, -(excludedPaddingWidth / 2)],
      extrapolate: "clamp",
    });

    return (
      <Animated.View
        onTouchEnd={() => alert("end")}
        style={{
          width: "100%",
          backgroundColor: colors.red,
          justifyContent: "center",
          alignItems: "center",
          transform: [{ translateX }],
        }}
      >
        <Animated.Text
          style={{ transform: [{ translateX: translateTextX }, { scale }] }}
        >
          <Ionicons name="md-trash" size={24} color={colors.white} />
        </Animated.Text>
      </Animated.View>
    );
  }

  return (
    <ItemContainer>
      <TransitionContainer>
        <Swipeable
          containerStyle={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
          }}
          renderLeftActions={LeftActions}
          renderRightActions={RightActions}
        >
          <TransactionItem
            title={transaction.title}
            date={transaction.date}
            receive={transaction.receive}
            value={transaction.value}
            concluded={transaction.concluded}
            showConcludedStatus
            padding
          />
        </Swipeable>
      </TransitionContainer>
    </ItemContainer>
  );
};

export default TransactionItemSwipeable;


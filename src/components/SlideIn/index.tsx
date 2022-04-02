import React, { useEffect } from "react";
import { View } from "react-native";
import {
  Menu,
  MenuOptions,
  MenuTrigger,
  renderers,
  withMenuContext,
  MenuContextProps,
} from "react-native-popup-menu";

const { SlideInMenu } = renderers;
import { Container } from "./styles";

export interface SlideInProps extends MenuContextProps {
  name: string;
  children?: any;
  option: any;
  open?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  onBackdropPress?: () => void;
}

const SlideIn = ({
  name,
  children,
  option,
  ctx,
  open,
  onClose,
  onOpen,
  onBackdropPress,
}: SlideInProps) => {
  useEffect(() => {
    open ? ctx.menuActions.openMenu(name) : ctx.menuActions.closeMenu();
  }, [open]);

  return (
    <View>
      <Menu
        name={name}
        onClose={onClose}
        onOpen={onOpen}
        onBackdropPress={onBackdropPress}
        renderer={SlideInMenu}
      >
        {children ? <MenuTrigger>{children}</MenuTrigger> : <MenuTrigger />}

        <MenuOptions
          customStyles={{
            optionsContainer: { backgroundColor: "transparent" },
          }}
        >
          <Container>{option}</Container>
        </MenuOptions>
      </Menu>
    </View>
  );
};

export default withMenuContext(SlideIn);

import React, { useEffect, useRef } from 'react'
import { Animated, Dimensions } from "react-native";

import Page from "../../components/Page";

import { Logo } from "../../static/Logo";
import { Container } from "./styles";


const Splash = () => {
      const startAnimation = useRef(new Animated.Value(0)).current;

      const scaleLogo = useRef(new Animated.Value(1)).current;

      const moveLogo = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

      useEffect(() => {
          setTimeout(() => {
              Animated.parallel([
                  Animated.timing(
                      startAnimation,
                      {
                          toValue: -Dimensions.get('window').height + (10),
                          useNativeDriver: true
                      }
                  ),
                  Animated.timing(
                      scaleLogo,
                      {
                          toValue: 0.1,
                          useNativeDriver: true
                      }
                  ),
                  Animated.timing(
                      moveLogo,
                      {
                          toValue: {
                              x: (Dimensions.get("window").width / 2) - 35,
                              y: (Dimensions.get('window').height / 2) - 5
                          },
                          useNativeDriver: true
                      }
                  ),
              ]).start();
          }, 2000);
      }, [])

      
  return (
    <Page removeAddTransactionButton>
      <Container>
          <Animated.View style={{
            flex: 1,
            backgroundColor: 'translucent',
            zIndex: 1,
            transform: [
                { translateY: startAnimation }
            ]
          }}>

            <Animated.View style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Logo width={300} height={322.51} />
            </Animated.View>
          </Animated.View>
      </Container>
    </Page>
  );
};

export default Splash;

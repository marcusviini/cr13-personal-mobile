import React, { useEffect, useState } from "react";
import { View, Text, Animated } from "react-native";

import LottieView from "lottie-react-native"

import MainCard from "../../components/MainCard";
import { api } from "../../service/api";

import {
  Container,
  LoadingContainer,
  TreinosContainer,
  TreinoContainer,
  TreinoDescription,
  TreinoResume,
} from "./styles";

const ITEM_SIZE = 100

const Dashboard = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current

  const [loading, setLoading] = useState(true);
  const [treinos, setTreinos] = useState<any>([]);
  const [closeTreinos, setCloseTreinos] = useState(false);
  const [treino, setTreino] = useState<any>();

  const handleOpenTraining = async (data: any) => {
    setTreino(data);
    setCloseTreinos(true);
  };

  useEffect(() => {
    async function getTreinos() {
      setLoading(true);
      try {
       const response = await api.get("/training");
       setTreinos(response.data.treinos);
       setLoading(false);
       setCloseTreinos(false);
      } catch (error: any) {
        console.error(error.message);
      }
    }
    getTreinos();
  }, []);

  return (
    <Container>
      <MainCard />
     

      {loading && 
        <LoadingContainer>
          <LottieView
            source={require('../../../assets/loading.json')}
            autoPlay={true}
            loop={true}
          />
        </LoadingContainer>
      }

      {!loading &&
      <TreinosContainer>
        <Animated.FlatList 
          showsVerticalScrollIndicator={false}
          data={treinos}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y:scrollY}}}],
            {useNativeDriver:true}
          )}
          keyExtractor={treino =>treino.description}
          contentContainerStyle={{
            paddingTop:50,
          }}
          renderItem={({item,index}) => {
            const inputRange =[
              -1,
              0,
              ITEM_SIZE * index,
              ITEM_SIZE * (index + 2),
            ]

            const opacityInputRange =[
              -1,
              0,
              ITEM_SIZE * index,
              ITEM_SIZE * (index + 0.5),
            ]

            const scale = scrollY.interpolate({
              inputRange,
              outputRange:[1, 1, 1, 0]
            })

            const opacity = scrollY.interpolate({
              inputRange:opacityInputRange,
              outputRange:[1, 1, 1, 0]
            })

            return <TreinoContainer style={{
              opacity,
              transform:[{scale}],
            }}>
              <TreinoDescription>{item.description}</TreinoDescription>
              <TreinoResume>{item.resume}</TreinoResume>
          </TreinoContainer>
          }}
        />
        </TreinosContainer>
      }
      {closeTreinos && (
        <Text>
          {treino.description}
          {treino.resume}
          {treino.steps.map((steps: any) => (
            <View key={Math.random()}>
              <Text>{steps.description}</Text>
              <Text>{steps.title}</Text>
              <Text>{steps.intervalo}</Text>
              <Text>{steps.repeticoes}</Text>
              <Text>{steps.series}</Text>
              <Text>{steps.linkVideo}</Text>
            </View>
          ))}
        </Text>
      )}
    </Container>
  );
};

export default Dashboard;

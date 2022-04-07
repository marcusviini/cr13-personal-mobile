import React, { useEffect, useState } from "react";
import { View,Text } from "react-native";

import MainCard from "../../components/MainCard";
import ReactDataSheet from 'react-datasheet';
import { api } from '../../service/api'

import { Container,TreinosContainer,TreinoContainer,TreinoDescription } from "./styles";


const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [treinos, setTreinos] = useState<any>([])
  const [closeTreinos, setCloseTreinos] = useState(false)
  const [treino, setTreino] = useState<any>();

  const handleOpenTraining  = async(data: any) => {
    setTreino(data)
    setCloseTreinos(true)
  }

  useEffect(() => {
    async function getTreinos() {
      setLoading(true);
      try {
        const response = await api.get('/training')
        setTreinos(response.data.treinos)
        setLoading(false)
        setCloseTreinos(false)
      } catch (error:any) {
        console.error(error.message);
      }   
    }
    getTreinos()
  }, [])


  return (
    <Container>
      <MainCard/>
          {loading && (
            <Text>Carregando treinos</Text>
          )}
           <TreinosContainer>
            {!loading && !closeTreinos  && (                
                treinos.map((treino:any) => (                  
                    <TreinoContainer key={treino.description} onTouchEnd={()=>handleOpenTraining(treino)}>
                      <TreinoDescription>{treino.description}</TreinoDescription>
                      <TreinoDescription>{treino.resume}</TreinoDescription>
                      </TreinoContainer>
                  )
                )
            )}
           </TreinosContainer>
           {closeTreinos && (
              <Text>
               {treino.description}
               {treino.resume}
               { treino.steps.map((steps:any) => (  
                    <View key={Math.random()} onTouchEnd={() => setCloseTreinos(false)}>             
                      <Text>{steps.description}</Text>
                      <Text>{steps.title}</Text>
                      <Text>{steps.intervalo}</Text>                     
                      <Text>{steps.repeticoes}</Text>
                      <Text>{steps.series}</Text>
                      <Text>{steps.linkVideo}</Text>
                    </View>   
                  )
                )
              }
              </Text>
           )}
    </Container>
  );
};

export default Dashboard;


import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

const Sobre = () => {
  const equipe = [
    { nome: 'Alexandre Maranhão', foto: require('../assets/alexandre.jpg') },
    { nome: 'Diana Rafaela', foto: require('../assets/diana.jpeg') },
    { nome: 'Gabriela Souza', foto: require('../assets/gabriela.jpeg') },
    { nome: 'Mateus Vieira', foto: require('../assets/mateus.jpeg') },
    { nome: 'Pedro Balder', foto: require('../assets/pedro.jpg') },
    { nome: 'Thayssa Alexandre', foto: require('../assets/thayssa.jpeg') },
    { nome: 'Vinicius Souza ', foto: require('../assets/vinicius.jpg') },
  ];

 
  return (
    <ScrollView>
        
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, margin: 10 , color: '#004A2F',}}>
            Bem-vindo ao MAS - Monitoramento Ambiental em Suape 
        </Text>
        
      <Card containerStyle={{ width: '80%', alignItems: 'center'}}>
        <Text style={{ marginTop: 20, textAlign: 'center' }}>
        O aplicativo MAS é uma ferramenta dedicada ao Monitoramento Ambiental em Suape, oferecendo a você a oportunidade de contribuir ativamente para a preservação do meio ambiente na região. Por meio deste aplicativo de denúncias, você pode relatar crimes ambientais, fornecendo informações essenciais, imagens e detalhes precisos sobre o ocorrido.
        </Text>
        </Card>

        <Text style={{ fontSize: 20, margin: 10 , color: '#004A2F',}}>
          Nossa equipe
        </Text>

        <Card containerStyle={{ width: '80%', alignItems: 'center' }}>
          {equipe.map((membro, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Image
                source={membro.foto}
                style={{ width: 100, height: 100, borderRadius: 50 }}
              />
              <Text style={{ marginTop: 10 }}>{membro.nome}</Text>
            </View>
          ))}
        </Card>

  

      </View>
    </ScrollView>
  );
};

export default Sobre;

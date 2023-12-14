import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

const Sobre = () => {
  const equipe = [
    { nome: 'Membro 1', foto: require('../assets/thayssa.jpeg') },
    { nome: 'Membro 2', foto: require('../assets/alexandre.jpg') },
    { nome: 'Membro 3', foto: require('../assets/diana.jpeg') },
    { nome: 'Membro 4', foto: require('../assets/gabriela.jpeg') },
    { nome: 'Membro 5', foto: require('../assets/mateus.jpeg') },
    { nome: 'Membro 6', foto: require('../assets/pedro.jpg') },
    { nome: 'Membro 7', foto: require('../assets/vinicius.jpg') },
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

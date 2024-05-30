import React from "react";
import { Text, View, Image, TouchableOpacity } from 'react-native';

export default function List(props){

  function loadItens(likeada){
    return likeada ? require("../../assets/images/likeada.png") : require("../../assets/images/like.png")
  }

  function showLikers(likers){
    if(likers === 0){
      return;
    }   
 
    return(
      <Text 
        className="font-semibold pl-2"
      >
        {likers} {likers > 1 ? "Curtidas" : "Curtida"}
      </Text>
    );
  }

  return(
    <View>            
      <View className="flex-1 flex-row items-center p-4">
          <Image
            className="w-14 h-14 rounded-full"
            source={{uri: props.data.imgperfil}}
          />
          <Text className="pl-5 text-lg font-semibold">{props.data.nome}</Text>
      </View>
      <Image
        className="h-96 items-center"
        resizeMode="cover"
        source={{uri: props.data.imgPublicacao}}
      />
      <View className="flex-row items-center p-1.5 gap-2">
        <TouchableOpacity>
          <Image
            className="w-6 h-6"
            source={loadItens(props.data.likeada)}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            className="w-6 h-6"
            source={require("../../assets/images/comment.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            className="w-6 h-6"
            source={require("../../assets/images/send.png")}
          />
        </TouchableOpacity>
      </View>
      
      {showLikers(props.data.likers)}
        
      <Text className="pl-2 font-semibold">{props.data.nome}</Text> 
      <Text className="pl-2 mb-2">{props.data.descricao}</Text>
    </View>
  );
}

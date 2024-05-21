
import { View, Image, TouchableOpacity } from "react-native";

export default function Header(){
  return(
    <View className="h-22 flex-row bg-white justify-between p-2 items-center border-b-0.2">
      <TouchableOpacity className="">
        <Image 
          source={require("../../../assets/images/logo.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity className="">
        <Image 
          className="h-6 w-6"
          source={require("../../../assets/images/send.png")}
        />
      </TouchableOpacity>
    </View>
  );
}


// const styles = 
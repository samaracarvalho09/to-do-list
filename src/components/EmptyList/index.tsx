import { styles } from './styles'
import { View, Text, Image } from 'react-native';

export default function EmptyList() {

  return (
    <View style={styles.containerEmplyList}>
      <Image
        style={styles.imageEmply}
        source={require('../../assets/clip-board.png')}
      />
      <Text style={styles.textEmptyBold}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.textEmpty}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}
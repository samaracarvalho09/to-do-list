import { View, Text } from "react-native"

import CheckedIcon from '../../assets/checked-icon.svg';
import NoCheckIcon from '../../assets/no-check-icon.svg';
import Trash from '../../assets/trash-icon.svg'
import { styles } from "./styles";
interface TaskListProps {
  taskName: string;
  checked: boolean;
  onToggle: () => void;
  onRemove: () => void;
}
export default function TaskList({ taskName, checked, onToggle, onRemove }: TaskListProps) {
  return (
    <View style={styles.containerTasList}>
      {checked ? <CheckedIcon
        onPress={onToggle}
        width={24}
        height={24}
      /> :
        <NoCheckIcon
          onPress={onToggle}
          width={24}
          height={24}
        />}
      <Text style={[styles.textList, checked && styles.strikeThrough]}>
        {taskName}
      </Text>
      <Trash
        onPress={onRemove}
      />
    </View>
  )
}
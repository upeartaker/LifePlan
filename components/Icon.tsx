import FontAwesome from '@expo/vector-icons/FontAwesome'
import Entypo from '@expo/vector-icons/Entypo'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

const defaultSize = 28


export function IconAwesome(props: React.ComponentProps<typeof FontAwesome>  ) {
  return <FontAwesome size={props.size ?? defaultSize} style={{ marginBottom: -3 }} {...props} />
}

export function IconEntypo(props: React.ComponentProps<typeof Entypo>) {
  return <Entypo size={props.size ?? defaultSize} style={{ marginBottom: -3 }} {...props} />
}

export function IconMaterial(props: React.ComponentProps<typeof MaterialIcons>) {
  return <MaterialIcons size={props.size ?? defaultSize} style={{ marginBottom: -3 }} {...props} />
}

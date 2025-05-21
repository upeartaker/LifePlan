import { StyleSheet, TextInput as RNTextInput, TextInputProps } from 'react-native'

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 6,
    padding: 8,
    width: '100%',
    height: 40,
  },
})

export const TextInput = (props: TextInputProps) => {
  return <RNTextInput {...props} style={[styles.container, props.style]} />
}
import { StyleSheet } from 'react-native'
import { brandShadow, brandGlow } from '../../customTheme'

const styles = StyleSheet.create({
  container: {
    margin: '7%'
  },
  backImage: { width: '100%', height: '100%' },
  section: {
    marginTop: 20,
    marginBottom: 20
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
  rowButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  buttonStyle: { margin: 5, ...brandShadow, ...brandGlow },
  subStep: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }
})

export default styles

import { COLOURS, brandGlow, brandShadow } from '../../customTheme'

const { light, secondary } = COLOURS

const styles = {
  container: {
    marginTop: 20,
    marginBottom: 20,
    display: 'flex',
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },
  quotes: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  quoteStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    padding: 20,
    borderColor: secondary,
    borderTopWidth: 20,
    borderBottomWidth: 20,
    ...brandGlow
  },
  drawerRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  points: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ...brandShadow
  }
}

export default styles

import { StyleSheet } from 'react-native';

export const white = '#fff';
export const blue = '#007AFF';
export const textColor = '#333';
export const textRed = '#dc3545';

const globalStyles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  viewContainer: {
    margin: 20,
  },
  title: {
    textAlign: 'center',
    margin: 16,
    fontSize: 40,
  },
  btnPrimary: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    height: 50,
    borderRadius: 10,
    backgroundColor: blue,
  },
  btnSecondary: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    height: 50,
    borderColor: blue,
    borderWidth: 1,
    borderRadius: 10,
  },
  btnPrimaryText: {
    color: white,
    fontSize: 14,
    textTransform: 'uppercase',
  },
  btnSecondaryText: {
    color: blue,
    fontSize: 14,
    textTransform: 'uppercase',
  },
  textInput: {
    height: 50,
    borderColor: '#dedede',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 12,
    paddingRight: 12,
    fontSize: 16,
  },
  inputErrorText: {
    marginTop: 4,
    marginBottom: 4,
    color: textRed,
    fontSize: 14,
  },
  tagline: {
    color: textColor,
    fontSize: 16,
  },
  label: {
    marginTop: 32,
    marginBottom: 4,
    fontSize: 16,
  },
  input: {
    height: 50,
    borderColor: '#dedede',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 12,
    paddingRight: 12,
    fontSize: 16,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    height: 50,
    borderRadius: 10,
    backgroundColor: blue,
  },
  buttonText: {
    color: white,
    fontSize: 14,
    textTransform: 'uppercase',
  },
  largeText: {
    marginTop: 8,
    marginBottom: 20,
    fontSize: 20,
    color: textColor,
  },
  smallText: {
    marginTop: 8,
    marginBottom: 20,
    fontSize: 16,
    color: textColor,
  },
  heading: {
    marginTop: 8,
    fontSize: 32,
    color: textColor,
  },
  btnSuccess: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#28A745',
  },
  btnError: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    height: 50,
    borderRadius: 10,
    backgroundColor: blue,
  },
  btnSuccessText: {
    color: white,
    fontSize: 14,
    textTransform: 'uppercase',
  },
  btnErrorText: {
    color: white,
    fontSize: 14,
    textTransform: 'uppercase',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  headerPanel: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    height: 130,
    borderRadius: 10,
    backgroundColor: blue,
  },
  headerTextContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  headerText: {
    fontSize: 32,
  },
  countText: {
    fontSize: 48,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
    padding: 16,
    borderRadius: 10,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 22,
  },
  createdText: {
    fontSize: 14,
  },
  countContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 16,
  },
  countText: {
    fontSize: 16,
  },
  countLabel: {
    marginLeft: 5,
    marginBottom: 2,
    fontSize: 16,
  }
}
);

export default globalStyles;

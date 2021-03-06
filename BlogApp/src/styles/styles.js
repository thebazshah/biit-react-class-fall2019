const styles = {
  mainContainer: {
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
    border: '1px solid black'
  },
  mainHeader: {
    marginLeft: '2%',
    marginRight: '2%',
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'sans-serif',
    fontSize: 'x-large',
    display: 'flex',
    flex: 1,
  },
  blogFeed: {
    marginLeft: '2%',
    marginRight: '2%',
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    border: '1px solid black'
  },
  blogItemContainer: {
    background: '#dcdcdf',
    marginTop: 8,
    marginBottom: 8,
    padding: 5,
    borderRadius: 10,
  },
  btnEdit: {
    color: "#fff",
    backgroundColor: "#0052cc",
    borderColor: "#0052cc",
    padding: 5,
    marginRight: 5,
    marginTop: 5,
    borderRadius: 5,
    shadowColor: 'none',
  },
  btnDelete: {
    color: "#fff",
    backgroundColor: "#ff0000",
    borderColor: "#ff0000",
    padding: 5,
    marginRight: 5,
    marginTop: 5,
    borderRadius: 5,
    shadowColor: 'none',
  },
  blogItemHeader: {
    display: 'flex',
  },
  profilePicture: {
    flex: 1,
    minWidth: "50px",
    minHeight: "50px",
    maxWidth: "55px",
    maxHeight: "55px",
    borderRadius: "50%",
    background: "#0066cc",
    fontSize: "30px",
    color: "#fff",
    textAlign: "center",
    lineHeight: "55px",
    margin: "15px 0",
    fontFamily: "sans-serif",
  },
  profileName: {
    flex: 9,
    alignSelf: 'center',
    marginLeft: '10px',
    fontSize: 22
  },
  blogItemMainText: {
    fontSize: 20,
    fontFamily: 'sans-serif',
  },
  blogItemFooter: {
    display: 'flex',
    flexFlow: "row wrap",
    marginTop: 10,
  },
  blogItemTimestamp: {
    alignSelf: 'center',
    fontSize: 15
  },
  blogItemButtons: {
    marginLeft: 'auto',    
  },
  btnAdd: {
    display: "inline-block",
    fontWeight: "400",
    color: "#212529",
    textAlign: "center",
    verticalAlign: "middle",
    userSelect: "none",
    backgroundColor: "transparent",
    border: "1px solid transparent",
    padding: ".375rem .75rem",
    fontSize: "1rem",
    lineHeight: "1.5",
    borderRadius: ".25rem",
    color: "#fff",
    backgroundColor: "#007bff",
    borderColor: "#007bff",
    marginTop: 10,
    marginLeft: 'auto',
  },
  btnLogout: {
    display: "inline-block",
    fontWeight: "400",
    color: "#212529",
    textAlign: "center",
    verticalAlign: "middle",
    userSelect: "none",
    backgroundColor: "transparent",
    border: "1px solid transparent",
    padding: ".375rem .75rem",
    fontSize: "1rem",
    lineHeight: "1.5",
    borderRadius: ".25rem",
    color: "#fff",
    backgroundColor: "#ff0000",
    borderColor: "#ff0000",
    marginTop: 10,
    marginLeft: 10, 
  },
  headerActionButtons: {
      display: "flex"
  }
};
export default styles;

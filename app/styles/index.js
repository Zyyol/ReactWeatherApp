var styles = {
  header: {
    backgroundColor: "#F89406",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "4px"
  },
  home: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  inputHome: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "500px"
  },
  inputHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "300px",
    marginRight: "5px"
  },
  forcast: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    margin: "15px auto",
    maxWidth: "1200px",
    backgroundColor: "#FFF",
    borderRadius: "80px 80px 80px 80px"
  },
  loading: {
    fontSize: "55px",
    fontWeight: "120"
  },
  dayItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    margin: "35px",
    cursor: "pointer"
  },
  detail: {
    fontSize: "20px",
    maxWidth: "400px",
    margin: "0px auto",
    textAlign: "center",
    backgroundColor: "#FFF",
    borderRadius: "80px 80px 80px 80px",
    marginTop: "50px"
  }
};

module.exports = styles;

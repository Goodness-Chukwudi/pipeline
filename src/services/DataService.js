class DataService {
//make improvements
    state = {}

    static getData(key) {
        let data = JSON.parse(localStorage.getItem(key));
        return data;
    }

    static setData(key, data) {
        const dataString = JSON.stringify(data)
        localStorage.setItem(key, dataString);
    }
  }

export default DataService;


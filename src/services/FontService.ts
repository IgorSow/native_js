class FontService {
    toCapitalise(value: String){
        value = value.toLowerCase();
        let result;

        result = value.charAt(0).toUpperCase();

        result += value.slice(1);

        return result;
    }
}

let service = new FontService();
export default service;

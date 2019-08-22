function UseLocalStorage() {
    function setLocalStorage(key,value){
        window.localStorage.setItem(key,JSON.stringify(value));
    }
    function getLocalStorage(key) {
        return JSON.parse(window.localStorage.getItem(key))
    }
    return [setLocalStorage,getLocalStorage]
}

export default UseLocalStorage;
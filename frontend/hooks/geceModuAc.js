import localStorageKullan from "./localStorageKullan";
function useGeceModu() {
  const [geceModu, setGeceModu] = localStorageKullan("geceModu", false);

  const toggleDarkMode = () => {
    setGeceModu(!geceModu);
  };

  return [geceModu, toggleDarkMode];
}

export default useGeceModu;

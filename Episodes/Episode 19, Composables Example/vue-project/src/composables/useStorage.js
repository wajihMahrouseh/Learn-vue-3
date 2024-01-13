import { ref, watch } from "vue";

export function useStorage(key, val = null) {
    let storedVal = read();

    if (storedVal) {
        val = ref(storedVal);
    } else {
        val = ref(val);
        write();
    }

    // watch(val, write);
    watch(val, write, { deep: true });
    // watch(val, () => {
    //     write()
    // });


    function read() {
        return localStorage.getItem(key);
        // return JSON.parse(localStorage.getItem(key));
    }

    function write() {
        if (val.value === '' || val.value === null) {
            localStorage.removeItem(key)
        } else {
            localStorage.setItem(key, val.value);
            // localStorage.setItem(key, JSON.stringify(val.value));
        }
    }

    return val;
}

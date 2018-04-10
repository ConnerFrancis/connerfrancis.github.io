const mathhelper = {
    // Select a random value
    // from a given array
    sample (array) {
        return array[
            Math.floor(
                Math.random() * (array.length)
            )
        ];
    }
}

export default mathhelper;
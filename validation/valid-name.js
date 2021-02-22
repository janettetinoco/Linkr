const validName = str => {
    // debugger
    return typeof str === 'string' && str.split(" ").length === 2
}

module.exports = validName;
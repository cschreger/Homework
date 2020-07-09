function titleize(array, callback) {
    let titleized = array.map(function(name) {
        console.log(`Mx. ${name} Jingleheimer Schmidt`);
    })
    callback(titleized)
}

titleize(["Mary", "Brian", "Leo"], callback);

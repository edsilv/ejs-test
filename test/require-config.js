require.config({
    baseUrl: "./",
    paths: {
        "Test2": "Test2"
    },
    shim: {

    }
});

require([
    "Test2"
], function (Test) {

});
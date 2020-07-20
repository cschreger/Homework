export const fetchSearchGiphys = (searchTerm) => {
    return $.ajax({
        method: "GET",
        url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=0K8R7UEOH3fhDbch7HUh0m1hUcm6muZy&limit=2`,
    });
};


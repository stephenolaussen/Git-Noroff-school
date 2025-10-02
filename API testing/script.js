$.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET',
    success: function(data) {
        console.log(data);
    },
    error: function(error) {
        console.error('Error fetching data:', error);
    }
});
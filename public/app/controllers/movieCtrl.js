$(document).foundation();
angular.module("moviesApp", []);
angular.module("moviesApp")
  .controller('moviesController', moviesControllerFunc)
  .$inject = ['$http']
function moviesControllerFunc ($http){
  var movieCtrl = this
  movieCtrl.posters = []
  movieCtrl.titles = []
  movieCtrl.url = []
  movieCtrl.movies = []
  $http({
    method: 'GET',
    url: 'http://api-public.guidebox.com/v1.43/all/rKsjr4MNd2bNG2EcYfsk2AgRo23BwZYT/movies/all/0/6/all/all'
  }).then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available
      console.log(response);
      for (var i = 0; i < response.data.results.length; i++) {
        var object = {}
        object.poster = response.data.results[i].poster_120x171;
        object.title = response.data.results[i].title;
        object.url = response.data.results[i].metacritic;
        movieCtrl.movies.push(object);
        console.log(movieCtrl.movies)
        console.log(response.data.results[i].rating);
        console.log(response.data.results[i].poster_120x171);
      }

    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
}

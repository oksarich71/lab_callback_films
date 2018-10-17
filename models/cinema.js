const Cinema = function (films) {
  this.films = films;
};
Cinema.prototype.filmTitles = function() {
  return this.films.map(n => n.title);
};

Cinema.prototype.findFilmByTitle = function(i) {
  return this.films.find(n => n.title === i);
}
Cinema.prototype.filterByGenre = function(genre) {
  return this.films.filter(film => (film.genre === genre))
};
Cinema.prototype.findFilmByYear = function(i) {
  return this.films.filter(n => (n.year === i))
}


module.exports = Cinema;

const express = require('express');
const router = express.Router();
const faker = require('faker');

/* GET cities page. */

router.get('/titles', (req, res) => {
    var serials = [{"title":"Silicon valley"},{"title":"Chernobyl"},{"title":"Akame ga kill"},{"title":"Monster"}];
    res.render('titles', {"serials":serials});
});

router.get('/quanEpisodes', (req, res) => {
  var toRes = {"quanEpisodes":faker.random.number({min:1, max:32})}; 
    res.render('quanEpisodes', toRes);
});

router.get('/producer', (req, res) => {
  var toRes = {"producer":faker.name.findName()}; 
    res.render('producer', toRes);
});

router.get('/actors', (req, res) => {
  var toRes = {"actors":[{"name":faker.name.findName()},{"name":faker.name.findName()},{"name":faker.name.findName()}]}; 
    res.render('actors', toRes);
});

module.exports = router;

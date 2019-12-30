const express = require('express');
const router = express.Router();
const faker = require('faker');

 router.get('/Oscar', (req, res) => {
      res.render('Oscar', 
        { "Oscar": [
        { "actor": faker.name.findName(), "year": faker.random.number({min:2000, max:2019})},
        { "actor": faker.name.findName(), "year": faker.random.number({min:2000, max:2019})},
        { "actor": faker.name.findName(), "year": faker.random.number({min:2000, max:2019})}
          ]
        }
      );
});

 router.get('/rnum', (req, res) => {
      res.render('rnum', 
        { "rnum": [
        { "number": faker.random.number({min:10, max:60})}
          ]
        }
      );
});


module.exports = router;

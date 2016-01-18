var express = require('express');
var router = express.Router();

router.get('/future', function(req, res){
  res.render('future',
    {
      title: "Future",
      name: "Now & Beyond",
      content: "this page is about my future",
      p1: "On the inside, this is how I feel about learning to program!",
      p2: "The dream is to merge my musical aspirations with these new skills."
    }
  );
});
module.exports = router;
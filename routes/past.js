var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('past',
    {
      title: "Past",
      name: "Past & Present",
      content: "this page is about my past and present",

      p1:"My name is Mickey and I'm from the central coast of California.",

      p2: "I have an infinite passion for producing and recording music.",

      p3: "During high school I went on Outward Bound " +
      "courses for backpacking and sea kayaking.",

      p4: "I also attended the National Outdoor Leadership School course in Chile." ,
      p5: "We backpacked, mountaineered, sea kayaked, and rock climbed.",

      p6: "Last year I began an internship with a local " +
      "recording studio. Now I work there part time."
    }
  );
});
module.exports = router;
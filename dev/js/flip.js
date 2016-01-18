$(document).ready(function(){

  var $rate     = 300,
      $bgDiv    = $('.all-wrap'),
      $nextBtn  = $('.next-btn'),
      $backBtn  = $('.back-btn'),
      $nextPage = $('.pg-link'),
      images    = ['bg-img-1',
                   'bg-img-2',
                   'bg-img-3',
                   'bg-img-4',
                   'bg-img-5'],
      boxes     = [$('.box-0'),
                   $('.box-1'),
                   $('.box-2'),
                   $('.box-3'),
                   $('.box-4')],
      currentIdx  = 1,
      previousIdx = 0,
      imgCurrent,
      imgPrevious,
      boxCurrent,
      boxPrevious;

  /* STORE array indices */
  function indexCount(current, previous){  // passing/updating interchangeably
    imgCurrent  = images[current];         // to keep current position while
    imgPrevious = images[previous];        // back-tracking images/boxes.
    boxCurrent  = boxes[current];
    boxPrevious = boxes[previous];
    console.log('Current: ' + imgCurrent,'\n'+
                'Previous: '+ imgPrevious);
  }

  /* SWAP classes */
  function swapClass(){                    // now swapClass is re-usable
    $bgDiv.removeClass(imgPrevious);
    $bgDiv.addClass(imgCurrent);
    boxPrevious.hide($rate);
    boxCurrent.show($rate);
  }

  /* NEXT SLIDE */
  $nextBtn.click(function(){

    indexCount(currentIdx, previousIdx);   //update before increment
    currentIdx++;
    previousIdx++;
    swapClass();

    if(previousIdx >= 1){
      $backBtn.show();
    }
    if(currentIdx >= images.length){
      $nextBtn.hide();
      $nextPage.show();
    }
  });


  /* PREVIOUS SLIDE */
  $backBtn.click(function(){

    currentIdx--;
    previousIdx--;
    indexCount(previousIdx, currentIdx);   // update after decrement
    swapClass();

    if(currentIdx <= 1){
      $backBtn.hide();
    }
    if(currentIdx < images.length){
      $nextPage.hide();
      $nextBtn.show();
    }
  });
});
var speedControls = "<span id='ctrlBoxYTSpeed'><span class='ytp-time-display'><span id='spnSpeed' >1.5</span>x</span> <button id='btnSlowDown' class=' ytp-button' title='Slow down'><svg xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 24 24' fill='#fff'><path d='M19 13H5v-2h14v2z'></path></svg> </button><button id='btnSpeedUp' class=' ytp-button' title='Speed up'><svg xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 24 24' fill='#fff'><path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'></path></svg> </button></span>";

if($('#ctrlBoxYTSpeed') && $('#ctrlBoxYTSpeed').length){
    $("#ctrlBoxYTSpeed").remove();
}else{
    $(".ytp-right-controls").prepend(speedControls);

    var OFFSET = 0.1;

    var vid = $.find('video')[0];
    var spnText = $('#spnSpeed');
    var btnSlowDown = $('#btnSlowDown');
    var btnSpeedUp = $('#btnSpeedUp');

    spnText.text(vid.playbackRate);

    btnSlowDown.click(function () {
        vid.playbackRate = (vid.playbackRate - OFFSET).toFixed(2);
    });

    btnSpeedUp.click(function () {
        vid.playbackRate = (vid.playbackRate + OFFSET).toFixed(2);
    });

    vid.onratechange = function () { updateRateText() };

    function updateRateText() {
        spnText.text(vid.playbackRate);
    };
}
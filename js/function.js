
var star = $('.star')
var circle = $('.circle')
var square = $('.square')

var screenConfig={
    opening:{
        duration:5
    }
}

var ans =[];

opening();

function opening(){
    TweenLite.to(star,screenConfig.opening.duration,{rotation:360,ease:Power2.easeOut})
    TweenLite.to(circle,screenConfig.opening.duration,{rotation:360,ease:Power2.easeOut})
    TweenLite.to(square,screenConfig.opening.duration,{rotation:-360,ease:Power2.easeOut})
    
    
    TweenLite.to(circle,screenConfig.opening.duration/2,{css:{scale:1.1}})
    TweenLite.to(circle,screenConfig.opening.duration/2,{css:{scale:1},delay: screenConfig.opening.duration/2})
    
    TweenLite.to(star ,1.6,{css:{scale:7},ease:Power2.easeOut,delay:screenConfig.opening.duration-0.4})
    TweenLite.to(circle ,1.6,{css:{scale:7},ease:Power2.easeOut,delay:screenConfig.opening.duration-0.7})
    TweenLite.to(square ,0.6,{css:{scale:7},ease:Power2.easeOut,delay:screenConfig.opening.duration-1,onComplete:function(){
        $('.opening').remove()
        screenQ1Start()
    }})
}
function screenQ1Start(){

    $('.screenQ1').css('background','#1469FF')
    $('.screenQ1 .text-block').animate({opacity:0},500,function(){
        $('.screenQ1 .q-section').animate({opacity:1},500)
    })
    TweenLite.to($('.screenQ1 .animate-section'),0,{css:{left:'100%'}})


    $('.screenQ1 .q-section__options').click(function(e){
        var value = $(e.target).attr('data-value')
        if(!value) return
        ans.push(value)

        square.remove()
        triangle.remove()
        circle.remove()

        TweenLite.to($('.screenQ1 .animate-section'),0.5,{css:{left:'0%'},onComplete:function(){
            $('.screenQ1').remove()
            screenCalculating()
        }})

    })

    var square = $('.screenQ1 .animate-section__square')
    var triangle = $('.screenQ1 .animate-section__triangle')
    var circle = $('.screenQ1 .animate-section__circle')

    TweenLite.to($('.screenQ1 .animate-section'),1,{css:{left:'60%'},delay:1})
    TweenLite.to(square ,2,{css:{top:'100px'},ease:Power3.easeOut,delay:2})
    TweenLite.to(triangle ,2,{css:{top:'300px'},ease:Power2.easeOut,delay:2})
    TweenLite.to(circle ,2,{css:{top:'500px'},ease:Power2.easeOut,delay:2})

    TweenLite.to(square,4,{rotation:360,ease:Power2.easeOut,delay:4})
    TweenLite.to(triangle,4,{rotation:-360,ease:Power2.easeOut,delay:4})
    TweenLite.to(circle,4,{css:{x:'+=20',y: '+=30'},ease:Power2.easeOut,delay:4})

}

function getRandom(lower,upper){
    return Math.random()*(upper-lower)+lower
}

function screenCalculating(){
    
    $('.calculating').removeClass('hide')
    $('body').css('overflow','auto')
    var controller = new ScrollMagic.Controller()
    var total = 50;
    var colors = ['white','black','blue']
    for(var i=0;i<total;i++){
        var size = Math.floor(Math.random()*100+100)
        var color = colors[i%3]
        var objCircle = '<div class="small-circle small-circle' + i + '" style="background-color:' + color + ';width:' + size + 'px;height:' + size + 'px"></div>'
        $('.calculating').append(objCircle)
    }

    for(var i=0;i<total;i++){
        var topP = getRandom(300,500)
        var left = getRandom(500,1500)

        new ScrollMagic.Scene({triggerElement:'.trigger'+((i%4)+1),duration:getRandom(1000,5000)})
            .setTween(TweenLite.to($(('.small-circle'+ i)),10,{css:{top:`-${topP}px`,left:`${left}px`}}))
            .addTo(controller)
    }

    $(window).scroll(function(){
        if($(window).scrollTop() >= ($(document).height() - $(window).height())){
            $('.calculating').remove()
            $('.screenResult').removeClass('hide')
            TweenLite.to($('.screenResult'),1,{css:{width:'100vw'},ease:Power2.easeOut,onComplete:function(){
                screenResultStart()
            }})
        }
    })

}

function screenResultStart(){
    const phaseDuration = 2

    TweenLite.to($('.triangle1'),phaseDuration,{css:{top:'50%'},ease:Power2.easeOut});
    TweenLite.to($('.triangle2'),phaseDuration,{css:{top:'0'},ease:Power3.easeOut});
    TweenLite.to($('.triangle3'),phaseDuration,{css:{top:'60%'},ease:Power1.easeOut});
    TweenLite.to($('.triangle4'),phaseDuration,{css:{top:'20%'},ease:Power2.easeOut});
    TweenLite.to($('.triangle5'),phaseDuration,{css:{top:'10%'},ease:Power1.easeOut});
    TweenLite.to($('.triangle6'),phaseDuration,{css:{top:'60%'},ease:Power3.easeOut});
    TweenLite.to($('.triangle7'),phaseDuration,{css:{top:'45%'},ease:Power2.easeOut});

    TweenLite.to($('.screenResult__text'),phaseDuration,{css:{opacity:'1'}});
    TweenLite.to($('.screenResult__ans'),phaseDuration,{css:{opacity:'1'}});

    TweenLite.to($('.triangle-blue'),phaseDuration,{css:{bottom:'0'},ease:Power2.easeOut});
    TweenLite.to($('.triangle-white'),phaseDuration,{css:{bottom:'0'},ease:Power1.easeOut});
    TweenLite.to($('.triangle-black'),phaseDuration,{css:{bottom:'0'},ease:Power3.easeOut});

    const phase2Delay = phaseDuration +0.5

    TweenLite.to($('.triangle3'),2,{css:{top:'312px',left:'814px'},ease:Power3.easeOut,delay:phase2Delay});
    TweenLite.to($('.triangle5'),2,{css:{top:'230px',left:'814px'},ease:Power3.easeOut,delay:phase2Delay});
    TweenLite.to($('.triangle7'),2,{css:{top:'395px',left:'814px'},ease:Power3.easeOut,delay:phase2Delay});

    TweenLite.to($('.triangle1'),2,{css:{top:'-200px'},ease:Power3.easeOut,delay:phase2Delay});
    TweenLite.to($('.triangle2'),2,{css:{top:'-200px'},ease:Power3.easeOut,delay:phase2Delay});
    TweenLite.to($('.triangle4'),2,{css:{top:'-200px'},ease:Power3.easeOut,delay:phase2Delay});
    TweenLite.to($('.triangle6'),2,{css:{top:'-200px'},ease:Power3.easeOut,delay:phase2Delay});

    TweenLite.to($('.triangle-blue'),2,{css:{bottom:'200px',left:'300px'},ease:Power3.easeOut,delay:phase2Delay});
    TweenLite.to($('.triangle-white'),2,{css:{bottom:'360px',left:'326px',rotation:'60deg'},ease:Power3.easeOut,delay:phase2Delay});
    TweenLite.to($('.triangle-black'),2,{css:{bottom:'338px',left:'426px',rotation:'30deg'},ease:Power3.easeOut,delay:phase2Delay});

    TweenLite.to($('.screenResult__text'),2,{css:{top:'110px',left:'894px'},ease:Power3.easeOut,delay:phase2Delay});
    TweenLite.to($('.screenResult__ans'),2,{css:{top:'169px',left:'945px'},ease:Power3.easeOut,delay:phase2Delay});
    TweenLite.to($('.screenResult__result'),2,{css:{opacity:'1'},ease:Power3.easeOut,delay:phase2Delay});

    TweenLite.to($('.triangle-blue'),4,{css:{rotation:'+=120deg'},delay:phase2Delay+1});
    TweenLite.to($('.triangle-white'),4,{css:{rotation:'-=180deg'},delay:phase2Delay+1});
    TweenLite.to($('.triangle-black'),4,{css:{x:'+=30',Y:'-=20'},delay:phase2Delay+1});
}

function screenQ2Start(){
    /*
    $('.screenQ1').css('background','#1469FF')
    $('.screenQ1 .text-block').animate({opacity:0},500,function(){
        $('.screenQ1 .q-section').animate({opacity:1},500)
    })

    $('.screenQ1 .q-section__options').click(function(e){
        var value = $(e.target).attr('data-value')
        if(!value) return
        ans.push(value)

        square.remove()
        triangle.remove()
        circle.remove()

        TweenLite.to($('.screenQ1 .animate-section'),0.5,{css:{left:'0%'},onComplete:function(){
            $('.screenQ1').remove()
            screenQ2Start()
        }})

    })

    var square = $('.screenQ1 .animate-section__square')
    var triangle = $('.screenQ1 .animate-section__triangle')
    var circle = $('.screenQ1 .animate-section__circle')

    TweenLite.to($('.screenQ1 .animate-section'),1,{css:{left:'60%'},delay:1})
    TweenLite.to(square ,2,{css:{top:'100px'},ease:Power3.easeOut,delay:2})
    TweenLite.to(triangle ,2,{css:{top:'300px'},ease:Power2.easeOut,delay:2})
    TweenLite.to(circle ,2,{css:{top:'500px'},ease:Power2.easeOut,delay:2})

    TweenLite.to(square,4,{rotation:360,ease:Power2.easeOut,delay:4})
    TweenLite.to(triangle,4,{rotation:-360,ease:Power2.easeOut,delay:4})
    TweenLite.to(circle,4,{css:{x:'+=20',y: '+=30'},ease:Power2.easeOut,delay:4})
    */
}
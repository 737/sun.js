
(function (sun) {
    var sun = sun || {};

    sun.tag.dialog_isBinded = false;
    /*
        opt => {
             cssPath : '/include/css/',
             title: '成功领取',
             text: '线下兑换请到指定地点，出示此中奖码给我们的工作人确认兑换！兑奖请联系我们，电话4006305400',
             image: 'http://stc.weimob.com/img/smashegg/7.png'
        }
    */
    sun.dialog = function (opt) {
        var ELM_wrap = null,
            _defaultOPT = {
                cssPath : '/include/css/',
                title: '',
                text: '',
                image: ''
            };

        fnHtml = function() {
            opt = sun.util.extend(_defaultOPT, opt);

            var html = '<header>'
                      +         '<dl>'
                      +             '<dd>'
                      +                 '<label></label>'
                      +             '</dd>'
                      +             '<dd>'
                      +             '</dd>'
                      +         '</dl>'
                      +     '</header>'
                      +     '<article class="dialogContent">'
                      +         '<div class="header">'
                      +             '<h6>' + opt.title + '</h6>'
                      +         '</div>'
                      +         '<table>'
                      +             '<tbody>'
                      +                 '<tr>'
                      +                     '<td><img src="' + opt.image + '"></td>'
                      +                     '<td style="width:170px;">'
                      +                         '<label>' + opt.text + '</label>'
                      +                     '</td>'
                      +                 '</tr>'
                      +             '</tbody>'
                      +         '</table>'
                      +     '</article>'
                      +     '<footer>'
                      +         '<div class="box">'
                      +             '<div>'
                      +                 '<a class="dialogBtn">知道了</a>'
                      +             '</div>'
                      +          '</div>'
                      +      '</footer>';

            ELM_wrap = document.createElement('div');
            ELM_wrap.id = 'sun_dialog_wrap';
            ELM_wrap.className = 'success';
            ELM_wrap.style.zIndex = 1000;

            ELM_wrap.innerHTML = html;

            return ELM_wrap;
        };
        
        fnClose = function() {
            ELM_wrap.remove();
        };

        _main = function() {
            sun.load.css(opt.cssPath, _open);
        };

        _open = function() {
            var html = fnHtml();

            document.body.appendChild(html);

            if (!sun.tag.dialog_isBinded) {
                $('body').on('click','.dialogBtn',  function(evt) {
                    fnClose();
                });
                sun.tag.dialog_isBinded = true;
            }
        }

        _main();
    };
})(sun);
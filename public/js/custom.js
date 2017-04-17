//화면에 처음 들어온 경우




// a 태그를 클릭할 경우


$(function(){ 
    
    window.onpopstate = function(event) { 
            //alert("event" + location.pathname );
            refresh(location.pathname);
    }
   
    $(this).on('click', 'a, button',function (e) {
            // custom handling here
            e.preventDefault();
            var href = $(this).attr('href');
            history.pushState("", "", href);
            
            refresh(href);
    });

});

    function goto(url)
    {
        var url = fetch(url);
        history.pushState("", "", url);
        refresh(url);
    }
 
    function youtube_to_layout()
    {
        $( "div.youtube-float" ).html("");
        $( "div.youtube" ).appendTo("div.youtube-float");

    }

    function getUrlVars(url)
    {
        var url = fetch(url);
        var vars = [], hash;
        var hashes = url.slice(url.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++)
        {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }

    // 자체 새로고침 
    function refresh(url)
    {
        var url = fetch(url);
        if (url != null)
            if (url.indexOf('#') == -1)
            {
                //alert(url);
                $('#main_content').load("/view"+url);
            }
    }

    function fetch(str)
    {
        return str.replace(/ /gi, '+');
    }

    String.prototype.replaceAll = function(org, dest) {
        return this.split(org).join(dest);
    }

    function unfetch(str)
    {
        return str.replaceAll('+', ' ');
    }







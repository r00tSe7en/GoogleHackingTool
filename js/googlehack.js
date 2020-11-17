        function do_google_search(type) {
            site = document.getElementById('sercHead').value;

            url1 = 'https://www.google.com/search?q=';
            url2 = url1 + 'site:' + site;
            switch (type) {
            case 1:
                url1 += '+intitle:index.of';
                break;
            case 2:
                url1 += '+ext:xml+|+ext:conf+|+ext:cnf+|+ext:reg+|+ext:inf+|+ext:rdp+|+ext:cfg+|+ext:txt+|+ext:ora+|+ext:ini';
                break;
            case 3:
                url1 += '+ext:sql+|+ext:dbf+|+ext:mdb';
                break;
            case 4:
                url1 += '+ext:log';
                break;
            case 5:
                url1 += '+ext:bkf+|+ext:bkp+|+ext:bak+|+ext:old+|+ext:backup';
                break;
            case 6:
                url1 += '+inurl:login';
                break;
            case 7:
                url1 += '+intext:"sql+syntax+near"+|+intext:"syntax+error+has+occurred"+|+intext:"incorrect+syntax+near"+|+intext:"unexpected+end+of+SQL+command"+|+intext:"Warning:+mysql_connect()"+|+intext:"Warning:+mysql_query()"+|+intext:"Warning:+pg_connect()"';
                break;
            case 8:
                url1 += '+ext:doc+|+ext:docx+|+ext:odt+|+ext:pdf+|+ext:rtf+|+ext:sxw+|+ext:psw+|+ext:ppt+|+ext:pptx+|+ext:pps+|+ext:csv';
                break;
            case 9:
                url1 += '+ext:php+intitle:phpinfo+"published+by+the+PHP+Group"';
                break;
            case 10:
                url1 += 'site:pastebin.com+|+site:paste2.org+|+site:pastehtml.com+|+site:slexy.org+|+site:snipplr.com+|+site:snipt.net+|+site:textsnip.com+|+site:bitpaste.app+|+site:justpaste.it+|+site:heypasteit.com+|+site:hastebin.com+|+site:dpaste.org+|+site:dpaste.com+|+site:codepad.org+|+site:jsitor.com+|+site:codepen.io+|+site:jsfiddle.net+|+site:dotnetfiddle.net+|+site:phpfiddle.org+|+site:ide.geeksforgeeks.org+|+site:repl.it+|+site:ideone.com+|+site:paste.debian.net+|+site:paste.org+|+site:paste.org.ru+|+site:codebeautify.org+|+site:codeshare.io+|+site:trello.com'+'"site"';
                break;
            case 11:
                url1 += 'site:github.com+|+site:gitlab.com'+'"site"';
                break;
            }
            window.open(url, '', 'scrollbars=yes,menubar=no,height=600,width=800,resizable=yes,toolbar=yes,menubar=no,location=no,status=no');

        }

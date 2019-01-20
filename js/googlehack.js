        function do_google_search(type) {
            site = document.getElementById('sercHead').value;

            url = 'https://www.google.com/search?q=';
            url += 'site:' + site;
            switch (type) {
            case 1:
                url += '+intitle:index.of';
                break;
            case 2:
                url += '+ext:xml+|+ext:conf+|+ext:cnf+|+ext:reg+|+ext:inf+|+ext:rdp+|+ext:cfg+|+ext:txt+|+ext:ora+|+ext:ini';
                break;
            case 3:
                url += '+ext:sql+|+ext:dbf+|+ext:mdb';
                break;
            case 4:
                url += '+ext:log';
                break;
            case 5:
                url += '+ext:bkf+|+ext:bkp+|+ext:bak+|+ext:old+|+ext:backup';
                break;
            case 6:
                url += '+inurl:login';
                break;
            case 7:
                url += '+intext:"sql+syntax+near"+|+intext:"syntax+error+has+occurred"+|+intext:"incorrect+syntax+near"+|+intext:"unexpected+end+of+SQL+command"+|+intext:"Warning:+mysql_connect()"+|+intext:"Warning:+mysql_query()"+|+intext:"Warning:+pg_connect()"';
                break;
            case 8:
                url += '+ext:doc+|+ext:docx+|+ext:odt+|+ext:pdf+|+ext:rtf+|+ext:sxw+|+ext:psw+|+ext:ppt+|+ext:pptx+|+ext:pps+|+ext:csv';
                break;
            case 9:
                url += '+ext:php+intitle:phpinfo+"published+by+the+PHP+Group"';
                break;
            }
            window.open(url, '', 'scrollbars=yes,menubar=no,height=600,width=800,resizable=yes,toolbar=yes,menubar=no,location=no,status=no');

        }
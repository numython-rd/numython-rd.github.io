function fancydates(t,e){if(0!=t)for(var a=document.querySelectorAll(".dt-published, .dt-updated"),o=a.length,r=0;r<o;r++){var d,l=moment(a[r].attributes.datetime.value);d=1==t?l.local().format(e):l.fromNow(),a[r].innerHTML=d}}


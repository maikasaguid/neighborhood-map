"use strict";function initialize(){function a(a,c){if(c==google.maps.places.PlacesServiceStatus.OK){for(var g=0;g<a.length;g++){var j=a[g];i[g]=new google.maps.Marker({position:j.geometry.location,map:d,icon:"http://labs.google.com/ridefinder/images/mm_20_yellow.png"}),google.maps.event.addListener(i[g],"click",function(){populateInfo(j,e,f,d),e.open(d,this)})}f.nearbySearch(h,b)}}function b(a,b){if(b==google.maps.places.PlacesServiceStatus.OK)for(var c=0;c<a.length;c++)for(var e,f,g=a[c],h=0;h<i.length;h++)i[h].position.equals(g.geometry.location)&&(e=h,i[e].setMap(null),f=g.name.indexOf("Hut")>-1?"/images/logo-pizza-hut.png":g.name.indexOf("Caesar")>-1?"/images/logo-little-caesars.png":g.name.indexOf("California")>-1?"/images/logo-cpk.png":g.name.indexOf("Papa")>-1?"/images/logo-papa-johns.png":g.name.indexOf("Round")>-1?"/images/logo-round-table.png":g.name.indexOf("Domino")>-1?"/images/logo-dominos.png":g.name.indexOf("Boston")>-1?"/images/logo-boston-pizza.png":icons[g.types[0]].icon,i[e]=new google.maps.Marker({position:g.geometry.location,map:d,icon:f}))}var c={center:{lat:lat,lng:lng},mapTypeControl:!1,panControl:!1,streetViewControl:!1,zoom:minZoomLevel,zoomControl:!0,zoomControlOptions:{position:google.maps.ControlPosition.RIGHT_TOP}},d=new google.maps.Map(document.getElementById("map"),c),e=new google.maps.InfoWindow,f=new google.maps.places.PlacesService(d),g=new google.maps.LatLng(lat,lng),h=(new google.maps.LatLng(hnlLat,hnlLng),{location:g,radius:"50000",keyword:"pizza",types:["bar","cafe","food","meal_delivery","meal_takeaway","restaurant"]}),i=[];f.radarSearch(h,a),google.maps.event.addListener(d,"zoom_changed",function(){d.getZoom()<minZoomLevel&&d.setZoom(minZoomLevel)})}function populateInfo(a,b,c){c.getDetails(a,function(a,c){c==google.maps.places.PlacesServiceStatus.OK&&b.setContent(a.name)})}function MapViewModel(){}function ListViewModel(){}var minZoomLevel=11,foursquare="https://api.foursquare.com/v2/venues/search?client_id=T2RYZINQTJUYZIICO2MQXG0BMBAUWNI3F5KBGCIJ5QO3IRBT&client_secret=VMUZGLY0ENBSBSM4HXZOTU5CR2430ABKXT5BTVQOQOJ4N4PS&v=20130815&ll=21.48,-158.025&query=pizza",lat=21.48,lng=-158.025,hnlLat=21.3,hnlLng=-157.858,iconBase="http://maps.google.com/mapfiles/kml/pal2/",icons={bar:{icon:iconBase+"icon27.png"},cafe:{icon:iconBase+"icon62.png"},food:{icon:iconBase+"icon47.png"},meal_delivery:{icon:iconBase+"icon47.png"},meal_takeaway:{icon:iconBase+"icon47.png"},restaurant:{icon:iconBase+"icon63.png"}};google.maps.event.addDomListener(window,"load",initialize);
webpackJsonp([4,6],{787:function(t,e,r){"use strict";function n(){var t=arguments.length<=0||void 0===arguments[0]?c:arguments[0],e=arguments[1];switch(e.type){case s.a:return t.set("states",e.states);case s.b:return t.set("currentState",e.state).set("results",!1).set("loading",!0).set("apiErrMsg","");case s.c:return t.set("formData",e.stateFormData).set("loading",!1);case s.d:return t.set("apiErrMsg","");case s.e:return t.set("results",e.results).set("apiErrMsg","");case s.f:return t.set("apiErrMsg",e.msg);default:return t}}var a=r(78),u=a&&a.__esModule?function(){return a["default"]}:function(){return a};r.d(u,"a",u);var s=r(792),c=r.i(a.fromJS)({states:!1,currentState:"",loading:!1,formData:!1,results:!1,apiErrMsg:""});e["default"]=n},792:function(t,e,r){"use strict";var n=r(793);r.d(e,"h",function(){return a}),r.d(e,"g",function(){return u}),r.d(e,"a",function(){return s}),r.d(e,"b",function(){return c}),r.d(e,"c",function(){return o}),r.d(e,"d",function(){return i}),r.d(e,"e",function(){return g}),r.d(e,"f",function(){return p}),r.d(e,"k",function(){return f}),r.d(e,"l",function(){return d}),r.d(e,"i",function(){return l}),r.d(e,"j",function(){return T});var a="app/CheckRegPage/FETCH_STATES",u="app/CheckRegPage/FETCH_INITIAL_STATE",s="app/CheckRegPage/LOAD_STATES",c="app/CheckRegPage/CHANGE_STATE",o="app/CheckRegPage/LOAD_STATE_FORM",i="app/CheckRegPage/SUBMIT_FORM",g="app/CheckRegPage/LOAD_RESULTS",p="app/CheckRegpage/SET_API_ERR_MSG",f=n.a+"/check-registration-form/",d=function(t){return""+f+t+"/"},l="https://www.googleapis.com/geolocation/v1/geolocate?key="+n.b,T=function(t,e){return"https://maps.googleapis.com/maps/api/geocode/json?latlng="+t+","+e+"&key="+n.b}},793:function(t,e,r){"use strict";r.d(e,"a",function(){return n}),r.d(e,"b",function(){return a});var n="https://api-staging.votemate.us",a="AIzaSyAMfwLqZ6TriYOFafbR6ty6cKFIjRyIB3w"}});
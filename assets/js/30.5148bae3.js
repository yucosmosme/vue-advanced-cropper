(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{131:function(t,s,e){},314:function(t,s,e){"use strict";var i=e(131);e.n(i).a},374:function(t,s,e){"use strict";e.r(s);var i={components:{Cropper:e(11).c},data:function(){return{img:"https://images.unsplash.com/photo-1586083718719-019f9dc6ca94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",coordinates:{width:0,height:0,left:0,top:0},image:null}},methods:{onChange:function(t){var s=t.coordinates,e=t.canvas;this.coordinates=s,this.image=e.toDataURL()}}},a=(e(314),e(1)),n=Object(a.a)(i,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"getting-result-example"},[e("Cropper",{attrs:{src:t.img,"stencil-props":{aspectRatio:1}},on:{change:t.onChange}}),t._v(" "),e("div",{staticClass:"results-wrapper"},[this.image?e("div",{staticClass:"results"},[t._m(0),t._v(" "),e("p",[t._v("Width: "+t._s(t.coordinates.width))]),t._v(" "),e("p",[t._v("Height: "+t._s(t.coordinates.height))]),t._v(" "),e("p",[t._v("Left: "+t._s(t.coordinates.left))]),t._v(" "),e("p",[t._v("Top: "+t._s(t.coordinates.top))])]):t._e(),t._v(" "),this.image?e("div",{staticClass:"preview"},[e("img",{attrs:{src:this.image,alt:""}})]):t._e()])],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("b",[this._v("Results:")])])}],!1,null,null,null);s.default=n.exports}}]);
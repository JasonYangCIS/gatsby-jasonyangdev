(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{cvo4:function(t,e,n){"use strict";n("Z2Ku");var r=n("q1tI"),a=n.n(r),o=n("vOnD"),i=n("81sF");var s=o.a.div.withConfig({displayName:"text__StyledTextContainer",componentId:"rqljji-0"})(["h1,h2,h3,h4,h5,h6{color:",";font-weight:400;display:block;}p{color:",";font-size:0.9rem;}"],i.a.mdGrey,i.a.mdGrey),p=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){var t=this.props,e=t.type,n=t.className,r=t.children,o=e?e.toLowerCase():"",i=["h1","h2","h3","h4","h5","h6","p"].includes(o)?o:"p";return a.a.createElement(s,{className:n},a.a.createElement(i,{dangerouslySetInnerHTML:{__html:r}}))},r}(a.a.Component);e.a=p,p.defaultProps={data:""}},eg8t:function(t,e,n){"use strict";n.r(e),n.d(e,"query",(function(){return x}));var r=n("q1tI"),a=n.n(r),o=n("vOnD"),i=n("81sF");var s=o.a.main.withConfig({displayName:"layoutMath__StyledMain",componentId:"sc-10zaews-0"})(["background:",";width:100%;display:block;padding:20px;max-width:1100px;margin:40px auto;"],i.a.white),p=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(s,null,this.props.children))},r}(a.a.Component),c=n("cvo4");var u=o.a.fieldset.withConfig({displayName:"equationCard__StyledFieldset",componentId:"f0yvgz-0"})(["display:inline-block;color:",";margin:20px 10px 0;border:0;width:80px;position:relative;border:2px solid ",";padding:5px;box-shadow:0 3px 6px rgba(0,0,0,.05);&.equation{&--incorrect input{background:",";}&--correct input{background:",";}}label,span.equation__value{width:100%;display:inline-block;text-align:right;}input{border:0;border-top:1px solid ",";width:100%;height:30px;display:inline-block;text-align:right;}.equation__operator{position:absolute;bottom:32px;left:5px;z-index:1;font-size:18px;font-family:arial,sans-serif;}"],i.a.mdGrey,i.a.offWhite,i.a.danger,i.a.success,i.a.mdGrey),l=function(t){var e,n;function r(e){var n;return(n=t.call(this,e)||this).state={answered:!1,answer:null,correct:null,valueOne:n.getRandomInt(),valueTwo:n.getRandomInt()},n}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var o=r.prototype;return o.componentDidMount=function(){this.setAnswer()},o.getRandomInt=function(){var t=Math.ceil(this.props.rangeMin),e=Math.floor(this.props.rangeMax);return Math.floor(Math.random()*(e-t)+t)},o.getOperator=function(){switch(this.props.operation){case"multiplication":return"x";case"subtraction":return"-";case"addition":return"+";case"division":return"÷";default:return"*"}},o.getAnswer=function(t,e){switch(this.props.operation){case"multiplication":return t*e;case"subtraction":return t-e;case"addition":return t+e;case"division":return t/e;default:return t*e}},o.setAnswer=function(){this.setState({answer:parseInt(this.getAnswer(this.state.valueOne,this.state.valueTwo))})},o.checkAnswer=function(t){var e=!0;t!==this.state.answer&&(e=!1),this.setState({correct:e})},o.onChange=function(){},o.onFocus=function(){this.props.timer===this.props.timerDuration&&this.props.handleClickTimer()},o.setAnswered=function(){this.input.value.length>0&&this.setState({answered:!0})},o.onBlur=function(){this.setAnswered(),this.checkAnswer(parseInt(this.input.value))},o.render=function(){var t=this,e="";return this.state.answered&&this.state.correct?e="equation--correct":(this.state.answered||0===this.props.timer)&&(e="equation--incorrect"),a.a.createElement(u,{className:e},a.a.createElement("label",{htmlFor:"equation_card_"+this.props.index},a.a.createElement("span",{className:"equation__value"},this.state.valueOne),a.a.createElement("span",{className:"equation__value"},this.state.valueTwo),a.a.createElement("span",{className:"equation__operator"},this.getOperator()),a.a.createElement("input",{id:"equation_card_"+this.props.index,type:"number",ref:function(e){return t.input=e},onChange:function(){return t.onChange()},onBlur:function(){return t.onBlur()},onFocus:function(){return t.onFocus()},disabled:this.state.answered||0===this.props.timer})))},r}(a.a.Component);var h=o.a.div.withConfig({displayName:"score__StyledDiv",componentId:"ap4onu-0"})(["display:flex;flex-wrap:wrap;justify-content:center;width:100%;margin-bottom:20px;"]),d=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){var t=this;return a.a.createElement(h,null,a.a.createElement("span",{ref:function(e){return t.span=e}},"0")," / ",this.props.quantity)},r}(a.a.Component);var m=o.a.form.withConfig({displayName:"timer__StyledForm",componentId:"dpz1lv-0"})(["display:flex;flex-wrap:wrap;justify-content:center;width:100%;margin-bottom:0;input,label{display:block;text-align:center;margin:0 auto;}label{margin-bottom:20px;}"]),f=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){var t=this;return a.a.createElement(m,null,a.a.createElement("label",{htmlFor:"timer"},a.a.createElement("span",{ref:function(e){return t.span=e}},this.props.timer)," Seconds",a.a.createElement("input",{id:"timer",type:"button",ref:function(e){return t.input=e},onClick:this.props.handleClickTimer.bind(this),value:this.props.timerText})))},r}(a.a.Component);var y=o.a.form.withConfig({displayName:"equations__StyledForm",componentId:"sc-1tdpoai-0"})(["display:flex;flex-wrap:wrap;justify-content:center;width:100%;&.equation__card--inactive{span.equation__value{opacity:0;}}"]),_=o.a.hr.withConfig({displayName:"equations__StyledHr",componentId:"sc-1tdpoai-1"})(["margin:40px 0;"]),v=function(t){var e,n;function r(e){var n;return(n=t.call(this,e)||this).state={started:!1,duration:n.props.timerDuration,timerText:"Start Timer"},n}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var o=r.prototype;return o.handleClickTimer=function(){var t=this;!0===this.state.started&&window.location.reload(),this.setState({started:!0}),this.timerId=setInterval((function(){var e=t.state.duration-1;t.setState({duration:e,timerText:"Reset"}),0===t.state.duration&&t.stopTimer()}),1e3)},o.stopTimer=function(){clearInterval(this.timerId)},o.equationCard=function(){for(var t=[],e=0;e<this.props.quantity;e++)t.push(a.a.createElement(l,{key:this.props.operation+"-"+e,index:e,rangeMin:this.props.rangeMin,rangeMax:this.props.rangeMax,operation:this.props.operation,handleClickTimer:this.handleClickTimer.bind(this),timer:this.state.duration,timerDuration:this.state.timerDuration}));return a.a.createElement(a.a.Fragment,null,a.a.createElement(y,{className:"equation__card "+(this.state.duration===this.props.timerDuration?" equation__card--inactive":"")},t))},o.render=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(_,null),a.a.createElement(f,{handleClickTimer:this.handleClickTimer.bind(this),timer:this.state.duration,timerText:this.state.timerText}),a.a.createElement(d,{quantity:this.props.quantity}),this.equationCard(),a.a.createElement(_,null))},r}(a.a.Component);var w=function(t){var e,n;function r(e){var n;return(n=t.call(this,e)||this).componentData=n.props.data,n}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){switch(this.componentData.type){case"text":return a.a.createElement(c.a,{type:this.componentData.htmlElement},this.componentData.content);case"equations":return a.a.createElement(v,{rangeMin:this.componentData.rangeMin,rangeMax:this.componentData.rangeMax,operation:this.componentData.operation,quantity:this.componentData.quantity,timerDuration:this.componentData.timerDuration});default:return null}},r}(a.a.Component);var g=function(t){var e,n;function r(e){var n;return(n=t.call(this,e)||this).data=n.props.data,n}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){return a.a.createElement(p,null,this.data.dataJson.components.map((function(t,e){return a.a.createElement(w,{data:t,key:t.type+"_"+e})})))},r}(a.a.Component),x=(e.default=g,"2709839575")}}]);
//# sourceMappingURL=component---src-pages-math-js-4cd53efa1c307732268f.js.map
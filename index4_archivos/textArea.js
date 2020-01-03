define("textArea",["lodash","santa-components","componentsCore","skins","textCommon"],function(e,t,i,o,r){return function(e){var t={};function i(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=t,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(o,r,function(t){return e[t]}.bind(null,r));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1153)}({0:function(t,i){t.exports=e},1153:function(e,t,i){var o,r;o=[i(0),i(27),i(2),i(5),i(1154),i(3)],void 0===(r=function(e,t,i,o,r,a){"use strict";var n=t.labelUtils,s=function(e,t){switch(e){case"left":return{paddingLeft:t,paddingRight:10};case"right":return{paddingLeft:10,paddingRight:t};case"center":return{paddingRight:t,paddingLeft:t}}},l=function(e){return i.mixins.validatableMixin.getPublicState(e)},d={displayName:"TextArea",mixins:[a.mixins.skinBasedComp,i.mixins.runTimeCompData,t.textScaleMixin,i.mixins.inputFocusMixin,i.mixins.validatableMixin.validatable,i.mixins.compStateMixin(l)],propTypes:{compData:i.santaTypesDefinitions.Component.compData,compProp:i.santaTypesDefinitions.Component.compProp,shouldResetComponent:i.santaTypesDefinitions.RenderFlags.shouldResetComponent,isMobileView:i.santaTypesDefinitions.isMobileView,isResponsive:i.santaTypesDefinitions.RendererModel.isResponsive},statics:{behaviors:e.assign({},i.mixins.inputFocusMixin.INPUT_FOCUS_BEHAVIORS,i.mixins.validatableMixin.VALIDATABLE_BEHAVIORS)},focus:function(){this.refs.textarea.focus()},blur:function(){this.refs.textarea.blur()},setCustomValidity:function(e){this.refs.textarea.setCustomValidity(e)},getInitialState:function(){return e.assign(this.getCssState(this.props),l(),{value:this.props.compData.value})},getCssState:function(e){return{$validation:e.compProp.message?"invalid":"valid"}},componentWillReceiveProps:function(t){t.shouldResetComponent&&t.shouldResetComponent!==this.props.shouldResetComponent&&this.hideValidityIndication();var i=this.getCssState(t);e.has(t.compData,"value")&&t.compData.value!==this.state.value&&(i.value=t.compData.value),this.setState(i)},onClick:function(e){this.props.compProp.isPreset&&e.target.select()},onKeyDown:function(e){this.handleAction("keyPress",e),e.stopPropagation()},onChange:function(e){var t=e.target.value;t!==this.state.value&&(this.setState({value:t},function(){this.updateData({value:t})}.bind(this)),this.latestChangeEvent=e)},onFocus:function(e){this.handleAction("focus",e)},onBlur:function(e){this.handleAction("blur",e),this.latestChangeEvent&&(this.handleAction("change",this.latestChangeEvent),this.latestChangeEvent=null),this.showValidityIndication()},measureComponent:function(e){var t=this.refs.label,i=n.measureComponentWithLabel(this.props.compProp,t,this.props.compData,this.props.isMobileView);if(i)return[{node:e,type:"css",changes:{height:i}}]},getBasteTextAreaProperties:function(){var t=this.props,i=t.compProp,o=t.compData,r=t.isResponsive,a={value:this.state.value,maxLength:o.maxLength||void 0,placeholder:o.placeholder||i.placeholder,onChange:i.onChange||this.onChange,onClick:this.onClick,onKeyDown:this.onKeyDown,onFocus:this.onFocus,onBlur:i.onBlur||this.onBlur,disabled:i.isDisabled,required:i.required,readOnly:i.readOnly,tabIndex:i.tabIndex,className:"has-custom-focus"};return r&&e.assign(a,{rows:"1"}),a},getSkinProperties:function(){var t=this.props,i=t.compProp,o=t.isMobileView,r=t.compData,a=t.compTheme,l={"with-validation-indication":this.shouldShowValidityIndication(),required:n.showRequired(r,i,a)};l[this.props.compProp.textAlignment+"-direction"]=!0;var d={compId:this.props.id,inputId:"textarea"},p=e.merge(n.getBaseInputWithLabelSkinProperties({compProp:i,rawFontSyle:this.getFontSize("fntlbl"),isMobileView:o,compData:r,id:d}),{"":{className:this.classSet(l),disabled:i.isDisabled,"data-disabled":i.isDisabled},textarea:this.getBasteTextAreaProperties(),errorMessage:i.message?{children:i.message,style:{whiteSpace:"normal"}}:{style:{display:"none"}}});return p.textarea=e.merge({style:e.merge(this.getFontSize("fnt"),s(i.textAlignment,i.textPadding))},p.textarea,{"data-preview":e.isFunction(this.getComponentPreviewState)&&this.getComponentPreviewState()}),p}};return a.compRegistrar.register("wixapps.integration.components.inputs.TextArea",d).register("wysiwyg.viewer.components.inputs.TextAreaInput",d),o.skinsMap.addBatch(r),d}.apply(t,o))||(e.exports=r)},1154:function(e,t,i){var o,r,a;"undefined"!=typeof self&&self,r=[],void 0===(a="function"==typeof(o=function(){"use strict";var e={"wysiwyg.viewer.skins.appinputs.AppsTextAreaInputSkin":{react:[["label","label",[],{}],["textarea","textarea",[],{}],["p","errorMessage",[],{}],["div",null,["_err"],{}]],params:{fntlbl:"FONT",txtlbl:"TEXT_COLOR"},paramsDefaults:{fntlbl:"font_8",txtlbl:"color_15"},css:{"%":"position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;","%textarea":"resize:none;width:100% !important;-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:auto;","% p":"display:none;position:absolute;",'%[data-state~="invalid"] %textarea':"color:#d00;border-color:#d00;","% textarea:focus":"color:#444  !important;border-color:#000 !important;","%_err":"position:absolute;top:50%;left:0;height:1px;width:1px;",'%[data-state~="invalid"] %_err:before':'color:#fff;background:#d00;border:2px solid #fff;border-radius:50%;box-shadow:0 1px 3px rgba(0, 0, 0, 0.5);text-align:center;font-size:12px;content:"!";position:absolute;top:5px;left:-15px;width:20px;height:20px;line-height:20px !important;','%[data-state~="invalid"] %_err:after':'color:#fff;font-size:10px;text-shadow:1px 1px 3px rgba(0, 0, 0, 0.5);content:"►";position:absolute;top:10px;left:8px;',"%label":"[fntlbl]  color:[txtlbl];word-break:break-word;display:inline-block;line-height:1;"}},"wysiwyg.viewer.skins.appinputs.AppsTextAreaInputSkinNoValidation":{react:[["label","label",[],{}],["textarea","textarea",[],{}],["p","errorMessage",[],{}],["div",null,["_err"],{}]],params:{fntlbl:"FONT",txtlbl:"TEXT_COLOR"},paramsDefaults:{fntlbl:"font_8",txtlbl:"color_15"},css:{"%":"position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;","%textarea":"resize:none;width:100% !important;-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:auto;","% p":"display:none;position:absolute;",'%[data-state~="invalid"] %textarea':"color:#d00;border-color:#d00;","% textarea:focus":"color:#444  !important;border-color:#000 !important;","%_err":"position:absolute;top:50%;left:0;height:1px;width:1px;",'%[data-state~="invalid"] %_err:before':'color:#fff;background:#d00;border:2px solid #fff;border-radius:50%;box-shadow:0 1px 3px rgba(0, 0, 0, 0.5);text-align:center;font-size:12px;content:"!";position:absolute;top:5px;left:-15px;width:20px;height:20px;line-height:20px !important;','%[data-state~="invalid"] %_err:after':'color:#fff;font-size:10px;text-shadow:1px 1px 3px rgba(0, 0, 0, 0.5);content:"►";position:absolute;top:10px;left:8px;',"%label":"[fntlbl]  color:[txtlbl];word-break:break-word;display:inline-block;line-height:1;"}},"wysiwyg.viewer.skins.input.ResponsiveTextAreaDefaultSkin":{react:[["textarea","textarea",[],{}]],params:{shd:"BOX_SHADOW",rd:"BORDER_RADIUS",fnt:"FONT",brw:"BORDER_SIZES",bg:"BG_COLOR_ALPHA",txt:"TEXT_COLOR",brd:"BORDER_COLOR_ALPHA",txt2:"TEXT_COLOR",brwh:"BORDER_SIZES",bgh:"BG_COLOR_ALPHA",brdh:"BORDER_COLOR_ALPHA",bgd:"BG_COLOR_ALPHA",txtd:"TEXT_COLOR",brwd:"BORDER_SIZES",brdd:"BORDER_COLOR_ALPHA",brwf:"BORDER_SIZES",bgf:"BG_COLOR_ALPHA",brdf:"BORDER_COLOR_ALPHA",brwe:"BORDER_SIZES",bge:"BG_COLOR_ALPHA",brde:"BORDER_COLOR_ALPHA"},paramsDefaults:{shd:"0 0 0 rgba(0, 0, 0, 0)",rd:"0",fnt:"font_8",brw:"1px",bg:"#ffffff",txt:"color_15",brd:"#e3e3e3",txt2:"color_15",brwh:"1px",bgh:"#ffffff",brdh:"#a3d9f6",bgd:"#CCCCCC",txtd:"#FFFFFF",brwd:"1px",brdd:"#a3d9f6",brwf:"1px",bgf:"#ffffff",brdf:"#a3d9f6",brwe:"1px",bge:"#ffffff",brde:"#a3d9f6"},css:{"%textarea":"[shd]  [rd]  [fnt]  [brw]  resize:none;background-color:[bg];box-sizing:border-box !important;color:[txt];border-style:solid;border-color:[brd];padding:3px;margin:0;padding-top:0.75em;overflow-y:auto;width:100%;height:100%;","%textarea::-webkit-input-placeholder":"color:[txt2];","%textarea::-ms-input-placeholder":"color:[txt2];","%textarea::placeholder":"color:[txt2];",'%textarea:hover,%textarea[data-preview~="hover"]':"[brwh]    background-color:[bgh];border-style:solid;border-color:[brdh];","%_left-direction %textarea":"text-align:left;","%_right-direction %textarea":"text-align:right;direction:rtl;","%_center-direction %textarea":"text-align:center;",'%[data-disabled="true"] %textarea,%[data-preview~="disabled"] %textarea':"background-color:[bgd];color:[txtd];[brwd]  border-style:solid;border-color:[brdd];",':not(%_with-validation-indication) %textarea:focus,:not(%_with-validation-indication) %textarea[data-preview~="focus"]':"[brwf]  background-color:[bgf];border-style:solid;border-color:[brdf];","%_with-validation-indication %textarea:invalid":"[brwe]  background-color:[bge];border-style:solid;border-color:[brde];",'%_with-validation-indication %textarea:not(:invalid):focus,%_with-validation-indication %textarea[data-preview~="focus"]':"[brwf]  background-color:[bgf];border-style:solid;border-color:[brdf];",'%[data-error="true"] %textarea,%[data-preview~="error"] %textarea':"[brwe]  background-color:[bge];border-style:solid;border-color:[brde];"}}};return e})?o.apply(t,r):o)||(e.exports=a)},2:function(e,i){e.exports=t},27:function(e,t){e.exports=r},3:function(e,t){e.exports=i},5:function(e,t){e.exports=o}})});
//# sourceMappingURL=textArea.min.js.map
import{r as f,o as w,m as v,w as t,b as s,a as e,f as l,d as h}from"./app.f7b5907c.js";import{u as x}from"./useNotifications.f75a94ae.js";import{a as V,_ as g}from"./PrimaryButton.20a6ca15.js";import{_ as c}from"./Input.1f9c9072.js";import{T}from"./Facebook.631ebe24.js";import{H as m}from"./HorizontalGroup.cea9d404.js";import{_ as k,a as d}from"./ReadDocHelp.4ddf1b7f.js";const y={class:"flex items-center"},S={class:"mr-xs"},$=s("span",null,"Twitter",-1),b=s("a",{href:"https://developer.twitter.com/en/portal/projects-and-apps",class:"link",target:"_blank"},"Create an App on Twitter",-1),A=l('. You will need to edit the App Permissions and allow "Read and Write". '),I=l("API Key"),N={class:"w-full"},B=l("API Secret"),C={class:"w-full"},P=l("Save"),G={__name:"TwitterServiceForm",props:{form:{required:!0,type:Object}},setup(o){const u=o,{notify:_}=x(),a=f({}),p=()=>{a.value={},h.Inertia.put(route("mixpost.services.update",{service:"twitter"}),u.form,{preserveScroll:!0,onSuccess(){_("success","Twitter credentials have been saved")},onError:n=>{a.value=n}})};return(n,r)=>(w(),v(g,null,{title:t(()=>[s("div",y,[s("span",S,[e(T,{class:"text-twitter"})]),$])]),description:t(()=>[b,A,e(k,{href:"https://mixpost.app/docs/1.0.0/twitter",class:"mt-xs"})]),default:t(()=>[e(m,{class:"mt-lg"},{title:t(()=>[I]),default:t(()=>[s("div",N,[e(c,{modelValue:o.form.client_id,"onUpdate:modelValue":r[0]||(r[0]=i=>o.form.client_id=i),type:"text",autocomplete:"off"},null,8,["modelValue"]),e(d,{message:a.value.client_id},null,8,["message"])])]),_:1}),e(m,{class:"mt-lg"},{title:t(()=>[B]),default:t(()=>[s("div",C,[e(c,{modelValue:o.form.client_secret,"onUpdate:modelValue":r[1]||(r[1]=i=>o.form.client_secret=i),type:"password",autocomplete:"new-password"},null,8,["modelValue"]),e(d,{message:a.value.client_secret},null,8,["message"])])]),_:1}),e(V,{onClick:p,class:"mt-lg"},{default:t(()=>[P]),_:1})]),_:1}))}};export{G as default};

var Vt=Object.defineProperty,Jt=Object.defineProperties;var Yt=Object.getOwnPropertyDescriptors;var nt=Object.getOwnPropertySymbols;var Ht=Object.prototype.hasOwnProperty,qt=Object.prototype.propertyIsEnumerable;var rt=(t,r,n)=>r in t?Vt(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,T=(t,r)=>{for(var n in r||(r={}))Ht.call(r,n)&&rt(t,n,r[n]);if(nt)for(var n of nt(r))qt.call(r,n)&&rt(t,n,r[n]);return t},X=(t,r)=>Jt(t,Yt(r));import{W as Wt,c as Kt,a as Qt,s as p,b as te,r as a,u as ae,j as e,d as W,e as B,f as i,B as Ne,F as gt,R as ft,M as xt,g as Zt,h as Te,i as ei,k as ti,l as ii,m as ie,n as D,L as E,o as Oe,p as ni,I as bt,q as vt,t as yt,v as ri,w as oi,x as ai,y as si,z as li,A as ci,C as di,D as pi,S as wt,E as kt,O as Ce,G as V,H as j,_ as Nt,J as G,P as re,K as De,N as mi,Q as hi,T as Ae,U as ui,V as gi,X as fi,Y as ot,Z as St,$ as xi,a0 as Ct,a1 as $t,a2 as zt,a3 as bi,a4 as vi,a5 as yi,a6 as wi,a7 as ki,a8 as q,a9 as It,aa as Ni,ab as Si,ac as Ci,ad as I,ae as $i,af as zi,ag as Ii,ah as Fi,ai as Mi,aj as Di}from"./vendor.341432ed.js";const Ai=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function n(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerpolicy&&(c.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?c.credentials="include":s.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(s){if(s.ep)return;s.ep=!0;const c=n(s);fetch(s.href,c)}};Ai();const Ei=Wt`

html {
  scroll-behavior: smooth;
  font-size: 10px;
}

body {
  background: ${t=>t.theme.body};
  color: ${t=>t.theme.text};
  --main-color: green;
}
body::-webkit-scrollbar {
  width: 5px;
}

body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

.dynamic-color { fill: var(--main-color, #9147ff); }
.dynamic-color-secondary { fill: var(--secondary-color, #a071e5); }
.dynamic-color-white { fill: var(--white-color, white); }

.container {
  padding: 9rem 1rem;
  background: ${t=>t.theme.body};
  color: ${t=>t.theme.text};
  // .nav { margin-bottom: 2rem; }
}
.mobile-container {
  padding: 2rem 1rem;
  // .nav { margin-bottom: 2rem; }
}
a {
  color: ${t=>t.theme.text};
}

.app {
  display: block;
  max-width: 140rem;
  margin: 0 auto;
}

.hide {
  display: none !important;
}

.navigation {
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 500;
}

.division {
  margin-bottom: 3rem;
}

.section-head {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  // margin: 1rem 0px;
  align-items: center;

  h2 {
    font-size: 1.8rem;
  }

  .filter-button {
    padding: 0.2rem 0;
    cursor: pointer;
    transition: background-color 0.3s;
    border-radius: 5px;
    font-size: 1.4rem;
    font-weight: 600;
    // color: ${t=>t.theme.textColor};
    color: ${t=>t.theme.color};
    background-color: ${t=>t.theme.header};
    cursor: pointer;
    border-bottom: 1px dashed;
  }
}

@media (min-width: 768px) {
  .app {
    .main {
      padding: 0 0 55px 0;
      // padding: 0 15px 55px 75px;

      &.sidebar-open {
        // padding-left: 265px;
      }

    }

    .container {
      // padding: 2rem;
      background: ${t=>t.theme.body};
      color: ${t=>t.theme.text};
    }
  }
}

@media (max-width: 767px) {
  .app {
    .main {
      // h1 {
      //   display: none;
      // }

      .hide-mb {
        display: none;
      }
    }
  }
}

@media (min-width: 768px) {
  body {
    // background: ${t=>t.theme.bodyDesktop};
  }
}

@keyframes pageAnim {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`,Li={header:"#ffffff",headerDesktop:"#ffffff",body:"#ffffff",bodyDesktop:"#F7F7F8",sideBar:"#efeff1",color:"#5a49e4",textColor:"#000",hover:"#0000001a",soft:"#777777",bits:"#e9e9e9",softDesktop:"#555555",border:"#efeff1",darkModeBg:"#dedede",iconColor:"#0e0e10",profit:"#0f0",loss:"#f00",lightText:"#b7b7b7"},ji={header:"#0e0e10",headerDesktop:"#18181B",body:"#000000",bodyDesktop:"#0e0e10",sideBar:"#1f1f23",color:"#b187ef",textColor:"#fcfaff",hover:"#ffffff1a",soft:"#adadb8",bits:"#333333",softDesktop:"#cdcdb8",border:"#ffffff1a",darkModeBg:"#5a49e4",iconColor:"#adadb8",profit:"#0f0",loss:"#f00",lightText:"#b7b7b7"},Bi={user:null,error:null},Pi=(t=Bi,r)=>{switch(r.type){case"LOGIN_SUCCESS":return X(T({},t),{user:r.user});case"LOGIN_FAILURE":return X(T({},t),{error:r.error});case"LOGOUT_SUCCESS":return X(T({},t),{user:null});case"LOGOUT_FAILURE":return X(T({},t),{error:r.error});default:return t}},Ri=Kt({auth:Pi}),_i=Qt(Ri),Ti=p.header`
  display: none;
  position: fixed;
  top: 0px;
  z-index: 20;
  max-width: 140rem;
  width: 100%;

  .header-box {
    position: relative;
    width: 100%;
    display: block;
    height: 7rem;
    background-color: ${t=>t.theme.headerDesktop};
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    z-index: 10;

    header {
      background-color: ${t=>t.theme.headerDesktop};
      color: ${t=>t.theme.textColor};
      max-width: 140rem;
      width: 100%;
      display: flex;
      align-items: center;
      height: 100%;
      justify-content: space-between;

      .left {
        display: block;
        height: 100%;

        ul {
          display: flex;
          height: 100%;

          li {
            // width: 100%;
            height: 100%;
            display: block;
            margin: 0 15px;
            cursor: pointer;
            font-size: 15px;
            font-weight: 500;

            .link {
              color: ${t=>t.theme.textColor};
            }

            .item {
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: 0.3s;

              .logo {
                font-size: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: ${t=>t.theme.color};
                transition: 0.3s;
                fill: #fff;
                stroke: #fff;
                position: relative;
                z-index: 4;
                overflow: hidden;

                img {
                  height: 4.5rem;
                  width: 14.5rem;
                }
                .logo-bg {
                  z-index: -1;
                  width: 19px;
                  height: 20px;
                  position: absolute;
                  top: 1px;
                  background-color: #fff;
                  border-bottom-right-radius: 8px;
                }
              }

              .item-icon {
                width: 26px;
                height: 26px;
                padding: 6px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: 0.3s;
                border-radius: 5px;

                &:hover {
                  background-color: ${t=>t.theme.hover};
                }
              }
            }

            &:hover {
              .item {
                .logo {
                  transform: translate(2px, -2px);
                }
              }
              .link {
                color: ${t=>t.theme.color};
              }
            }
          }
          .active {
            border-bottom: 2px solid ${t=>t.theme.color};

            .link {
              color: ${t=>t.theme.color};
            }
          }
        }
      }

      .bottom {
        // flex: 1;

        
      }

      .right {
        display: flex;
        align-items: center;

        .search-bar {
          max-width: 400px;
          width: 100%;
          height: 35px;
          background-color: ${t=>t.theme.soft}31;
          border-radius: 5px;
          overflow: hidden;
          display: flex;
          align-items: center;
          margin: 0 auto;

          input {
            flex: 1;
            background-color: transparent;
            height: 100%;
            padding: 0 10px;
            font-size: 15px;
            color: ${t=>t.theme.textColor};
            transition: 0.2s;
            border: 2px solid transparent;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;

            &:focus {
              background-color: ${t=>t.theme.headerDesktop};
              border: 2px solid ${t=>t.theme.color};
            }
          }

          .search-icon {
            width: 40px;
            height: 100%;
            background-color: ${t=>t.theme.border};
            font-size: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }
        }
        .right-icons {
          display: block;

          ul {
            display: flex;
            align-items: center;

            li {
              width: 30px;
              height: 30px;
              font-size: 18px;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              transition: 0.3s;
              border-radius: 5px;
              margin: 0 3px;

              &.bits {
                span {
                  display: none;
                  font-size: 13px;
                  font-weight: 500;
                  margin-left: 5px;
                }

                &:hover {
                  background-color: ${t=>t.theme.hover};
                }
              }

              &:hover {
                background-color: ${t=>t.theme.hover};
              }
            }
          }
        }

        .profile-desktop {
          margin: 0 20px 0 10px;
        }
      }

      .search-result {
        position: absolute;
        right: 0px;
        top: 7rem;
        border: 1px solid rgb(238, 238, 238);
        padding: 1rem;
        width: 37rem;
        z-index: 9;
        background: white;
        overflow-y: scroll;

        &.hide {
          display: none;
        }
        p {
          padding: 1rem;
          font-size: 1.4rem;
          line-height: inherit;
        } 
      }
    }
  }

  @media (min-width: 768px) {
    display: block;
  }

  @media (min-width: 1200px) {
    .header-box header {
      .right .right-icons ul li {
        font-size: 21px;
        margin: 0 8px;
        &.bits {
          width: 95px;
          font-size: 17px;
          background-color: ${t=>t.theme.bits};

          span {
            display: block;
            font-size: 14px;
          }
        }
      }
    }
  }

  @media (min-width: 1440px) {
    .header-box header {
      .left {
        ul li {
          font-size: 18px;

          .item .item-icon {
            width: 28px;
            height: 28px;
          }
        }
      }
    }
  }
`,Oi=p.div`
  .profile-box {
    cursor: pointer;
    position: relative;
    // padding: 1rem;

    .profile {
      // width: 30px;
      // height: 30px;
      border-radius: 999px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      background-color: ${t=>t.theme.color};
      font-size: 2.2rem;
      padding: 1rem;
    }

    .profile-menu {
      display: none;
      position: absolute;
      width: 200px;
      background-color: ${t=>t.theme.header};
      color: ${t=>t.theme.textColor};
      top: 6.2rem;
      right: 0px;
      border-radius: 10px;
      box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.1);
      z-index: 10;
      padding: 10px;
      animation: pageAnim 0.3s;

      .menu-box {
        width: 100%;
        font-size: 1.8rem;

        hr {
          background-color: ${t=>t.theme.border};
          height: 1px;
          margin: 10px 0;
        }

        .profile-info {
          display: flex;
          align-items: center;

          .pp {
            width: 40px;
            height: 40px;
            border-radius: 999px;
            background-color: ${t=>t.theme.color};
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
          }

          .info {
            display: block;
            padding: 10px;
            font-size: 14px;

            .username {
              font-weight: 600;
              padding: 3px 0;
            }

            .status {
              display: flex;
              align-items: center;
              color: ${t=>t.theme.soft};

              .status-icon {
                font-size: 7px;
              }
              .status-icon.online {
                color: limegreen;
              }

              span {
                font-size: 13px;
                margin-left: 5px;
              }
            }
          }
        }

        .status-button {
          width: 100%;
          margin: 20px 0;
          padding: 0 5px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 14px;
        }

        .menu-list {
          display: block;

          ul {
            display: block;

            li {
              width: 100%;
              transition: 0.3s;
              border-radius: 5px;
              display: flex;
              align-items: center;
              justify-content: space-between;

              .item {
                display: flex;
                align-items: center;
                font-size: 18px;
                padding: 8px 5px;

                span {
                  margin-left: 8px;
                  font-size: 13px;
                }
              }

              &:hover {
                background-color: ${t=>t.theme.border};
              }
            }
          }
        }
      }
    }
    // Show the menu when you click the profile
    .show-profile-menu {
      display: block;
    }
  }
`,Ui=p.div`
  .button-box {
    width: 36px;
    height: 18px;
    border: 2px solid ${t=>t.theme.textColor};
    background-color: ${t=>t.theme.header};
    border-radius: 999px;
    position: relative;
    display: flex;
    align-items: center;

    .ball {
      position: absolute;
      left: 2px;
      background-color: ${t=>t.theme.textColor};
      width: 12px;
      height: 12px;
      border-radius: 999px;
      transition: 0.3s cubic-bezier(0.24, 0.01, 0.77, 1.42);
    }
  }
  .button-true {
    border: 2px solid ${t=>t.theme.color};

    .ball {
      transform: translateX(16px);
      background-color: ${t=>t.theme.color};
    }
  }
`,Ft=te({name:"site",initialState:{darkStatus:!1,sideBarStatus:!0},reducers:{setDarkMode:t=>{t.darkStatus=!t.darkStatus},setSideBarStatus:t=>{t.sideBarStatus=!t.sideBarStatus}}}),{setDarkMode:Mt,setSideBarStatus:Xi}=Ft.actions;var Gi=Ft.reducer;const at=({whichStatus:t,changeStatus:r})=>{const[n,o]=a.exports.useState(!1),s=ae();return e(Ui,{children:e("div",{className:`button-box ${n?"button-true":""}`,onClick:()=>{!t||(o(!n),t==="online"?r():s(Mt()))},children:e("div",{className:"ball"})})})},oe={setItem:(t,r,n)=>{const o=new Date(Date.now()+n*864e5);document.cookie=`${t}=${JSON.stringify(r)}; expires=${o.toUTCString()}; path=/`},getItem:t=>{const r=document.cookie.split(";");for(let n=0;n<r.length;n++){const o=r[n].trim();if(o.startsWith(`${t}=`))return JSON.parse(o.substring(t.length+1))}return null},hasItem:t=>document.cookie.includes(`${t}=`),deleteItem:t=>{document.cookie=`${t}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`},clearAll:()=>{const t=document.cookie.split(";");for(let r=0;r<t.length;r++){const n=t[r].trim();document.cookie=`${n}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`}},getAll:()=>{const t={},r=document.cookie.split(";");for(let n=0;n<r.length;n++){const o=r[n].trim(),[s,c]=o.split("=");t[s]=JSON.parse(c)}return t}},$e=async(t,r={})=>{const{method:n="GET",headers:o={},body:s}=r;try{const c=await fetch(t,{method:n,headers:T({"Content-Type":"application/json"},o),body:n==="GET"?void 0:JSON.stringify(s)});if(!c.ok){const d=await c.json();throw new Error(d.message||"Something went wrong")}return await c.json()}catch(c){throw console.error("API Request Error:",c.message),new Error(c.message||"Something went wrong")}},U=()=>{const{protocol:t,hostname:r}=window.location;return r==="localhost"||r==="127.0.0.1"?`${t}//${r}/star-mf`:"https://savingpulse.com"},Dt=(t,r,n="")=>async o=>{var s;try{const d=await(await fetch(`${U()}/api/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:r,type:n})})).json();console.log(d),localStorage.setItem("user-auth",(s=d==null?void 0:d.data)==null?void 0:s.auth_token),localStorage.setItem("user-data",JSON.stringify(d==null?void 0:d.data)),o({type:"LOGIN_SUCCESS",user:d==null?void 0:d.data})}catch(c){o({type:"LOGIN_FAILURE",error:c})}},At=(t,r="")=>async n=>{try{const o=await fetch(`${U()}/api/logout`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,type:r})});localStorage.removeItem("user-auth"),localStorage.removeItem("user-data"),n({type:"LOGOUT_SUCCESS"})}catch(o){n({type:"LOGOUT_FAILURE",error:o})}},Vi=()=>{W();let t=ae();const[r,n]=a.exports.useState(!1),[o,s]=a.exports.useState(!1),c=()=>s(!o),d=B(m=>m.user);return B(m=>m.auth),e(Oi,{children:i("div",{className:"profile-box",children:[e("div",{className:"profile",onClick:()=>n(!r),children:e(Ne,{})}),e("div",{className:`profile-menu ${r?"show-profile-menu":""}`,children:i("div",{className:"menu-box",children:[i("div",{className:"profile-info",children:[e("div",{className:"pp",children:e(Ne,{})}),i("div",{className:"info",children:[e("div",{className:"username",children:"Sitaram"}),i("div",{className:"status",children:[e("div",{className:`status-icon ${o?"online":""}`,children:e(gt,{})}),e("span",{children:o?"Online":"Offline"})]})]})]}),i("div",{className:"status-button",children:[e("span",{children:"Online"}),e(at,{whichStatus:"online",changeStatus:c})]}),e("div",{className:"menu-list",children:i("ul",{children:[e("li",{children:i("a",{href:"./#/user-profile",className:"item",children:[e(ft,{}),e("span",{children:"Account Settings"})]})}),e("hr",{}),i("li",{children:[i("div",{className:"item",children:[e(xt,{})," ",e("span",{children:"Dark Theme"})]}),e(at,{whichStatus:"darkmode"})]}),e("hr",{}),e("li",{children:i("div",{className:"item",onClick:()=>{console.log(d),t(At(d.username))},children:[e(Zt,{style:{transform:"rotate(180deg)"}})," ",e("span",{children:"Log Out"})]})})]})})]})})]})})},Ji=p.div`
  .sidebar-box {
    display: none;
    position: fixed;
    // left: 0;
    top: 0;
    width: 55px;
    height: 100vh;
    background-color: ${t=>t.theme.sideBar};
    z-index: 9;
    box-shadow: 1px 0 3px rgba(0, 0, 0, 0.1);
    padding-top: 60px;
    transition: 0.3s;

    .list-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      height: 50px;

      h1 {
        width: 80%;
        text-transform: uppercase;
        font-size: 0px;
        color: ${t=>t.theme.softDesktop};
        transition: 0.3s;
        opacity: 0;
      }

      .title-icon {
        font-size: 20px;
        display: flex;
        margin-right: 8px;
        transition: 0.3s;
        cursor: pointer;
        color: ${t=>t.theme.textColor};

        @media (max-width: 1199px) {
          & {
            display: none;
          }
        }
      }

      .followed,
      .camera {
        font-size: 20px;
        display: flex;
        margin-right: 8px;
        transition: 0.3s;
        cursor: pointer;
        color: ${t=>t.theme.textColor};
      }
      @media (min-width: 1200px) {
        .followed {
          display: none;
        }
      }
    }

    .side-search {
      display: none;
      padding: 0 10px;
      position: absolute;
      bottom: 10px;
      animation: pageAnim 1s;
    }

    .list ul li {
      .item .hover-section {
        display: none;
        animation: pageAnim 1s;
      }
    }

    &:hover {
      width: 250px;

      .list-title {
        display: flex;

        h1 {
          font-size: 13px;
          opacity: 1;
        }

        .followed,
        .camera {
          display: none;
        }
      }

      @media (min-height: 800px) {
        .side-search {
          display: block;
        }
      }

      .list {
        .show-more span {
          font-size: 13px;
          opacity: 1;

          &:hover {
            text-decoration: underline;
          }
        }

        ul li {
          width: 250px;

          .item .hover-section {
            display: flex;
          }
        }
      }
    }
  }

  .side-open {
    // width: 250px;

    .list-title {
      display: flex;

      h1 {
        font-size: 13px;
        opacity: 1;
      }

      .title-icon {
        transform: rotate(180deg);
      }
      .camera {
        display: none;
      }
    }

    @media (min-height: 800px) {
      .side-search {
        display: block;
      }
    }

    .list {
      .show-more span {
        font-size: 13px;
        opacity: 1;

        &:hover {
          text-decoration: underline;
        }
      }

      ul li {
        width: 250px;

        .item .hover-section {
          display: flex;
        }
      }
    }

    @media (max-width: 1199px) {
      display: none;
    }
  }
`;p.div`
  li {
    display: block;
    padding: 10px;
    height: 50px;
    color: ${t=>t.theme.textColor};
    cursor: pointer;
    transition: 0.3s;

    .item {
      display: flex;
      align-items: center;
      font-size: 15px;
      width: 100%;

      .pp {
        display: block;
        border-radius: 999px;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }

      .hover-section {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: 10px;
        flex: 1;

        .info {
          display: block;

          .username {
            font-weight: 600;
          }
          .title {
            color: ${t=>t.theme.soft};
            font-size: 13px;
          }
        }

        .live {
          display: flex;
          width: 25%;
          align-items: center;

          .live-icon {
            color: red;
            font-size: 7px;
          }

          span {
            font-size: 14px;
            padding-left: 5px;
          }
        }
      }
    }

    &:hover {
      background-color: ${t=>t.theme.hover};
    }
  }
`;const Yi=p.div`
  .list {
    display: block;
    margin-bottom: 10px;

    .show-more {
      padding: 10px;
      width: 100px;

      span {
        transition: 0.3s;
        font-size: 0px;
        color: ${t=>t.theme.color};
        font-weight: 500;
        cursor: pointer;
        opacity: 0;
      }
    }
  }
`,st=()=>e(Yi,{children:i("div",{className:"list",children:[e("ul",{}),e("div",{className:"show-more",children:e("span",{children:"Show More"})})]})}),Hi=p.div`
  display: block;
  width: 100%;

  .searchbar-box {
    width: 100%;
    background-color: ${t=>t.theme.hover};
    color: ${t=>t.theme.textColor};
    display: flex;
    align-items: center;
    height: 30px;
    border-radius: 5px;
    padding-left: 5px;
    border: 2px solid transparent;
    transition: 0.3s;

    .search-icon {
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .input {
      background-color: transparent;
      flex: 1;
      font-size: 13px;
      padding: 10px;
      color: ${t=>t.theme.textColor};
    }
  }
  .searchbar-box.focus {
    background-color: transparent;
    border: 2px solid ${t=>t.theme.color};
  }
`,Et=({placeholder:t})=>{const[r,n]=a.exports.useState(!1);return e(Hi,{children:i("div",{className:`searchbar-box ${r?"focus":""}`,children:[e("div",{className:"search-icon",children:e(Te,{})}),e("input",{type:"text",placeholder:t,className:"input",onFocus:()=>n(!0),onBlur:()=>n(!1)})]})})},qi=({mySize:t})=>{const{sideBarStatus:r}=B(o=>o.site),n=ae();return e(Ji,{children:i("div",{className:"sidebar-box",children:[i("div",{className:"list-title",children:[e("h1",{children:"Followed Channels"}),e("div",{className:"title-icon",onClick:()=>n(Xi(!r)),children:e(ei,{})}),e("div",{className:"followed",children:e(ti,{})})]}),e(st,{}),i("div",{className:"list-title",children:[e("h1",{children:"Recommended Channels"}),e("div",{className:"camera",children:e(ii,{})})]}),e(st,{}),e("div",{className:"side-search",children:e(Et,{placeholder:"Search to Add Friends"})})]})})},ee=async t=>await $e(t),Re=async(t,r)=>await $e(t,{method:"POST",body:r}),Wi=async(t,r)=>await $e(t,{method:"PUT",body:r}),Lt=async t=>await $e(t,{method:"DELETE"}),ge=(t="")=>{const r=Zi(t);return ee(r)},Ki=t=>{const r=`${U()}/mutual-funds/${t}?ajax=true`;return ee(r)},Qi=t=>{const r=`${U()}/mutual-funds-chart/${t}?ajax=true`;return ee(r)},jt=t=>{const r=`${U()}/search-for-schemes/${encodeURIComponent(t)}?ajax=true`;return ee(r)},Zi=t=>{const n={schemes:"/schemes","sip-with-100":"/schemes/sip-with-100","high-return":"/schemes/high-return","tax-saving":"/schemes/tax-saving","large-cap":"/schemes/large-cap","mid-cap":"/schemes/mid-cap","small-cap":"/schemes/small-cap"}[t]||"";return`${U()}${n}?ajax=true`},en=({mySize:t})=>{const{pathname:r}=ie(),[n,o]=a.exports.useState(""),[s,c]=a.exports.useState(!1),[d,m]=a.exports.useState([]),b=x=>{!(x.target.value.length<3)};return a.exports.useEffect(()=>{if(n.length<3)return;c(!0),(async()=>{try{const l=encodeURIComponent(n),y=await jt(l);m(y)}catch(l){console.log(l)}finally{c(!1)}})()},[n]),e(Ti,{children:i(D,{children:[e("div",{className:"header-box",children:i("header",{children:[e("div",{className:"left",children:i("ul",{children:[e("li",{children:e("div",{className:"item",children:e(E,{to:"/explore",children:e("div",{className:"logo",children:e("img",{src:"./public/images/logo/filtered/savingpulse-black-transparent(1).png"})})})})}),e("li",{className:r==="/following"?"active":"",children:e(E,{to:"/following",className:"link",children:e("div",{className:"item",children:"Following"})})}),e("li",{className:r==="/explore"?"active":"",children:e(E,{to:"/explore",className:"link",children:e("div",{className:"item",children:"Home"})})}),e("li",{className:r==="/ipo"?"active":"",children:e(E,{to:"/ipo",className:"link",children:e("div",{className:"item",children:"IPO's"})})}),e("li",{className:r==="/offers"?"active":"",children:e(E,{to:"/offers",className:"link",children:e("div",{className:"item",children:"Offers"})})}),e("li",{children:e("div",{className:"item",children:e(Oe,{className:"item-icon"})})})]})}),e("div",{className:"bottom"}),i("div",{className:"right",children:[i("div",{className:"search-bar",children:[e("input",{type:"text",placeholder:"Search",value:n,onChange:x=>{o(x.target.value)},onKeyDown:b}),e("div",{className:"search-icon",children:e(Te,{})})]}),e("div",{className:"right-icons",children:e("ul",{children:e("li",{children:e(ni,{})})})}),e("div",{className:"profile-desktop",children:e(Vi,{})})]}),e("div",{className:`search-result ${d.length<1?"hide":""}`,children:s?e("div",{className:"spinner",children:e(bt,{})}):d.map((x,l)=>e("p",{children:i(E,{to:`/mutual-fund/${x.Scheme_Code}`,children:[e(vt,{})," ",e("span",{children:x.Scheme_Name})]},l)},l))})]})}),e("div",{className:"left-bar",children:e(qi,{mySize:t})})]})})},tn=p.header`
  display: none;

  // Header Navbar
  header {
    width: 100%;
    // height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${t=>t.theme.header};
    color: ${t=>t.theme.iconColor};
    padding: 10px;
    position: fixed;
    top: 0;
    z-index: 4;

    .logo {
      border: 2px dashed ${t=>t.theme.color};
      border-radius: 100%;
      padding: 0.5rem;
      min-width: 6rem;
      min-height: 6rem;

      img {
        height: 45px;
      }
    }

    .page-name {
      margin-left: 10px;
      font-size: 2rem;
      font-weight: 600;
    }

    .profile-box {
      width: 40px;
      height: 40px;
      background-color: ${t=>t.theme.color};
      border-radius: 999px;
      display: flex;
      align-items: center;
      // padding-bottom: 3px;
      justify-content: center;
      font-size: 24px;
      overflow: hidden;
      color: #fff;
      cursor: pointer;
    }

    .right-buttons {
      display: flex;
      justify-content: right;
      align-items: center;
      flex: 1;
      font-size: 3rem;

      & > * {
        cursor: pointer;
      }
    }
  }

  // Bottom Navbar
  nav {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 8rem;
    min-height: 60px;
    background-color: ${t=>t.theme.header};
    z-index: 4;

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 26px;
      color: ${t=>t.theme.iconColor};
      cursor: pointer;
      transition: 0.3s;
      padding: 1rem 0;

      span {
        font-size: 1.5rem;
        margin-top: 5px;
        text-align: center;
        width: 7rem;
      }

      .item__browse {
        transform: rotateY(180deg);
      }
    }

    .active {
      color: ${t=>t.theme.color};
      font-weight: bold;
    }
  }

  // Profile Menu
  .profile-menu-box {
    display: none;

    &.visible {
      display: block;
    }
  }

  @media (max-width: 767px) {
    display: block;
  }
`,nn=p.div`
  // Mobile Search
  display: none;

  &.search-visible {
    display: block;
  }

  .search-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: ${t=>t.theme.header};
    z-index: 5;
    animation: searchBarAnim 0.3s;

    .search-bar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 70px;
      display: flex;
      align-items: center;
      padding: 0 10px;
      font-size: 30px;

      .search-close {
        margin-right: 10px;
        cursor: pointer;
      }

      input {
        width: 100%;
        background-color: ${t=>t.theme.border};
        color: ${t=>t.theme.textColor};
        height: 60%;
        padding: 10px;
        border-radius: 8px;
        font-size: 18px;
      }
    }

    .search-result {
      margin-top: 70px;
      padding: 0 2rem;
      p {
        padding: 2rem 1rem;
        font-size: 1.4rem;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        border-bottom: 1px solid #ececec;
        border-top: 1px solid #ececec;

        &:hover {
          background: ${t=>t.theme.hover};
        }
        svg {
          margin-right: 0.5rem;
        }

        .click-to-copy {
          margin-left: auto;
          color: ${t=>t.theme.color};
          cursor: pointer;
          padding: 1rem;
          position: absolute;
          right: 1.7rem;
        }
      }

      .spinner { text-align: center; svg { height: 2rem; width: 2rem; }}
    }
  }

  @keyframes searchBarAnim {
    0% {
      display: block;
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`,rn=({searchStatus:t,setSearchStatus:r})=>{const[n,o]=a.exports.useState(""),[s,c]=a.exports.useState(!1),[d,m]=a.exports.useState([]),b=a.exports.useRef(null),w=u=>{!(u.target.value.length<3)};a.exports.useEffect(()=>{if(b.current.focus(),n.length<3)return;c(!0),(async()=>{try{const g=encodeURIComponent(n),$=await jt(g);m($)}catch(g){console.log(g)}finally{c(!1)}})()},[n]);const x=u=>{o(u.target.value)},l=a.exports.useRef(null);a.exports.useState("Copy this text to clipboard!");const y=()=>{const u=l.current.innerText;navigator.clipboard.writeText(u).then(()=>{console.log("Text copied to clipboard!")}).catch(g=>{console.error("Failed to copy text: ",g)})};return e(nn,{className:t?"search-visible":"",children:i("div",{className:"search-box",children:[i("div",{className:"search-bar",children:[e(yt,{className:"search-close",onClick:()=>r(!t)}),e("input",{type:"text",value:n,onChange:x,onKeyDown:w,placeholder:"Search mutual fund scheme...",ref:b})]}),e("div",{className:"search-result",children:s?e("div",{className:"spinner",children:e(bt,{})}):d.map((u,g)=>i("p",{children:[i(E,{to:`/mutual-fund/${u.Scheme_Code}`,children:[e(vt,{})," ",e("span",{ref:l,children:u.Scheme_Name})]},g),e("span",{onClick:y,className:"click-to-copy"})]},g))})]})})},on=p.div`
  position: fixed;
  bottom: 60px;
  left: 0;
  width: 100%;
  height: 95vh;
  background-color: ${t=>t.theme.header}d9;
  z-index: 5;

  .profile-menu-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 97%;
    overflow-y: scroll;
    background-color: ${t=>t.theme.header};
    padding: 0;
    animation: profileMenuAnim 0.3s;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    z-index: 10;

    .title {
      position: sticky;
      top: 0;
      left: 0;
      background-color: ${t=>t.theme.header};
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 500;
      padding: 15px 13px;
      z-index: 10;

      h1 {
        font-weight: 500;
        font-size: 20px;
        color: ${t=>t.theme.textColor};
      }

      span {
        position: absolute;
        color: ${t=>t.theme.textColor};
        right: 15px;
        font-size: 15px;
        cursor: pointer;
        transition: opacity 0.3s;

        &:hover {
          opacity: 0.8;
        }
      }
    }

    .user {
      width: 100%;
      background-color: ${t=>t.theme.header};
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 20px;
      border: 1px solid ${t=>t.theme.border};
      display: flex;
      flex-direction: column;
      align-items: center;

      .user-since {
        // font-size: 1.2rem;
      }
      .user__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;

        .user-box {
          width: 60px;
          height: 60px;
          background-color: ${t=>t.theme.color};
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 28px;
          padding-bottom: 4px;
          cursor: pointer;
        }

        button {
          background-color: ${t=>t.theme.color};
          padding: 7px 14px;
          max-width: 110px;
          width: 100%;
          border-radius: 50px;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;

          &:hover {
            opacity: 0.8;
          }

          .cast-icon {
            font-size: 18px;
          }
        }
      }

      .user__bottom {
        padding: 0 10px;

        .username {
          font-weight: 600;
          color: ${t=>t.theme.textColor};
        }
        .status {
          font-size: 13px;
          opacity: 0.8;
          padding: 5px 0;
          color: ${t=>t.theme.soft};
        }
      }
    }

    .settings {
      width: 100%;
      background-color: ${t=>t.theme.header};
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 15px;
      border: 1px solid ${t=>t.theme.border};

      ul {
        width: 100%;
        display: block;

        li {
          width: 100%;
          padding: 10px 0;
          cursor: pointer;

          &:not(:last-child) {
            border-bottom: 1px solid ${t=>t.theme.border};
          }

          .settings__title {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px;
            color: ${t=>t.theme.textColor};
            transition: filter 0.1s;

            .title-left {
              display: flex;
              align-items: center;
              font-size: 15px;
              font-weight: 400;

              .title-icon {
                margin-right: 10px;
                font-size: 25px;
              }
            }
          }

          &:hover:not(:last-child) .settings__title {
            filter: contrast(50%);
          }
        }
      }
    }

    @keyframes profileMenuAnim {
      0% {
        transform: translateY(1000px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
`,an=p.div`
  .darkMode-container {
    width: 44px;
    height: 24px;
    border-radius: 999px;
    background-color: ${t=>t.theme.darkModeBg};
    position: relative;

    .ball {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 20px;
      height: 20px;
      background-color: #fff;
      border-radius: 999px;
      transition: 0.3s cubic-bezier(0.24, 0.01, 0.77, 1.42);
    }
    .ball.dark {
      transform: translateX(20px);
    }
  }
`,sn=()=>{const{darkStatus:t}=B(o=>o.site),r=ae();return e(an,{children:e("div",{className:"darkMode-container",onClick:o=>(o.preventDefault(),r(Mt())),children:e("div",{className:`ball ${t?"dark":""}`})})})},F=ri(oi)({boxShadow:"none",textTransform:"none",fontSize:"1.4rem",padding:"6px 12px",border:"1px solid",backgroundColor:"#9147ff",borderColor:"#9147ff",width:"fit-content",color:"#fff",fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:hover":{backgroundColor:"rgba(145, 71, 255, 0.9)",borderColor:"#9147ff",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"rgba(145, 71, 255, 0.9)",borderColor:"#9147ff"},"&:focus":{boxShadow:"0 0 0 0.2rem rgba(145,71,255,.6)"},".cancel":{backgroundColor:"red"}}),ln=p.div`
  display: flex;
  flex-direction: row;
  background-color: #f7f7f7;
  border-radius: 10px;
  font-size: 1.4rem;

  input[type="text"],
  input[type="email"],
  input[type="date"],
  input[type="number"],
  input[type="password"],
  select {
    padding: 0px 10px;
    border: 0.2rem solid rgb(236, 236, 236);
    margin-top: 0.5rem;
    height: 3.5rem;
    display: flex;
    font-size: 1.4rem;
    letter-spacing: 0.2rem;
    width: 100%;
  }
  input[type="date"] {
    font-size: 1.4rem;
    letter-spacing: 0;
  }

  @media (max-width: 767px) {
    .grid-item {
      grid-column: 1 / -1; /* Take up full width */
    }
  }
`,Bt=p.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2rem;
  border-bottom: 1px solid #ddd;

  .content {
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    padding: 1rem;
    .user-since {
      font-size: 1.4rem;
    }
  }
  img {
    width: 10rem;
    height: 10rem;
    border-radius: 100%;
    background: ${t=>t.theme.color};
    filter: drop-shadow(rgba(145, 71, 255, 0.5) 0px 0px 2rem);
  }
`,Pt=p.span`
  font-size: 18px;
  font-weight: bold;
  margin-top: 1rem;
`;p.span`
  font-size: 16px;
  color: #666;
`;const cn=p.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;

  .tab {
    width: 100%;
    justify-content: left;
    margin-top: 1rem;

    svg {
      margin-right: 1rem;
      height: 1.5rem;
      width: 1.5rem;
    }
    &.active {
      background-color: ${t=>t.theme.color};
      color: #fff;
    }
  }

  @media (max-width: 599px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 0.5rem;
    align-items: center;
    margin-bottom: 1rem;
    background: inherit;

    .tab {
      padding: 1rem 0.5rem;
      font-size: 1.4rem;
      width: 100%;
      display: flex;
      justify-content: center;
      line-height: normal;
      
      svg {
        margin-right: 0.2rem;
      }
    }

    .mobile-hide {
      display: none;
    }
  }
`,dn=p.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;

  @media (max-width: 767px) {
    padding: 0;
  }
`,pn=p.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  margin-bottom: 20px;

  label {
    grid-column: 1;
  }

  input,
  select {
    grid-column: 2;
  }
`,mn=p.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

`,hn=p.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

`,un=p.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`,lt=p.div`
  color: green;
  margin: 1rem 0;
`,gn=({handleCloseProfileMenu:t})=>{let r=W(),n=ae();const o=B(c=>c.auth);console.log(o);const s=()=>{const c=new Date(o==null?void 0:o.createdAt),m=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][c.getMonth()],b=c.getFullYear();return m+" "+b};return e(on,{children:i("div",{className:"profile-menu-container",children:[i("div",{className:"title",children:[e(yt,{onClick:t}),e("h1",{children:"Account"}),e(ft,{onClick:()=>r("/user-profile")})]}),i(Bt,{children:[e("img",{src:"./public/images/profile1.jpg"}),i("div",{className:"content",children:[i(Pt,{children:[o==null?void 0:o.holder1FN," ",o==null?void 0:o.holder1LN]}),i("span",{className:"user-since",children:["Member since ",s()]})]})]}),e("div",{className:"user"}),e("div",{className:"settings",children:i("ul",{children:[e("li",{children:i("div",{className:"settings__title",children:[i("div",{className:"title-left",children:[e(xt,{className:"title-icon"}),"Dark Mode"]}),e(sn,{})]})}),e("li",{children:e("div",{className:"settings__title",onClick:async()=>{await n(At("8947973174")),r("/login")},children:i("div",{className:"title-left",children:[e(ai,{className:"title-icon"}),"Logout"]})})})]})})]})})},fn=()=>{const{pathname:t}=ie(),[r,n]=a.exports.useState(!1),[o,s]=a.exports.useState(!1),c=()=>s(!o);let d="Home";switch(t){case"/mutual-funds":d="Mutual Funds";break;case"/mutual-funds":d="Mutual Funds";break;case"/":d="Home";break;case"/ipo":d="Intial Public Offers";break;case"/offers":d="Offers";break;case"/all-mutual-funds":d="All Mutual Funds";break;case"/user-profile":d="Profile";break}return i(tn,{children:[i("header",{children:[e(E,{to:"/",children:e("div",{className:"logo",children:e("img",{src:"./images/logo/filtered/savingpulse-mb-transparent.png"})})}),e("h1",{className:"page-name",children:d}),e(rn,{searchStatus:r,setSearchStatus:n}),i("div",{className:"right-buttons",children:[e(Te,{onClick:()=>n(!r)}),"\xA0 \xA0",e("div",{className:`profile-menu-box ${o?"visible":""}`,children:e(gn,{handleCloseProfileMenu:c})}),e("div",{className:"profile-box",children:e(Ne,{onClick:()=>s(!o)})})]})]}),i("nav",{children:[e(E,{to:"/mutual-funds",onClick:()=>s(!1),children:i("div",{className:`item ${t==="/mutual-funds"?"active":""}`,children:[e(si,{}),e("span",{children:"Funds"})]})}),e(E,{to:"/mutual-funds",onClick:()=>s(!1),children:i("div",{className:`item ${t==="/mutual-funds"?"active":""}`,children:[e(li,{}),e("span",{children:"Following"})]})}),e(E,{to:"/",onClick:()=>s(!1),children:i("div",{className:`item ${t==="/"?"active":""}`,children:[e(ci,{}),e("span",{children:"Home"})]})}),e(E,{to:"/ipo",onClick:()=>s(!1),children:i("div",{className:`item ${t==="/ipo"?"active":""}`,children:[e(di,{className:"item__browse"}),e("span",{children:"IPO"})]})}),e(E,{to:"/offers",onClick:()=>s(!1),children:i("div",{className:`item ${t==="/offers"?"active":""}`,children:[e(pi,{className:"item__profile"}),e("span",{children:"Offers"})]})})]})]})},xn=({mySize:t})=>i("div",{className:"header",children:[e(fn,{}),e(en,{mySize:t})]}),bn=p.div`
  // Mobile
  .ipos-mobile {
    display: none;

    .ipos-box {
      padding: 75px 10px;
      color: ${t=>t.theme.textColor};
      background-color: ${t=>t.theme.header};
      position: relative;
      z-index: 3;
      animation: pageAnim 0.3s ease-in-out;

      .navigation {
        width: 100%;
        display: flex;
        align-items: center;
        margin: 10px 0;
        font-size: 1.8rem;
        font-weight: 500;

        & > div {
          border-bottom: 2px solid transparent;
          padding: 5px 10px;
          cursor: pointer;
          user-select: none;
        }

        .nav-item {
          margin-left: 10px;
        }

        .nav-active {
          border-bottom: 2px solid ${t=>t.theme.color};
          color: ${t=>t.theme.color};
          transition: 0.3s;
        }
      }
    }

    @media (max-width: 767px) {
      display: block;
    }
  }

  // Desktop
  .ipos-desktop {
    display: none;

    .ipos-box {
      display: block;

      .page-title {
        color: ${t=>t.theme.textColor};
        font-size: 50px;
        padding: 30px 0;
      }

      .nav {
        margin-top: 40px;
        ul {
          display: flex;
          gap: 5px;

          li {
            font-size: 18px;
            height: 35px;
            font-weight: 500;
            margin-right: 10px;
          }
        }
      }

      .search-filter {
        margin-top: 20px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${t=>t.theme.textColor};

        .search-box {
          width: 320px;
          display: flex;
          align-items: center;

          span {
            font-size: 13px;
            font-weight: 600;
            width: 80px;
          }
        }

        .filter {
          width: 250px;
          display: flex;
          align-items: center;
          font-size: 13px;
          font-weight: 600;

          span {
            width: 60px;
          }

          .sort {
            display: flex;
            align-items: center;
            height: 30px;
            padding: 0 10px;
            border-radius: 5px;
            background-color: ${t=>t.theme.hover};
            cursor: pointer;
            transition: 0.1s;
            user-select: none;

            .sort-icon {
              font-size: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            &:hover {
              box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.3);
            }
          }
        }
      }
    }

    @media (min-width: 768px) {
      display: block;
    }
  }
`,vn=p.div`
  border-bottom: 1px solid #ebe7e7;
  padding-bottom: 10px;

  .ipo-box {
    padding: 2rem 0 0 0;
    .header {
      display: flex;
    }
    .picture img {
      width: 100px;
      border: 1px solid #ececec;
      margin-right: 1rem;
      border-radius: 20%;
    }
    .name {
      padding: 10px 0;
      font-weight: 500;
      font-size: 1.8rem;
    }
    .offer {
      font-size: 1.4rem;
      padding: 1rem 0;
    }

    .actions {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .tags {
        font-size: 14px;
        padding: 1rem 0;
        display: flex;
        gap: 1rem;

        .tag {
          display: inline-block;
          padding: 0.8rem 1.2rem;
          background-color: ${t=>t.theme.hover};
          border-radius: 5px;
          cursor: pointer;
          color: ${t=>t.theme.color};
          font-weight: 500;
        }
      }

      .action-link {
        display: flex;
        gap: 1rem;

        a {
          background-color: ${t=>t.theme.color};
          padding: 0.8rem 1.2rem;
          border-radius: 5px;
          color: rgb(255, 255, 255);
          cursor: pointer;
          transition: all 0.3s ease 0s;
          font-size: 1.4rem;
        }
      }
    }

    .more-details {
      display: flex;
      flex-direction: row;
      align-content: space-around;
      justify-content: space-between;
      align-items: center;
      font-size: 1.4rem;

      div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 1rem;
        align-items: center;
      }
      .divider {
        height: 5.5rem;
        width: 1px;
        padding: 1px 0px;
        background-color: ${t=>t.theme.border};
      }
    }
  }
`,Ee=({ipo:t})=>{var r,n,o;return e(vn,{children:i("div",{className:"ipo-box",children:[i("div",{className:"header",children:[e("div",{className:"picture",children:e("img",{src:t.image,alt:""})}),i("div",{children:[e("h2",{className:"name",children:t.name}),i("p",{className:"offer",children:["Offer date: ",(r=t==null?void 0:t.date)==null?void 0:r.start," - ",(n=t==null?void 0:t.date)==null?void 0:n.end]})]})]}),i("div",{className:"actions",children:[i("div",{className:"tags",children:[e("div",{className:"tag",children:t.exchange}),e("div",{className:"tag",children:"Live"})]}),i("div",{className:"action-link",children:[e(E,{className:"link",to:"",title:"Apply",children:"Apply"}),i(E,{className:"link",to:"",title:"Check Allotment",children:[e("span",{className:"hide-mb1",children:"Check "}),"Allotment"]})]})]}),i("div",{className:"more-details",children:[i("div",{children:[e("span",{children:"Offer Price"}),e("span",{children:(o=t==null?void 0:t.price)==null?void 0:o.offer})]}),e("div",{className:"divider"}),i("div",{children:[e("span",{children:"Lot Size"}),e("span",{children:t.lotSize})]}),e("div",{className:"divider"}),i("div",{children:[e("span",{children:"Subscription"}),i("span",{children:[t.subscriptions," times"]})]})]})]})})},yn=p.div`
  display: block;
  width: 100%;

  .tags-box {
    display: block;
    width: 100%;

    ul {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 10px;

      li {
        display: block;

        .item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: ${t=>t.theme.color};
          border-radius: 10px;
          height: 45px;
          padding: 0 15px;
          color: #fff;
          transition: 0.3s;
          cursor: pointer;

          span {
            font-size: 24px;
            font-weight: 500;
          }

          .icon {
            cursor: pointer;
          }
        }

        &:hover {
          .item {
            background-color: ${t=>t.theme.color}e9;
          }
        }
      }

      @media (max-width: 1199px) {
        & {
          grid-template-columns: repeat(4, 1fr);

          li:nth-last-child(1) {
            display: none;
          }
        }
      }
      @media (max-width: 1023px) {
        & {
          grid-template-columns: repeat(3, 1fr);

          li:nth-last-child(2) {
            display: none;
          }
        }
      }
    }
  }
`,wn=()=>e(yn,{children:e("div",{className:"tags-box",children:i("ul",{children:[e("li",{children:i("div",{className:"item",children:[e("span",{children:"Games"}),e("div",{className:"icon",children:e("img",{src:"https://static.twitchcdn.net/assets/gaming-e9019587744b56b11b43.svg",alt:""})})]})}),e("li",{children:i("div",{className:"item",children:[e("span",{children:"IRL"}),e("div",{className:"icon",children:e("img",{src:"https://static.twitchcdn.net/assets/irl-baa32e8e64a6974282c0.svg",alt:""})})]})}),e("li",{children:i("div",{className:"item",children:[e("span",{children:"Music"}),e("div",{className:"icon",children:e("img",{src:"https://static.twitchcdn.net/assets/music-5fb4595a30d04d991e24.svg",alt:""})})]})}),e("li",{children:i("div",{className:"item",children:[e("span",{children:"Esports"}),e("div",{className:"icon",children:e("img",{src:"https://static.twitchcdn.net/assets/esports-7a078acca57531d11e29.svg",alt:""})})]})}),e("li",{children:i("div",{className:"item",children:[e("span",{children:"Creative"}),e("div",{className:"icon",children:e("img",{src:"https://static.twitchcdn.net/assets/creative-6423fb5fbcf31fadee38.svg",alt:""})})]})})]})})}),kn=p.div`
  width: 100%;
  height: 100%;

  .link-box {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid transparent;

    .link {
      color: ${t=>t.theme.textColor};
      transition: 0.3s;
      padding: 5px 10px;
    }

    &:hover {
      .link {
        color: ${t=>t.theme.color};
      }
    }
  }

  .link-box.active {
    border-bottom: 2px solid ${t=>t.theme.color};

    a {
      color: ${t=>t.theme.color};
    }
  }
`,H=({title:t,to:r})=>{const{pathname:n}=ie();return e(kn,{children:e("div",{className:`link-box ${n==r?"active":""}`,children:e(E,{to:r||"/",className:"link",children:t||"default"})})})},Nn=p.div`
  .navigation {
    width: auto;
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    font-weight: 500;

    & > div {
      border-bottom: 2px solid transparent;
      padding: 5px 10px;
      cursor: pointer;
      user-select: none;
      color: ${t=>t.theme.textColor};
    }

    .nav-active {
      border-bottom: 2px solid ${t=>t.theme.color};
      color: ${t=>t.theme.color};
      transition: 0.3s;
    }
  }
`,ye=({tabs:t=[]})=>{const[r,n]=a.exports.useState(0),[o,s]=a.exports.useState(JSON.parse(localStorage.getItem("tabHistory"))||[]);a.exports.useEffect(()=>{o.length!==0&&o>-1&&n(o)},[o]);const c=d=>{n(d),localStorage.setItem("tabHistory",JSON.stringify(d))};return i(Nn,{children:[e("div",{className:"tab-manager",children:e("div",{className:"navigation",children:t.map((d,m)=>e("div",{className:r===m?"nav-active":"",onClick:()=>c(m),children:d.title},m))})}),e(wt,{index:r,onChangeIndex:c,children:t.map((d,m)=>e("div",{style:{position:"relative"},children:d.component},m))})]})},ce=()=>{a.exports.useState(!0);const{ipos:t}=B(r=>r.ipos);return e(D,{children:i(bn,{children:[e("div",{className:"container",children:e(ye,{tabs:[{name:"all",title:"All",component:e("div",{className:"",children:t.map((r,n)=>e(Ee,{ipo:r,imageId:n},n))})},{name:"mainline",title:"Mainline",component:e("div",{className:"",children:t.map((r,n)=>r.type!=="mainline"?null:e(Ee,{ipo:r,imageId:n},n))})},{name:"sme",title:"SME",component:e("div",{className:"",children:t.map((r,n)=>r.type!=="sme"?null:e(Ee,{ipo:r,imageId:n},n))})}]})}),e("div",{className:"browse-desktop",children:i("div",{className:"ipo-box",children:[e("h1",{className:"page-title",children:"Browse"}),e(wn,{}),e("div",{className:"nav",children:i("ul",{children:[e("li",{children:e(H,{to:"/browse",title:"Categories"})}),e("li",{children:e(H,{to:"/browse/all",title:"Live Channels"})})]})}),i("div",{className:"search-filter",children:[i("div",{className:"search-box",children:[e("span",{children:"Filter by"}),e(Et,{placeholder:"Search Tags"})]}),i("div",{className:"filter",children:[e("span",{children:"Sort by"}),i("div",{className:"sort",children:["Recommended For You",e("div",{className:"sort-icon",children:e(kt,{})})]})]})]}),e(Ce,{})]})})]})})},Sn=p.div`
  //Following mobile
  .follow-mobile {
    display: none;

    .follow-box {
      padding: 75px 10px;
      background-color: ${t=>t.theme.header};
      color: ${t=>t.theme.textColor};
      position: relative;
      z-index: 3;
      animation: pageAnim 0.3s ease-in-out;

      h1 {
        background-color: ${t=>t.theme.header};
      }

      h3 {
        font-size: 18px;
        width: 100%;
        position: sticky;
        top: 50px;
        padding: 8px 0;
        background-color: ${t=>t.theme.header};
      }
    }

    @media (max-width: 767px) {
      display: block;
    }
  }

  //Following Desktop
  .follow-desktop {
    display: none;

    .follow-box {
      display: block;
      padding: 8.5rem 1rem;

      .page-title {
        color: ${t=>t.theme.textColor};
        font-size: 50px;
        padding: 30px 0;
      }

      .nav {
        ul {
          display: flex;
          gap: 5px;

          li {
            font-size: 18px;
            height: 35px;
            font-weight: 500;
            margin-right: 10px;
          }
        }
      }
    }

    @media (min-width: 768px) {
      display: block;
    }
  }
`,Cn=p.div`
  .channel-box {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    z-index: 2;

    .live-screen {
      position: relative;
      width: 35%;
      min-width: 150px !important;
      min-height: 50px;
      background-color: black;
      border-radius: 3px;
      overflow: hidden;
      z-index: -1;

      span {
        position: absolute;
        bottom: 2px;
        left: 5px;
        color: #fff;
        font-size: 12px;
        display: flex;
        align-items: center;
        text-shadow: 0 1px 1px #000;
        gap: 3px;

        .live-icon {
          color: red;
          font-size: 9px;
        }
      }
    }

    .live-info {
      flex: 1;
      padding: 0 10px;

      .user {
        display: flex;

        .user-pp {
          width: 15px;
          height: 15px;
          border-radius: 999px;
          overflow: hidden;
        }

        .user-name {
          padding-left: 5px;
          color: ${t=>t.theme.textColor};
          font-weight: 600;
        }
      }

      .title,
      .game {
        color: ${t=>t.theme.soft};
        font-size: 14px;
      }

      .tags {
        display: flex;
        font-size: 13px;

        .tag {
          padding: 2px 5px;
          background-color: ${t=>t.theme.textColor}10;
          border-radius: 999px;
          color: ${t=>t.theme.textColor};
        }
      }
    }
  }
`,$n=({user:t,imageId:r})=>e(Cn,{children:i("div",{className:"channel-box",children:[i("div",{className:"live-screen",children:[e("img",{src:t.liveScreen,alt:""}),i("span",{children:[e(gt,{className:"live-icon"})," ",t.viewers]})]}),i("div",{className:"live-info",children:[i("div",{className:"user",children:[e("div",{className:"user-pp",children:e("img",{src:`https://i.pravatar.cc/5${r}`,alt:""})}),e("div",{className:"user-name",children:t.username})]}),e("div",{className:"title",children:t.title}),e("div",{className:"game",children:t.game}),e("div",{className:"tags",children:e("div",{className:"tag",children:t.tag})})]})]})}),zn=()=>{const{users:t}=B(r=>r.user);return e(D,{children:t.map((r,n)=>e($n,{user:r,imageId:n},n))})},In=p.div`
  .offline-box {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 10px 0 20px 0;

    .left {
      width: 30px;
      margin-right: 10px;

      .pp {
        border-radius: 999px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }

    .right {
      font-size: 15px;
      color: ${t=>t.theme.textColor};

      .username {
        font-weight: 600;
        cursor: pointer;
      }
      .videos {
        font-size: 13px;
      }
    }
  }
`,Fn=({user:t,imageId:r})=>e(In,{children:i("div",{className:"offline-box",children:[e("div",{className:"left",children:e("div",{className:"pp",children:e("img",{src:`https://i.pravatar.cc/5${r}`,alt:""})})}),i("div",{className:"right",children:[e("div",{className:"username",children:t.username}),e("div",{className:"videos",children:"7 new videos"})]})]})}),Mn=()=>{const{users:t}=B(r=>r.user);return e(D,{children:t.map((r,n)=>{if(n<3)return e(Fn,{user:r,imageId:n},n)})})},Dn=()=>(ie(),e(D,{children:i(Sn,{children:[e("div",{className:"follow-mobile",children:i("div",{className:"follow-box",children:[e("h1",{children:"Following"}),e("h3",{children:"Your Live Channels"}),e(zn,{}),e("h3",{children:"Your Offline Channels"}),e(Mn,{})]})}),e("div",{className:"follow-desktop",children:i("div",{className:"follow-box",children:[e("div",{className:"nav",children:i("ul",{children:[e("li",{children:e(H,{to:"/following",title:"Overview"})}),e("li",{children:e(H,{to:"/following/live",title:"Live"})}),e("li",{children:e(H,{to:"/following/videos",title:"Videos"})}),e("li",{children:e(H,{to:"/following/categories",title:"Categories"})})]})}),e("div",{className:"page",children:e(Ce,{})})]})})]})})),An=p.div`
  .channel-box {
    margin-top: 10px;
    flex: 1;

    .live-screen {
      cursor: pointer;
      transition: 0.2s;
      position: relative;

      img {
        transition: 0.2s;
      }

      .live {
        position: absolute;
        top: 7%;
        left: 5%;
        color: #fff;
        background-color: red;
        padding: 2px 4px;
        font-size: 13px;
        text-transform: uppercase;
        font-weight: 500;
        border-radius: 5px;
        transition: 0.2s;
      }
      .viewers {
        position: absolute;
        bottom: 7%;
        left: 5%;
        padding: 2px 3px;
        color: #fff;
        font-size: 13px;
        border-radius: 5px;
        background-color: rgba(0, 0, 0, 0.7);
        transition: 0.2s;
      }
      .invisible {
        display: none;
      }

      .video {
        display: none;

        .video-tag {
          position: absolute;
          padding: 2px 3px;
          color: #fff;
          font-size: 13px;
          border-radius: 5px;
          transition: 0.2s;
        }
        .top {
          top: 7%;
          left: 5%;
          background-color: rgba(0, 0, 0, 0.7);
        }
        .bottom {
          position: absolute;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          bottom: 7%;
          left: 5%;
        }

        .bottom-right {
          bottom: 7%;
          right: 5%;
          background-color: rgba(0, 0, 0, 0.7);
        }
        &.video-visible {
          display: block;
        }
      }

      &:hover {
        background-color: ${t=>t.theme.color};

        img,
        .live,
        .viewers,
        .video > * {
          transform: translate(6px, -3px);
        }
      }
    }

    .channel-info {
      display: flex;
      justify-content: space-between;
      padding: 5px;

      .left {
        display: flex;

        .pp {
          display: block;

          img {
            width: 40px;
            height: 40px;
            border-radius: 999px;
            cursor: pointer;
          }
        }

        .profile-info {
          padding: 0 10px;
          font-size: 14px;
          color: ${t=>t.theme.textColor};

          .title {
            font-weight: 500;
          }
          .username {
            padding: 5px 0;
          }

          .username,
          .game {
            cursor: pointer;
            color: ${t=>t.theme.soft};
          }

          .tags {
            display: flex;
            gap: 5px;
            align-items: center;
            margin-top: 5px;

            .tag {
              padding: 4px 8px;
              background-color: ${t=>t.theme.hover};
              border-radius: 10px;
              cursor: pointer;
            }
          }
        }
      }

      .right {
        cursor: pointer;
      }
    }
  }
  @media (max-width: 1679px) {
    &:nth-last-child(1) {
      display: none;
    }
  }
  @media (max-width: 1439px) {
    &:nth-last-child(2) {
      display: none;
    }
  }
  @media (max-width: 1279px) {
    &:nth-last-child(3) {
      display: none;
    }
  }
  @media (max-width: 1023px) {
    &:nth-last-child(4) {
      display: none;
    }
  }
`,En=p.div`
  .channels-box {
    display: block;
    margin-top: 30px;
    color: ${t=>t.theme.textColor};

    h1 {
      font-size: 18px;
      font-weight: 500;
      padding: 5px 0;
    }

    .list {
      display: flex;
      gap: 10px;
    }
  }
`,Ln=({user:t,imageId:r,video:n})=>e(An,{children:i("div",{className:"channel-box",children:[i("div",{className:"live-screen",children:[e("img",{src:t.liveScreen,alt:""}),e("div",{className:`live ${n?"invisible":""}`,children:"live"}),e("div",{className:`viewers ${n?"invisible":""}`,children:"333 viewers"}),i("div",{className:`video ${n?"video-visible":""}`,children:[e("div",{className:"video-tag top",children:"11:44"}),e("div",{className:"video-tag bottom-right",children:"4 hours ago"}),e("div",{className:"video-tag bottom",children:"188 views"})]})]}),i("div",{className:"channel-info",children:[i("div",{className:"left",children:[e("div",{className:"pp",children:e("img",{src:`https://i.pravatar.cc/5${r}`,alt:""})}),i("div",{className:"profile-info",children:[e("div",{className:"title",children:t.title}),e("div",{className:"username",children:t.username}),e("div",{className:"game",children:t.game}),i("div",{className:"tags",children:[e("div",{className:"tag",children:"English"}),e("div",{className:"tag",children:"Esports"})]})]})]}),e("div",{className:"right",children:e(Oe,{})})]})]})}),O=({channelTitle:t,video:r})=>{const{users:n}=B(o=>o.user);return e(En,{children:i("div",{className:"channels-box",children:[t&&e("h1",{children:t}),e("div",{className:"list",children:n.map((o,s)=>{if(s<6)return e(Ln,{user:o,imageId:s,video:r},s)})})]})})},ct=()=>i(D,{children:[e(O,{}),e(O,{}),e(O,{}),e(O,{}),e(O,{}),e(O,{}),e(O,{}),e(O,{})]}),jn=p.div`
  display: block;
  width: 100%;
  padding: 0 5px;

  .game-box {
    font-size: 15px;
    color: ${t=>t.theme.textColor};

    .game-picture {
      cursor: pointer;
      transition: 0.2s;

      img {
        width: 100%;
        transition: 0.2s;
      }

      &:hover {
        background-color: ${t=>t.theme.color};

        img {
          transform: translate(6px, -3px);
        }
      }
    }

    .game-name {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .name {
        font-weight: 500;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        line-height: 1.6;
        cursor: pointer;
      }

      .other-icon {
        font-size: 13px;
        cursor: pointer;
      }
    }

    .game-viewers {
      display: inline-block;
      font-size: 14px;
      line-height: 1.6;
      color: ${t=>t.theme.soft};
    }

    .tags {
      font-size: 14px;
      margin-top: 5px;

      .tag {
        display: inline-block;
        padding: 4px 8px;
        background-color: ${t=>t.theme.hover};
        border-radius: 10px;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 1919px) {
    &:nth-last-child(-n + 3) {
      display: none;
    }
  }
  @media (max-width: 1679px) {
    &:nth-last-child(-n + 4) {
      display: none;
    }
  }
  @media (max-width: 1439px) {
    &:nth-last-child(-n + 5) {
      display: none;
    }
  }
  @media (max-width: 1279px) {
    &:nth-last-child(-n + 7) {
      display: none;
    }
  }
  @media (max-width: 1023px) {
    &:nth-last-child(-n + 8) {
      display: none;
    }
  }
  @media (max-width: 833px) {
    &:nth-last-child(-n + 9) {
      display: none;
    }
  }
`,Bn=p.div`
  .categories-box {
    display: block;
    margin-top: 30px;

    h1 {
      font-size: 18px;
      font-weight: 500;
      padding: 5px 0;

      span {
        cursor: pointer;
        color: ${t=>t.theme.color};
        font-weight: 600;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .list {
      display: grid;
      margin-top: 10px;
      grid-template-columns: repeat(12, calc(100% / 12));
    }

    @media (max-width: 1919px) {
      .list {
        grid-template-columns: repeat(9, calc(100% / 9));
      }
    }
    @media (max-width: 1679px) {
      .list {
        grid-template-columns: repeat(8, calc(100% / 8));
      }
    }
    @media (max-width: 1439px) {
      .list {
        grid-template-columns: repeat(7, calc(100% / 7));
      }
    }
    @media (max-width: 1279px) {
      .list {
        grid-template-columns: repeat(5, calc(100% / 5));
      }
    }
    @media (max-width: 1023px) {
      .list {
        grid-template-columns: repeat(4, calc(100% / 4));
      }
    }
    @media (max-width: 833px) {
      .list {
        grid-template-columns: repeat(3, calc(100% / 3));
      }
    }
  }
`,Pn=({game:t})=>e(jn,{children:i("div",{className:"game-box",children:[e("div",{className:"game-picture",children:e("img",{src:t.image,alt:""})}),i("div",{className:"game-name",children:[e("div",{className:"name",children:t.name}),e("div",{className:"other-icon",children:e(Oe,{})})]}),i("div",{className:"game-viewers",children:[t.viewer," viewers"]}),e("div",{className:"tags",children:e("div",{className:"tag",children:"English"})})]})}),Rt=({title:t,boldTitle:r})=>{const{games:n}=B(o=>o.category);return e(Bn,{children:i("div",{className:"categories-box",children:[i("h1",{children:[e("span",{children:r})," ",t]}),e("div",{className:"list",children:n.map((o,s)=>e(Pn,{game:o},s))})]})})},Rn=p.div`
  .show-more {
    display: flex;
    align-items: center;
    margin: 30px 0;

    span {
      font-size: 13px;
      font-weight: 600;
      padding: 5px 15px;
      margin: 0 10px;
      background-color: ${t=>t.theme.bodyDesktop};
      color: ${t=>t.theme.color};
      display: flex;
      align-items: center;
      cursor: pointer;
      border-radius: 5px;

      .down-icon {
        font-size: 20px;
      }

      &:hover {
        background-color: ${t=>t.theme.hover};
      }
    }
  }

  .show-more::before,
  .show-more::after {
    content: "";
    height: 1px;
    flex: 1;
    background-color: ${t=>t.theme.hover};
  }
`,ke=({title:t})=>e(Rn,{children:e("div",{className:"show-more",children:t&&i("span",{children:[t,e(kt,{className:"down-icon"})]})})}),_n=()=>i("div",{className:"overview-box",children:[e(O,{channelTitle:"Live channels"}),e(ke,{title:"Show more"}),e(O,{channelTitle:"Recommended channels"}),e(ke,{title:"Show more"}),e(O,{channelTitle:"Latest videos",video:!0}),e(ke,{title:"Show more"}),e(Rt,{title:"Live categories"}),e(ke,{})]}),Tn=()=>e(D,{children:e(O,{channelTitle:"Live channels"})}),On=()=>e(D,{children:i("div",{className:"overview-page",children:[e(O,{channelTitle:"Latest videos",video:!0}),e(O,{video:!0}),e(O,{video:!0}),e(O,{video:!0})]})}),Un=()=>e(D,{children:e(Rt,{title:"Live categories"})}),Xn=p.div`
  // Mobile
  .offers-mobile {
    display: none;

    .offers-box {
      padding: 75px 10px;
      color: ${t=>t.theme.textColor};
      background-color: ${t=>t.theme.header};
      position: relative;
      z-index: 3;
      animation: pageAnim 0.3s ease-in-out;

      .navigation {
        width: 100%;
        display: flex;
        align-items: center;
        margin: 10px 0;
        font-size: 1.8rem;
        font-weight: 500;

        & > div {
          border-bottom: 2px solid transparent;
          padding: 5px 10px;
          cursor: pointer;
          user-select: none;
        }

        .nav-active {
          border-bottom: 2px solid ${t=>t.theme.color};
          color: ${t=>t.theme.color};
          transition: 0.3s;
        }
      }
    }

    @media (max-width: 767px) {
      display: block;
    }
  }

  //Offers Desktop
  .offers-desktop {
    display: none;

    .offers-box {
      display: block;

      .page-title {
        color: ${t=>t.theme.textColor};
        font-size: 50px;
        padding: 30px 0;
      }

      .nav {
        ul {
          display: flex;
          gap: 5px;

          li {
            font-size: 18px;
            height: 35px;
            font-weight: 500;
            margin-right: 10px;
          }
        }
      }
    }

    @media (min-width: 768px) {
      display: block;
    }
  }
`,Gn=p.div`
  border-bottom: 1px solid #ebe7e7;
  padding-bottom: 10px;

  .offer-box {
    .offer-name {
      padding: 10px 0;
      font-weight: 500;
      font-size: 1.6rem;
    }

    .know-more button {
      margin-top: 5px;
      background-color: ${t=>t.theme.color};
      padding: 10px 14px;
      width: 115px;
      border-radius: 5px;
      color: rgb(255, 255, 255);
      font-weight: 600;
      cursor: pointer;
      -webkit-transition: all 0.3s ease 0s;
      transition: all 0.3s ease 0s;
    }
  }
`,dt=({offer:t})=>e(Gn,{children:i("div",{className:"offer-box",children:[e("h2",{className:"offer-name",children:t.name}),e(E,{to:"/{offer.href}",children:e("div",{className:"offer-picture",children:e("img",{src:t.image,alt:""})})}),e("div",{className:"know-more",children:e("button",{children:"Know More..."})})]})}),Vn=()=>{const{offers:t}=B(r=>r.offers);return e(D,{children:e("div",{className:"offers-mobile",children:i(Xn,{children:[e(ye,{tabs:[{name:"brokers",title:"Brokers",component:e("div",{className:"container",children:t.map((r,n)=>{if(r.type!=="advisor")return e(dt,{offer:r,imageId:n},n)})})},{name:"advisors",title:"Advisors",component:e("div",{className:"container",children:t.map((r,n)=>{if(r.type!=="advisor")return e(dt,{offer:r,imageId:n},n)})})}]}),e("div",{className:"offers-desktop",children:i("div",{className:"offers-box",children:[e("h1",{className:"page-title",children:"Offers"}),e("div",{className:"nav",children:i("ul",{children:[e("li",{children:e(H,{to:"/offers/brokers",title:"Brokers"})}),e("li",{children:e(H,{to:"/offers/advisors",title:"Advisors"})})]})}),e("div",{className:"page",children:e(Ce,{})})]})})]})})})},Jn=p.div`
  border-bottom: 1px solid #ebe7e7;
  padding-bottom: 10px;

  .offer-box {
    display: flex;
    background: white;
    padding: 2rem;
    margin: 1rem 0;

    .left-side {
      display: flex;
      flex-direction: column;

      .picture img {
        width: 120px;
      }

      .name {
        font-size: 1.6rem;
        font-weight: 500;
      }
    }

    .right-side {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding: 10px;

      .available-options,
      .action-buttons {
        display: flex;
        list-style: none;
        gap: 10px;
        margin-bottom: 2rem;
      }

      .action-buttons {
        li {
          background-color: ${t=>t.theme.color};
        }
      }
      li {
        padding: 1rem 2rem;
        font-size: 1.4rem;
        background-color: #c4834a;
        color: white;
      }

      .new-info {
        font-size: 1.4rem;

        li {
          color: inherit;
          background: inherit;
        }
      }
    }

    @media (min-width: 768px) {
      // display: block;
    }
  }
`,pt=({type:t=""})=>{const{offers:r}=B(n=>n.offers);return e(Jn,{children:r.map((n,o)=>{if(n.type===t)return i("div",{className:`offer-box offer-${n.id}`,children:[i("div",{className:"left-side",children:[e("div",{className:"picture",children:e("img",{src:n.image,alt:""})}),e("h2",{className:"name",children:n.name})]}),i("div",{className:"right-side",children:[i("div",{children:[i("ul",{className:"available-options",children:[e("li",{children:"Equity"}),e("li",{children:"Future"}),e("li",{children:"Option"}),e("li",{children:"Commodity"})]}),i("ul",{className:"new-info",children:[e("li",{children:"Account Opening"}),e("li",{children:"Account Maintenance"}),e("li",{children:"Account Maintenance"}),e("li",{children:"Account Maintenance"})]})]}),i("ul",{className:"action-buttons",children:[e("li",{children:"View Details"}),e("li",{children:"Open Account"})]})]})]},n.id)})})},Se=t=>t?t.toLowerCase().replace(/\b\w/g,r=>r.toUpperCase()):"",Yn=p.div`
  .scheme-container {
    display: flex;
    -webkit-box-align: center;
    align-items: start;
    width: 100%;
    border-bottom: 1px solid rgb(224, 224, 224);
    padding: 1rem;
    border-radius: 1rem;
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 20%;
    object-fit: contain;
    border: 1px solid #ececec;
  }

  .info {
    flex-grow: 1;
    margin: 0 1rem;
    padding-top: 1rem;

    .name {
      font-size: 1.3rem;
      color: ${t=>t.theme.textColor};
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .description {
      font-size: 1.2rem;
      color: #757575;
      margin-top: 4px;
      // text-transform: lowercase;
    }
  }

  .return div {
    font-size: 1.2rem;
    font-weight: 600;
    color: #757575;
    padding-top: 1rem;

    .popular {
      display: none;
    }
  }
`,_t=({scheme:t,activeFilter:r})=>{var n;return e(Yn,{children:e(E,{className:"link",to:`/mutual-fund/${t.Scheme_Code}`,title:t.name,children:i("div",{className:"scheme-container",children:[e("div",{className:"image",children:e("img",{src:`./images/amc-logo/${(n=t.amc_logo)!=null?n:"404-tp.png"}`,alt:""})}),i("div",{className:"info",children:[e("div",{className:"name",children:Se(t.Scheme_Name)}),i("div",{className:"description",children:[e("strong",{children:"Type: "})," ",Se(t.Scheme_Type)]})]}),e("div",{className:"return",children:i("div",{className:"1",children:[e("span",{className:"normal",children:"10%"}),i("span",{className:"popular",children:["3Y ",e("br",{})," 15%"]})]})})]})})})},Hn=()=>e(D,{children:i(V,{sx:{display:"flex",flexDirection:"column",gap:2,width:"100%",justifyContent:"center",marginTop:5},children:[e(j,{variant:"text",sx:{fontSize:"1rem"}}),e(j,{variant:"circular",width:60,height:60}),e(j,{variant:"h1",sx:{fontSize:"1rem"}}),e(j,{variant:"h1",sx:{fontSize:"1rem"}}),e(j,{variant:"rectangular",width:"100%",height:300}),e(j,{variant:"h1",sx:{fontSize:"1rem",width:"300px"}}),i(V,{sx:{display:"flex",flexDirection:"row",gap:3,width:"100%",justifyContent:"center",marginTop:4},children:[e(j,{variant:"rounded",width:210,height:60}),e(j,{variant:"rounded",width:210,height:60})]}),e(j,{variant:"h1",sx:{fontSize:"3rem"}}),e(j,{variant:"h1",sx:{fontSize:"3rem"}})]})}),qn=()=>e(D,{children:[0,1,2,3,4,5].map(t=>i(V,{sx:{display:"flex",flexDirection:"column",gap:1,width:"100%"},children:[e(j,{variant:"rounded",width:230,height:85}),i(V,{sx:{pt:.5},children:[e(j,{}),e(j,{width:"60%"})]})]},t))}),Wn=()=>e(D,{children:[0,1,2,3,4,5].map(t=>i(V,{sx:{my:2},children:[e(j,{variant:"rounded",width:50,height:50}),i(V,{sx:{pt:.5},children:[e(j,{}),e(j,{width:"60%"})]})]},t))}),Kn=()=>e(D,{children:[0,1,2,3,4,5].map(t=>i(V,{sx:{display:"flex",alignItems:"justify-center",marginBottom:"30px"},children:[e(V,{sx:{width:60,height:60,marginRight:2},children:e(j,{variant:"rounded",width:60,height:60})}),i(V,{sx:{pt:.5},width:"100%",children:[e(j,{}),e(j,{width:"60%"})]})]},t))}),Qn=()=>e(D,{children:[0,1,2,3,4,5].map(t=>i(V,{sx:{display:"flex",flexDirection:"column",gap:1,width:"100%"},children:[e(j,{variant:"rounded",width:230,height:60}),i(V,{sx:{pt:.5},children:[e(j,{}),e(j,{width:"60%"})]})]},t))});p.div`
  border: 1px solid #e0e0e0;

  .amc-image {
    margin-right: auto;
    
    img {
      border-radius: 20%;
      object-fit: cover;
    }
  }

  .amc-details {
    display: flex;
    justify-content: space-between;
    width: 100%;
    
    .amc-content{
      max-width: 210px;
      // font-weight: 600;

      .name {
        // font-size: 1.2rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: ${t=>t.theme.textColor};
      }
      .description {
        font-size: 10px;
        color: #757575;
        margin-top: 4px;
        
        svg{
          vertical-align: middle;
        }
      }
    }

  .return{
    text-align: right;
    // font-weight: 600;
    color: #757575;
    
    .total-return{
      // font-weight: 700;
      font-size: 12px;
    }
  }

@media (min-width: 768px) {
  .name {
    font-size: 1.4rem;
  }
}
`;const Tt=({schemes:t,loading:r})=>e(D,{children:r?qn():t.map((n,o)=>e(_t,{scheme:n},o))}),Zn=p.div`
  .quick-access-container {
    display: flex;
    overflow: auto;
    gap: 1.5rem;
    margin-top: 10px;

    .item {
      display: flex;
      min-width: 20rem;
      flex-direction: row;
      align-items: flex-start;
      gap: 1rem;
      border: 1px solid rgb(224, 224, 224);
      padding: 1rem;
      border-radius: 1rem;
      font-size: 1.3rem;

      .name {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: ${t=>t.theme.textColor};
        p {
          font-size: 1.4rem;
          font-weight: 600;
        }
        img {
          width: 3rem;
        }
      }
      .description {
        margin-top: 2rem;
        color: ${t=>t.theme.soft};
      }
    }
  }

  @media (min-width: 768px) {
    .name {
      font-size: 1.4rem;
    }
  }
`,Ot=({loading:t})=>e(Zn,{children:e("div",{className:"quick-access-container",children:t?Qn():[{name:"SIP Calculator",url:"/return-calculator",logo:"sip-calc.webp",desc:"Easily calculate SIP returns and plan your investments."},{name:"Loan Calculator",url:"/loan",logo:"sip-calc.webp",desc:"Estimate loan payments and interest rates accurately."}].map((n,o)=>e("div",{className:"item",children:i(E,{className:"link",to:n.url,children:[i("div",{className:"name",children:[e("img",{src:`./images/${n.logo}`,alt:""}),e("p",{children:n.name})]}),e("div",{className:"description",children:Se(n.desc)})]})},o))})}),Ut=({collections:t,loading:r})=>e(D,{children:r?Wn():t.map((n,o)=>i(E,{to:`/schemes/${n.url}`,children:[e("div",{className:"",children:e("img",{src:`./public/images/collection/${n.image}`,alt:""})}),e("div",{className:"name",children:n.name})]},o))}),er=p.div`
  display: flex;
  justify-content: space-between;
  // margin: 1rem 0;

  .filter-button {
    padding: 0.2rem 0;
    cursor: pointer;
    transition: background-color 0.3s;
    border-radius: 5px;
    font-size: 1.4rem;
    font-weight: 600;
    // color: ${t=>t.theme.textColor};
    color: ${t=>t.theme.color};
    background-color: ${t=>t.theme.header};
    cursor: pointer;
    border-bottom: 1px dashed;
  }
`,tr=({activeFilter:t,onFilterChange:r})=>{const[n,o]=a.exports.useState(1),s=c=>{r(c),o(c==3?1:c+1)};return e(er,{children:i("div",{className:"year-filters",children:[n===1&&e("button",{className:"filter-button",onClick:()=>s(1),children:"< > 1Y Returns"}),n===2&&e("button",{className:"filter-button",onClick:()=>s(2),children:"< > 3Y Returns"}),n===3&&e("button",{className:"filter-button",onClick:()=>s(0),children:"< > 5Y Returns"})]})})},ir=p.div`
  .section-head {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 1rem 0px;
    align-items: center;

    h2 {
      font-size: 1.8rem;
    }
  }
`,we=({schemes:t,loading:r,customHeader:n})=>{const[o,s]=a.exports.useState(0),[c,d]=a.exports.useState(!1);return r===!1&&t.length===0&&d(!0),i(ir,{children:[e("div",{className:"section-head",children:n?e("h2",{children:n}):i(D,{children:[e(E,{className:"filter-button",to:"/sort-filter",children:"Filter & Sort"}),e(tr,{activeFilter:o,onFilterChange:s})]})}),r?Kn():t.map((m,b)=>e(_t,{scheme:m},b))]})},nr=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .hide {
    display: none;
  }

  h2 {
    font-size: 3rem;
    text-transform: uppercase;
    margin: 2rem;
    text-align: center;
  }

  .amount-suggestion {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    margin: 2rem;
    .suggestion {
      cursor: pointer;
      &.active { 
        color: ${t=>t.theme.color};
      }
    }
  }

  .frequency {
    text-align: center;
    font-size: 1.4rem;
    margin-top: 4rem;

    select {
      padding: 1rem;
      font-size: 1.4rem;
    }
  }

  .order-status {
    text-align: center;
    margin-top: 4rem;
    font-size: 1.6rem;
    color: green;
  }

  input[type="text"],
  input[type="number"] {
    padding: 0px 10px;
    border: 0.2rem solid rgb(236, 236, 236);
    margin: 0.5rem;
    width: 25rem;
    height: 5rem;
    display: flex;
    font-size: 2.5rem;
    text-align: center;
    letter-spacing: 5px;
  }

  .actions {
    bottom: 0px;
    z-index: 10;
    width: 100%;
    color: white;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-evenly;
    gap: 1rem;
    padding: 2rem;
    left: 0;
    right: 0;
    max-width: 138rem;
    margin-left: auto;
    margin-right: auto;

    &.mobile {
      position: fixed;
    }

    button {
      background: ${t=>t.theme.color};
      padding: 1.5rem;
      border-radius: 10px;
      font-size: 1.6rem;
      line-height: 1.5rem;
      width: 50%;
      // display: inline-block;
    }
  }
`,be=t=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",minimumFractionDigits:0,maximumFractionDigits:0}).format(t),ue=({type:t,mySize:r,loading:n})=>{a.exports.useState(!0);const[o,s]=a.exports.useState(500),[c,d]=a.exports.useState(""),m=[500,1e3,2e3,5e3],b=a.exports.useRef(),w=a.exports.useRef(),x=g=>{const $=["th","st","nd","rd"],v=g%100;return g+($[(v-20)%10]||$[v]||$[0])},y=(()=>Array.from({length:25},(g,$)=>x($+1)))(),u=(g="")=>{d(`Success: ${g}`),console.log(b.current.value),console.log(w.current.value)};return i(nr,{children:[e("h2",{children:t}),e("input",{type:"number",placeholder:"Enter amount",value:o,onChange:g=>s(g.target.value),ref:b}),e("div",{className:"amount-suggestion",children:m.map(g=>e("div",{className:`suggestion ${o===g?"active":""}`,onClick:()=>s(g),children:be(g)},g))}),e("div",{className:`frequency ${t!=="sip"?"hide":""}`,children:i("select",{onChange:g=>console.log(g.target.value.slice(0,-2)),ref:w,children:[e("option",{value:"",children:"Select Date Of SIP"}),y.map(g=>i("option",{value:g,children:[g," of every month"]},g))]})}),e("div",{className:"order-status",children:c}),i("div",{className:`actions ${r<768?"mobile":"desktop"}`,children:[e(F,{onClick:()=>u("Added to cart"),children:"Add To Cart"}),e(F,{onClick:()=>u("SIP started"),children:"Invest Now"})]})]})},rr=p.div`
  border-bottom: 1px solid #ebe7e7;
  padding-bottom: 10px;
  overflow-y: hidden;

  .explore-box {
    padding: 2rem 1rem 0;
    background: white;
  }

  .navigation {
    margin-bottom: 3rem;
  }

  .division {
    margin-bottom: 6rem;
  }
  .nav {
    ul {
      display: flex;
      gap: 5px;

      li {
        font-size: 18px;
        height: 35px;
        font-weight: 500;
        margin-right: 10px;
      }
    }
  }
  h2 {
    color: ${t=>t.theme.textColor};
    font-size: 18px;
  }

  .popular-funds {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;

    .link {
      font-size: 16px;
      color: ${t=>t.theme.color};
      font-weight: 700;
    }
  }

  .popular-items {
    display: flex;
    overflow: auto;
    gap: 1.5rem;
    margin-top: 10px;
    position: relative;
    width: 100%;
    overflow: hidden;
    &:hover {
      .scroll-btn {
        display: block;
      }
    }
    .scroll-btn {
      display: none;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 10;
      background-color: rgb(103 92 92 / 20%);
      color: white;
      border: none;
      cursor: pointer;
      padding: 1rem;
      height: 100%;
      color: ${t=>t.theme.color};
      font-size: 2rem;
    }
    .previous-btn {
      left: 0px;
    }
    .next-btn {
      right: 0px;
    }

    .scheme-container {
      display: flex;
      min-width: 27rem;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
      border: 1px solid rgb(224, 224, 224);
      padding: 1rem;
      position: relative;

      .info {
        margin-left: 0;
        padding: 0;
        .name {
          -webkit-line-clamp: 1;
        }
      }
      .return {
        position: absolute;
        right: 0;
        margin-right: 1rem;
        div {
          padding-top: 0;
        }
        .normal {
          display: none;
        }
        .popular {
          display: initial;
        }
      }
    }
  }

  .popular-items::-webkit-scrollbar {
    display: none;
  }

  .collection-section {
    .collection-items {
      margin-top: 15px;
      display: grid;
      margin-top: 15px;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      justify-items: center;
      align-items: center;
      row-gap: 2rem;
      --main-color: red;

      img {
        height: 5rem;
      }
      .name {
        font-size: 1.4rem;
        margin-top: 1rem;
      }
    }
  }

  .quick-access-container {
    display: flex;
    overflow: auto;
    gap: 1.5rem;
    margin-top: 10px;

    .item {
      display: flex;
      min-width: 20rem;
      flex-direction: row;
      align-items: flex-start;
      gap: 1rem;
      border: 1px solid rgb(224, 224, 224);
      padding: 1rem;
      border-radius: 1rem;
      font-size: 1.3rem;

      .name {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        p {
          font-size: 1.4rem;
          font-weight: 600;
        }
        img {
          width: 3rem;
        }
      }
      .description {
        margin-top: 2rem;
        // font-size: 1.2rem;
      }
    }
  }

  @media (min-width: 768px) {
    .amc-info {
      .name {
        font-size: 1.4rem;
        color: #44475b;
        font-weight: 600;
      }
    }
    .collection-container {
      .collection-content {
        .name {
          font-size: 1.4rem;
        }
      }
    }
  }
`,mt=()=>{const{collections:t}=B(v=>v.amcCollection),[r,n]=a.exports.useState(!1),[o,s]=a.exports.useState([]),[c,d]=a.exports.useState(void 0),[m,b]=a.exports.useState(!0);a.exports.useEffect(()=>{(async()=>{try{const h=await ge("schemes");s(h)}catch(h){d(h)}finally{b(!1)}})()},[]);const[w,x]=a.exports.useState(!1);a.exports.useEffect(()=>{const v=Nt.throttle(()=>{console.log("ss");const h=window.scrollY;x(h>10)},200);return window.addEventListener("scroll",v),()=>{window.removeEventListener("scroll",v)}},[]);const l=a.exports.useRef(null),[y,u]=a.exports.useState(0),g=()=>{l.current&&(l.current.scrollBy({left:200,behavior:"smooth"}),u(l.current.scrollLeft))},$=()=>{l.current&&(l.current.scrollBy({left:-200,behavior:"smooth"}),u(l.current.scrollLeft))};return a.exports.useEffect(()=>{const v=()=>{l.current&&u(l.current.scrollLeft)},h=l.current;return h.addEventListener("scroll",v),()=>{h.removeEventListener("scroll",v)}},[]),e(rr,{children:e("div",{className:"container",children:i(G,{container:!0,columnSpacing:4,columns:{xs:4,sm:8,md:12},children:[i(G,{item:!0,xs:12,sm:12,md:8,children:[i("div",{className:"navigation",children:[e("div",{className:"nav-active",children:e(H,{to:"/explore",title:"Explore"})}),e("div",{className:"",children:e(H,{to:"/dashboard",title:"Dashboard"})})]}),i("div",{className:"popular-fund-section division",children:[i("div",{className:"popular-funds",children:[e("h2",{children:"Popular Funds"}),e(E,{className:"link",to:"/all-mutual-funds",title:"All Mutual Funds",children:"All Mutual Funds"})]}),i("div",{className:"popular-items",ref:l,children:[e("button",{onClick:$,className:"scroll-btn previous-btn",style:{left:y},children:"\u25C0"}),e(Tt,{schemes:o,loading:m}),e("button",{onClick:g,className:"scroll-btn next-btn",style:{right:-y},children:"\u25B6"})]})]}),i("div",{className:"collection-section division",children:[e("h2",{children:"Collections"}),e("div",{className:"collection-items",children:e(Ut,{collections:t,loading:r})})]}),i("div",{className:"quick-access-section quick-access-container division",children:[e("h2",{children:"Quick Access"}),e(Ot,{loading:m})]}),e("div",{className:"all-mf-section division",children:e(we,{schemes:o,loading:m})})]}),e(G,{item:!0,xs:12,md:4,sx:{display:{xs:"none",sm:"none",md:"block"}},children:e(V,{sx:{p:2,position:w?"fixed":"relative",top:w?80:"initial",width:w?"44rem":"auto",zIndex:10,border:"1px solid rgb(145 71 255 / 20%)",borderRadius:1},children:e(ye,{tabs:[{name:"sip",title:"SIP",component:e(ue,{type:"sip"})},{name:"one-time",title:"One-Time",component:e(ue,{type:"one-time"})}]})})})]})})})},Q=(t,r)=>{var s;let n=Math.abs(t);n=(s=n==null?void 0:n.toFixed(0))==null?void 0:s.replace(/\B(?=(\d{3})+(?!\d))/g,",");let o=n.split(",");if(o.length>1){let c=o[o.length-1];n=o.slice(0,o.length-1).join("").replace(/\B(?=(\d{2})+(?!\d))/g,",")+","+c}return r==="simple"?{paisa:`\u20B9${n}`}:{paisa:t>0?`+ \u20B9${n}`:`- \u20B9${n}`,color:t>0?"#0add8c":"#f00"}},or=p.div`
  .nav {
    ul {
      display: flex;
      gap: 5px;

      li {
        font-size: 18px;
        height: 35px;
        font-weight: 500;
        margin-right: 10px;
      }
    }
  }
  .investment-container {
    border: 1px solid ${t=>t.theme.border};
    border-radius: 5px;
    .total-amt {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 10px;

      .amt-section {
        display: flex;
        justify-content: space-between;
      }

      .amt-box {
        .title {
          text-align: left;
        }
      }
      .amt-box,
      .return {
        .amt {
          font-size: 16px;
        }
        .title {
          color: #757575;
          font-size: 10px;
        }
      }
      .return {
        text-align: right;
      }
    }
  }

  .xirr-return {
    display: flex;
    font-size: 12px;
    border-top: 1px solid ${t=>t.theme.border};
    justify-content: space-between;
    padding: 10px 20px;

    div {
      span {
        color: #757575;
        font-size: 10px;
        margin-right: 10px;
      }
    }
    a {
      color: ${t=>t.theme.color};
    }
  }
`,ar=()=>{B(n=>n.schemes);const t=6e3,r=-5e3;return e(or,{children:i("div",{className:"container",children:[i("div",{className:"navigation division",children:[e("div",{className:"",children:e(H,{to:"/explore",title:"Explore"})}),e("div",{className:"nav-active",children:e(H,{to:"/dashboard",title:"Dashboard"})})]}),e("div",{className:"division section-heading",children:e("h2",{children:"Investments"})}),i("div",{className:"investment-container",children:[i("div",{className:"total-amt",children:[i("div",{className:"amt-section current",children:[i("div",{className:"amt-box",children:[e("div",{className:"title",children:"Current"}),i("div",{className:"amt",style:{color:Q(t,"simple").color},children:[Q(t,"simple").paisa," "]})]}),i("div",{className:"return",children:[e("div",{className:"title",children:"Total Returns"}),i("div",{className:"amt",style:{color:Q(t).color},children:[Q(t).paisa," "]})]})]}),i("div",{className:"amt-section invested",children:[i("div",{className:"amt-box",children:[e("div",{className:"title",children:"Invested"}),i("div",{className:"amt",style:{color:Q(r,"simple").color},children:[Q(r,"simple").paisa," "]})]}),i("div",{className:"return",children:[e("div",{className:"title",children:"1D Returns"}),i("div",{className:"amt",style:{color:Q(r).color},children:[Q(r).paisa," "]})]})]})]}),i("div",{className:"xirr-return",children:[i("div",{className:"",children:[e("span",{children:"XIRR"}),"17.23%"]}),e(E,{to:"",title:"aa",children:"Portfolio analysis"})]})]})]})})},sr=p.div`
  border-bottom: 1px solid #ebe7e7;
  padding-bottom: 10px;
  overflow-y: hidden;

  .explore-box {
    padding: 2rem 1rem 0;
    background: white;
  }

  h2 {
    color: ${t=>t.theme.textColor};
    font-size: 18px;
  }
  .division {
    margin-bottom: 30px;
  }

  .popular-funds {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;

    .link {
      font-size: 16px;
      color: ${t=>t.theme.color};
      font-weight: 700;
    }
  }

  .popular-items {
    display: flex;
    overflow: auto;
    gap: 1.5rem;
    margin-top: 10px;

    .scheme-container {
      display: flex;
      min-width: 27rem;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
      border: 1px solid rgb(224, 224, 224);
      padding: 1rem;
      position: relative;

      .info {
        margin-left: 0;
        padding: 0;
        .name {
          -webkit-line-clamp: 1;
        }
      }
      .return {
        position: absolute;
        right: 0;
        margin-right: 1rem;
        div {
          padding-top: 0;
        }
        .normal {
          display: none;
        }
        .popular {
          display: initial;
        }
      }
    }
  }

  .popular-items::-webkit-scrollbar {
    display: none;
  }

  .collection-section {
    .collection-items {
      margin-top: 15px;
      display: grid;
      margin-top: 15px;
      grid-template-columns: 1fr 1fr 1fr;
      justify-items: center;
      align-items: center;
      row-gap: 2rem;
      --main-color: red;

      img {
        height: 5rem;
      }
      .name {
        font-size: 1.3rem;
        margin-top: 1rem;
        color: ${t=>t.theme.textColor};
      }
    }
  }

  @media (min-width: 768px) {
    .amc-info {
      .name {
        font-size: 1.4rem;
        color: #44475b;
        font-weight: 600;
      }
    }
    .collection-container {
      .collection-content {
        .name {
          font-size: 1.4rem;
        }
      }
    }
  }
`,lr=()=>{const{collections:t}=B(w=>w.amcCollection),[r,n]=a.exports.useState(!1),[o,s]=a.exports.useState([]),[c,d]=a.exports.useState(void 0),[m,b]=a.exports.useState(!0);return a.exports.useEffect(()=>{(async()=>{try{const x=await ge("schemes");s(x)}catch(x){d(x)}finally{b(!1)}})()},[]),e(sr,{children:i("div",{className:"mobile-container",children:[i("div",{className:"popular-fund-section division",children:[i("div",{className:"popular-funds",children:[e("h2",{children:"Popular Funds"}),e(E,{className:"link",to:"/all-mutual-funds",title:"All Mutual Funds",children:"All Mutual Funds"})]}),e("div",{className:"popular-items",children:e(Tt,{schemes:o,loading:m})})]}),i("div",{className:"collection-section division",children:[e("h2",{children:"Collections"}),e("div",{className:"collection-items",children:e(Ut,{collections:t,loading:r})})]}),i("div",{className:"quick-access-section division",children:[e("h2",{children:"Quick Access"}),e("div",{className:"popular-items",children:e(Ot,{schemes:o,loading:m})})]}),e("div",{className:"all-mf-section division",children:e(we,{schemes:o,loading:m})})]})})};p.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;p.div`
  position: absolute;
  top: 1rem;
  bottom: 1rem;
  z-index: 90;
  background: white;
  width: 95%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid rgba(145, 71, 255, 0.5);
  padding: 1rem;
  box-shadow: rgba(145, 71, 255, 0.5) 0 0.2rem 10rem;
  z-index: ${t=>t.shouldHaveBackdrop?1001:1e3};

  .close-button {
    position: absolute;
    right: 2rem;
    background: white;
    font-size: 3rem;
  }

  ${({position:t})=>{switch(t){case"bottom":return`
          // bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
        `;case"top":return`
          // top: 20px;
          left: 50%;
          transform: translateX(-50%);
        `;case"left":return`
          left: 20px;
          // top: 50%;
          transform: translateY(-50%);
        `;case"right":return`
          right: 20px;
          // top: 50%;
          transform: translateY(-50%);
        `;default:return""}}}
`;p.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: #ff0000;
  }
`;p.h2`
  margin-top: 0;
  margin-bottom: 15px;
`;p.div`
  margin-top: 15px;
`;re.bool.isRequired,re.func.isRequired,re.oneOf(["bottom","top","left","right"]).isRequired,re.node.isRequired,re.string,re.bool,re.bool;const cr=t=>{const r=`${U()}/api/portfolio/${t}?ajax=true`;return ee(r)},dr=p.div`
  border-bottom: 1px solid #ebe7e7;
  padding-bottom: 10px;
  overflow-y: hidden;

  .explore-box {
    padding: 2rem 1rem 0;
    background: white;
  }

  h2 {
    color: ${t=>t.theme.textColor};
    font-size: 18px;
  }
  .division {
    margin-bottom: 30px;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;

    .link {
      font-size: 16px;
      color: ${t=>t.theme.color};
      font-weight: 700;
    }
  }

  .investment-overview {
    display: flex;
    overflow: auto;
    margin-top: 10px;
    flex-direction: column;
    border: 1px solid rgb(224, 224, 224);
    border-radius: 1rem;

    div.block {
      padding: 1rem;
      width: 100%;
      font-size: 1.4rem;

      .heading,
      .data {
        display: flex;
        justify-content: space-between;
      }
      .data span {
        font-size: 1.6rem;
        font-weight: 400;
        margin-top: 0.5rem;
      }

      label {
        font-size: 1.2rem;
        color: #333;
        margin-bottom: 0.5rem;
        display: block;
      }
    }
  }

  .folio-list {
    display: flex;
    overflow: auto;
    margin-top: 10px;
    flex-direction: column;
    border: 1px solid rgb(224, 224, 224);
    border-radius: 1rem;
    // gap: 1rem;

    .item {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 2rem 1rem;
      border-bottom: 1px solid #e5e5e5;
      cursor: pointer;
      font-size: 1.4rem;
      // transition: background-color 0.2s ease;
      color: ${t=>t.theme.textColor};

      .profile {
        display: flex;
        width: 70%;
        .scheme-name {
          display: flex;
          flex-direction: column;
          p {
            margin-bottom: 0.5rem;
          }
        }
        h3 {
          font-size: 1.4rem;
          width: 100%;
          top: 0;
          padding: 0;
          background: none;
          margin-bottom: 1rem;
        }
        label {
          background: ${t=>t.theme.color};
          border-radius: 1rem;
          width: fit-content;
          padding: 0.2rem 1rem;
          color: white;
          font-size: 1.2rem;
        }
      }
      .return {
        width: 30%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: flex-end;
        p {
          opacity: 1;
          color: ${t=>t.theme.textColor};
        }
        .up {
          color: #28a745;
        }
        .down {
          color: #dc3545;
        }
      }
      img {
        height: 4rem;
        width: 4rem;
        margin-right: 1rem;
      }
      &:hover {
        background-color: #f3f4f6;
      }
      &:last-child {
        border-bottom: none;
      }
    }
  }
`;function pr(){a.exports.useState(null),a.exports.useState(0),a.exports.useState(!1);const[t,r]=a.exports.useState([]);B(o=>o.user);const n=B(o=>o.auth);return console.log(n),a.exports.useEffect(()=>{(async()=>{try{const s=await cr(n.authToken);console.log(s),r(s)}catch{}finally{}})()},[]),e(D,{children:e(dr,{children:i("div",{className:"mobile-container",children:[i("div",{className:"division",children:[e("div",{className:"section-head",children:e("h2",{children:"Investments"})}),i("div",{className:"investment-overview",children:[i("div",{className:"block investment",children:[i("div",{className:"heading",children:[e("span",{children:"Current"}),e("span",{children:"Return"})]}),i("div",{className:"data",children:[e("span",{children:"$1,00,000"}),i("span",{children:["$8,000",i("span",{style:{color:"green"},children:[" ","(35% ",e(De,{size:14}),")"]})]})]})]}),i("div",{className:"block total-asset",children:[i("div",{className:"heading",children:[e("span",{children:"Invested"}),e("span",{children:"1D Return"})]}),i("div",{className:"data",children:[e("span",{children:"$1,00,000"}),i("span",{children:["$150",i("span",{style:{color:"green"},children:[" ","(1.5% ",e(De,{size:14}),")"]})]})]})]})]})]}),e("div",{className:"section-head",children:e("h2",{children:"Active Folios"})}),e("div",{className:"folio-list",children:Object.keys(t).map((o,s)=>{var c,d,m,b,w,x,l,y,u,g,$,v,h;return i(E,{className:"item",to:`/folio/${encodeURIComponent(o)}`,children:[i("div",{className:"profile",children:[e("img",{src:`./images/amc-logo/${(d=(c=Object.values(t)[s])==null?void 0:c.amc_logo)!=null?d:"404-tp.png"}`,alt:""}),i("div",{className:"scheme-name",children:[e("p",{children:(m=Object.values(t)[s])==null?void 0:m.Scheme_Name}),e("label",{children:Se((b=Object.values(t)[s])==null?void 0:b.Scheme_Type)})]})]}),i("div",{className:"return",children:[i("p",{children:["\u20B9"," ",(x=(w=Object.values(t)[s])==null?void 0:w.amount)==null?void 0:x.toLocaleString()]}),i("p",{className:`${((l=Object.values(t)[s])==null?void 0:l.amount)<1?"down":"up"}`,children:[((y=Object.values(t)[s])==null?void 0:y.amount)<1&&i(D,{children:[e(mi,{size:10})," \u20B9"," ",(g=(u=Object.values(t)[s])==null?void 0:u.amount)==null?void 0:g.toLocaleString()]}),(($=Object.values(t)[s])==null?void 0:$.amount)>1&&i(D,{children:[e(De,{size:10})," \u20B9"," ",(h=(v=Object.values(t)[s])==null?void 0:v.amount)==null?void 0:h.toLocaleString()]})]})]})]},s)})})]})})})}const mr=p.div`
  //Following mobile
  .mf-mobile {
    display: none;

    .mf-box {
      // padding: 75px 10px;
      background-color: ${t=>t.theme.header};
      color: ${t=>t.theme.textColor};
      position: relative;
      z-index: 3;
      animation: pageAnim 0.3s ease-in-out;

      h1 {
        background-color: ${t=>t.theme.header};
      }

      h3 {
        font-size: 18px;
        width: 100%;
        position: sticky;
        top: 50px;
        padding: 8px 0;
        background-color: ${t=>t.theme.header};
      }
    }

    @media (max-width: 767px) {
      display: block;
    }
  }

  //Following Desktop
  .mf-desktop {
    display: none;

    .mf-box {
      display: block;
      // padding: 8.5rem 1rem;

      .page-title {
        color: ${t=>t.theme.textColor};
        font-size: 50px;
        padding: 30px 0;
      }

      .nav {
        ul {
          display: flex;
          gap: 5px;

          li {
            font-size: 18px;
            height: 35px;
            font-weight: 500;
            margin-right: 10px;
          }
        }
      }
    }

    @media (min-width: 768px) {
      display: block;
    }
  }
`,hr=({mySize:t})=>i(mr,{children:[e("div",{className:"mf-mobile container",children:e("div",{className:"mf-box",children:e(ye,{tabs:[{name:"explore",title:"Explore",component:e(lr,{})},{name:"dashboard",title:"Dashboard",component:e(pr,{})}]})})}),e("div",{className:"mf-desktop container",children:i("div",{className:"mf-box",children:[e("div",{className:"nav",children:i("ul",{children:[e("li",{children:e(H,{to:"/explore",title:"Explore"})}),e("li",{children:e(H,{to:"/dashboard",title:"Dashboard"})})]})}),e("div",{className:"page",children:e(Ce,{})})]})})]}),ur=p.div`
  .accordion {
    width: 100%;
    // border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden;

    .accordion-item {
      border-bottom: 1px solid rgb(204 204 204 / 50%);
    }

    .accordion-title {
      // background-color: #f7f7f7;
      padding: 1.5rem 0;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .accordion-content {
      padding: 15px;
      background-color: #fff;
    }

    .accordion-title {
      h2 { margin: 0; }

      svg { 
        width: 24px;
      }
    }
  }
`,gr=({title:t,content:r})=>{const[n,o]=a.exports.useState(!1);return i("div",{className:"accordion-item",children:[i("div",{className:"accordion-title",onClick:()=>{o(!n)},children:[e("h2",{children:t}),e("span",{children:n?e("svg",{style:{transform:"rotate(180deg)"},focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:e("path",{fill:"%23747878",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})}):e("svg",{focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:e("path",{fill:"%23747878",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})})})]}),n&&e("div",{className:"accordion-content",children:r})]})},fr=({items:t})=>e(ur,{children:e("div",{className:"accordion",children:t.map((r,n)=>e(gr,{title:r.title,content:r.content},n))})}),xr=p.div`
  .graph-chart {
    min-height: 20rem;
    margin-bottom: 2rem;
  }

  .return-section {
    padding: 1rem 0;

    .return {
      font-size: 2rem;
      font-weight: 600;
      margin-right: 0.5rem;
      &.positive {
        color: #22bb33;
      }
      &.negative {
        color: #bb2124;
      }
    }
    .frequency {
      font-size: 1.4rem;
    }
  }
  .return-duration {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-right: 0.5rem;

    .card.active {
      color: ${t=>t.theme.color};
      background: ${t=>t.theme.color}10;
    }
    .card {
      color: ${t=>t.theme.textColor};
      background: ${t=>t.theme.body};
      border-radius: 0.5rem;
      font-size: 1.4rem;
      font-weight: bold;
      border: 1px solid ${t=>t.theme.border};
      padding: 0.5rem 1rem;
      cursor: pointer;
    }
  }
`,br=(t,r,n)=>{if(t<=0||r<=0||n<=0)throw new Error("All values must be positive numbers greater than zero.");switch(n){case"1M":n=1;break;case"3M":n=3;break;case"6M":n=6;break;case"1Y":n=12;break;case"3Y":n=36;break;case"5Y":n=60;break;default:n=1;break}console.log(t,r,n);let o;return n<=12?(console.log("ifff"),o=(r-t)/t*100):(console.log("elseee"),o=(Math.pow(1+(r-t)/t,12/n)-1)*100),o.toFixed(2)},vr=({lastNav:t,loadingChart:r,schemeChart:n})=>{if(r)return e("div",{className:"loading not-found",children:"Loading..."});if(n===null||n.length<1)return e("div",{className:"not-found",children:"not data found..."});const o=["1M","3M","6M","1Y","3Y","5Y"],[s,c]=a.exports.useState("3M"),[d,m]=a.exports.useState(),b=v=>{switch(v){case"1M":return 21;case"3M":return 63;case"6M":return 132;case"1Y":return 246;case"3Y":return 738;case"5Y":return 1208}},w={},x=v=>{c(v),console.log(w);const h=br(w[v][0].Last_Nav,parseFloat(t),v);m(h)};o.forEach(v=>{const h=b(v);n.length>=h?w[v]=n.slice(0,h).reverse():v==="All"&&(w[v]=n.reverse())}),d||x("3M");const l=w[s].map(v=>v.Nav_Date),y=w[s].map(v=>v.Last_Nav),u={labels:l,datasets:[{data:y,borderColor:"rgba(145, 71, 255, 1)",backgroundColor:"rgba(145, 71, 255, 0.1)",borderWidth:2,pointRadius:0,pointHoverRadius:0,fill:!0,tension:.1}]},g={responsive:!0,plugins:{legend:{display:!1},tooltip:{enabled:!0,mode:"nearest",intersect:!1,backgroundColor:"rgba(0, 0, 0, 0.5)",titleColor:"#fff",bodyColor:"#fff",borderColor:"rgba(75, 192, 192, 1)",borderWidth:1,padding:10,callbacks:{label:v=>`Nav: ${v.formattedValue}`}}},onClick:(v,h)=>{if(h.length>0){const C=h[0]._chart,P=C.getElementAtEvent(v);C.tooltip.setActiveElements(P),C.tooltip.update()}},onHover:(v,h)=>{var P;const C=(P=h[0])==null?void 0:P.element;C&&(C.options.plugins.tooltip.enabled=!0,C.update())},scales:{x:{display:!1},y:{display:!1}}},$=o.filter(v=>w[v]);return i(xr,{children:[i("div",{className:"graph-chart",children:[i("div",{className:"return-section",children:[i("div",{children:[i("span",{className:`return ${d>0?"positive":"negative"}`,children:[d," %"]})," ",i("span",{className:"frequency",children:[s," return"]})]}),i("div",{className:"nav",children:[e("span",{children:"-0.30%"})," 1D"]})]}),e(hi,{data:u,options:g,height:120})]}),e("div",{className:"return-duration",children:$.map((v,h)=>e("div",{className:`card ${s===v?"active":""}`,onClick:()=>x(v),children:v},h))})]})},yr=p.div`
  border-bottom: 1px solid #ebe7e7;
  margin-bottom: 10rem;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;

    .image {
      img {
        width: 8rem;
      }
    }

    .icon {
      padding: 1rem;
      border-radius: 0.5rem;
      background: #e2e2e2;
      fill: #525252;
      cursor: pointer;

      svg {
        width: 2rem;
        height: 2rem;
      }
    }
  }
  .chart-section {
    margin-bottom: 2rem;
    .not-found,
    .loading {
      min-height: 20rem;
      font-size: 1.4rem;
      text-align: center;
      padding-top: 10rem;
    }
  }
  .detail {
    .name {
      font-size: 1.8rem;
      font-weight: 600;
      color: ${t=>t.theme.textColor};
    }
    .info {
      font-weight: 600;
      color: ${t=>t.theme.lightText};
      padding-top: 1rem;
      font-size: 1.4rem;
    }
  }

  .investment {
    margin: 2rem 0;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    border: 1px solid ${t=>t.theme.border};
    border-radius: 1.2rem;

    .text {
      font-weight: 600;
      color: ${t=>t.theme.lightText};
      font-size: 1.4rem;
    }
    .return {
      display: flex;
      align-items: center;
      gap: 10px;

      svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
    .amt {
      color: ${t=>t.theme.textColor};
      text-align: right;
      font-size: 2rem;
    }
  }
  .scheme-detail {
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;

    .card {
      border-radius: 4px;

      .heading {
        color: ${t=>t.theme.lightText};
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 0.8rem;
      }
      .text {
        color: ${t=>t.theme.textColor};
        font-weight: 600;
        font-size: 1.6rem;
      }
    }
  }

  .similar-funds { margin-top: 3rem; }

  .purchase-action {
    position: fixed;
    bottom: 0px;
    z-index: 10;
    background: white;
    // height: 7rem;
    width: 100%;
    color: white;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-evenly;
    gap: 1rem;
    padding: 2rem;
    left: 0;
    right: 0;
    max-width: 138rem;
    margin-left: auto;
    margin-right: auto;

    button {
      padding: 1.5rem;
      border-radius: 10px;
      font-size: 1.6rem;
      line-height: 1.5rem;
      width: 100%;
      display: inline-block;
      border: 1px solid ${t=>t.theme.color};
      &.active {
        background: ${t=>t.theme.color};
        color: white;
      }
    }
  }

  .invest-now {
    position: fixed;
    inset: 40% 1rem 0;
    z-index: 90;
    background: white;
    width: auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid rgba(145, 71, 255, 0.5);
    padding: 1rem;
    box-shadow: rgba(145, 71, 255, 0.5) 0 0.2rem 10rem;

    .close-button {
      position: absolute;
      right: 2rem;
      background: white;
      font-size: 3rem;
    }
  }
  
  .hide {
    display: none;
  }

  // container css for mutual-fund page
  .mobile {
    .top-section {
      img {
        width: 5rem;
      }
    }
  }
`,wr=p.div`
  .header {
    width: 100%;
    height: 75px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    background-color: rgb(255, 255, 255);
    color: rgb(14, 14, 16);
    font-weight: bold;
    padding: 10px;
    position: fixed;
    top: 0px;
    z-index: 4;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);

    span {
      margin-left: 4rem;
      font-size: 1.8rem;
    }
  }

  button {
    padding: 1rem;
    background: initial;
    cursor: pointer;
    font-size: 2rem;
    line-height: 1.5rem;
    position: absolute;
    left: 0;

    svg {
      font-size: 2rem;
      font-weight: 900;
      height: 4rem;
      width: 4rem;
    }
  }
`;function Ue({displayText:t=""}){const r=W();return e(wr,{children:i("div",{className:"header",children:[e("button",{onClick:()=>{r(-1)},children:i("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",height:"3rem",width:"3rem",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{fill:"none",d:"M0 0h24v24H0V0z"}),e("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"})]})}),e("span",{children:t})]})})}const kr=p.div`
  .navigation {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.5rem 0;
    font-size: 1.8rem;
    font-weight: 500;

    & > div {
      border-bottom: 2px solid transparent;
      padding: 5px 10px;
      cursor: pointer;
      user-select: none;
      color: ${t=>t.theme.textColor};
    }

    .nav-active {
      border-bottom: 2px solid ${t=>t.theme.color};
      color: ${t=>t.theme.color};
      transition: 0.3s;
    }
  }

  .calculator {
    label { font-size: 1.4rem; display: flex;
    justify-content: space-between; }

    .param {
      font-size: 1.4rem;
    }

    .return-output {
      border-top: 1px solid #ececec;
      // padding-top: 2rem;

      h3 {
        text-align: center;
        font-size: 1.8rem;
      }

      label {
        padding: 1rem 0;
      }
    }
  }

  // canvas {
  //   text-align: center;
  //   height: 300px !important;
  //   width: 300px !important;
  // }

  @media (min-width: 768px) {
    .name {
      font-size: 1.4rem;
    }
  }
`,Xt=({config:t})=>{const{type:r,loading:n,defaultRate:o}=t;console.log(r,n,o);const[s,c]=a.exports.useState("sip"),[d,m]=a.exports.useState(1e3),[b,w]=a.exports.useState(10),[x,l]=a.exports.useState(5),y=(h,C,P)=>{const L=P*12,M=C/100/12;return(h*((Math.pow(1+M,L)-1)/M)*(1+M)).toFixed(2)},u=(h,C,P)=>{const L=C/100;return(h*Math.pow(1+L,P)).toFixed(2)},g=y(d,b,x),$=u(d,b,x),v={labels:["Invested Amount","Estimated Return"],datasets:[{data:[d*x*12,g-d*x*12],backgroundColor:["#9147ff","#FF6384"],width:100}]};return i(kr,{children:[i("div",{className:"calculator",children:[i("div",{className:"navigation",children:[e("div",{onClick:()=>c("sip"),className:s==="sip"?"nav-active":"",children:"SIP"}),e("div",{onClick:()=>c("lumpsum"),className:s==="lumpsum"?"nav-active":"",children:"Lumpsum"})]}),i("label",{children:[e("span",{children:"Monthly Investment"})," ",e("p",{children:be(d)})]}),e("div",{className:"param",children:e(Ae,{value:d,onChange:(h,C)=>m(C),"aria-labelledby":"investment-slider",valueLabelDisplay:"auto",step:s==="sip"?1e3:2e3,min:s==="sip"?1e3:1e4,max:s==="sip"?5e4:5e5,sx:{height:8,color:"#9147ff","& .MuiSlider-thumb":{width:24,height:24,backgroundColor:"#9147ff"},"& .MuiSlider-track":{height:8},"& .MuiSlider-rail":{height:8}}})}),i("label",{children:[e("span",{children:"Return Rate (%)"})," ",i("p",{children:[b," %"]})]}),e("div",{className:"param",children:e(Ae,{value:b,onChange:(h,C)=>w(C),"aria-labelledby":"return-rate-slider",valueLabelDisplay:"auto",step:1,min:1,max:30,sx:{height:8,color:"#9147ff","& .MuiSlider-thumb":{width:24,height:24,backgroundColor:"#9147ff"},"& .MuiSlider-track":{height:8},"& .MuiSlider-rail":{height:8}}})}),i("label",{children:[e("span",{children:"Time Period (Years)"})," ",i("p",{children:[x,"Y"]})]}),e("div",{className:"param",children:e(Ae,{value:x,onChange:(h,C)=>l(C),"aria-labelledby":"time-period-slider",valueLabelDisplay:"auto",step:1,min:1,max:30,sx:{height:8,color:"#9147ff","& .MuiSlider-thumb":{width:24,height:24,backgroundColor:"#9147ff"},"& .MuiSlider-track":{height:8},"& .MuiSlider-rail":{height:8}}})}),e("br",{}),i("div",{className:"return-output",children:[e("h3",{children:"Expected Returns"}),i("label",{children:[e("span",{children:"Investment Amount:"})," ",e("span",{children:be(s==="sip"?d*x*12:d)})]}),i("label",{children:[e("span",{children:"Est. Return:"})," ",i("span",{children:[" ",be(s==="sip"?g-d*x*12:$-d)]})]}),i("label",{children:[e("span",{children:"Total Value: "})," ",i("span",{children:[" ",be(s==="sip"?g:$)]})]})]})]}),r=="full"&&e(ui,{data:v,sx:{width:6,height:6}})]})},Nr=p.nav`
  ol {
    list-style: none;
    padding: 1rem;
    margin: 0;
    font-size: 1.4rem;
  }

  .breadcrumb-item {
    display: inline;
  }

  .breadcrumb-separator {
    margin: 0 1rem;
  }

  a {
    color: ${t=>t.theme.color};
  }
`,Sr=({items:t,separator:r=">",className:n=""})=>e(Nr,{children:e("nav",{"aria-label":"breadcrumb",className:`breadcrumb ${n}`,children:e("ol",{children:t.map((o,s)=>i("li",{className:"breadcrumb-item",children:[o.path?e(E,{to:o.path,children:o.label}):e("span",{children:o.label}),s<t.length-1&&e("span",{className:"breadcrumb-separator",children:r})]},s))})})}),Cr=({mySize:t})=>{const{schemeCode:r}=gi(),[n,o]=a.exports.useState(null),[s,c]=a.exports.useState(!0),[d,m]=a.exports.useState(null),b=async()=>{try{const _=await Ki(r);o(_)}catch(_){m(_)}finally{c(!1)}},[w,x]=a.exports.useState(null),[l,y]=a.exports.useState(!0),u=async()=>{try{const _=await Qi(r);x(_)}catch(_){m(_)}finally{y(!1)}},[g,$]=a.exports.useState([]),[v,h]=a.exports.useState(void 0),[C,P]=a.exports.useState(!0),L=async()=>{try{const _=await ge("schemes");$(_.slice(0,5))}catch(_){h(_)}finally{P(!1)}};a.exports.useEffect(()=>{b(),u(),L()},[]);const M=[{title:"Return calculator",content:e(Xt,{config:{type:"compact",loading:!0,defaultRate:12}})}],[k,f]=a.exports.useState(""),z=()=>{f("one-time")},N=()=>{f("sip")},A=()=>{f("")},[J,se]=a.exports.useState(!1);a.exports.useEffect(()=>{const _=Nt.throttle(()=>{const Me=window.scrollY;se(Me>10)},200);return window.addEventListener("scroll",_),()=>{window.removeEventListener("scroll",_)}},[]);const Ie=()=>{if(t<=767)return e(Ue,{displayText:"Scheme Details"})},fe=()=>i("div",{className:"purchase-action",children:[e(F,{className:"sp-button primary",onClick:z,children:"One-time"}),e(F,{className:"sp-button primary active",onClick:N,children:"Start SIP"})]}),Fe=()=>{if(t>767)return e(Sr,{items:le,separator:">"})},le=[{label:"Home",path:"/"},{label:n==null?void 0:n.amc_name,path:n==null?void 0:n.AMC_Code},{label:n==null?void 0:n.Scheme_Name}];return i(yr,{children:[Ie(),i("div",{className:`${t>767?"container":"container mobile"}`,children:[Fe(),s?Hn():e(G,{container:!0,columnSpacing:4,whiteSpace:2,columns:{xs:4,sm:8,md:12},children:i(D,{children:[i(G,{item:!0,xs:12,sm:12,md:8,children:[i("div",{className:"top-section",children:[e("div",{className:"image",children:e("img",{src:`./images/amc-logo/${n==null?void 0:n.amc_logo}`,alt:""})}),e("div",{className:"icon",children:e(fi,{})})]}),i("div",{className:"detail",children:[e("div",{className:"name",children:n==null?void 0:n.Scheme_Name}),i("div",{className:"info",children:[n==null?void 0:n.Scheme_Type," / ",n==null?void 0:n.Scheme_Plan]})]}),e("div",{className:"chart-section",children:e(vr,{lastNav:n==null?void 0:n.Last_Nav,loadingChart:l,schemeChart:w})}),i("div",{className:"scheme-detail",children:[i("div",{className:"card",children:[i("div",{className:"heading",children:["NAV: ",n==null?void 0:n.Nav_Date]}),e("div",{className:"text",children:n==null?void 0:n.Last_Nav})]}),i("div",{className:"card",children:[e("div",{className:"heading",children:"Rating"}),e("div",{className:"text",children:"4 *"})]}),i("div",{className:"card",children:[e("div",{className:"heading",children:"Min. SIP amount"}),e("div",{className:"text",children:n==null?void 0:n.Minimum_Purchase_Amount})]}),i("div",{className:"card",children:[e("div",{className:"heading",children:"Fund Size"}),e("div",{className:"text",children:"522 Cr"})]})]}),e("div",{className:"basic-details",children:e(fr,{items:M})}),e("div",{className:"similar-funds",children:e(we,{schemes:g,loading:C,customHeader:"Similar funds"})})]}),e(G,{item:!0,xs:12,md:4,sx:{display:{xs:"none",sm:"none",md:"block"}},children:e(V,{sx:{p:2,position:J?"fixed":"relative",top:J?100:"initial",width:J?"44rem":"auto",zIndex:10,border:"1px solid rgb(145 71 255 / 20%)",borderRadius:1},children:e(ye,{tabs:[{name:"sip",title:"SIP",component:e(ue,{type:"sip"})},{name:"one-time",title:"One-Time",component:e(ue,{type:"one-time"})}]})})})]})}),t<768?fe():"",k==="one-time"&&i("div",{className:"invest-now",children:[e("button",{className:"close-button",onClick:A,children:e(ot,{})}),e(ue,{type:"one-time",mySize:t})]}),k==="sip"&&i("div",{className:"invest-now",children:[e("button",{className:"close-button",onClick:A,children:e(ot,{})}),e(ue,{type:"sip",mySize:t})]})]})]})},$r=p.div`
  .all-mf-section {
  }
  .header {
    display: block;
    width: 100%;
    font-size: 2rem;
    position: absolute;
    top: 10px;
    z-index: 1;
    padding: 20px 30px;
  }
`,zr=()=>{const[t,r]=a.exports.useState(!0),[n,o]=a.exports.useState([]);return a.exports.useEffect(()=>{(async()=>{try{const c=await ge("schemes");o(c)}catch(c){setError(c)}finally{r(!1)}})()},[]),e($r,{children:e("div",{className:"container division",children:e(we,{schemes:n,loading:t})})})},Ir=p.div`
  .all-mf-section {
  }
  .header {
    display: block;
    width: 100%;
    font-size: 2rem;
    position: absolute;
    top: 10px;
    z-index: 1;
    padding: 20px 30px;
  }

  .template-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
    color: ${t=>t.theme.soft};

    h2 {
      color: ${t=>t.theme.textColor};
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.4rem;
      width: 80%;
    }
    img {
      height: 6rem;
      width: auto;
    }
  }
`,de=({type:t=""})=>{var w;const[r,n]=a.exports.useState(!0),[o,s]=a.exports.useState([]),m=(w=ie().pathname.split("/").filter(x=>x)[1])!=null?w:"schemes";a.exports.useEffect(()=>{(async()=>{try{const l=await ge(m);s(l)}catch(l){setError(l)}finally{n(!1)}})()},[]);const b=()=>{switch(t){case"high-return":return{title:"High Return",desc:"Funds with good return in recent time",img:"high-returns.svg"};case"sip-with-100":return{title:"SIP with 100",desc:"Funds with minimum investment of just 100 every month",img:"sip-with-100.svg"};case"tax-saving":return{title:"Tax Saving",desc:"Funds that help you save on taxes",img:"tax-saving.svg"};case"large-cap":return{title:"Large Cap",desc:"Funds investing in large-cap companies",img:"large-cap.svg"};case"mid-cap":return{title:"Mid Cap",desc:"Funds investing in mid-cap companies",img:"mid-cap.svg"};case"small-cap":return{title:"Small Cap",desc:"Funds investing in small-cap companies",img:"small-cap.svg"};default:return{title:"Unknown",desc:"No description available",img:"default.svg"}}};return e(Ir,{children:i("div",{className:"container division",children:[i("div",{className:"template-header",children:[i("div",{children:[e("h2",{children:b().title}),e("p",{children:b().desc})]}),e("img",{src:`./public/images/collection/${b().img}`,alt:""})]}),e(we,{schemes:o,loading:r})]})})},Fr=p.div`
  .all-mf-section {
  }

  .calculator {
    h2 {
      font-size: 1.8rem;
    }
  }
`,Mr=({type:t})=>{var b;const[r,n]=a.exports.useState(!0),[o,s]=a.exports.useState([]),m=(b=ie().pathname.split("/").filter(w=>w)[1])!=null?b:"schemes";return a.exports.useEffect(()=>{(async()=>{try{const x=await ge(m);s(x)}catch(x){setError(x)}finally{n(!1)}})()},[]),e(Fr,{children:e("div",{className:"container",children:i("div",{className:"calculator division",children:[e("h2",{children:"Return Calculator"}),e("div",{className:"division",children:e(Xt,{config:{type:"full",loading:!0,defaultRate:10}})})]})})})};p.div`
  .profile-menu-container {
    // position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 97%;
    overflow-y: scroll;
    background-color: ${t=>t.theme.header};
    padding: 0;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    z-index: 10;

    .title {
      position: sticky;
      top: 0;
      left: 0;
      background-color: ${t=>t.theme.header};
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      padding: 20px 0;
      z-index: 10;

      h1 {
        font-weight: 500;
        font-size: 20px;
        color: ${t=>t.theme.textColor};
      }

      span {
        position: absolute;
        color: ${t=>t.theme.textColor};
        right: 15px;
        font-size: 15px;
        cursor: pointer;
        transition: opacity 0.3s;

        &:hover {
          opacity: 0.8;
        }
      }
    }

    .user {
      width: 100%;
      background-color: ${t=>t.theme.header};
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 20px;
      border: 1px solid ${t=>t.theme.border};
      display: flex;
      flex-direction: column;
      align-items: center;

      .user-since {
        font-size: 1.2rem;
      }
      .user__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;

        .user-box {
          width: 60px;
          height: 60px;
          background-color: ${t=>t.theme.color};
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 28px;
          padding-bottom: 4px;
          cursor: pointer;
        }

        button {
          background-color: ${t=>t.theme.color};
          padding: 7px 14px;
          max-width: 110px;
          width: 100%;
          border-radius: 50px;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;

          &:hover {
            opacity: 0.8;
          }

          .cast-icon {
            font-size: 18px;
          }
        }
      }

      .user__bottom {
        padding: 0 10px;

        .username {
          font-weight: 600;
          color: ${t=>t.theme.textColor};
        }
        .status {
          font-size: 13px;
          opacity: 0.8;
          padding: 5px 0;
          color: ${t=>t.theme.soft};
        }
      }
    }

    .settings {
      width: 100%;
      background-color: ${t=>t.theme.header};
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 15px;
      border: 1px solid ${t=>t.theme.border};

      ul {
        width: 100%;
        display: block;

        li {
          width: 100%;
          padding: 10px 0;
          cursor: pointer;

          &:not(:last-child) {
            border-bottom: 1px solid ${t=>t.theme.border};
          }

          .settings__title {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px;
            color: ${t=>t.theme.textColor};
            transition: filter 0.1s;

            .title-left {
              display: flex;
              align-items: center;
              font-size: 15px;
              font-weight: 400;

              .title-icon {
                margin-right: 10px;
                font-size: 25px;
              }
            }
          }

          &:hover:not(:last-child) .settings__title {
            filter: contrast(50%);
          }
        }
      }
    }

    @keyframes profileMenuAnim {
      0% {
        transform: translateY(1000px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
`;const Xe=(t,r="basicDetails")=>{const n=`${U()}/api/user-profile/${t}?type=${r}&ajax=true`;return ee(n)},Ge=(t,r="basicDetails",n)=>{const o=`${U()}/api/update-user-profile`;return Re(o,X(T({},n),{auth:t,type:r,ajax:!0}))},Gt=(t,r="basicDetails",n)=>{const o=`${U()}/api/delete-user-profile/${t}?type=${r}&id=${n}&ajax=true`;return Lt(o)},Dr=p.div`
  display: flex;
  flex-direction: column;

  .add-password {
    position: absolute;
    right: 2rem;
    bottom: 12rem;
    font-size: 150%;
    border-radius: 100%;
    height: 4rem;
    width: 4rem;
    min-width: auto;
  }
`,Ar=p.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;
  position: relative;
`,Er=p.div`
  width: 50px;
  height: 50px;
  margin-right: 10px;

  svg {
    height: 5rem;
    width: 5rem;
  }
`,Lr=p.div`
  flex-grow: 1;

  h3 {
    display: flex;
    margin-bottom: 0.3rem;
    font-size: 1.3rem;
  }
`,jr=p.div`
  display: flex;
  flex-direction: column;

  svg {
    font-size: 130%;
    margin: 0.5rem;
    cursor: pointer;
  }
`,Br=p.form`
  margin-top: 20px;

  h3 {
    margin-bottom: 2rem;
  }
  .default-checkbox {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
`,Pr=()=>{const t=B(k=>k.auth),[r,n]=a.exports.useState([]);a.exports.useState([]);const[o,s]=a.exports.useState(1),[c,d]=a.exports.useState("SB"),[m,b]=a.exports.useState(!1),[w,x]=a.exports.useState(!1),l=async k=>{try{const f=await Xe(t.auth_token,k);n(f.data.bank),b(!1),f.data.bank.length===0&&x(!0)}catch(f){console.log(f)}finally{}};a.exports.useEffect(()=>{l("bankDetails")},[]);const y=async k=>{try{const f=await Ge(t.auth_token,"bankDetails",k);console.log(f.data.bank),n(f.data.bank)}catch(f){console.log(f)}finally{}},[u,g]=a.exports.useState(null),[$,v]=a.exports.useState(!1),h=async k=>{g(k),v(!0)},C=()=>{console.log(r,o),s(o),g(null),v(!0)},P=async k=>{if(window.confirm(`Are you sure you want to delete ${k.accountNo}?`))try{const f=await Gt(t.auth_token,"bankDetails",k==null?void 0:k.accountIndex);console.log(f),n(r.filter(z=>z.id!==k.id)),g(null),v(!1)}catch(f){console.log(f)}finally{}},L=k=>{k.preventDefault();const f=new FormData(k.target),z=r.length;console.log(z,u);const N={index:f.get("accountIndex"),accountType:c,accountNo:f.get("accountNo"),IFSCCode:f.get("IFSCCode"),MICRNo:f.get("MICRNo"),defaultBank:u==null?void 0:u.defaultBank};y(N),g(null),v(!1)},M=k=>{try{let f=k.slice(-5);return"*".repeat(k.length-5)+f}catch(f){console.log(f)}};return i(Dr,{children:[m?St:null,r.map(k=>i(Ar,{id:k.accountIndex,children:[e(Er,{children:e(xi,{})}),i(Lr,{children:[i("h3",{children:["Account ",M(k.accountNo),k.defaultBank=="Y"&&i(D,{children:["\xA0\xA0 (",e(Ct,{})," \xA0Default)"]})]}),i("p",{children:["IFSC Code: ",k==null?void 0:k.IFSCCode," "]})]}),i(jr,{children:[e($t,{onClick:()=>h(k)}),e(zt,{onClick:()=>P(k)})]}),e("hr",{})]},Math.random())),w?e("span",{children:"You don't have any bank account added yet."}):null,$&&i(Br,{onSubmit:L,children:[e("h3",{children:"Bank information"}),e("input",{type:"hidden",name:"accountIndex",defaultValue:u==null?void 0:u.accountIndex}),i("label",{children:["Account Type:",i("select",{name:"accountType",value:c||(u==null?void 0:u.accountType),onChange:k=>d(k.target.value),children:[e("option",{value:"SB",children:"Saving Bank"}),e("option",{value:"CB",children:"Current Bank"}),e("option",{value:"NE",children:"NRE"}),e("option",{value:"NO",children:"NRO"})]}),e("br",{})]}),i("label",{children:["Account Number:",e("input",{type:"number",name:"accountNo",defaultValue:u==null?void 0:u.accountNo}),e("br",{})]}),i("label",{children:["IFSC Code:",e("input",{type:"text",name:"IFSCCode",defaultValue:u==null?void 0:u.IFSCCode}),e("br",{})]}),i("label",{children:["MICR Number:",e("input",{type:"text",name:"MICRNo",defaultValue:u==null?void 0:u.MICRNo}),e("br",{})]}),i("label",{className:"default-checkbox",children:["Is Default:\xA0",e("input",{type:"checkbox",name:"defaultBank",checked:(u==null?void 0:u.defaultBank)==="Y",onChange:k=>g(X(T({},u),{defaultBank:k.target.checked?"Y":"N"}))}),e("br",{}),e("br",{})]}),e(F,{className:"cancel",onClick:()=>{g(null),v(!1)},children:"Cancel"}),"\xA0 \xA0 \xA0",e(F,{className:"save-bank",type:"submit",children:"Save Bank"})]}),!u&&e(F,{className:"add-password",onClick:()=>C(),children:"+"})]})},Rr=p.form`
  margin-top: 20px;
  h3 {
    margin-bottom: 3rem;
  }
`,Z=p.label``,he=p.input`
  margin-bottom: 20px;
  border: 1px solid #ccc;
`,_r=p.input`
  margin-right: 10px;
`,ht=p(he)`
  ${t=>t.show&&"display: none;"}
`,pe=p.div`
  color: red;
  margin-bottom: 10px;
`,Tr=p.div`
  display: flex;
  flex-direction: column;

  .add-password {
    position: absolute;
    right: 2rem;
    bottom: 12rem;
    font-size: 150%;
    border-radius: 100%;
    height: 4rem;
    width: 4rem;
    min-width: auto;
  }
`,Or=p.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;
  position: relative;
`,Ur=p.div`
  width: 50px;
  height: 50px;
  margin-right: 10px;

  svg {
    height: 5rem;
    width: 5rem;
  }
`,Xr=p.div`
  flex-grow: 1;

  h3 {
    display: flex;
    margin-bottom: 0.3rem;
    font-size: 1.3rem;
  }
`,Gr=p.div`
  display: flex;
  flex-direction: column;

  svg {
    font-size: 130%;
    margin: 0.5rem;
    cursor: pointer;
  }
`,Vr=()=>{const t=B(N=>N.auth),[r,n]=a.exports.useState([]),[o,s]=a.exports.useState(!1),[c,d]=a.exports.useState(!1);a.exports.useState({});const[m,b]=a.exports.useState({});a.exports.useState([]);const[w,x]=a.exports.useState(1);a.exports.useState("SB");const[l,y]=a.exports.useState(!1),[u,g]=a.exports.useState(!1),$=async N=>{var A;try{const J=await Xe(t.auth_token,N);n(J.data.nominee),y(!1),((A=J.data.nominee)==null?void 0:A.length)===0&&g(!0)}catch(J){console.log(J)}finally{}};a.exports.useEffect(()=>{$("nomineeDetails")},[]);const v=async N=>{try{const A=await Ge(t.auth_token,"nomineeDetails",N);console.log(A.data.nominee),n(A.data.nominee)}catch(A){console.log(A)}finally{}},[h,C]=a.exports.useState(null),[P,L]=a.exports.useState(!1),M=async N=>{console.log(N),C(N),L(!0)},k=()=>{console.log(r,w),x(w),C(null),L(!0)},f=async N=>{if(console.log(N),window.confirm(`Are you sure you want to delete ${N==null?void 0:N.nomineeN}?`))try{const A=await Gt(t.auth_token,"nomineeDetails",N==null?void 0:N.nomineeIndex);console.log(A),n(r.filter(J=>J.id!==(N==null?void 0:N.id))),C(null),L(!1)}catch(A){console.log(A)}finally{}},z=N=>{N.preventDefault();const A=new FormData(N.target),J=r.length;console.log(J,h);const se={index:A.get("nomineeIndex"),nomineeN:A.get("nomineeN"),nomineeRel:A.get("nomineeRel"),nomineeApp:A.get("nomineeApp"),nomineeDob:A.get("nomineeDob"),nomineePan:A.get("nomineePan"),nomineeMinor:h==null?void 0:h.nomineeMinor,nomineeGua:A.get("nomineeGua"),nomineeGuaPan:A.get("nomineeGuaPan")};v(se),C(null),L(!1)};return i(Tr,{children:[l?St:null,r.map(N=>i(Or,{id:N==null?void 0:N.nomineeIndex,children:[e(Ur,{children:e(Ne,{})}),i(Xr,{children:[i("h3",{children:[N==null?void 0:N.nomineeN,(N==null?void 0:N.defaultBank)=="Y"&&i(D,{children:["\xA0\xA0 (",e(Ct,{})," \xA0Default)"]})]}),i("p",{children:["Relation: ",e("strong",{children:N==null?void 0:N.nomineeRel})," "]}),i("p",{children:["Applicable: ",i("strong",{children:[N==null?void 0:N.nomineeApp,"%"]})," "]})]}),i(Gr,{children:[e($t,{onClick:()=>M(N)}),e(zt,{onClick:()=>f(N)})]}),e("hr",{})]},Math.random())),u?e("span",{children:"You don't have any bank account added yet."}):e("h1",{}),P&&e(G,{item:!0,xs:12,sm:8,md:8,children:e(V,{sx:{p:2,zIndex:10,border:"1px solid rgb(145 71 255 / 20%)",borderRadius:1},children:i(Rr,{onSubmit:z,children:[e("h3",{children:"Nominee information"}),e("input",{type:"hidden",name:"nomineeIndex",defaultValue:h==null?void 0:h.nomineeIndex}),i(G,{item:!0,xs:12,sm:12,md:12,children:[e(Z,{children:" Nominee 1 Name:"}),e(he,{type:"text",name:"nomineeN",defaultValue:h==null?void 0:h.nomineeN,required:!0}),m.nomineeN&&e(pe,{children:m.nomineeN}),e(Z,{children:" Relationship:"}),e(he,{type:"text",name:"nomineeRel",defaultValue:h==null?void 0:h.nomineeRel,required:!0}),m.nominee1Rel&&e(pe,{children:m.nomineeRel}),e(Z,{children:" Applicable: (e.g. 100%)"}),e(he,{type:"text",name:"nomineeApp",defaultValue:h==null?void 0:h.nomineeApp,required:!0}),m.nomineeApp&&e(pe,{children:m.nomineeApp}),e(Z,{children:" Nominee Pan:"}),e(he,{type:"text",name:"nomineePan",defaultValue:h==null?void 0:h.nomineePan,required:!0}),m.nominee1Pan&&e(pe,{children:m.nominee1Pan}),e(Z,{children:" Nominee DOB:"}),e(he,{type:"date",name:"nomineeDob",defaultValue:h==null?void 0:h.nomineeDob,required:!0}),m.nominee1Dob&&e(pe,{children:m.nomineeDob})]}),i(Z,{children:[" ","Is Minor:\xA0",e(_r,{type:"checkbox",name:"nomineeMinor",checked:(h==null?void 0:h.nomineeMinor)==="Y"||c,onChange:N=>{d(!c),C(X(T({},h),{nomineeMinor:N.target.checked?"Y":"N"}))}}),e("br",{}),e("br",{})]}),c&&i(D,{children:[e(Z,{children:" Nominee Guardian Name:"}),e(ht,{type:"text",name:"nomineeGua",defaultValue:h==null?void 0:h.nomineeGua,show:!c,required:!0}),e(Z,{children:" Nominee Guardian Pan:"}),e(ht,{type:"text",name:"nomineeGuaPan",defaultValue:h==null?void 0:h.nomineeGuaPan,show:!c,required:!0})]}),m.nomineeGua&&o&&e(pe,{children:m.nomineeGua}),e(F,{className:"cancel-nominee",onClick:()=>{C(null),L(!1)},children:"Cancel"}),e(F,{fullWidth:!1,className:"change-mpin",type:"submit",children:"Save"})]})})}),!h&&e(F,{className:"add-password",onClick:()=>k(),children:"+"})]})},Jr=()=>{var Ve,Je,Ye,He,qe,We,Ke,Qe,Ze,et,tt;const[t,r]=a.exports.useState("basicDetails"),[n,o]=a.exports.useState("Sitaram Kumawat");B(S=>S.user);const s=B(S=>S.auth),[c,d]=a.exports.useState(!0),[m,b]=a.exports.useState(null),[w,x]=a.exports.useState(""),[l,y]=a.exports.useState({}),[u,g]=a.exports.useState(""),[$,v]=a.exports.useState(""),h=async S=>{try{const R=await Xe(s.auth_token,S);console.log(R),y(R.data),g(R.data.profile.holder1Gender),v(R.data.profile.occupationCode)}catch(R){b(R)}finally{d(!1)}};a.exports.useEffect(()=>{h("basicDetails")},[]);const[C,P]=a.exports.useState({currentPassword:"",newPassword:"",confirmPassword:""}),[L,M]=a.exports.useState({}),[k,f]=a.exports.useState(!1),[z,N]=a.exports.useState({currentMpin:"",newMpin:"",confirmMpin:""}),[A,J]=a.exports.useState({}),[se,Ie]=a.exports.useState(!1),fe=S=>{const{name:R,value:ne}=S.target,K=X(T({},z),{[R]:ne});let it={};R==="confirmMpin"&&(K.confirmMpin.length>=4&&K.newMpin!==K.confirmMpin?it.confirmMpin="MPINs do not match":K.newMpin===K.confirmMpin&&console.log("MPINs match")),N(K),J(it)};a.exports.useEffect(()=>{f(C.currentPassword&&C.newPassword&&C.confirmPassword&&!L.confirmPassword)},[C,L]),a.exports.useEffect(()=>{Ie(z.currentMpin&&z.newMpin&&z.confirmMpin&&!A.confirmMpin)},[z,A]);const Fe=S=>{S.preventDefault(),se&&console.log("MPIN form submitted:",z)},le=S=>{h(S),r(S),x(null)},_=async S=>{try{const R=await Ge(s.auth_token,"basicDetails",l.profile);console.log(R),x("Basic detailed saved successfully")}catch(R){b(R)}finally{d(!1)}console.log("Profile data:",l.profile)},Me=()=>{const S=new Date(s==null?void 0:s.createdAt),ne=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][S.getMonth()],K=S.getFullYear();return ne+" "+K},Y=(S,R,ne)=>{y(X(T({},l),{[R]:X(T({},l[R]),{[ne]:S.target.value})})),ne==="holder1Gender"&&g(S.target.value),ne==="occupationCode"&&v(S.target.value)};return e(ln,{className:"container",children:i(G,{container:!0,columnSpacing:4,columns:{xs:12,sm:12,md:12},children:[i(G,{item:!0,className:"grid-item",xs:12,sm:4,md:4,children:[i(Bt,{children:[e("img",{src:"./public/images/profile1.jpg"}),i("div",{className:"content",children:[e(Pt,{children:n}),i("p",{className:"user-since",children:["Member since ",e("strong",{children:Me()})]})]})]}),i(cn,{children:[i(F,{className:`tab ${t==="basicDetails"?"active":""}`,onClick:()=>le("basicDetails"),children:[e(bi,{}),"Basic",e("span",{className:"mobile-hide",children:"\xA0Details"})]}),i(F,{className:`tab ${t==="bankDetails"?"active":""}`,onClick:()=>le("bankDetails"),children:[e(vi,{}),"Bank",e("span",{className:"mobile-hide",children:"\xA0Account"})]}),i(F,{className:`tab ${t==="nomineeDetails"?"active":""}`,onClick:()=>le("nomineeDetails"),children:[e(yi,{}),"Nominee",e("span",{className:"mobile-hide",children:"\xA0Details"})]}),i(F,{className:`tab ${t==="changeMpin"?"active":""}`,onClick:()=>le("changeMpin"),children:[e(wi,{}),e("span",{className:"mobile-hide",children:"Change\xA0"}),"MPIN"]})]})]}),e(G,{item:!0,xs:12,sm:8,md:8,children:e(V,{sx:{p:2,zIndex:10,border:"1px solid rgb(145 71 255 / 20%)",borderRadius:1},children:i(dn,{children:[t==="basicDetails"&&i(pn,{className:"basic-info",children:[i(G,{item:!0,xs:12,sm:12,md:12,children:[e("label",{children:"First Name:"}),e("input",{type:"text",onChange:S=>Y(S,"profile","holder1FN"),defaultValue:(Ve=l.profile)==null?void 0:Ve.holder1FN}),e("br",{}),e("label",{children:"Occupation:"}),i("select",{value:$,onChange:S=>Y(S,"profile","occupationCode"),children:[e("option",{value:"",children:"Select"}),e("option",{value:"01",children:"Business"}),e("option",{value:"02",children:"Services"}),e("option",{value:"03",children:"Professional"}),e("option",{value:"04",children:"Agriculture"}),e("option",{value:"05",children:"Retired"}),e("option",{value:"06",children:"Housewife"}),e("option",{value:"07",children:"Student"}),e("option",{value:"08",children:"Others"})]}),e("br",{}),e("label",{children:"Email:"}),e("input",{type:"email",onChange:S=>Y(S,"profile","email"),defaultValue:(Je=l.profile)==null?void 0:Je.email}),e("br",{}),e("label",{children:"Phone:"}),e("input",{type:"text",defaultValue:(Ye=l.profile)==null?void 0:Ye.indianMobile,onChange:S=>Y(S,"profile","indianMobile")}),e("br",{}),e("label",{children:"Date of Birth:"}),e("input",{type:"date",defaultValue:(He=l.profile)==null?void 0:He.holder1DOB,onChange:S=>Y(S,"profile","holder1DOB")}),e("br",{}),e("label",{children:"Gender:"}),i("select",{value:u,onChange:S=>Y(S,"profile","holder1Gender"),children:[e("option",{value:"",children:"Select"}),e("option",{value:"MALE",children:"Male"}),e("option",{value:"FEMALE",children:"Female"})]}),e("br",{})]}),i(G,{item:!0,xs:12,sm:12,md:12,children:[e("label",{children:"Last Name:"}),e("input",{type:"text",defaultValue:(qe=l.profile)==null?void 0:qe.holder1LN,onChange:S=>Y(S,"profile","holder1LN")}),e("br",{}),e("label",{children:"Annual Income:"}),e("input",{type:"number",defaultValue:(We=l.profile)==null?void 0:We.annualIncome,onChange:S=>Y(S,"profile","annualIncome")}),e("br",{}),e("label",{children:"Address 1:"}),e("input",{type:"text",defaultValue:(Ke=l.profile)==null?void 0:Ke.address1,onChange:S=>Y(S,"profile","address1")}),e("br",{}),e("label",{children:"Address 2:"}),e("input",{type:"text",defaultValue:(Qe=l.profile)==null?void 0:Qe.address2,onChange:S=>Y(S,"profile","address2")}),e("br",{}),e("label",{children:"Address 3:"}),e("input",{type:"text",defaultValue:(Ze=l.profile)==null?void 0:Ze.address3,onChange:S=>Y(S,"profile","address3")}),e("br",{}),e("label",{children:"City:"}),e("input",{type:"text",defaultValue:(et=l.profile)==null?void 0:et.city,onChange:S=>Y(S,"profile","city")}),e("br",{}),e("label",{children:"State:"}),e("input",{type:"text",defaultValue:(tt=l.profile)==null?void 0:tt.state,onChange:S=>Y(S,"profile","state")})]}),e(G,{item:!0,xs:12,sm:12,md:12,children:e(F,{onClick:S=>_(),className:"change-password",children:e("span",{children:"Save Changes"})})}),e(lt,{children:w})]}),t==="bankDetails"&&e(mn,{children:e(Pr,{data:l})}),t==="changeMpin"&&i(hn,{children:[e("label",{children:"Current MPIN:"}),e("input",{type:"number",name:"currentMpin",placeholder:"Current MPIN",value:z.currentMpin,onChange:fe}),e("br",{}),e("label",{children:"New MPIN:"}),e("input",{type:"number",name:"newMpin",placeholder:"New MPIN",value:z.newMpin,onChange:fe}),e("br",{}),e("label",{children:"Confirm New MPIN:"}),e("input",{type:"number",name:"confirmMpin",placeholder:"Confirm MPIN",value:z.confirmMpin,onChange:fe}),A.confirmMpin&&e("p",{style:{color:"red"},children:A.confirmMpin}),e("br",{}),i(G,{item:!0,xs:12,sm:12,md:12,children:[e(lt,{children:w}),e(F,{fullWidth:!1,className:"change-mpin",onClick:Fe,disabled:!se,children:"Change MPIN"})]})]}),t==="nomineeDetails"&&e(un,{children:e(Vr,{})})]})})})]})})},Yr=p.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10;
  left: 50%;
  transform: translateX(-50%);

  .dot {
    width: 1rem;
    height: 1rem;
    background: #ccc;
    margin: 0 5px;
    transition: width 0.3s ease-in-out;
  }
  .active-dot {
    width: 3rem;
    background: #000;
  }
`,Hr=({count:t,index:r})=>e(Yr,{children:Array.from({length:t}).map((n,o)=>e("div",{className:`dot ${r===o?"active-dot":""}`},o))}),qr=ki.autoPlay(wt),Wr=p.div`
  position: inherit;
  width: 100%;

  .slide {
    padding: 15px;
    min-height: 100px;
    height: 70vh;
    margin: 6px auto;
    display: flex;
    -webkit-box-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    img {
      margin: 0 auto;
      width: 100px;
      margin-bottom: 3rem;
    }
  }
  .slide1 {
    background: #fea900;
  }
  .slide2 {
    background: #b3dc4a;
  }
  .slide3 {
    background: #6ac0ff;
  }
  .pagination {
    position: absolute;
    bottom: 10;
    left: 50%;
    transform: translateX(-50%);
  }
`,Kr=()=>{const[t,r]=a.exports.useState(0),n=o=>{r(o)};return a.exports.useEffect(()=>{const o=setInterval(()=>{r(s=>(s+1)%3)},9e3);return()=>clearInterval(o)},[]),i(Wr,{children:[i(qr,{index:t,onChangeIndex:n,children:[i("div",{className:"slide",children:[e("img",{src:"./images/logo/savingpulse-logos_transparent.png",alt:""}),e("h2",{children:"Simple & free investing"}),e("p",{children:"Make investment easy in mutual funds"})]}),i("div",{className:"slide",children:[e("img",{src:"./images/logo/savingpulse-logos_transparent.png",alt:""}),e("h2",{children:"Direct mutual funds"}),e("p",{children:"Earn up to 2% extra!"})]}),i("div",{className:"slide",children:[e("img",{src:"./images/logo/savingpulse-logos_transparent.png",alt:""}),e("h2",{children:"Start in 2 minutes"}),e("p",{children:"100% peperless investing - SIP & One-time"})]})]}),e(Hr,{count:3,index:t})]})},Qr=p.div`
  .login-mobile {
    background-color: white;
    height: 100vh;

    .slider {
      height: 100%;
    }

    .login-container {
      margin: 5rem auto;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      font-size: 1.8rem;

      button {
        font-size: 1.8rem;
        width: 30rem;
      }
    }
  }

  // Desktop
  .login-desktop {
    display: none;

    .login-box {
      display: block;

      .page-title {
        color: ${t=>t.theme.textColor};
        font-size: 50px;
        padding: 30px 0;
      }
    }

    @media (min-width: 768px) {
      // display: block;
    }
  }
`,Zr=({onSignUp:t})=>i(Qr,{style:{height:"100vh",overflow:"hidden",position:"relative"},children:[e("div",{className:"slider",children:e(Kr,{})}),e("div",{className:"login-mobile",children:i("div",{className:"login-container",children:[e(F,{onClick:t,children:"Sign in with OTP"}),e(F,{children:"Sign in with google"})]})})]}),me="api/user-onboard",ve={getUsers:()=>ee(`${U()}/${me}?ajax=true`),getUser:t=>ee(`${U()}/${me}/${t}?ajax=true`),createUser:t=>Re(`${U()}/${me}`,t),verifyOtp:t=>Re(`${U()}/${me}`,t),updateUser:(t,r)=>Wi(`${U()}/${me}/${t}?ajax=true`,r),deleteUser:t=>Lt(`${U()}/${me}/${t}?ajax=true`)},ze=p.div`
  .login-with {
    background-color: white;
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    padding: 1rem;

    .header {
      display: block;
      padding: 10px;
      width: 100%;
      font-size: 2rem;
    }
    .content {
      margin: 15rem 1rem 2rem;
      h2 {
        font-size: 3.5rem;
      }
      p {
        padding: 20px 0;
        font-size: 1.4rem;
      }
      

    }
.input-container {
  position: relative;
}

.label {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 12px;
  color: #999;
  padding: 5px;
  background-color: #fff;
  z-index: 1;
}

.input-field {
  padding: 15px 10px;
  border: 1px solid #ccc;
  width: 100%;
}

.input-field:focus + .label {
  color: #333;
}
    .controls {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
      .basic-details {
        display: grid;
        grid-template-columns: 1fr;
        width: 80%;

        label.basic {
          margin-top: 0;
          flex-direction: column;
          position: relative;

          .label {
            position: absolute;
            top: -0.5rem;
            left: 0.5rem;
            font-size: 1.2rem;
            color: #999;
            padding: 5px;
            background-color: #fff;
            z-index: 1;
          }
          input[type=number], input[type=email], input[type=text], select, input[type=date] {
            font-size: 1.6rem;
            width: 100%;
            letter-spacing: 2px;
          }
          input[type=date] {
            letter-spacing: 0;
          }
          input[name=panCard] {
            text-transform: uppercase;
          }
          select#gender {
            background: #fff;
          }
          span.error {
            color: red;
            font-size: 1.2rem;
          }
        }
      }
      .error {
        color: red;
      }
      label {
        display: flex;
        align-items: center;
        justify-content: center;
        align-items: center;
        font-size: 1.8rem;
        // margin-top: 6rem;
        opacity: 0.75;

        input[type=number], input[type=email], input[type=text], select, input[type=date] {
          padding: 0 10px;
          border: 0.2rem solid #ececec;
          margin: 0.5rem;
          width: 25rem;
          height: 5rem;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          font-size: 1.8rem;
          text-align: center;
          letter-spacing: 5px;
        }
      }
    }
    .controls .next {
      margin: 6px;
    }
    .controls button {
      width: 300px;
      font-size: 1.8rem;
    }
    .home-box {
      padding: 75px 10px;
      color: ${t=>t.theme.textColor};
      background-color: ${t=>t.theme.header};
      position: relative;
      z-index: 3;
      animation: pageAnim 0.3s ease-in-out;
    }
  }

  .home-desktop {
    display: none;
    .home-box {
      display: block;
      .page-title {
        color: ${t=>t.theme.textColor};
        font-size: 50px;
        padding: 30px 0;
      }
    }
    @media (min-width: 768px) {
    }
  }
`,ut=q`var(--white, #fff)`,eo=q`var(--primaryDisableCTAFill, #767676)`,to=q`var(--secondaryCTABorder, #999)`,io=q`var(--primaryCTAFill, #9147ff)`,Le=q`var(--primaryCTAFillRGB, 145, 71 ,255)`,no=q`var(--primaryCTABorder, #c5d1df)`,ro=q`var(--primaryErrorCTAFill, #d9534f)`,je=q`var(--primaryErrorCTAFillRGB, 229, 28, 38)`,oo=q`var(--primaryErrorCTABorder, #d43f3a)`,ao=q`var(--secondaryCTAFill, #333)`,Be=q`var(--secondaryCTAFillRGB, 51, 51, 51)`,so=q`var(--primaryCTABorder, #979797)`,lo=q`#ee8950`,co=q`#ec7939`;p.div`
  .sp-button {
    min-height: 3.5rem;
    cursor: pointer;
    color: ${ut};
    line-height: normal;
    border-radius: 0.4rem;
    font-size: 1.4rem;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    border: 1px solid transparent;
    white-space: nowrap;
    appearance: auto;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.1s ease 0s;
    vertical-align: middle;
    padding: 0 3rem;
    outline-color: ${ut};
    outline-offset: -4px;
    user-select: none;
    text-decoration: none;
    width: fit-content;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
  }
  .sp-button:focus-visible {
    outline-style: double;
  }
  .sp-button:disabled {
    cursor: not-allowed;
    background-color: ${eo};
    border: 1px solid ${to};
  }
  .sp-button.transparent {
    background-color: transparent;
  }
  .sp-button.warning {
    background-color: ${lo}
    border-color: ${co};
  }

  .sp-button.primary {
    background-color: ${io};
    border-color: ${no};
  }
  .sp-button.primary:hover {
    background-color: rgba(${Le}, 0.9);
  }
  .sp-button.primary:focus-visible {
    background-color: rgba(${Le}, 0.8);
  }
  .sp-button.primary:active {
    background-color: rgba(${Le}, 0.7);
  }

  .sp-button.danger {
    background-color: ${ro};
    border-color: ${oo};
  }
  .sp-button.danger:hover {
    background-color: rgba(${je}, 0.9);
  }
  .sp-button.danger:focus-visible {
    background-color: rgba(${je}, 0.8);
  }
  .sp-button.danger:active {
    background-color: rgba(${je}, 0.7);
  }

  .sp-button.dark {
    background-color: ${ao};
    border-color: ${so};
  }
  .sp-button.dark:hover {
    background-color: rgba(${Be}, 0.9);
  }
  .sp-button.dark:focus-visible {
    background-color: rgba(${Be}, 0.8);
  }
  .sp-button.dark:active {
    background-color: rgba(${Be}, 0.7);
  }
`;const po=({onNext:t,onBack:r})=>{const[n,o]=a.exports.useState(!1);a.exports.useState(!1);const s=W(),c=ae(),[d,m]=a.exports.useState(8947973174),[b,w]=a.exports.useState(123456),[x,l]=a.exports.useState(!1),[y,u]=a.exports.useState({}),g=a.exports.useRef(null),$=a.exports.useRef(null);a.exports.useEffect(()=>{g.current?g.current.focus():$.current&&$.current.focus()},[d,b]);const v=async()=>{if(!/^(\+91|91|0)?[6-9][0-9]{9}$/.test(d))u({mobileError:!0});else{const f=await ve.createUser({action:"savePhone",indianMobile:d,ajax:!0});console.log(f),(f==null?void 0:f.step)==="otp"?(oe.setItem("last_insert_id",f==null?void 0:f.data),l(!0)):(f==null?void 0:f.step)==="next"?t():(f==null?void 0:f.step)==="login"}},h=async()=>{const k=!/^[0-9]{6}$/.test(b);if(k)u({otpError:k});else{const f=await ve.verifyOtp({action:"verifyPhone",phone:d,otp:b,last_insert_id:oe.getItem("last_insert_id"),ajax:!0});if(console.log(f),(f==null?void 0:f.status)===!1)return;await c(Dt(d,"","fresh")),(f==null?void 0:f.step)==="login"?s("/"):(l(!0),t())}},C=M=>{u({mobileError:null});const{name:k,value:f}=M.target;k==="phoneNumber"&&(f.length<=10&&!isNaN(f)||f===""?m(f):(M.key==="Backspace"||M.key==="Delete")&&m(d.slice(0,-1))),k==="phoneOtp"&&(f.length<=6&&!isNaN(f)||f===""?w(f):(M.key==="Backspace"||M.key==="Delete")&&w(f.slice(0,-1)))};return e(ze,{children:e("div",{className:`login-with ${n?"hide":""}`,children:x?e(({otp:M})=>i(D,{children:[i("div",{className:"content",children:[e("h2",{children:"Enter 6 digit OTP we sent on mobile"}),e("p",{children:"\xA0 "})]}),i("div",{className:"controls",children:[e("label",{children:e("input",{type:"number",name:"phoneOtp",pattern:"[0-9]",maxLength:"6",placeholder:"######",value:M,onChange:C,ref:$})}),y.otpError&&e("div",{className:"error",children:"Invalid 6 digit otp"}),e("div",{className:"next",children:i(F,{onClick:h,children:["Verify OTP ",e(It,{fontSize:20})]})}),e("div",{className:"back",children:e(F,{onClick:r,children:"Back"})})]})]}),{otp:b}):e(({phone:M})=>i(D,{children:[i("div",{className:"content",children:[e("h2",{children:"Enter your mobile number"}),e("p",{children:"We will send you a confirmation code."})]}),i("div",{className:"controls",children:[i("label",{children:[e("span",{children:"+91"})," ",e("input",{type:"number",name:"phoneNumber",pattern:"[0-9]",maxLength:"10",placeholder:"8947973174",value:M,onChange:C,ref:g}),e("br",{})]}),y.mobileError&&e("div",{className:"error",children:"Invalid mobile number"}),e("div",{className:"next",children:e(F,{onClick:v,children:"Submit"})}),e("div",{className:"back",children:e(F,{onClick:r,children:"Back"})})]})]}),{phone:d})})})},mo=({onNext:t,onBack:r})=>{const[n,o]=a.exports.useState(!1),s=ae(),c=W(),[d,m]=a.exports.useState(""),[b,w]=a.exports.useState(123456),[x,l]=a.exports.useState(!1),[y,u]=a.exports.useState({}),g=a.exports.useRef(null),$=a.exports.useRef(null);a.exports.useEffect(()=>{g.current?g.current.focus():$.current&&$.current.focus()},[d,b]);const v=async()=>{const L=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;if(console.log(oe.getItem("last_insert_id")),L.test(d)){const M=await ve.createUser({action:"saveEmail",email:d,last_insert_id:oe.getItem("last_insert_id"),ajax:!0});console.log(M),(M==null?void 0:M.step)==="otp"&&l(!0)}else u({emailError:!0})},h=async()=>{var k,f;const M=!/^[0-9]{6}$/.test(b);if(console.log(M),M)u({otpError:M});else{const z=await ve.verifyOtp({action:"verifyEmail",email:d,otp:b,last_insert_id:oe.getItem("last_insert_id"),ajax:!0});console.log(z),(z==null?void 0:z.step)==="otp"?(console.log((k=z==null?void 0:z.data)==null?void 0:k.insert_id),oe.setItem("last_insert_id",(f=z==null?void 0:z.data)==null?void 0:f.insert_id),l(!0)):(z==null?void 0:z.step)==="next"?t():(z==null?void 0:z.step)==="login"&&(s(Dt(d,"","fresh")),c("/"))}};return e(ze,{children:e("div",{className:`login-with ${n?"hide":""}`,children:x?e(()=>i(D,{children:[i("div",{className:"content",children:[e("h2",{children:"Enter 6 digit OTP we sent on email"}),e("p",{children:"\xA0 "})]}),i("div",{className:"controls",children:[e("label",{children:e("input",{type:"number",name:"emailOtp",pattern:"[0-6]",placeholder:"######",value:b,onChange:L=>w(L.target.value),ref:$})}),y.otpError&&e("div",{className:"error",children:"Invalid 6 digit otp"}),e("div",{className:"next",children:i(F,{onClick:h,children:["Verify OTP ",e(It,{fontSize:20})]})}),e("div",{className:"back",children:e(F,{onClick:r,children:"Back"})})]})]}),{onNext:t,onBack:r}):e(()=>i(D,{children:[i("div",{className:"content",children:[e("h2",{children:"Enter your email address"}),e("p",{children:"We will send you a confirmation code"})]}),i("div",{className:"controls",children:[e("label",{children:e("input",{type:"email",name:"email",placeholder:"Enter email",value:d,onChange:L=>m(L.target.value),ref:g})}),y.emailError&&e("div",{className:"error",children:"Invalid email"}),e("div",{className:"next",children:e(F,{onClick:v,children:"Submit"})}),e("div",{className:"back",children:e(F,{onClick:r,children:"Back"})})]})]}),{})})})},ho=({onSubmit:t,onBack:r})=>{const n=W(),[o,s]=a.exports.useState({firstName:"",lastName:"",gender:"",panCard:"",dob:""}),[c,d]=a.exports.useState({}),m=(x,l)=>{let y="";switch(l=l.toUpperCase(),x){case"firstName":l||(y="First name is required");break;case"lastName":l||(y="Last name is required");break;case"gender":l||(y="Gender is required");break;case"panCard":l?/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(l)||(y="Invalid PAN card number"):y="PAN card number is required";break;case"dob":l?/^\d{4}-\d{2}-\d{2}$/.test(l)||(y="Invalid date format"):y="Date of birth is required";break}return y},b=x=>{const{name:l,value:y}=x.target,u=m(l,y);s(g=>X(T({},g),{[l]:y})),d(g=>X(T({},g),{[l]:u}))},w=async x=>{x.preventDefault();const l={};if(Object.keys(o).forEach(y=>{const u=m(y,o[y]);u&&(l[y]=u)}),d(l),Object.keys(l).length===0){console.log("Form submitted:",o);const y=await ve.createUser({holder1FN:o.firstName,holder1LN:o.lastName,holder1Gender:o.gender,holder1Pan:o.panCard,holder1DOB:o.dob,action:"saveDetail",last_insert_id:oe.getItem("last_insert_id"),ajax:!0});console.log(y),n("/mutual-funds")}};return e(ze,{children:i("div",{className:"login-container login-with",children:[i("div",{className:"content",children:[e("h2",{children:"Enter details"}),e("p",{children:"We will send you a confirmation code."})]}),i("div",{className:"controls",children:[i("div",{className:"basic-details",children:[i("label",{className:"basic",children:[e("label",{htmlFor:"firstName",className:"label",children:"First Name"}),e("input",{type:"text",name:"firstName",id:"firstName",placeholder:"Enter your first name",value:o.firstName,onChange:b}),c.firstName&&e("span",{className:"error",children:c.firstName})]}),i("label",{htmlFor:"",className:"basic",children:[e("label",{htmlFor:"firstName",className:"label",children:"Last Name"}),e("input",{type:"text",name:"lastName",id:"lastName",placeholder:"Enter your last name",value:o.lastName,onChange:b}),c.lastName&&e("span",{className:"error",children:c.lastName})]}),i("label",{className:"basic",children:[e("label",{htmlFor:"gender",className:"label",children:"Gender"}),i("select",{name:"gender",id:"gender",value:o.gender,onChange:b,children:[e("option",{value:"",children:"Gender"}),e("option",{value:"male",children:"Male"}),e("option",{value:"female",children:"Female"}),e("option",{value:"other",children:"Other"})]}),c.gender&&e("span",{className:"error",children:c.gender})]}),i("label",{className:"basic",children:[e("label",{htmlFor:"panCard",className:"label",children:"Pan Card"}),e("input",{type:"text",name:"panCard",id:"panCard",placeholder:"PAN Card",value:o.panCard,onChange:b}),c.panCard&&e("span",{className:"error",children:c.panCard})]}),i("label",{className:"basic",children:[e("label",{htmlFor:"dob",className:"label",children:"Date of Birth"}),e("input",{type:"date",name:"dob",id:"dob",value:o.dob,onChange:b}),c.dob&&e("span",{className:"error",children:c.dob})]})]}),e("div",{className:"next",children:e(F,{onClick:w,children:"Submit"})}),e("dir",{className:"back",children:e(F,{onClick:r,children:"Back"})})]})]})})},uo=({onSubmit:t,onBack:r})=>{a.exports.useState({firstName:"",lastName:"",gender:"",panCard:"",dob:""});const n=W();return e(ze,{children:i("div",{className:"login-container login-with",children:[i("div",{className:"content",children:[e("h2",{children:"Thank You!"}),e("p",{children:"Your information has been submitted successfully."})]}),e("div",{className:"controls",children:e("div",{className:"next",children:e(F,{onClick:()=>{document.cookie="isLoggedIn="+!0,n("/mutual-funds")},children:"Submit"})})})]})})},Pe=()=>{const[t,r]=a.exports.useState(0),n=()=>r(t+1),o=()=>r(t-1),s=c=>{console.log("User Data:",c),r(t+1)};return console.log(t),i("div",{children:[t===0&&e(Zr,{onSignUp:n}),t===1&&e(D,{children:e(po,{onNext:n,onBack:o})}),t===2&&e(mo,{onNext:n,onBack:o}),t===3&&e(ho,{onSubmit:s,onBack:o}),t===4&&e(uo,{})]})},go=p.div`
  padding: 0;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .scheme-link {
    font-size: 1.8rem;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    border: 1px solid rgba(224, 224, 224, 0.5);
    span {
      border-bottom: 1px dashed;
      color: ${t=>t.theme.color};
    }
  }

  .actions {
    display: flex;
    justify-content: space-around;
    width: 100%;
    bottom: 4rem;
    position: fixed;
    left: 0;
    right: 0;

    button {
      height: 5rem;
      display: flex;
      width: 100%;
      gap: 1rem;
      margin-left: 2rem;
      margin-right: 2rem;
      font-size: 1.8rem;
      background: ${t=>t.theme.color};
    }
  }
`,fo=p.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  h2 {
    color: ${t=>t.theme.textColor};
  }
`,xo=p.li`
  padding: 0 1rem;
`,bo=p.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.4rem;
  padding: 0 1rem;
  margin: 2rem 0;
  border: 1px solid rgb(224, 224, 224);
  div:last-child {
    border-bottom: none; /* Remove border on the last child */
  }
`,xe=p.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgb(224, 224, 224);
  padding: 1rem 0;
  font-size: 1.4rem;
  p {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0.5rem 0;
    color: ${t=>t.theme.textColor};
  }
`,vo=()=>{const[t,r]=a.exports.useState(window.innerWidth),n={id:1,amc_icon:"sbi.png",scheme_code:"RGFPS-GR",scheme_name:"Large Cap Fund",category:"Equity",value:5e4,increment:2e3,transactions:[{date:"2023-01-01",amount:1e4},{date:"2023-02-01",amount:1e4},{date:"2023-03-01",amount:1e4},{date:"2023-04-01",amount:1e4},{date:"2023-05-01",amount:1e4},{date:"2023-06-01",amount:1e4},{date:"2023-07-01",amount:1e4},{date:"2023-08-01",amount:1e4},{date:"2023-09-01",amount:1e4},{date:"2023-10-01",amount:1e4},{date:"2023-11-01",amount:1e4}]},o=n.transactions;return i(go,{children:[(()=>{if(t<=767)return e(Ue,{displayText:"Folio Details"})})(),i("div",{className:`${t>767?"container":"container mobile"}`,children:[i("a",{className:"scheme-link",href:`.#/mutual-fund/${n==null?void 0:n.scheme_code}`,children:[e("span",{children:n==null?void 0:n.scheme_name})," ",e(Ni,{})," "]}),i(bo,{children:[i(xe,{children:[i("p",{children:[e("span",{children:"Invested"}),e("span",{children:"XXXXXX"})]}),i("p",{children:[e("span",{children:"Current"}),e("span",{children:"XXXXXX"})]}),e("hr",{})]}),i(xe,{children:[i("p",{children:[e("span",{children:"Returns"}),e("span",{children:"XXXXXX"})]}),i("p",{children:[e("span",{children:"Day Returns"}),e("span",{children:"XXXXXX"})]}),e("hr",{})]}),i(xe,{children:[i("p",{children:[e("span",{children:"Current Nav"}),e("span",{children:"XXXXXX"})]}),i("p",{children:[e("span",{children:"Avg Nav"}),e("span",{children:"XXXXXX"})]}),e("hr",{})]}),i(xe,{children:[i("p",{children:[e("span",{children:"Folio No."}),e("span",{children:"XXXXXX"})]}),i("p",{children:[e("span",{children:"Total Unit"}),e("span",{children:"XXXXXX"})]}),e("hr",{})]})]}),i(fo,{children:[e("div",{className:"section-head",children:e("h2",{children:"Transaction Details"})}),o.map(c=>e(xo,{children:i(xe,{children:[i("p",{children:[e("span",{children:"Invested"}),i("span",{children:["\u20B9",c.amount]})]}),i("p",{children:[e("span",{children:c.date}),e("span",{children:"14.55 Unit / 143.33 Nav"})]})]})},c.date))]})]}),i("div",{className:`actions ${t<768?"mobile":"desktop"}`,children:[e(F,{onClick:()=>{},children:"Redeem"}),e(F,{onClick:()=>{},children:"Switch"})]})]})},yo=p.div`
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;

  .actions {
    display: flex;
    justify-content: space-around;
    width: 100%;
    bottom: 4rem;
    position: absolute;
    left: 0;
    right: 0;

    button {
      background: ${t=>t.theme.color};
      height: 5rem;
      display: flex;
      width: 100%;
      gap: 1rem;
      margin-left: 2rem;
      margin-right: 2rem;
      font-size: 1.8rem;
    }
  }
`,wo=p.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  padding: 7.6rem 1rem;
`,ko=p.div`
  width: 40%;
  height: 78vh;
  overflow-y: auto;
  border-right: 1px solid rgb(204 204 204 / 50%);
  border-top: 1px solid rgb(204 204 204 / 50%);
  border-bottom: 1px solid rgb(204 204 204 / 50%);
  color: ${t=>t.theme.textColor};
`,No=p.div`
  width: 60%;
  overflow-y: auto;
  border-top: 1px solid rgb(204 204 204 / 50%);
  border-bottom: 1px solid rgb(204 204 204 / 50%);
`,So=p.div`
  padding: 1rem;
  cursor: pointer;
  background-color: transparent;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(204 204 204 / 50%);
  font-size: 1.4rem;
`,Co=p.label`
  padding: 1rem 2rem;
  cursor: pointer;
  background-color: transparent;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(204 204 204 / 50%);
  font-size: 1.4rem;
  color: ${t=>t.theme.textColor};

  input[type="checkbox"] {
    margin-right: 1rem;
  }
`;function $o({mySize:t}){var x;const[r,n]=a.exports.useState("AMC"),[o,s]=a.exports.useState({}),c=W();console.log(typeof o);const d=[{name:"AMC",options:["HDFC","ICICI","SBI","Axis","HDFC1","ICICI2","SBI3","Axis4"]},{name:"Category",options:["Equity","Debt","Hybrid","Solution Oriented"]},{name:"Rating",options:["5 Star","4 Star","3 Star","2 Star","1 Star"]},{name:"Risk",options:["Low","Moderately Low","Moderate","Moderately High","High"]},{name:"Available to invest",options:["Lumpsum","SIP","Both"]}],m=l=>{n(l)},b=(l,y)=>{s(u=>{const g=u[l]?[...u[l]]:[];return g.includes(y)?X(T({},u),{[l]:g.filter($=>$!==y)}):X(T({},u),{[l]:[...g,y]})})},w=()=>{console.log("Applied filters:",o),c("/all-mutual-funds")};return i(yo,{children:[e(Ue,{displayText:"Sort & Filter",rightButton:""}),i(wo,{children:[e(ko,{children:d.map(l=>e(So,{active:r===l.name,onClick:()=>m(l.name),children:l.name},l.name))}),e(No,{children:r&&((x=d.find(l=>l.name===r))==null?void 0:x.options.map(l=>{var y;return i(Co,{children:[e("input",{type:"checkbox",id:l,checked:((y=o[r])==null?void 0:y.includes(l))||!1,onChange:()=>b(r,l)}),e("span",{children:l})]},l)}))})]}),i("div",{className:`actions ${t<768?"mobile":"desktop"}`,children:[e(F,{onClick:()=>n(""),children:"Cancel"}),e(F,{onClick:w,children:"Apply"})]})]})}const zo=()=>{const{darkStatus:t,sideBarStatus:r}=B(l=>l.site),[n,o]=a.exports.useState(window.innerWidth),[s,c]=a.exports.useState(!0),d=W(),m=ie(),b=![null,!1].includes(localStorage.getItem("user-auth"));let w=n<768?e(hr,{}):e(mt,{});b||(w=e(Pe,{})),a.exports.useEffect(()=>{n>768&&m.pathname==="/"&&d("/explore"),b||d("/onboard");const l=()=>o(window.innerWidth);return window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[n]);const x=()=>m.pathname==="/login"||m.pathname==="/sort-filter"||m.pathname.match("/folio")||!b?(console.log(m.pathname),c(!1),null):(console.log(m.pathname),e(xn,{mySize:n}));return a.exports.useEffect(()=>{const l=()=>{m.pathname==="/"};return window.addEventListener("popstate",l),()=>{window.removeEventListener("popstate",l)}},[m.pathname]),i(Si,{theme:t?ji:Li,store:_i,children:[e(Ei,{}),i("div",{className:"app",children:[e(x,{}),e("div",{className:`${s?"main":""} ${r&&n>1199?"sidebar-open":""}`,children:i(Ci,{children:[e(I,{path:"*",element:e($i,{to:"/",replace:!0})}),e(I,{path:"/all-mutual-funds",element:e(zr,{})}),e(I,{path:"/",element:w}),e(I,{path:"/onboard",element:e(Pe,{})}),e(I,{path:"/login",element:e(Pe,{})}),e(I,{path:"/return-calculator",element:e(Mr,{type:"sip",loading:!0})}),e(I,{path:"/mutual-fund/:schemeCode",element:e(Cr,{loading:!0,mySize:n})}),e(I,{path:"/sort-filter",element:e($o,{mySize:n})}),i(I,{path:"/schemes/",children:[e(I,{path:"high-return",element:e(de,{type:"high-return"})}),e(I,{path:"sip-with-100",element:e(de,{type:"sip-with-100"})}),e(I,{path:"tax-saving",element:e(de,{type:"tax-saving"})}),e(I,{path:"large-cap",element:e(de,{type:"large-cap"})}),e(I,{path:"mid-cap",element:e(de,{type:"mid-cap"})}),e(I,{path:"small-cap",element:e(de,{type:"small-cap"})}),e(I,{path:"SIP",element:e(ct,{})}),e(I,{path:"Watchlist",element:e(ct,{})})]}),e(I,{path:"explore",element:e(mt,{})}),e(I,{path:"dashboard",element:e(ar,{})}),e(I,{path:"/folio/:folioNo",element:e(vo,{loading:!0,mySize:n})}),i(I,{path:"/following/",element:e(Dn,{}),children:[e(I,{index:!0,element:e(_n,{})}),e(I,{path:"live",element:e(Tn,{})}),e(I,{path:"videos",element:e(On,{})}),e(I,{path:"categories",element:e(Un,{})})]}),i(I,{path:"/ipo/",element:e(ce,{}),children:[e(I,{index:!0,path:"all",element:e(ce,{})}),e(I,{path:"mainline",element:e(ce,{})}),e(I,{path:"sme",element:e(ce,{})}),e(I,{path:"listed",element:e(ce,{})}),e(I,{path:"closed",element:e(ce,{})})]}),i(I,{path:"/offers/",element:e(Vn,{}),children:[e(I,{index:!0,path:"brokers",element:e(pt,{type:"stock"})}),e(I,{path:"advisors",element:e(pt,{type:"advisor"})})]}),e(I,{path:"/user-profile",element:e(Jr,{})})]})})]})]})},Io=()=>{const{pathname:t}=ie();return a.exports.useEffect(()=>{window.scrollTo(0,0)},[t]),null},Fo=te({name:"user",initialState:{users:[{username:"CosmoKramer",title:"Rapid Chess Championship!",game:"Chess",tag:"Chatting",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-chees.jpg",viewers:"17.1K"},{username:"Soprano",title:"Im back",game:"Dota 2",tag:"Turkish",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-dota.jpg",viewers:"395"},{username:"Seinfeld",title:"Reduce Ping & Avoid Lags",game:"PUBG",tag:"English",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-pubg.jpg",viewers:"5.4K"},{username:"Darlene",title:"FPS soon? OMEGALUL",game:"Counter Strike",tag:"English",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-cs.jpg",viewers:"117"},{username:"Cersei",title:"Live Bitcoin Trading Infos 24/7",game:"Crypto",tag:"Chatting",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-crypto.jpg",viewers:"88"},{username:"Jacob",title:"LVL 70 - Tracksuit Grind",game:"Escape From Tarkov",tag:"Turkish",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-eft.jpg",viewers:"733"},{username:"Skyler",title:"Tourney Run Kollo",game:"Mortal Kombat",tag:"English",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-mortal.jpg",viewers:"231"},{username:"Schillinger",title:"Day 12 of the Game of Year ?",game:"Elder Ring",tag:"English",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-elder.jpg",viewers:"3.7K"}]}});var Mo=Fo.reducer;const Do=te({name:"category",initialState:{games:[{name:"Dota 2",image:"./images/categories/game1.jpg",viewer:"63.3k"},{name:"Chess",image:"./images/categories/game2.jpg",viewer:"23.7k"},{name:"PUBG: BATTLEGROUNDS",image:"./images/categories/game3.jpg",viewer:"34.3k"},{name:"Just Chatting",image:"./images/categories/game4.jpg",viewer:"580k"},{name:"Grand Theft Auto V",image:"./images/categories/game5.jpg",viewer:"144k"},{name:"Elder Ring",image:"./images/categories/game6.jpg",viewer:"88k"},{name:"Apex Legends",image:"./images/categories/game7.jpg",viewer:"112.6k"},{name:"Call of Duty: Wardzone",image:"./images/categories/game8.jpg",viewer:"39k"},{name:"Escape from Tarkov",image:"./images/categories/game9.jpg",viewer:"20k"},{name:"FIFA 22",image:"./images/categories/game10.jpg",viewer:"42.2k"},{name:"Fortnite",image:"./images/categories/game11.jpg",viewer:"102k"},{name:"Age of Empires",image:"./images/categories/game12.jpg",viewer:"5.4k"}]}});var Ao=Do.reducer;let _e;_e===void 0&&(_e=[{Scheme_Name:"Aditya Birla Sun Life PSU Equity Fund",amc_logo:"absl.png",Scheme_Type:"Equity",Scheme_Type:"Big",Scheme_Code:"",risk:"High",rating:5,return:[47.01,88,23]},{Scheme_Name:"Motilal Oswal Midcap Fund",amc_logo:"motilal-oswal.png",Scheme_Type:"Equity",Scheme_Type:"Flexi Cap",Scheme_Code:"",risk:"Very High",rating:4,return:[47.01,88]},{Scheme_Name:"Nippon India Small Cap Fund",amc_logo:"nippon.png",Scheme_Type:"Equity",Scheme_Type:"Small",Scheme_Code:"",risk:"Low",rating:5,return:[47.01,88,23]},{Scheme_Name:"Motilal Oswal Midcap Fund",amc_logo:"motilal-oswal.png",Scheme_Type:"Equity",Scheme_Type:"Flexi Cap",Scheme_Code:"",risk:"Very High",rating:4,return:[47.01,88]},{Scheme_Name:"Nippon India Small Cap Fund",amc_logo:"nippon.png",Scheme_Type:"Equity",Scheme_Type:"Small",Scheme_Code:"",risk:"Low",rating:5,return:[47.01,88,23]},{Scheme_Name:"Motilal Oswal Midcap Fund",amc_logo:"motilal-oswal.png",Scheme_Type:"Equity",Scheme_Type:"Flexi Cap",Scheme_Code:"",risk:"Very High",rating:4,return:[47.01,88]},{Scheme_Name:"Nippon India Small Cap Fund",amc_logo:"nippon.png",Scheme_Type:"Equity",Scheme_Type:"Small",Scheme_Code:"",risk:"Low",rating:5,return:[47.01,88,23]}]);const Eo=te({name:"schemes",initialState:{schemes:_e}});var Lo=Eo.reducer;const jo=te({name:"offers",initialState:{offers:[{id:1,name:"Angel Broking",image:"./images/offers/angel-one.png",category:"broker",type:"advisor",href:"/angel-broking"},{id:2,name:"Zerodha",image:"./images/offers/zerodha.png",category:"broker",type:"stock",href:"#"},{id:3,name:"Upstox",image:"./images/offers/upstox.png",category:"broker",type:"advisor",href:"#"},{id:5,name:"Dhan",image:"./images/offers/dhan.png",category:"broker",type:"advisor",href:"#"},{id:6,name:"5 Paisa",image:"./images/offers/5-paisa.png",category:"broker",type:"stock",href:"#"},{id:7,name:"ICICI direct",image:"./images/offers/icici-direct.png",category:"broker",type:"advisor",href:"#"},{id:8,name:"Kotak Securities",image:"./images/offers/kotak-security.png",category:"broker",type:"stock",href:"#"},{id:1,name:"Angel Broking",image:"./images/offers/angel-one.png",category:"broker",type:"advisor",href:"/angel-broking"},{id:2,name:"Zerodha",image:"./images/offers/zerodha.png",category:"broker",type:"stock",href:"#"},{id:3,name:"Upstox",image:"./images/offers/upstox.png",category:"broker",type:"advisor",href:"#"},{id:5,name:"Dhan",image:"./images/offers/dhan.png",category:"broker",type:"advisor",href:"#"},{id:6,name:"5 Paisa",image:"./images/offers/5-paisa.png",category:"broker",type:"stock",href:"#"},{id:7,name:"ICICI direct",image:"./images/offers/icici-direct.png",category:"broker",type:"advisor",href:"#"},{id:8,name:"Kotak Securities",image:"./images/offers/kotak-security.png",category:"broker",type:"stock",href:"#"}]}});var Bo=jo.reducer;const Po=te({name:"ipos",initialState:{ipos:[{name:"RNFI Services Limited",image:"./images/ipo/RNFI_Services_logo.jpg",exchange:"NSE",type:"sme",href:"/angel-broking",date:{start:"Jul 22, 2024",end:"Jul 22, 2024",list:"Jul 22, 2024"},price:{offer:"98-105",expectedPremium:"84-90 (80%)"},lotSize:"1200",subscriptions:"221.56"},{name:"SAR Televenture Limited FPO",image:"./images/ipo/SAR_Televentures_logo.png",exchange:"NSE",type:"mainline",href:"/angel-broking",date:{start:"Jul 22, 2024",end:"Jul 22, 2024",list:"Jul 22, 2024"},price:{offer:"200-210",expectedPremium:"7-8 (3.33%)"},lotSize:"500",subscriptions:"7.49"},{name:"V.L.Infraprojects Limited",image:"./images/ipo/Vraj_Iron_And_Steel_logo.png",exchange:"NSE",type:"sme",href:"/angel-broking",date:{start:"Jul 23, 2024",end:"Jul 25, 2024",list:"Jul 22, 2024"},price:{offer:"39-42",expectedPremium:"60-62 (142.86%)"},lotSize:"3000",subscriptions:"633.71"},{name:"VVIP Infratech Limited",image:"./images/ipo/uttsav_cz_gold_logo.jpeg",exchange:"NSE",type:"mainline",href:"/angel-broking",date:{start:"Jul 23, 2024",end:"Jul 25, 2024",list:"Jul 27, 2024"},price:{offer:"91-93",expectedPremium:"115-122 (123.66%)"},lotSize:"1200",subscriptions:"236.92"},{name:"Chetana Education Limited",image:"./images/ipo/Cheviot-company-logo.jpg",exchange:"NSE",type:"mainline",href:"/angel-broking",date:{start:"Jul 23, 2024",end:"Jul 25, 2024",list:"Jul 27, 2024"},price:{offer:"80-85",expectedPremium:"40-43 (47.06%)"},lotSize:"1600",subscriptions:"196.57"},{name:"Manglam Infra and Engineering Limited",image:"./images/ipo/Manglam_Infra_Logo.png",exchange:"NSE",type:"sme",href:"/angel-broking",date:{start:"Jul 23, 2024",end:"Jul 25, 2024",list:"Jul 27, 2024"},price:{offer:"53-56",expectedPremium:"47-50 (83.93%)"},lotSize:"2000",subscriptions:"394.59"},{name:"Aprameya Engineering Limited",image:"./images/ipo/Aprameya_Engineering_logo.jpg",exchange:"NSE",type:"mainline",href:"/angel-broking",date:{start:"Jul 25, 2024",end:"Jul 29, 2024",list:"Jul 27, 2024"},price:{offer:"56-58",expectedPremium:"25-30 (43.1%)"},lotSize:"2000",subscriptions:"5.92"},{name:"Trom Industries Limited",image:"./images/ipo/Trom-Industries-logo.jpg",exchange:"NSE",type:"sme",href:"/angel-broking",date:{start:"Jul 25, 2024",end:"Jul 29, 2024",list:"Jul 27, 2024"},price:{offer:"110-115",expectedPremium:"135-145 (117.39%)"},lotSize:"1200",subscriptions:"34.84"},{name:"Clinitech Laboratory Limited",image:"./images/ipo/Clinitech_lab_logo.jpg",exchange:"BSE",type:"sme",href:"/angel-broking",date:{start:"Jul 25, 2024",end:"Jul 29, 2024",list:"Jul 27, 2024"},price:{offer:"96",expectedPremium:"135-145 (117.39%)"},lotSize:"1200",subscriptions:"6.09 times"}]}});var Ro=Po.reducer;const _o=te({name:"collections",initialState:{collections:[{name:"High Return",url:"high-return",image:"high-returns.svg"},{name:"SIP with 100",url:"sip-with-100",image:"sip-with-100.svg"},{name:"Tax Saving",url:"tax-saving",image:"tax-saving.svg"},{name:"Large Cap",url:"large-cap",image:"large-cap.svg"},{name:"Mid Cap",url:"mid-cap",image:"mid-cap.svg"},{name:"Small Cap",url:"small-cap",image:"small-cap.svg"}]}});var To=_o.reducer;const Oo=te({name:"auth",initialState:JSON.parse(localStorage.getItem("user-data"))||null,reducers:{setAuth:(t,r)=>(t=r.payload,t),removeAuth:t=>(t=null,t)}});var Uo=Oo.reducer,Xo=zi({reducer:{site:Gi,user:Mo,user:()=>localStorage.getItem("user-data"),category:Ao,schemes:Lo,offers:Bo,ipos:Ro,amcCollection:To,auth:Uo}});Ii.render(e(Fi.StrictMode,{children:e(Mi,{store:Xo,children:i(Di,{children:[e(Io,{}),e(zo,{})]})})}),document.getElementById("root"));

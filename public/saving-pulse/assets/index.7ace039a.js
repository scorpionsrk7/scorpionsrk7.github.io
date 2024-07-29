import{W as ee,s as l,c as v,r as m,u as j,j as e,a as t,B as z,F as M,b as ie,V as te,d as oe,e as ne,f as T,A as R,g as re,h as ae,R as C,i as le,M as se,k as de,l as J,m as ce,n as x,o as L,p as pe,q as me,t as he,v as y,w as f,L as p,x as ge,y as F,z as xe,C as H,D as A,E as $,G as fe,H as ue,I as be,J as ve,K as we,N as ye,O as W,P as V,Q as Y,S as B,T as ke,U as Ne,X as ze,Y as d,Z as $e,_ as Se,$ as Ce,a0 as je,a1 as Me,a2 as Le}from"./vendor.a0e56e7b.js";const Fe=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};Fe();const Ae=ee`

html {
  scroll-behavior: smooth;
  font-size: 10px;
}

body {
  background: ${i=>i.theme.body};
  color: ${i=>i.theme.text};
}
body::-webkit-scrollbar {
  width: 5px;
}

body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

a {
  color: ${i=>i.theme.text};
}

.app {
  display: block;
}

.hide {
  display: none !important;
}
@media (min-width: 768px) {
  .app {
    .main {
      padding: 55px 15px 55px 75px;

      &.sidebar-open {
        padding-left: 265px;
      }

    }
  }
}

@media (max-width: 767px) {
  .app {
    .main {
      h1 {
        display: none;
      }

      .hide-mb {
        display: none;
      }
    }
  }
}

@media (min-width: 768px) {
  body {
    background: ${i=>i.theme.bodyDesktop};
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
`,Be={header:"#ffffff",headerDesktop:"#ffffff",body:"#F7F7F8",bodyDesktop:"#F7F7F8",sideBar:"#efeff1",color:"#9147ff",textColor:"#0e0e10",hover:"#0000001a",soft:"#777777",bits:"#e9e9e9",softDesktop:"#555555",border:"#efeff1",darkModeBg:"#dedede",iconColor:"#0e0e10"},De={header:"#0e0e10",headerDesktop:"#18181B",body:"#18181B",bodyDesktop:"#0e0e10",sideBar:"#1f1f23",color:"#9147ff",textColor:"#fcfaff",hover:"#ffffff1a",soft:"#adadb8",bits:"#333333",softDesktop:"#cdcdb8",border:"#ffffff1a",darkModeBg:"#9147ff",iconColor:"#adadb8"},Oe=l.header`
  display: none;
  position: fixed;
  top: 0px;
  z-index: 20;
  width: 100%;

  .header-box {
    position: relative;
    width: 100%;
    display: block;
    height: 50px;
    background-color: ${i=>i.theme.headerDesktop};
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    z-index: 10;

    header {
      background-color: ${i=>i.theme.headerDesktop};
      color: ${i=>i.theme.textColor};
      width: 100vw;
      display: flex;
      align-items: center;
      height: 100%;

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
              color: ${i=>i.theme.textColor};
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
                color: ${i=>i.theme.color};
                transition: 0.3s;
                fill: #fff;
                stroke: #fff;
                position: relative;
                z-index: 4;
                overflow: hidden;

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
                  background-color: ${i=>i.theme.hover};
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
                color: ${i=>i.theme.color};
              }
            }
          }
          .active {
            border-bottom: 2px solid ${i=>i.theme.color};

            .link {
              color: ${i=>i.theme.color};
            }
          }
        }
      }

      .bottom {
        flex: 1;

        .search-bar {
          max-width: 400px;
          width: 100%;
          height: 35px;
          background-color: ${i=>i.theme.soft}31;
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
            color: ${i=>i.theme.textColor};
            transition: 0.2s;
            border: 2px solid transparent;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;

            &:focus {
              background-color: ${i=>i.theme.headerDesktop};
              border: 2px solid ${i=>i.theme.color};
            }
          }

          .search-icon {
            width: 40px;
            height: 100%;
            background-color: ${i=>i.theme.border};
            font-size: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }
        }
      }

      .right {
        display: flex;
        align-items: center;

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
                  background-color: ${i=>i.theme.hover};
                }
              }

              &:hover {
                background-color: ${i=>i.theme.hover};
              }
            }
          }
        }
      }

      .profile-desktop {
        margin: 0 20px 0 10px;
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
          background-color: ${i=>i.theme.bits};

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
`,_e=l.div`
  .profile-box {
    cursor: pointer;
    position: relative;

    .profile {
      width: 30px;
      height: 30px;
      border-radius: 999px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      background-color: #9147ff;
      font-size: 22px;
    }

    .profile-menu {
      display: none;
      position: absolute;
      width: 200px;
      background-color: ${i=>i.theme.header};
      color: ${i=>i.theme.textColor};
      top: 35px;
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
          background-color: ${i=>i.theme.border};
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
            background-color: #9147ff;
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
              color: ${i=>i.theme.soft};

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
              padding: 8px 5px;
              transition: 0.3s;
              border-radius: 5px;
              display: flex;
              align-items: center;
              justify-content: space-between;

              .item {
                display: flex;
                align-items: center;
                font-size: 18px;

                span {
                  margin-left: 8px;
                  font-size: 13px;
                }
              }

              &:hover {
                background-color: ${i=>i.theme.border};
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
`,Ee=l.div`
  .button-box {
    width: 36px;
    height: 18px;
    border: 2px solid ${i=>i.theme.textColor};
    background-color: ${i=>i.theme.header};
    border-radius: 999px;
    position: relative;
    display: flex;
    align-items: center;

    .ball {
      position: absolute;
      left: 2px;
      background-color: ${i=>i.theme.textColor};
      width: 12px;
      height: 12px;
      border-radius: 999px;
      transition: 0.3s cubic-bezier(0.24, 0.01, 0.77, 1.42);
    }
  }
  .button-true {
    border: 2px solid ${i=>i.theme.color};

    .ball {
      transform: translateX(16px);
      background-color: ${i=>i.theme.color};
    }
  }
`,G=v({name:"site",initialState:{darkStatus:!1,sideBarStatus:!0},reducers:{setDarkMode:i=>{i.darkStatus=!i.darkStatus},setSideBarStatus:i=>{i.sideBarStatus=!i.sideBarStatus}}}),{setDarkMode:K,setSideBarStatus:Pe}=G.actions;var Ie=G.reducer;const D=({whichStatus:i,changeStatus:o})=>{const[n,a]=m.exports.useState(!1),r=j();return e(Ee,{children:e("div",{className:`button-box ${n?"button-true":""}`,onClick:()=>{!i||(a(!n),i==="online"?o():r(K()))},children:e("div",{className:"ball"})})})},Te=()=>{const[i,o]=m.exports.useState(!1),[n,a]=m.exports.useState(!1);return e(_e,{children:t("div",{className:"profile-box",children:[e("div",{className:"profile",onClick:()=>o(!i),children:e(z,{})}),e("div",{className:`profile-menu ${i?"show-profile-menu":""}`,children:t("div",{className:"menu-box",children:[t("div",{className:"profile-info",children:[e("div",{className:"pp",children:e(z,{})}),t("div",{className:"info",children:[e("div",{className:"username",children:"khaleesi"}),t("div",{className:"status",children:[e("div",{className:`status-icon ${n?"online":""}`,children:e(M,{})}),e("span",{children:n?"Online":"Offline"})]})]})]}),t("div",{className:"status-button",children:[e("span",{children:"Online"}),e(D,{whichStatus:"online",changeStatus:()=>a(!n)})]}),e("hr",{}),e("div",{className:"menu-list",children:t("ul",{children:[e("li",{children:t("div",{className:"item",children:[e(ie,{})," ",e("span",{children:"Channel"})]})}),e("li",{children:t("div",{className:"item",children:[e(te,{})," ",e("span",{children:"Video Producer"})]})}),e("li",{children:t("div",{className:"item",children:[e(oe,{})," ",e("span",{children:"Creator Dashboard"})]})}),e("li",{children:t("div",{className:"item",children:[e(ne,{})," ",e("span",{children:"Safety"})]})}),e("hr",{}),e("li",{children:t("div",{className:"item",children:[e(T,{})," ",e("span",{children:"Friends"})]})}),e("li",{children:t("div",{className:"item",children:[e(R,{})," ",e("span",{children:"Subscriptions"})]})}),e("li",{children:t("div",{className:"item",children:[e(re,{})," ",e("span",{children:"Drops"})]})}),e("li",{children:t("div",{className:"item",children:[e(ae,{})," ",e("span",{children:"Wallet"})]})}),e("hr",{}),e("li",{children:t("div",{className:"item",children:[e(C,{})," ",e("span",{children:"Settings"})]})}),e("li",{children:t("div",{className:"item",children:[e(le,{style:{transform:"rotate(180deg)"}})," ",e("span",{children:"BetterTTV Settings"})]})}),t("li",{children:[t("div",{className:"item",children:[e(se,{})," ",e("span",{children:"Language"})]}),e(de,{})]}),t("li",{children:[t("div",{className:"item",children:[e(J,{})," ",e("span",{children:"Dark Theme"})]}),e(D,{whichStatus:"darkmode"})]}),e("hr",{}),e("li",{children:t("div",{className:"item",children:[e(ce,{style:{transform:"rotate(180deg)"}})," ",e("span",{children:"Log Out"})]})})]})})]})})]})})},Re=l.div`
  .sidebar-box {
    position: fixed;
    left: 0;
    top: 0;
    width: 55px;
    height: 100vh;
    background-color: ${i=>i.theme.sideBar};
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
        color: ${i=>i.theme.softDesktop};
        transition: 0.3s;
        opacity: 0;
      }

      .title-icon {
        font-size: 20px;
        display: flex;
        margin-right: 8px;
        transition: 0.3s;
        cursor: pointer;
        color: ${i=>i.theme.textColor};

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
        color: ${i=>i.theme.textColor};
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
    width: 250px;

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
`,Je=l.div`
  li {
    display: block;
    padding: 10px;
    height: 50px;
    color: ${i=>i.theme.textColor};
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
            color: ${i=>i.theme.soft};
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
      background-color: ${i=>i.theme.hover};
    }
  }
`,He=l.div`
  .list {
    display: block;
    margin-bottom: 10px;

    .show-more {
      padding: 10px;
      width: 100px;

      span {
        transition: 0.3s;
        font-size: 0px;
        color: ${i=>i.theme.color};
        font-weight: 500;
        cursor: pointer;
        opacity: 0;
      }
    }
  }
`,We=({user:i,imageId:o})=>e(Je,{children:e("li",{children:t("div",{className:"item",children:[e("div",{className:"pp",children:e("img",{src:`https://i.pravatar.cc/5${o}`})}),t("div",{className:"hover-section",children:[t("div",{className:"info",children:[e("div",{className:"username",children:i.username}),e("div",{className:"title",children:i.game})]}),t("div",{className:"live",children:[e("div",{className:"live-icon",children:e(M,{})}),e("span",{children:"333"})]})]})]})})}),O=()=>{const{users:i}=x(o=>o.user);return e(He,{children:t("div",{className:"list",children:[e("ul",{children:i.map((o,n)=>{if(!(n>4))return e(We,{user:o,imageId:n},n)})}),e("div",{className:"show-more",children:e("span",{children:"Show More"})})]})})},Ve=l.div`
  display: block;
  width: 100%;

  .searchbar-box {
    width: 100%;
    background-color: ${i=>i.theme.hover};
    color: ${i=>i.theme.textColor};
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
      color: ${i=>i.theme.textColor};
    }
  }
  .searchbar-box.focus {
    background-color: transparent;
    border: 2px solid ${i=>i.theme.color};
  }
`,U=({placeholder:i})=>{const[o,n]=m.exports.useState(!1);return e(Ve,{children:t("div",{className:`searchbar-box ${o?"focus":""}`,children:[e("div",{className:"search-icon",children:e(L,{})}),e("input",{type:"text",placeholder:i,className:"input",onFocus:()=>n(!0),onBlur:()=>n(!1)})]})})},Ye=({mySize:i})=>{const{sideBarStatus:o}=x(a=>a.site),n=j();return e(Re,{children:t("div",{className:`sidebar-box ${o&&i>1199?"side-open":""}`,children:[t("div",{className:"list-title",children:[e("h1",{children:"Followed Channels"}),e("div",{className:"title-icon",onClick:()=>n(Pe(!o)),children:e(pe,{})}),e("div",{className:"followed",children:e(me,{})})]}),e(O,{}),t("div",{className:"list-title",children:[e("h1",{children:"Recommended Channels"}),e("div",{className:"camera",children:e(he,{})})]}),e(O,{}),e("div",{className:"side-search",children:e(U,{placeholder:"Search to Add Friends"})})]})})},Ge=({mySize:i})=>{const{pathname:o}=y();return e(Oe,{children:t(f,{children:[e("div",{className:"header-box",children:t("header",{children:[e("div",{className:"left",children:t("ul",{children:[e("li",{children:e("div",{className:"item",children:e(p,{to:"/",children:t("div",{className:"logo",children:[e("div",{className:"logo-bg"}),e(ge,{})]})})})}),e("li",{className:o==="/mutual-funds"?"active":"",children:e(p,{to:"/mutual-funds",className:"link",children:e("div",{className:"item",children:"Mutual funds"})})}),e("li",{className:o==="/following"?"active":"",children:e(p,{to:"/following",className:"link",children:e("div",{className:"item",children:"Following"})})}),e("li",{className:o==="/"?"active":"",children:e(p,{to:"/",className:"link",children:e("div",{className:"item",children:"Home"})})}),e("li",{className:o==="/browse"?"active":"",children:e(p,{to:"/browse",className:"link",children:e("div",{className:"item",children:"Browse"})})}),e("li",{className:o==="/offers"?"active":"",children:e(p,{to:"/offers",className:"link",children:e("div",{className:"item",children:"Offers"})})}),e("li",{children:e("div",{className:"item",children:e(F,{className:"item-icon"})})})]})}),e("div",{className:"bottom",children:t("div",{className:"search-bar",children:[e("input",{type:"text",placeholder:"Search"}),e("div",{className:"search-icon",children:e(L,{})})]})}),e("div",{className:"right",children:e("div",{className:"right-icons",children:e("ul",{children:e("li",{children:e(xe,{})})})})}),e("div",{className:"profile-desktop",children:e(Te,{})})]})}),e("div",{className:"left-bar",children:e(Ye,{mySize:i})})]})})},Ke=l.header`
  display: none;

  // Header Navbar
  header {
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${i=>i.theme.header};
    color: ${i=>i.theme.iconColor};
    padding: 10px;
    position: fixed;
    top: 0;
    z-index: 4;

    .logo {
      border: 2px dashed #9147ff;
      border-radius: 100%;
      padding: 0.5rem;
    }

    .logo img {
      height: 45px;
    }

    .page-name {
      margin-left: 10px;
      font-size: 2rem;
      font-weight: 600;
    }

    .profile-box {
      width: 40px;
      height: 40px;
      background-color: #9147ff;
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
    height: 60px;
    background-color: ${i=>i.theme.header};
    z-index: 4;

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 26px;
      color: ${i=>i.theme.iconColor};
      cursor: pointer;
      transition: 0.3s;

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
      color: ${i=>i.theme.color};
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
`,Ue=l.div`
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
    background-color: ${i=>i.theme.header};
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
        background-color: ${i=>i.theme.border};
        color: ${i=>i.theme.textColor};
        height: 60%;
        padding: 10px;
        border-radius: 8px;
        font-size: 18px;
      }
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
`,qe=({searchStatus:i,setSearchStatus:o})=>e(Ue,{className:i?"search-visible":"",children:e("div",{className:"search-box",children:t("div",{className:"search-bar",children:[e(H,{className:"search-close",onClick:()=>o(!i)}),e("input",{type:"text",placeholder:"Search..."})]})})}),Xe=l.div`
  position: fixed;
  bottom: 60px;
  left: 0;
  width: 100%;
  height: 95vh;
  background-color: ${i=>i.theme.header}d9;
  z-index: 5;

  .profile-menu-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 97%;
    overflow-y: scroll;
    background-color: ${i=>i.theme.header};
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
      background-color: ${i=>i.theme.header};
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 500;
      padding: 15px 13px;
      z-index: 10;

      h1 {
        font-weight: 500;
        font-size: 20px;
        color: ${i=>i.theme.textColor};
      }

      span {
        position: absolute;
        color: ${i=>i.theme.textColor};
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
      background-color: ${i=>i.theme.header};
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 20px;
      border: 1px solid ${i=>i.theme.border};
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
          background-color: #9147ff;
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
          background-color: ${i=>i.theme.color};
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
          color: ${i=>i.theme.textColor};
        }
        .status {
          font-size: 13px;
          opacity: 0.8;
          padding: 5px 0;
          color: ${i=>i.theme.soft};
        }
      }
    }

    .settings {
      width: 100%;
      background-color: ${i=>i.theme.header};
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 15px;
      border: 1px solid ${i=>i.theme.border};

      ul {
        width: 100%;
        display: block;

        li {
          width: 100%;
          padding: 10px 0;
          cursor: pointer;

          &:not(:last-child) {
            border-bottom: 1px solid ${i=>i.theme.border};
          }

          .settings__title {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px;
            color: ${i=>i.theme.textColor};
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
`,Ze=l.div`
  .darkMode-container {
    width: 44px;
    height: 24px;
    border-radius: 999px;
    background-color: ${i=>i.theme.darkModeBg};
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
`,Qe=()=>{const{darkStatus:i}=x(a=>a.site),o=j();return e(Ze,{children:e("div",{className:"darkMode-container",onClick:a=>(a.preventDefault(),o(K())),children:e("div",{className:`ball ${i?"dark":""}`})})})},ei=({handleCloseProfileMenu:i})=>{let o=A();return e(Xe,{children:t("div",{className:"profile-menu-container",children:[t("div",{className:"title",children:[e(H,{onClick:i}),e("h1",{children:"Account"}),e(C,{})]}),t("div",{className:"user",children:[e("div",{className:"user__top",children:e("div",{className:"user-box",children:e(z,{})})}),e("div",{className:"user__bottom",children:e("div",{className:"username",children:"Arun Suthar"})}),e("span",{className:"user-since",children:"Member since 2020"})]}),e("div",{className:"settings",children:t("ul",{children:[e("li",{children:t("div",{className:"settings__title",children:[t("div",{className:"title-left",children:[e(R,{className:"title-icon"}),"Subscriptions"]}),e($,{})]})}),e("li",{children:t("div",{className:"settings__title",children:[t("div",{className:"title-left",children:[e(T,{className:"title-icon"}),"Friends"]}),e($,{})]})}),e("li",{children:e(p,{to:"/settings",children:t("div",{className:"settings__title",children:[t("div",{className:"title-left",children:[e(C,{className:"title-icon"}),"Settings"]}),e($,{})]})})}),e("li",{children:t("div",{className:"settings__title",children:[t("div",{className:"title-left",children:[e(J,{className:"title-icon"}),"Dark Mode"]}),e(Qe,{})]})}),e("li",{children:e("div",{className:"settings__title",onClick:()=>{document.cookie="isLoggedIn="+!1,o("/home")},children:t("div",{className:"title-left",children:[e(fe,{className:"title-icon"}),"Logout"]})})})]})})]})})},ii=()=>{const{pathname:i}=y(),[o,n]=m.exports.useState(!1),[a,r]=m.exports.useState(!1),s=()=>r(!a);let c="Home";switch(i){case"/mutual-funds":c="Mutual Funds";break;case"/following":c="Mutual Funds";break;case"/":c="Home";break;case"/ipo":c="Intial Public Offers";break;case"/offers":c="Offers";break}return t(Ke,{children:[t("header",{children:[e(p,{to:"/",children:e("div",{className:"logo",children:e("img",{src:"./images/logo/filtered/savingpulse-mb-transparent.png"})})}),e("h1",{className:"page-name",children:c}),e(qe,{searchStatus:o,setSearchStatus:n}),t("div",{className:"right-buttons",children:[e(L,{onClick:()=>n(!o)}),"\xA0 \xA0",e("div",{className:`profile-menu-box ${a?"visible":""}`,children:e(ei,{handleCloseProfileMenu:s})}),e("div",{className:"profile-box",children:e(z,{onClick:()=>r(!a)})})]})]}),t("nav",{children:[e(p,{to:"/mutual-funds",onClick:()=>r(!1),children:t("div",{className:`item ${i==="/mutual-funds"?"active":""}`,children:[e(ue,{}),e("span",{children:"Funds"})]})}),e(p,{to:"/following",onClick:()=>r(!1),children:t("div",{className:`item ${i==="/following"?"active":""}`,children:[e(be,{}),e("span",{children:"Following"})]})}),e(p,{to:"/",onClick:()=>r(!1),children:t("div",{className:`item ${i==="/"?"active":""}`,children:[e(ve,{}),e("span",{children:"Home"})]})}),e(p,{to:"/ipo",onClick:()=>r(!1),children:t("div",{className:`item ${i==="/ipo"?"active":""}`,children:[e(we,{className:"item__browse"}),e("span",{children:"IPO"})]})}),e(p,{to:"/offers",onClick:()=>r(!1),children:t("div",{className:`item ${i==="/offers"?"active":""}`,children:[e(ye,{className:"item__profile"}),e("span",{children:"Offers"})]})})]})]})},ti=({mySize:i})=>t("div",{className:"header",children:[e(ii,{}),e(Ge,{mySize:i})]}),oi=l.div`
  // Mobile
  .home-mobile {
    background-color: white;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;

    img {
      width: 200px;
      margin: 20vh auto;
      align-items: center;
      display: flex;
    }

    .login-container {
      margin: 0 auto;
      width: 80%;
      text-align: center;
      padding: 10px;
      position: absolute;
      bottom: 50px;

      .login-otp,
      .login-google {
        margin: 0 auto;
        padding: 20px;
        background: #9147ff;
        border-radius: 20px;
        margin: 5px;
        text-align: center;
        font-size: 1.8rem;
        color: white;
      }

      .no-account {
        font-size: 1.4rem;
        padding: 2rem;

        a {
          color: #9147ff;
        }
      }
    }


    .home-box {
      padding: 75px 10px;
      color: ${i=>i.theme.textColor};
      background-color: ${i=>i.theme.header};
      position: relative;
      z-index: 3;
      animation: pageAnim 0.3s ease-in-out;
    }

    @media (max-width: 767px) {
      // display: block;
    }
  }

  // Desktop
  .home-desktop {
    display: none;

    .home-box {
      display: block;

      .page-title {
        color: ${i=>i.theme.textColor};
        font-size: 50px;
        padding: 30px 0;
      }
    }

    @media (min-width: 768px) {
      // display: block;
    }
  }
`,q=l.div`
  // Mobile
  .login-with {
    background-color: white;
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    padding: 2rem;

    .header {
      display: block;
      padding: 10px;
      width: 100%;
      font-size: 2rem;
    }

    .content {
        margin: 5rem 1rem;
      h2 {
        font-size: 4.5rem;
      }
      p {
        padding: 20px 0;
        font-size: 1.4rem;
      }
      label {
        display: flex;
        align-items: center;
        font-size: 3rem;
        margin-top: 6rem;

        input[type=text] {
          padding: 0 10px;
          border: 2px solid red;
          margin: 0 auto;
          width: 25rem;
          height: 6rem;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          font-size: 3rem;
          text-align: center;
          letter-spacing: 5px;
        }
      }
    }
    .controls .next {
      margin: 6px;
    }
    .controls button {
      display: flex;
      justify-content: center;
      text-align: center;
      /* margin: 6px auto; */
      font-size: 2rem;
      padding: 2rem;
      background: green;
      width: 100%;
      text-align: center;
      color: white;
      border-radius: 10px;
    }
    .numbers ul {
      display: grid;
      grid-template-columns: 3fr 3fr 3fr;
      li {
        text-align: center;
        font-size: 3rem;
        padding: 2rem;
        background: #ececec;
        margin: 6px;
      }
      img {
        width: 200px;
        margin: 20vh auto;
        align-items: center;
        display: flex;
      }

      .login-container {
        margin: 0 auto;
        width: 80%;
        text-align: center;
        padding: 10px;
        position: absolute;
        bottom: 50px;

        .login-otp,
        .login-google {
          margin: 0 auto;
          padding: 20px;
          background: #9147ff;
          border-radius: 20px;
          margin: 5px;
          text-align: center;
          font-size: 1.8rem;
          color: white;
        }

        .no-account {
          font-size: 1.4rem;
          padding: 2rem;

          a {
            color: #9147ff;
          }
        }
      }
    }

    .home-box {
      padding: 75px 10px;
      color: ${i=>i.theme.textColor};
      background-color: ${i=>i.theme.header};
      position: relative;
      z-index: 3;
      animation: pageAnim 0.3s ease-in-out;
    }

    @media (max-width: 767px) {
      // display: block;
    }
  }

  // Desktop
  .home-desktop {
    display: none;

    .home-box {
      display: block;

      .page-title {
        color: ${i=>i.theme.textColor};
        font-size: 50px;
        padding: 30px 0;
      }
    }

    @media (min-width: 768px) {
      // display: block;
    }
  }
`,ni=({type:i=""})=>{x(r=>r.offers);const[o,n]=m.exports.useState(!1);let a=A();return e(q,{children:t("div",{className:`login-with ${o?"hide":""}`,children:[e("div",{className:"header",onClick:()=>{n(!0),console.log("Hello")},children:e(W,{})}),t("div",{className:"content",children:[e("h2",{children:"Enter 6 digit OTP"}),e("p",{children:"We will send you a confirmation code."}),e("label",{children:e("input",{type:"text",placeholder:"###-###"})})]}),t("div",{className:"controls",children:[e("div",{className:"next",children:e("button",{onClick:()=>{document.cookie="isLoggedIn="+!0,a("/mutual-funds")},children:"Submit"})}),e("div",{className:"numbers",children:t("ul",{children:[e("li",{children:"1"}),e("li",{children:"2"}),e("li",{children:"3"}),e("li",{children:"4"}),e("li",{children:"5"}),e("li",{children:"6"}),e("li",{children:"7"}),e("li",{children:"8"}),e("li",{children:"9"}),e("li",{children:"0"}),e("li",{children:e(V,{})})]})})]})]})})},ri=()=>{const[i,o]=m.exports.useState(!1),[n,a]=m.exports.useState(!1);return t(q,{children:[t("div",{className:`login-with ${i?"hide":""}`,children:[e("div",{className:"header",onClick:()=>o(!0),children:e(W,{})}),t("div",{className:"content",children:[e("h2",{children:"Enter your mobile number"}),e("p",{children:"We will send you a confirmation code."}),t("label",{children:[e("span",{children:"+91"})," ",e("input",{type:"text",placeholder:"8947973174"})]})]}),t("div",{className:"controls",children:[e("div",{className:"next",children:e("button",{onClick:()=>a(!0),children:"Next"})}),e("div",{className:"numbers",children:t("ul",{children:[e("li",{children:"1"}),e("li",{children:"2"}),e("li",{children:"3"}),e("li",{children:"4"}),e("li",{children:"5"}),e("li",{children:"6"}),e("li",{children:"7"}),e("li",{children:"8"}),e("li",{children:"9"}),e("li",{children:"0"}),e("li",{children:e(V,{})})]})})]})]}),n?e(ni,{}):null]})},ai=l.div`
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
          background-color: #9147ff;
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
`,li=({type:i=""})=>{const{offers:o}=x(n=>n.offers);return e(ai,{children:o.map((n,a)=>{if(n.type===i)return t("div",{className:`offer-box offer-${n.id}`,children:[t("div",{className:"left-side",children:[e("div",{className:"picture",children:e("img",{src:n.image,alt:""})}),e("h2",{className:"name",children:n.name})]}),e("div",{className:"right-side",children:t("ul",{className:"action-buttons",children:[e("li",{children:"View Details"}),e("li",{children:"Open Account"})]})})]},n.id)})})},si=()=>{const[i,o]=m.exports.useState(!1),[n,a]=m.exports.useState(!1);return e(f,{children:t(oi,{children:[t("div",{className:`home-mobile ${i?"hide1":""}`,children:[e("img",{src:"./images/logo/savingpulse-logos_transparent.png",alt:""}),t("div",{className:"login-container",children:[e("div",{className:"login-otp",onClick:()=>o(!0),children:"Sign in with OTP"}),e("div",{className:"login-google",onClick:()=>a(!0),children:"Sign in with google"}),t("div",{className:"no-account",children:["Don't have an account? ",e(p,{to:"/signup",children:"Signup"})]})]})]}),i?e(ri,{}):e(li,{})]})})},di=l.div`
  // Mobile
  .ipos-mobile {
    display: none;

    .ipos-box {
      padding: 75px 10px;
      color: ${i=>i.theme.textColor};
      background-color: ${i=>i.theme.header};
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
          border-bottom: 2px solid ${i=>i.theme.color};
          color: ${i=>i.theme.color};
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
        color: ${i=>i.theme.textColor};
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
        color: ${i=>i.theme.textColor};

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
            background-color: ${i=>i.theme.hover};
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
`,ci=l.div`
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
          background-color: ${i=>i.theme.hover};
          border-radius: 5px;
          cursor: pointer;
          color: #9147ff;
          font-weight: 500;
        }
      }

      .action-link {
        display: flex;
        gap: 1rem;

        a {
          background-color: rgb(145, 71, 255);
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
      font-size: 1.4rem;
      // border: 1px solid #ececec;
        
      div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 1rem;
        align-items: center;
      }
    }
  }
`,k=({ipo:i})=>{var o,n,a;return e(ci,{children:t("div",{className:"ipo-box",children:[t("div",{className:"header",children:[e("div",{className:"picture",children:e("img",{src:i.image,alt:""})}),t("div",{children:[e("h2",{className:"name",children:i.name}),t("p",{className:"offer",children:["Offer date: ",(o=i==null?void 0:i.date)==null?void 0:o.start," - ",(n=i==null?void 0:i.date)==null?void 0:n.end]})]})]}),t("div",{className:"actions",children:[t("div",{className:"tags",children:[e("div",{className:"tag",children:i.exchange}),e("div",{className:"tag",children:"Live"})]}),t("div",{className:"action-link",children:[e(p,{className:"link",to:"",title:"Apply",children:"Apply"}),t(p,{className:"link",to:"",title:"Check Allotment",children:[e("span",{className:"hide-mb1",children:"Check "}),"Allotment"]})]})]}),t("div",{className:"more-details",children:[t("div",{children:[e("span",{children:"Offer Price"}),e("span",{children:(a=i==null?void 0:i.price)==null?void 0:a.offer})]}),t("div",{children:[e("span",{children:"Lot Size"}),e("span",{children:i.lotSize})]}),t("div",{children:[e("span",{children:"Subscription"}),t("span",{children:[i.subscriptions," times"]})]})]})]})})},pi=l.div`
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
          background-color: ${i=>i.theme.color};
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
            background-color: ${i=>i.theme.color}e9;
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
`,mi=()=>e(pi,{children:e("div",{className:"tags-box",children:t("ul",{children:[e("li",{children:t("div",{className:"item",children:[e("span",{children:"Games"}),e("div",{className:"icon",children:e("img",{src:"https://static.twitchcdn.net/assets/gaming-e9019587744b56b11b43.svg",alt:""})})]})}),e("li",{children:t("div",{className:"item",children:[e("span",{children:"IRL"}),e("div",{className:"icon",children:e("img",{src:"https://static.twitchcdn.net/assets/irl-baa32e8e64a6974282c0.svg",alt:""})})]})}),e("li",{children:t("div",{className:"item",children:[e("span",{children:"Music"}),e("div",{className:"icon",children:e("img",{src:"https://static.twitchcdn.net/assets/music-5fb4595a30d04d991e24.svg",alt:""})})]})}),e("li",{children:t("div",{className:"item",children:[e("span",{children:"Esports"}),e("div",{className:"icon",children:e("img",{src:"https://static.twitchcdn.net/assets/esports-7a078acca57531d11e29.svg",alt:""})})]})}),e("li",{children:t("div",{className:"item",children:[e("span",{children:"Creative"}),e("div",{className:"icon",children:e("img",{src:"https://static.twitchcdn.net/assets/creative-6423fb5fbcf31fadee38.svg",alt:""})})]})})]})})}),hi=l.div`
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
      color: ${i=>i.theme.textColor};
      transition: 0.3s;
    }

    &:hover {
      .link {
        color: ${i=>i.theme.color};
      }
    }
  }

  .link-box.active {
    border-bottom: 2px solid ${i=>i.theme.color};

    a {
      color: ${i=>i.theme.color};
    }
  }
`,b=({title:i,to:o})=>{const{pathname:n}=y();return e(hi,{children:e("div",{className:`link-box ${n==o?"active":""}`,children:e(p,{to:o||"/",className:"link",children:i||"default"})})})},w=()=>{const[i,o]=m.exports.useState(!0),{ipos:n}=x(r=>r.ipos),a=r=>{switch(r){case"all":return e("div",{className:"all-ipo",children:n.map((h,u)=>e(k,{ipo:h,imageId:u},u))});case"mainline":const s=n.filter(h=>h.type==="mainline");return e("div",{className:"mainline-ipo",children:s.map((h,u)=>e(k,{ipo:h,imageId:u},u))});case"sme":const c=n.filter(h=>h.type==="sme");return e("div",{className:"sme-ipo",children:c.map((h,u)=>e(k,{ipo:h,imageId:u},u))});default:return e("div",{className:"all-ipo",children:n.map((h,u)=>e(k,{ipo:h,imageId:u},u))})}};return e(f,{children:t(di,{children:[e("div",{className:"ipos-mobile",children:t("div",{className:"ipos-box",children:[e("h1",{children:"Browse"}),t("div",{className:"navigation",children:[e("div",{onClick:()=>o("all"),className:`nav-ipo-all ${i=="all"||i===!0?"nav-active":""}`,children:"All"}),e("div",{onClick:()=>o("mainline"),className:`nav-ipo-mainline ${i=="mainline"?"nav-active":""}`,children:"Mainline"}),e("div",{onClick:()=>o("sme"),className:`nav-ipo-sme ${i=="sme"?"nav-active":""}`,children:"SME"})]}),a(i)]})}),e("div",{className:"browse-desktop",children:t("div",{className:"ipo-box",children:[e("h1",{className:"page-title",children:"Browse"}),e(mi,{}),e("div",{className:"nav",children:t("ul",{children:[e("li",{children:e(b,{to:"/browse",title:"Categories"})}),e("li",{children:e(b,{to:"/browse/all",title:"Live Channels"})})]})}),t("div",{className:"search-filter",children:[t("div",{className:"search-box",children:[e("span",{children:"Filter by"}),e(U,{placeholder:"Search Tags"})]}),t("div",{className:"filter",children:[e("span",{children:"Sort by"}),t("div",{className:"sort",children:["Recommended For You",e("div",{className:"sort-icon",children:e(Y,{})})]})]})]}),e(B,{})]})})]})})};l.div`
  .profile-menu-container {
    // position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 97%;
    overflow-y: scroll;
    background-color: ${i=>i.theme.header};
    padding: 0;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    z-index: 10;

    .title {
      position: sticky;
      top: 0;
      left: 0;
      background-color: ${i=>i.theme.header};
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
        color: ${i=>i.theme.textColor};
      }

      span {
        position: absolute;
        color: ${i=>i.theme.textColor};
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
      background-color: ${i=>i.theme.header};
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 20px;
      border: 1px solid ${i=>i.theme.border};
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
          background-color: #9147ff;
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
          background-color: ${i=>i.theme.color};
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
          color: ${i=>i.theme.textColor};
        }
        .status {
          font-size: 13px;
          opacity: 0.8;
          padding: 5px 0;
          color: ${i=>i.theme.soft};
        }
      }
    }

    .settings {
      width: 100%;
      background-color: ${i=>i.theme.header};
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 15px;
      border: 1px solid ${i=>i.theme.border};

      ul {
        width: 100%;
        display: block;

        li {
          width: 100%;
          padding: 10px 0;
          cursor: pointer;

          &:not(:last-child) {
            border-bottom: 1px solid ${i=>i.theme.border};
          }

          .settings__title {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px;
            color: ${i=>i.theme.textColor};
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
`;const gi=l.div`
  //Following mobile
  .follow-mobile {
    display: none;

    .follow-box {
      padding: 75px 10px;
      background-color: ${i=>i.theme.header};
      color: ${i=>i.theme.textColor};
      position: relative;
      z-index: 3;
      animation: pageAnim 0.3s ease-in-out;

      h1 {
        background-color: ${i=>i.theme.header};
      }

      h3 {
        font-size: 18px;
        width: 100%;
        position: sticky;
        top: 50px;
        padding: 8px 0;
        background-color: ${i=>i.theme.header};
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

      .page-title {
        color: ${i=>i.theme.textColor};
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
`,xi=l.div`
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
          color: ${i=>i.theme.textColor};
          font-weight: 600;
        }
      }

      .title,
      .game {
        color: ${i=>i.theme.soft};
        font-size: 14px;
      }

      .tags {
        display: flex;
        font-size: 13px;

        .tag {
          padding: 2px 5px;
          background-color: ${i=>i.theme.textColor}10;
          border-radius: 999px;
          color: ${i=>i.theme.textColor};
        }
      }
    }
  }
`,fi=({user:i,imageId:o})=>e(xi,{children:t("div",{className:"channel-box",children:[t("div",{className:"live-screen",children:[e("img",{src:i.liveScreen,alt:""}),t("span",{children:[e(M,{className:"live-icon"})," ",i.viewers]})]}),t("div",{className:"live-info",children:[t("div",{className:"user",children:[e("div",{className:"user-pp",children:e("img",{src:`https://i.pravatar.cc/5${o}`,alt:""})}),e("div",{className:"user-name",children:i.username})]}),e("div",{className:"title",children:i.title}),e("div",{className:"game",children:i.game}),e("div",{className:"tags",children:e("div",{className:"tag",children:i.tag})})]})]})}),ui=()=>{const{users:i}=x(o=>o.user);return e(f,{children:i.map((o,n)=>e(fi,{user:o,imageId:n},n))})},bi=l.div`
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
      color: ${i=>i.theme.textColor};

      .username {
        font-weight: 600;
        cursor: pointer;
      }
      .videos {
        font-size: 13px;
      }
    }
  }
`,vi=({user:i,imageId:o})=>e(bi,{children:t("div",{className:"offline-box",children:[e("div",{className:"left",children:e("div",{className:"pp",children:e("img",{src:`https://i.pravatar.cc/5${o}`,alt:""})})}),t("div",{className:"right",children:[e("div",{className:"username",children:i.username}),e("div",{className:"videos",children:"7 new videos"})]})]})}),wi=()=>{const{users:i}=x(o=>o.user);return e(f,{children:i.map((o,n)=>{if(n<3)return e(vi,{user:o,imageId:n},n)})})},yi=()=>(y(),e(f,{children:t(gi,{children:[e("div",{className:"follow-mobile",children:t("div",{className:"follow-box",children:[e("h1",{children:"Following"}),e("h3",{children:"Your Live Channels"}),e(ui,{}),e("h3",{children:"Your Offline Channels"}),e(wi,{})]})}),e("div",{className:"follow-desktop",children:t("div",{className:"follow-box",children:[e("h1",{className:"page-title",children:"Following"}),e("div",{className:"nav",children:t("ul",{children:[e("li",{children:e(b,{to:"/following",title:"Overview"})}),e("li",{children:e(b,{to:"/following/live",title:"Live"})}),e("li",{children:e(b,{to:"/following/videos",title:"Videos"})}),e("li",{children:e(b,{to:"/following/categories",title:"Categories"})})]})}),e("div",{className:"page",children:e(B,{})})]})})]})})),ki=l.div`
  .amc-mobile {
    display: none;

    .amc-box {
      padding: 75px 10px;
      background-color: ${i=>i.theme.header};
      color: ${i=>i.theme.textColor};
      position: relative;
      z-index: 3;
      animation: pageAnim 0.3s ease-in-out;

      h1 {
        background-color: ${i=>i.theme.header};
      }

      h3 {
        font-size: 18px;
        width: 100%;
        position: sticky;
        top: 50px;
        padding: 8px 0;
        background-color: ${i=>i.theme.header};
      }
    }

    @media (max-width: 767px) {
      display: block;
    }
  }
`,Ni=l.div`
  .amc-container {
    display: flex;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #e0e0e0;
    border-radius: 8px;
    color: ${i=>i.theme.textColor};
    background-color: ${i=>i.theme.header};
  }

  .amc-image img {
    width: 60px;
    height: 60px;
    border-radius: 20%;
    object-fit: cover;
  }

  .amc-info {
    flex-grow: 1;
    margin-left: 15px;
  }

  .amc-info .name {
    font-size: 14px;
    font-weight: 600;
    color: ${i=>i.theme.textColor};

  }

  .amc-info .description {
    font-size: 12px;
    color: #757575;
    margin-top: 4px;
  }
  .amc-return div {
    font-size: 12px;
    font-weight: 700;
    color: #757575;
  }
`,X=({amc:i,activeFilter:o})=>{const n=()=>i.return[o]?i.return[o]+"%":"NA";return e(Ni,{children:t("div",{className:"amc-container",children:[e("div",{className:"amc-image",children:e("img",{src:i.image,alt:""})}),t("div",{className:"amc-info",children:[e("div",{className:"name",children:i.name}),t("div",{className:"description",children:[i.category," - ",i.categoryType," - ",i.risk]})]}),e("div",{className:"amc-return",children:e("div",{className:"1",children:n()})})]})})},zi=l.div`

  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  .filter-button {
    padding: 5px 10px;
    cursor: pointer;
    transition: background-color 0.3s;
    border-radius: 5px;
    font-size: 13px;
    color: ${i=>i.theme.textColor};
    background-color: ${i=>i.theme.header};
    cursor: pointer;

  }
`,Z=({activeFilter:i,onFilterChange:o})=>{const[n,a]=m.exports.useState(1),r=s=>{o(s),a(s==3?1:s+1)};return t(zi,{children:[e("div",{className:"filter-modal",children:e("button",{className:"filter-button",onClick:()=>r(1),children:"Filter / Sort"})}),t("div",{className:"year-filters",children:[n===1&&e("button",{className:"filter-button",onClick:()=>r(1),children:"< > 1Y Returns"}),n===2&&e("button",{className:"filter-button",onClick:()=>r(2),children:"< > 3Y Returns"}),n===3&&e("button",{className:"filter-button",onClick:()=>r(0),children:"< > 5Y Returns"})]})]})},$i=()=>{const{amcs:i}=x(r=>r.amcs),o=[...i,...i,...i],[n,a]=m.exports.useState(0);return e(f,{children:e(ki,{children:e("div",{className:"amc-mobile",children:t("div",{className:"amc-box",children:[e("h2",{children:"All Mutual Funds"}),e(Z,{activeFilter:n,onFilterChange:a}),o.map((r,s)=>e(X,{amc:r,activeFilter:n},s))]})})})})},Si=l.div`
// Mobile
.ipos-mobile {
  display: none;

  .ipos-box {
    padding: 75px 10px;
    color: ${i=>i.theme.textColor};
    background-color: ${i=>i.theme.header};
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
        border-bottom: 2px solid ${i=>i.theme.color};
        color: ${i=>i.theme.color};
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
      color: ${i=>i.theme.textColor};
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
      color: ${i=>i.theme.textColor};

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
          background-color: ${i=>i.theme.hover};
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
`,Ci=l.div`
  .amc-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 15px 15px 25px 15px;
    margin-top: 10px;
    min-width: 300px;
    box-sizing: border-box;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    color: ${i=>i.theme.textColor};
    background-color: ${i=>i.theme.header};
  }

  .amc-image {
    margin-right: auto;
    
    img {
      width: 40px;
      height: 40px;
      border-radius: 20%;
      object-fit: cover;
    }
  }

  .amc-info {
    flex-grow: 1;
    margin-left: 15px;
  }

  .amc-details {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .name {
      font-size: 12px;
      font-weight: 600;
      color: ${i=>i.theme.textColor};
    }
    .description {
      font-size: 10px;
      color: #757575;
      font-weight: 600;
      margin-top: 4px;
      
      svg{
        vertical-align: middle;
      }
  }

  .return{
    text-align: right;
    
    .total-return{
      font-size: 12px;
      font-weight: 700;
      color: #757575;
    }
  }

`,ji=({amc:i})=>e(Ci,{children:t("div",{className:"amc-container",children:[e("div",{className:"amc-image",children:e("img",{src:i.image,alt:""})}),t("div",{className:"amc-details",children:[t("div",{children:[e("div",{className:"name",children:i.name}),t("div",{className:"description",children:[i.category,"  ",i.categoryType," Cap  - ",e(ke,{})," ",i.rating]})]}),t("div",{className:"return",children:[t("div",{className:"total-return",children:[i.return[0],"%"]}),e("div",{children:"3Y"})]})]})]})}),Mi=l.div`
  border-bottom: 1px solid #ebe7e7;
  padding-bottom: 10px;
  overflow-y: hidden;

  .explore-box {
    padding: 2rem 0 0 0;
  }

  h2 {
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
      color: ${i=>i.theme.color};
      font-weight: 700;
    }
  }

  .popular-content {
    display: flex;
    overflow: auto;
    gap: 20px;
  }

  .popular-content::-webkit-scrollbar {
    display: none;
  }

  .collection-container{
    display : flex; 
    margin-top: 15px;
    flex-wrap: wrap;

    .collection-content{
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
      margin-bottom: 10px;
      align-items: center;
      width: 33.33%; 
      height: 33.33%;
      box-sizing: border-box;
      .name{
        font-size: 10px;
      }
    }
  }
`,_=()=>{const{amcs:i}=x(s=>s.amcs),o=[...i,...i,...i,...i],{collections:n}=x(s=>s.amcCollection),[a,r]=m.exports.useState(0);return e(Mi,{children:t("div",{className:"explore-box",children:[t("div",{className:"popular division",children:[t("div",{className:"popular-funds",children:[e("h2",{children:"Popular Funds"}),e(p,{className:"link",to:"/all-mutual-funds",title:"All Mutual Funds",children:"All Mutual Funds"})]}),e("div",{className:"popular-content",children:i.map((s,c)=>e(p,{className:"link",to:"",title:s.name,children:e(ji,{amc:s},c)}))})]}),t("div",{className:"collection division",children:[e("div",{className:"popular-funds",children:e("h2",{children:"Collections"})}),e("div",{className:"collection-container",children:n.map((s,c)=>t("div",{className:"collection-content",children:[e("div",{className:"",children:e("img",{src:"https://storage.googleapis.com/groww-assets/mf-assets/web/collection/light/high_returns.svg",alt:""})}),e("div",{className:"name",children:e("div",{children:s.name})})]}))})]}),t("div",{className:"all-mf division",children:[e("div",{className:"popular-funds",children:e("h2",{children:"All Mutual Funds"})}),e(Z,{activeFilter:a,onFilterChange:r}),o.map((s,c)=>e(X,{amc:s,activeFilter:a},c))]})]})})},E=()=>{const[i,o]=m.exports.useState(!0),n=a=>{switch(a){case"explore":return e("div",{className:"mff-explore",children:e(_,{})});case"dashboard":return e("div",{className:"mff-dashboard",children:e(f,{children:"Dashboard"})});case"watchlist":return e("div",{className:"mff-watchlist",children:e(f,{children:"WatchList"})});default:return e("div",{className:"mff-explore",children:e(_,{})})}};return e(Si,{children:e("div",{className:"ipos-mobile",children:t("div",{className:"ipos-box",children:[e("h1",{children:"Browse"}),t("div",{className:"navigation",children:[e("div",{onClick:()=>o("explore"),className:`nav-ipo-all ${i=="explore"||i===!0?"nav-active":""}`,children:"Explore"}),e("div",{onClick:()=>o("dashboard"),className:`nav-ipo-mainline ${i=="dashboard"?"nav-active":""}`,children:"Dashboard"}),e("div",{onClick:()=>o("watchlist"),className:`nav-ipo-sme ${i=="watchlist"?"nav-active":""}`,children:"WatchList"})]}),n(i)]})})})},Li=l.div`
  display: block;
  width: 100%;
  padding: 0 5px;

  .game-box {
    font-size: 15px;
    color: ${i=>i.theme.textColor};

    .game-picture {
      cursor: pointer;
      transition: 0.2s;

      img {
        width: 100%;
        transition: 0.2s;
      }

      &:hover {
        background-color: ${i=>i.theme.color};

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
      color: ${i=>i.theme.soft};
    }

    .tags {
      font-size: 14px;
      margin-top: 5px;

      .tag {
        display: inline-block;
        padding: 4px 8px;
        background-color: ${i=>i.theme.hover};
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
`,Fi=l.div`
  .categories-box {
    display: block;
    margin-top: 30px;

    h1 {
      font-size: 18px;
      font-weight: 500;
      padding: 5px 0;

      span {
        cursor: pointer;
        color: ${i=>i.theme.color};
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
`,Ai=({game:i})=>e(Li,{children:t("div",{className:"game-box",children:[e("div",{className:"game-picture",children:e("img",{src:i.image,alt:""})}),t("div",{className:"game-name",children:[e("div",{className:"name",children:i.name}),e("div",{className:"other-icon",children:e(F,{})})]}),t("div",{className:"game-viewers",children:[i.viewer," viewers"]}),e("div",{className:"tags",children:e("div",{className:"tag",children:"English"})})]})}),Q=({title:i,boldTitle:o})=>{const{games:n}=x(a=>a.category);return e(Fi,{children:t("div",{className:"categories-box",children:[t("h1",{children:[e("span",{children:o})," ",i]}),e("div",{className:"list",children:n.map((a,r)=>e(Ai,{game:a},r))})]})})},Bi=l.div`
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
        background-color: ${i=>i.theme.color};

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
          color: ${i=>i.theme.textColor};

          .title {
            font-weight: 500;
          }
          .username {
            padding: 5px 0;
          }

          .username,
          .game {
            cursor: pointer;
            color: ${i=>i.theme.soft};
          }

          .tags {
            display: flex;
            gap: 5px;
            align-items: center;
            margin-top: 5px;

            .tag {
              padding: 4px 8px;
              background-color: ${i=>i.theme.hover};
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
`,Di=l.div`
  .channels-box {
    display: block;
    margin-top: 30px;
    color: ${i=>i.theme.textColor};

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
`,Oi=({user:i,imageId:o,video:n})=>e(Bi,{children:t("div",{className:"channel-box",children:[t("div",{className:"live-screen",children:[e("img",{src:i.liveScreen,alt:""}),e("div",{className:`live ${n?"invisible":""}`,children:"live"}),e("div",{className:`viewers ${n?"invisible":""}`,children:"333 viewers"}),t("div",{className:`video ${n?"video-visible":""}`,children:[e("div",{className:"video-tag top",children:"11:44"}),e("div",{className:"video-tag bottom-right",children:"4 hours ago"}),e("div",{className:"video-tag bottom",children:"188 views"})]})]}),t("div",{className:"channel-info",children:[t("div",{className:"left",children:[e("div",{className:"pp",children:e("img",{src:`https://i.pravatar.cc/5${o}`,alt:""})}),t("div",{className:"profile-info",children:[e("div",{className:"title",children:i.title}),e("div",{className:"username",children:i.username}),e("div",{className:"game",children:i.game}),t("div",{className:"tags",children:[e("div",{className:"tag",children:"English"}),e("div",{className:"tag",children:"Esports"})]})]})]}),e("div",{className:"right",children:e(F,{})})]})]})}),g=({channelTitle:i,video:o})=>{const{users:n}=x(a=>a.user);return e(Di,{children:t("div",{className:"channels-box",children:[i&&e("h1",{children:i}),e("div",{className:"list",children:n.map((a,r)=>{if(r<6)return e(Oi,{user:a,imageId:r,video:o},r)})})]})})},S=()=>t(f,{children:[e(g,{}),e(g,{}),e(g,{}),e(g,{}),e(g,{}),e(g,{}),e(g,{}),e(g,{})]}),_i=l.div`
  .show-more {
    display: flex;
    align-items: center;
    margin: 30px 0;

    span {
      font-size: 13px;
      font-weight: 600;
      padding: 5px 15px;
      margin: 0 10px;
      background-color: ${i=>i.theme.bodyDesktop};
      color: ${i=>i.theme.color};
      display: flex;
      align-items: center;
      cursor: pointer;
      border-radius: 5px;

      .down-icon {
        font-size: 20px;
      }

      &:hover {
        background-color: ${i=>i.theme.hover};
      }
    }
  }

  .show-more::before,
  .show-more::after {
    content: "";
    height: 1px;
    flex: 1;
    background-color: ${i=>i.theme.hover};
  }
`,N=({title:i})=>e(_i,{children:e("div",{className:"show-more",children:i&&t("span",{children:[i,e(Y,{className:"down-icon"})]})})}),Ei=()=>t("div",{className:"overview-box",children:[e(g,{channelTitle:"Live channels"}),e(N,{title:"Show more"}),e(g,{channelTitle:"Recommended channels"}),e(N,{title:"Show more"}),e(g,{channelTitle:"Latest videos",video:!0}),e(N,{title:"Show more"}),e(Q,{title:"Live categories"}),e(N,{})]}),Pi=()=>e(f,{children:e(g,{channelTitle:"Live channels"})}),Ii=()=>e(f,{children:t("div",{className:"overview-page",children:[e(g,{channelTitle:"Latest videos",video:!0}),e(g,{video:!0}),e(g,{video:!0}),e(g,{video:!0})]})}),Ti=()=>e(f,{children:e(Q,{title:"Live categories"})}),Ri=l.div`
  // Mobile
  .offers-mobile {
    display: none;

    .offers-box {
      padding: 75px 10px;
      color: ${i=>i.theme.textColor};
      background-color: ${i=>i.theme.header};
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
          border-bottom: 2px solid ${i=>i.theme.color};
          color: ${i=>i.theme.color};
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
        color: ${i=>i.theme.textColor};
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
`,Ji=l.div`
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
      background-color: rgb(145, 71, 255);
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
`,P=({offer:i})=>e(Ji,{children:t("div",{className:"offer-box",children:[e("h2",{className:"offer-name",children:i.name}),e(p,{to:"/{offer.href}",children:e("div",{className:"offer-picture",children:e("img",{src:i.image,alt:""})})}),e("div",{className:"know-more",children:e("button",{children:"Know More..."})})]})}),Hi=()=>{const[i,o]=m.exports.useState(!0),{offers:n}=x(a=>a.offers);return e(f,{children:t(Ri,{children:[e("div",{className:"offers-mobile",children:t("div",{className:"offers-box",children:[e("h1",{children:"Offers"}),t("div",{className:"navigation",children:[e("div",{onClick:()=>o(!0),className:`nav-categories ${i?"nav-active":""}`,children:"Brokers"}),e("div",{onClick:()=>o(!1),className:`nav-liveChannels ${i?"":"nav-active"}`,children:"Advisors"})]}),i?e("div",{className:"offers",children:n.map((a,r)=>{if(a.type!=="advisor")return e(P,{offer:a,imageId:r},r)})}):e("div",{className:"offers",children:n.map((a,r)=>{if(a.type!=="stock")return e(P,{offer:a,imageId:r},r)})})]})}),e("div",{className:"offers-desktop",children:t("div",{className:"offers-box",children:[e("h1",{className:"page-title",children:"Offers"}),e("div",{className:"nav",children:t("ul",{children:[e("li",{children:e(b,{to:"/offers/brokers",title:"Brokers"})}),e("li",{children:e(b,{to:"/offers/advisors",title:"Advisors"})})]})}),e("div",{className:"page",children:e(B,{})})]})})]})})};l.div`
  /* Home Mobile */
  .home-mobile {
    display: none;

    .home-box {
      padding: 75px 10px;
      background-color: ${i=>i.theme.header};
      color: ${i=>i.theme.textColor};
      position: relative;
      z-index: 3;
      animation: pageAnim 0.3s ease-in-out;

      .categories {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
        margin: 30px 0;

        .category-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 15px;
          background-color: ${i=>i.theme.color};
          color: #fff;
          border-radius: 5px;
          font-weight: 600;
          cursor: pointer;
          font-size: 1.8rem;

          .category-icon {
            font-size: 24px;
          }
        }
      }
      .home-title {
        font-size: 18px;
        width: 100%;
        padding: 8px 0;
        background-color: ${i=>i.theme.header};
        position: sticky;
        top: 50px;

        span {
          color: ${i=>i.theme.color};
          cursor: pointer;
        }
      }
    }

    @media (max-width: 767px) {
      display: block;
    }
  }

  /* Home Desktop */
  .home-desktop {
    display: none;

    .home-box {
      display: block;
    }

    @media (min-width: 768px) {
      display: block;
    }
  }
`;l.div`
  .channel-box {
    padding: 5px 0;
    user-select: none;
    animation: pageAnim 0.3s ease-in-out;

    .live-screen {
      max-width: 300px;
      width: 100%;
      position: relative;
      z-index: -1;

      span {
        position: absolute;
        left: 10px;
        color: #fff;
        border-radius: 5px;
        font-size: 14px;
        background-color: rgba(0, 0, 0, 0.5);

        &.viewers {
          bottom: 10px;
          padding: 5px;
        }

        &.live {
          top: 10px;
          background-color: red;
          padding: 2px 5px;
          text-transform: uppercase;
        }
      }
    }

    @media (max-width: 767px) {
      .for-browse {
        max-width: 100%;
      }
    }

    .live-info {
      display: flex;
      gap: 10px;
      padding: 5px;

      .pp {
        width: 38px;
        height: 38px;
        border-radius: 999px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }

      .titles {
        color: ${i=>i.theme.textColor};
        font-size: 14px;
        flex: 1;

        .username-box {
          font-size: 15px;
          padding-bottom: 3px;
          display: flex;
          align-items: center;
          justify-content: space-between;

          .username {
            font-weight: 600;
            cursor: pointer;
          }

          .others {
            font-size: 12px;
            cursor: pointer;
            color: ${i=>i.theme.soft};
          }
        }
        .title {
          padding: 3px 0;
        }

        .tag {
          padding: 3px 5px;
          border-radius: 10px;
          margin-top: 5px;
          background-color: ${i=>i.theme.border};
          display: inline-block;
          font-size: 13px;
          cursor: pointer;
        }
      }
    }
  }
`;l.div`
  .channels-box {
    width: 100%;
    margin-bottom: 15px;
    .channels {
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(6, 1fr);
    }
  }

  @media (max-width: 767px) {
    .channels-box {
      overflow-x: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;

      .channels {
        width: max-content;
      }

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;l.div`
  .game-box {
    padding: 5px 0;
    color: ${i=>i.theme.textColor};
    user-select: none;

    .game-img {
      max-width: 120px;
      width: 100%;
      z-index: -1;

      img {
        z-index: -1;
        user-select: none;
        user-drag: none;
        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
      }
    }

    .game-name {
      font-size: 15px;
      font-weight: 600;
      padding: 3px 0;
    }

    .game-viewer {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 15px;

      .viewer-icon {
        color: red;
        font-size: 10px;
      }
    }
  }
`;l.div`
  .small-categories-box {
    width: 100%;
    margin-bottom: 15px;
    .small-categories {
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(12, 1fr);
    }
  }

  @media (max-width: 767px) {
    .small-categories-box {
      overflow-x: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;

      .small-categories {
        width: max-content;
      }

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;l.div`
  display: block;

  .slide {
    display: block;
    padding: 50px 0;
    position: relative;

    .three {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 50px;
      z-index: 3;

      img {
        width: 380px;
        height: 240px;
        cursor: pointer;
        transition: 0.3s;
        filter: blur(1px) brightness(0.7);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);

        &:hover {
          transform: scale(1.03);
          filter: blur(1px) brightness(1);
        }
      }

      .two {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 100px;
        z-index: 5;

        img {
          width: 450px;
          height: 270px;
        }

        .one {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 7;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);

          .img {
            position: relative;
            height: 300px;

            img {
              width: 500px;
              height: 300px;
              transition: 0.3s;
              box-shadow: none;
              filter: none;

              &:hover {
                transform: none;
              }
            }

            .screen-icons {
              position: absolute;
              bottom: 5px;
              width: 100%;
              padding: 0 10px;
              color: #fff;
              font-size: 20px;
              display: flex;
              align-items: center;
              justify-content: space-between;

              .icon-screen {
                margin: 0 5px;
                cursor: pointer;
              }
            }

            .screen-live {
              position: absolute;
              top: 10px;
              left: 10px;

              span {
                background-color: red;
                color: #fff;
                padding: 3px 5px;
                text-transform: uppercase;
                border-radius: 5px;
                font-size: 14px;
              }
            }
          }

          .info {
            width: 200px;
            height: 300px;
            background-color: ${i=>i.theme.headerDesktop};

            .info-top {
              width: 100%;
              padding: 10px;

              .profile {
                display: flex;

                .pp {
                  img {
                    width: 40px;
                    height: 40px;
                    border-radius: 999px;
                    cursor: pointer;
                    filter: none;
                    box-shadow: none;
                  }
                }

                .profile-info {
                  display: block;
                  padding: 0 10px;
                  font-size: 14px;
                  color: ${i=>i.theme.color};

                  .username {
                    font-weight: 600;
                    cursor: pointer;
                  }
                  .game {
                    cursor: pointer;
                    padding: 3px 0;
                  }
                  .viewers {
                    font-size: 13px;
                    color: ${i=>i.theme.textColor};
                  }
                }
              }

              .tags {
                margin-top: 10px;
                display: flex;
                font-size: 13px;
                gap: 5px;

                .tag {
                  padding: 4px 8px;
                  background-color: ${i=>i.theme.hover};
                  border-radius: 10px;
                  font-weight: 500;
                  color: ${i=>i.theme.softDesktop};
                  cursor: pointer;
                }
              }
            }

            .info-bottom {
              padding: 10px;
              font-size: 13px;
              line-height: 1.7;
              color: ${i=>i.theme.textColor};
            }
          }
        }
      }
    }

    /* Slide Arrows */
    .arrow {
      position: absolute;
      top: 150px;
      font-size: 22px;
      cursor: pointer;
      padding: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;
      border-radius: 5px;
      color: ${i=>i.theme.textColor};
      z-index: 6;

      &:hover {
        background-color: ${i=>i.theme.hover};
      }
    }

    .arrow-left {
      left: 20px;
    }

    .arrow-right {
      right: 20px;
    }
    /* Slide Arrows */
  }

  @media (max-width: 1679px) {
    .slide .three {
      img {
        width: 300px;
      }

      .two {
        img {
          width: 400px;
        }
      }
    }
  }
  @media (max-width: 1439px) {
    .slide .three {
      img {
        width: 250px;
      }

      .two {
        img {
          width: 340px;
        }
      }
    }
  }
  @media (max-width: 1279px) {
    .slide .three {
      img {
        width: 0;
      }
    }
  }
  @media (max-width: 1023px) {
    .slide {
      .three {
        .two {
          img {
            width: 0;
          }

          .one {
            .img img {
              width: 460px;
            }

            .info {
              width: 180px;
            }
          }
        }
      }

      .arrow-left {
        left: 5px;
      }

      .arrow-right {
        right: 5px;
      }
    }
  }

  @media (max-width: 833px) {
    .slide {
      .three {
        .two {
          .one {
            .img img {
              width: 420px;
            }
            .info {
              width: 160px;
            }
          }
        }
      }

      .arrow-left {
        left: 0;
      }

      .arrow-right {
        right: 0;
      }
    }
  }
`;const Wi=l.div`
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
          background-color: #9147ff;
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
`,I=({type:i=""})=>{const{offers:o}=x(n=>n.offers);return e(Wi,{children:o.map((n,a)=>{if(n.type===i)return t("div",{className:`offer-box offer-${n.id}`,children:[t("div",{className:"left-side",children:[e("div",{className:"picture",children:e("img",{src:n.image,alt:""})}),e("h2",{className:"name",children:n.name})]}),t("div",{className:"right-side",children:[t("div",{children:[t("ul",{className:"available-options",children:[e("li",{children:"Equity"}),e("li",{children:"Future"}),e("li",{children:"Option"}),e("li",{children:"Commodity"})]}),t("ul",{className:"new-info",children:[e("li",{children:"Account Opening"}),e("li",{children:"Account Maintenance"}),e("li",{children:"Account Maintenance"}),e("li",{children:"Account Maintenance"})]})]}),t("ul",{className:"action-buttons",children:[e("li",{children:"View Details"}),e("li",{children:"Open Account"})]})]})]},n.id)})})},Vi=()=>{const{darkStatus:i,sideBarStatus:o}=x(h=>h.site),[n,a]=m.exports.useState(window.innerWidth);let r=A();const s=document.cookie.split(";").filter(h=>h.indexOf("isLoggedIn=true")>=0);console.log(s.length);let c=e(MFExplore,{});return s.length===0&&(c=e(si,{})),m.exports.useEffect(()=>{s.length===0&&(console.log("consider logged out!"),r("/"));const h=()=>a(window.innerWidth);return window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[n]),t(Ne,{theme:i?De:Be,children:[e(Ae,{}),t("div",{className:"app",children:[s.length!==0?e(ti,{mySize:n}):"",e("div",{className:`main ${o&&n>1199?"sidebar-open":""}`,children:t(ze,{children:[e(d,{path:"*",element:e($e,{to:"/",replace:!0})}),e(d,{path:"/all-mutual-funds",element:e($i,{})}),e(d,{path:"/",element:c}),t(d,{path:"/mutual-funds/",element:e(E,{}),children:[e(d,{index:!0,element:e(E,{})}),e(d,{path:"dashboard",element:e(S,{})}),e(d,{path:"SIP",element:e(S,{})}),e(d,{path:"Watchlist",element:e(S,{})})]}),t(d,{path:"/following/",element:e(yi,{}),children:[e(d,{index:!0,element:e(Ei,{})}),e(d,{path:"live",element:e(Pi,{})}),e(d,{path:"videos",element:e(Ii,{})}),e(d,{path:"categories",element:e(Ti,{})})]}),t(d,{path:"/ipo/",element:e(w,{}),children:[e(d,{index:!0,path:"all",element:e(w,{})}),e(d,{path:"mainline",element:e(w,{})}),e(d,{path:"sme",element:e(w,{})}),e(d,{path:"listed",element:e(w,{})}),e(d,{path:"closed",element:e(w,{})})]}),t(d,{path:"/offers/",element:e(Hi,{}),children:[e(d,{index:!0,path:"brokers",element:e(I,{type:"stock"})}),e(d,{path:"advisors",element:e(I,{type:"advisor"})})]})]})})]})]})},Yi=()=>{const{pathname:i}=y();return m.exports.useEffect(()=>{window.scrollTo(0,0)},[i]),null},Gi=v({name:"user",initialState:{users:[{username:"CosmoKramer",title:"Rapid Chess Championship!",game:"Chess",tag:"Chatting",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-chees.jpg",viewers:"17.1K"},{username:"Soprano",title:"Im back",game:"Dota 2",tag:"Turkish",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-dota.jpg",viewers:"395"},{username:"Seinfeld",title:"Reduce Ping & Avoid Lags",game:"PUBG",tag:"English",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-pubg.jpg",viewers:"5.4K"},{username:"Darlene",title:"FPS soon? OMEGALUL",game:"Counter Strike",tag:"English",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-cs.jpg",viewers:"117"},{username:"Cersei",title:"Live Bitcoin Trading Infos 24/7",game:"Crypto",tag:"Chatting",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-crypto.jpg",viewers:"88"},{username:"Jacob",title:"LVL 70 - Tracksuit Grind",game:"Escape From Tarkov",tag:"Turkish",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-eft.jpg",viewers:"733"},{username:"Skyler",title:"Tourney Run Kollo",game:"Mortal Kombat",tag:"English",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-mortal.jpg",viewers:"231"},{username:"Schillinger",title:"Day 12 of the Game of Year ?",game:"Elder Ring",tag:"English",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-elder.jpg",viewers:"3.7K"}]}});var Ki=Gi.reducer;const Ui=v({name:"category",initialState:{games:[{name:"Dota 2",image:"./images/categories/game1.jpg",viewer:"63.3k"},{name:"Chess",image:"./images/categories/game2.jpg",viewer:"23.7k"},{name:"PUBG: BATTLEGROUNDS",image:"./images/categories/game3.jpg",viewer:"34.3k"},{name:"Just Chatting",image:"./images/categories/game4.jpg",viewer:"580k"},{name:"Grand Theft Auto V",image:"./images/categories/game5.jpg",viewer:"144k"},{name:"Elder Ring",image:"./images/categories/game6.jpg",viewer:"88k"},{name:"Apex Legends",image:"./images/categories/game7.jpg",viewer:"112.6k"},{name:"Call of Duty: Wardzone",image:"./images/categories/game8.jpg",viewer:"39k"},{name:"Escape from Tarkov",image:"./images/categories/game9.jpg",viewer:"20k"},{name:"FIFA 22",image:"./images/categories/game10.jpg",viewer:"42.2k"},{name:"Fortnite",image:"./images/categories/game11.jpg",viewer:"102k"},{name:"Age of Empires",image:"./images/categories/game12.jpg",viewer:"5.4k"}]}});var qi=Ui.reducer;const Xi=v({name:"amc",initialState:{amcs:[{name:"Aditya Birla Sun Life PSU Equity Fund",image:"./images/categories/game1.jpg",category:"Equity",categoryType:"Big",risk:"High",rating:5,return:[47.01,88,23]},{name:"Motilal Oswal Midcap Fund",image:"./images/categories/game3.jpg",category:"Equity",categoryType:"Flexi Cap",risk:"Very High",rating:4,return:[47.01,88]},{name:"Nippon India Small Cap Fund",image:"./images/categories/game2.jpg",category:"Equity",categoryType:"Small",risk:"Low",rating:5,return:[47.01,88,23]}]}});var Zi=Xi.reducer;const Qi=v({name:"offers",initialState:{offers:[{id:1,name:"Angel Broking",image:"./images/offers/angel-one.png",category:"broker",type:"advisor",href:"/angel-broking"},{id:2,name:"Zerodha",image:"./images/offers/zerodha.png",category:"broker",type:"stock",href:"#"},{id:3,name:"Upstox",image:"./images/offers/upstox.png",category:"broker",type:"advisor",href:"#"},{id:5,name:"Dhan",image:"./images/offers/dhan.png",category:"broker",type:"advisor",href:"#"},{id:6,name:"5 Paisa",image:"./images/offers/5-paisa.png",category:"broker",type:"stock",href:"#"},{id:7,name:"ICICI direct",image:"./images/offers/icici-direct.png",category:"broker",type:"advisor",href:"#"},{id:8,name:"Kotak Securities",image:"./images/offers/kotak-security.png",category:"broker",type:"stock",href:"#"}]}});var et=Qi.reducer;const it=v({name:"ipos",initialState:{ipos:[{name:"RNFI Services Limited",image:"./images/ipo/RNFI_Services_logo.jpg",exchange:"NSE",type:"sme",href:"/angel-broking",date:{start:"Jul 22, 2024",end:"Jul 22, 2024",list:"Jul 22, 2024"},price:{offer:"98-105",expectedPremium:"84-90 (80%)"},lotSize:"1200",subscriptions:"221.56"},{name:"SAR Televenture Limited FPO",image:"./images/ipo/SAR_Televentures_logo.png",exchange:"NSE",type:"mainline",href:"/angel-broking",date:{start:"Jul 22, 2024",end:"Jul 22, 2024",list:"Jul 22, 2024"},price:{offer:"200-210",expectedPremium:"7-8 (3.33%)"},lotSize:"500",subscriptions:"7.49"},{name:"V.L.Infraprojects Limited",image:"./images/ipo/Vraj_Iron_And_Steel_logo.png",exchange:"NSE",type:"sme",href:"/angel-broking",date:{start:"Jul 23, 2024",end:"Jul 25, 2024",list:"Jul 22, 2024"},price:{offer:"39-42",expectedPremium:"60-62 (142.86%)"},lotSize:"3000",subscriptions:"633.71"},{name:"VVIP Infratech Limited",image:"./images/ipo/uttsav_cz_gold_logo.jpeg",exchange:"NSE",type:"mainline",href:"/angel-broking",date:{start:"Jul 23, 2024",end:"Jul 25, 2024",list:"Jul 27, 2024"},price:{offer:"91-93",expectedPremium:"115-122 (123.66%)"},lotSize:"1200",subscriptions:"236.92"},{name:"Chetana Education Limited",image:"./images/ipo/Cheviot-company-logo.jpg",exchange:"NSE",type:"mainline",href:"/angel-broking",date:{start:"Jul 23, 2024",end:"Jul 25, 2024",list:"Jul 27, 2024"},price:{offer:"80-85",expectedPremium:"40-43 (47.06%)"},lotSize:"1600",subscriptions:"196.57"},{name:"Manglam Infra and Engineering Limited",image:"./images/ipo/Manglam_Infra_Logo.png",exchange:"NSE",type:"sme",href:"/angel-broking",date:{start:"Jul 23, 2024",end:"Jul 25, 2024",list:"Jul 27, 2024"},price:{offer:"53-56",expectedPremium:"47-50 (83.93%)"},lotSize:"2000",subscriptions:"394.59"},{name:"Aprameya Engineering Limited",image:"./images/ipo/Aprameya_Engineering_logo.jpg",exchange:"NSE",type:"mainline",href:"/angel-broking",date:{start:"Jul 25, 2024",end:"Jul 29, 2024",list:"Jul 27, 2024"},price:{offer:"56-58",expectedPremium:"25-30 (43.1%)"},lotSize:"2000",subscriptions:"5.92"},{name:"Trom Industries Limited",image:"./images/ipo/Trom-Industries-logo.jpg",exchange:"NSE",type:"sme",href:"/angel-broking",date:{start:"Jul 25, 2024",end:"Jul 29, 2024",list:"Jul 27, 2024"},price:{offer:"110-115",expectedPremium:"135-145 (117.39%)"},lotSize:"1200",subscriptions:"34.84"},{name:"Clinitech Laboratory Limited",image:"./images/ipo/Clinitech_lab_logo.jpg",exchange:"BSE",type:"sme",href:"/angel-broking",date:{start:"Jul 25, 2024",end:"Jul 29, 2024",list:"Jul 27, 2024"},price:{offer:"96",expectedPremium:"135-145 (117.39%)"},lotSize:"1200",subscriptions:"6.09 times"}]}});var tt=it.reducer;const ot=v({name:"collections",initialState:{collections:[{name:"High Return"},{name:"SIP with 100"},{name:"Tax Saving"},{name:"Large Cap"},{name:"Mid Cap"},{name:"Small Cap"}]}});var nt=ot.reducer,rt=Se({reducer:{site:Ie,user:Ki,category:qi,amcs:Zi,offers:et,ipos:tt,amcCollection:nt}});Ce.render(e(je.StrictMode,{children:e(Me,{store:rt,children:t(Le,{children:[e(Yi,{}),e(Vi,{})]})})}),document.getElementById("root"));

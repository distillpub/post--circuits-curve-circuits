export default () => `
.show-in-index {
  /* will be overwritten by index.js. This is just used by cofab */
  display: none;
}

d-title {
  padding-bottom: 0px !important;
}

b, i, em {
  display: inline;
}

video::-webkit-media-controls-panel {
  background-image: none !important;
  filter: brightness(0.4);
}

d-article > p { display: inline-block; }

      svg .model .node,
      svg .model .background {
        fill: hsla(213, 25%, 91%, 1);
      }
      svg .model .early .node,
      svg .model .early .background {
        fill: hsla(40, 70%, 90%, 1);
      }
      svg .model a .early > g > .node,
      svg .model a .early .node[data-tf-op='Concat'],
      svg .model a .early .background {
        fill: hsla(40, 80%, 75%, 1);
      }
      svg .model a:hover .early > g > .node,
      svg .model a:hover .early .node[data-tf-op='Concat'],
      svg .model a:hover .early .background {
        fill: hsla(40, 95%, 50%, 1);
      }
      svg .model .edge {
        opacity: 0.85;
      }
      svg .model .background {
        opacity: 0.6;
      }
      svg .model text {
        opacity: 0.7;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif;
        font-size: 13px;
      }
      svg .model .small-text {
        font-size: 10px;
        opacity: 0.5;
      }

      d-front-matter { 
        display: none;
      }

      nav a {
        border-bottom: none;
      }

      nav a:hover {
        border-bottom: none;
      }

      .thread-info {
        background-color: hsl(54, 78%, 96%);
        border-left: solid hsl(54, 33%, 67%) 1px;
        padding: 1em;
        color: hsla(0, 0%, 0%, 0.67);
      }
  
      #thread-nav {
          margin-top: 20;
          margin-bottom: 1.5rem;
          display: grid;
          grid-template-columns: 45px 3fr 2fr;
          grid-template-areas:
              "icon explanation explanation "
              "icon prev next";
          grid-column-gap: 1.5em;
      }
  
      @media (min-width: 768px){
        #thread-nav {
          grid-template-columns: 65px 3fr 2fr;
        }
      }
  
      #thread-nav .icon {
          grid-area: icon;
          padding: 0.5em;
          justify-self: center;
      }
  
      #thread-nav .explanation {
          grid-area: explanation;
          font-size: 85%;
          color: hsl(0, 0%, 0.33);
      }
  
      #thread-nav .prev {
          grid-area: prev;
      }
  
      #thread-nav .prev::before {
          content: "← Previous Article";
      }
  
      #thread-nav .overview {
          scroll-behavior: smooth;
      }
  
      #thread-nav .overview::before {
          content: "↑";
          white-space: nowrap;
          margin-right: 0.5em;
      }
  
      #thread-nav .next {
          grid-area: next;
          scroll-behavior: smooth;
      }
  
      #thread-nav .next::before {
          content: "Next Article →";
      }
  
      #thread-nav .next::before, #thread-nav .prev::before {
        display: block;
        white-space: nowrap;
        padding: 0.5em 0;
        font-size: 80%;
        font-weight: bold;
        margin-top: 0px;
        margin-right: 0.5em;
        text-transform: uppercase;
      }
  
  
  
      #thread-nav .prev,
      #thread-nav .next,
      #thread-nav .overview {
          font-size: 80%;
          line-height: 1.5em;
          font-weight: 600;
          border-bottom: none;
          color: #2e6db7;
          /* margin-top: 0.25em; */
          letter-spacing: 0.25px;
      }`

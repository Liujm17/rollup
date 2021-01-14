(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (global = global || self, global.imoocDatav = factory(global.Vue));
}(this, (function (vue) { 'use strict';

  //
  //
  //
  //
  //
  //
  //
  //
  var script = {
    name: 'TestComp',
    data: function data() {
      return {
        count: 1
      };
    },
    computed: {
      testmsg: function testmsg() {
        return this.count * 2;
      }
    },
    methods: {
      add: function add() {
        this.count++;
      }
    }
  };

  const _withId = /*#__PURE__*/vue.withScopeId("data-v-46dde222");

  const render = /*#__PURE__*/_withId(function render(_ctx, _cache) {
    return (vue.openBlock(), vue.createBlock("div", null, [
      vue.createTextVNode(" TestComp " + vue.toDisplayString(_ctx.testmsg) + " ", 1 /* TEXT */),
      vue.createVNode("p", {
        onClick: _cache[1] || (_cache[1] = $event => (_ctx.add($event)))
      }, "add")
    ]))
  });

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = "";
  styleInject(css_248z);

  script.render = render;
  script.__scopeId = "data-v-46dde222";
  script.__file = "src/components/TestComp/TestComp.vue";

  function TestComp (Vue) {
    Vue.component(script.name, script);
  }

  function index (Vue) {
    Vue.use(TestComp);
  }

  return index;

})));

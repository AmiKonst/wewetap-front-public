import { E as EmptyLabel } from './EmptyLabel.80f4f2a8.js';
import { _ as _export_sfc, u as useI18n, r as reactive, a as resolveComponent, o as openBlock, b as createElementBlock, e as createVNode, s as unref } from './index.b3c3b3c5.js';

const Error_vue_vue_type_style_index_0_scoped_6cf58d8f_lang = '';

const _hoisted_1 = { class: "page-container" };

    
const _sfc_main = {
  __name: 'Error',
  setup(__props) {

    const { t, tm, rt } = useI18n();

    const description = tm('pages.error.descriptions').map(item => rt(item));

    const data = reactive({
        description: description[Math.min(parseInt(Math.random() * description.length), description.length - 1)] 
    });


return (_ctx, _cache) => {
  const _component_Icon = resolveComponent("Icon");

  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_Icon, { icon: "loki" }),
    createVNode(EmptyLabel, {
      title: unref(t)('pages.error.title'),
      description: data.description
    }, null, 8, ["title", "description"])
  ]))
}
}

};
const Error = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-6cf58d8f"]]);

export { Error as default };

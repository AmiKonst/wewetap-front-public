import { E as EmptyLabel } from './EmptyLabel.f4c8d672.js';
import { _ as _export_sfc, u as useI18n, a as resolveComponent, o as openBlock, b as createElementBlock, e as createVNode, s as unref } from './index.6a688994.js';

const Error_vue_vue_type_style_index_0_scoped_207d491d_lang = '';

const _hoisted_1 = { class: "page-container" };

    
const _sfc_main = {
  __name: 'Error',
  setup(__props) {

    const { t } = useI18n();

return (_ctx, _cache) => {
  const _component_Icon = resolveComponent("Icon");

  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_Icon, { icon: "loki" }),
    createVNode(EmptyLabel, {
      title: unref(t)('pages.error.title'),
      description: unref(t)('pages.error.description')
    }, null, 8, ["title", "description"])
  ]))
}
}

};
const Error = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-207d491d"]]);

export { Error as default };

import { _ as _export_sfc, u as useI18n, m as mapState, q as mapMutations, l as mapActions, c as computed, r as reactive, w as watch, C as onMounted, a as resolveComponent, o as openBlock, g as createBlock, s as unref, b as createElementBlock, d as createBaseVNode, t as toDisplayString, e as createVNode, E as _sfc_main$1, x as normalizeClass, B as Button, v as createTextVNode, F as Fragment, f as renderList, h as createCommentVNode, j as delay, z as message, n as numberWithSpaces, L as Loader } from './index.4d47421b.js';
import { A as Avatar } from './Avatar.c0cf1ed9.js';
import { E as EmptyLabel } from './EmptyLabel.f208ec1d.js';

const Asgardians_vue_vue_type_style_index_0_scoped_1edd0666_lang = '';

const _hoisted_1 = {
  key: 1,
  class: "page-container"
};
const _hoisted_2 = ["src", "alt"];
const _hoisted_3 = { class: "claim-box" };
const _hoisted_4 = { class: "description" };
const _hoisted_5 = {
  key: 1,
  class: "users-list"
};
const _hoisted_6 = { class: "invite-box" };

    
const _sfc_main = {
  __name: 'Asgardians',
  setup(__props) {

    const { t } = useI18n();
    const { pixiClaim, user, settings, ready } = mapState();
    const { openModal, closeModal } = mapMutations();
    const { asgardiansClaim, getAsgardians } = mapActions();

    const asgrsImg = computed(() => {
        const path = `${"/wewetap-front-public"}/img/asgrs.png`;
        return new URL(path, import.meta.url).href;
    });

    const data = reactive({
        asgrs: [],
        total: 0,
        claimLoading: false,
        loading: true
    });

    const claimIt = async (e) => {
        data.claimLoading = true;

        const coins = user.value.profile.coins;

        await asgardiansClaim();

        await delay(500);

        data.claimLoading = false;

        if (pixiClaim?.value) {
            pixiClaim.value({ y : e.pageY, x : e.pageX });
        }

        if (window.navigator?.vibrate) {
            window.navigator.vibrate(200);
        }

        data.claimLoading = false;

        await delay(1000);
        message.blood(`${ t('common.youGet') } ${ (user.value.profile.coins - coins).toFixed(1) } ${ t('common.bloods') }`);
    };

    const invite = () => {
        openModal('invite');
    };

    const getAsgardiansList = async () => {
        data.loading = true;
        await delay(400);

        const payload = await getAsgardians({
            skip: data.asgrs.length,
            take: settings.value.ASGARDIANS_DEFAULT_TAKE || 30
        });

        if (payload?.total) {
            data.total = payload.total;
        }

        if (payload?.items) {
            data.asgrs = [...data.asgrs, ...payload.items];
        }

        data.loading = false;
    };

    watch(
        () => ready.value,
        async () => {
            if (ready.value) {
                getAsgardiansList();
            }
        }
    );

    onMounted(async () => {
        if (ready.value) {
            getAsgardiansList();
        }
    });

return (_ctx, _cache) => {
  const _component_Icon = resolveComponent("Icon");

  return (data.loading && !data.asgrs.length)
    ? (openBlock(), createBlock(Loader, {
        key: 0,
        class: "light"
      }))
    : (unref(user).profile.id)
      ? (openBlock(), createElementBlock("div", _hoisted_1, [
          createBaseVNode("img", {
            src: asgrsImg.value,
            alt: unref(t)('pages.asgardians.title')
          }, null, 8, _hoisted_2),
          createBaseVNode("h1", null, toDisplayString(unref(t)('pages.asgardians.title')), 1),
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_Icon, {
              icon: "angle-1",
              class: "angle-1"
            }),
            createBaseVNode("span", null, [
              createVNode(_component_Icon, { icon: "blood" }),
              createVNode(_sfc_main$1, {
                value: unref(user).profile.asgardians_coins
              }, null, 8, ["value"])
            ]),
            (!data.claimLoading)
              ? (openBlock(), createBlock(Button, {
                  key: 0,
                  name: unref(t)('common.claim'),
                  class: normalizeClass(["light claim", { secondary: !unref(user).profile.asgardians_coins }]),
                  disabled: !unref(user).profile.asgardians_coins,
                  delay: +unref(settings).ASGARDIANS_CLAIM_MINUTES_COUNT,
                  delayFrom: unref(user).profile?.last_asgardians_claim_datetime,
                  onClick: claimIt
                }, null, 8, ["name", "class", "disabled", "delay", "delayFrom"]))
              : (openBlock(), createBlock(Button, {
                  key: 1,
                  class: "light loader",
                  loading: true
                })),
            createVNode(_component_Icon, {
              icon: "angle-2",
              class: "angle-2"
            })
          ]),
          createBaseVNode("label", _hoisted_4, [
            createBaseVNode("span", null, [
              createTextVNode(toDisplayString(unref(t)('pages.asgardians.description1')) + " ", 1),
              createBaseVNode("b", null, toDisplayString(unref(settings).ASGARDIANS_LEVEL_1_ROYALTY) + "%", 1),
              createTextVNode(" " + toDisplayString(unref(t)('pages.asgardians.description2')) + " ", 1),
              createBaseVNode("b", null, toDisplayString(unref(settings).ASGARDIANS_LEVEL_2_ROYALTY) + "%", 1),
              createTextVNode(" " + toDisplayString(unref(t)('pages.asgardians.description3')), 1)
            ]),
            createBaseVNode("span", null, [
              createTextVNode(toDisplayString(unref(t)('pages.asgardians.description4')) + " ", 1),
              createVNode(_component_Icon, {
                icon: "game-pass",
                class: "game-pass"
              }),
              createTextVNode(" " + toDisplayString(unref(t)('pages.asgardians.description5')), 1)
            ])
          ]),
          (!data.asgrs.length)
            ? (openBlock(), createBlock(EmptyLabel, {
                key: 0,
                title: "Nobody here.",
                description: "Is there anyone left in Asgard?"
              }))
            : (openBlock(), createElementBlock("div", _hoisted_5, [
                createBaseVNode("span", null, toDisplayString(data.total) + " " + toDisplayString(unref(t)('common.asgrs')), 1),
                createBaseVNode("ul", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(data.asgrs, (item) => {
                    return (openBlock(), createElementBlock("li", {
                      key: item.username
                    }, [
                      createVNode(Avatar, {
                        name: item.username
                      }, null, 8, ["name"]),
                      createBaseVNode("div", null, [
                        createBaseVNode("div", null, [
                          createBaseVNode("span", null, toDisplayString(item.username), 1),
                          createBaseVNode("span", null, [
                            createVNode(_component_Icon, { icon: "user-group" }),
                            createTextVNode(" +" + toDisplayString(item.asgardians_count), 1)
                          ])
                        ]),
                        createBaseVNode("span", null, [
                          createTextVNode(toDisplayString(unref(numberWithSpaces)(+item.coins)) + " ", 1),
                          createVNode(_component_Icon, { icon: "blood" })
                        ])
                      ])
                    ]))
                  }), 128))
                ]),
                (data.total > data.asgrs.length && !data.loading)
                  ? (openBlock(), createBlock(Button, {
                      key: 0,
                      name: unref(t)('common.more'),
                      class: "light secondary",
                      onClick: getAsgardiansList
                    }, null, 8, ["name"]))
                  : createCommentVNode("", true),
                (data.loading)
                  ? (openBlock(), createBlock(Button, {
                      key: 1,
                      class: "light loader",
                      loading: true
                    }))
                  : createCommentVNode("", true)
              ])),
          createBaseVNode("div", _hoisted_6, [
            createVNode(Button, {
              name: unref(t)('pages.asgardians.invite'),
              onClick: invite
            }, null, 8, ["name"])
          ])
        ]))
      : createCommentVNode("", true)
}
}

};
const Asgardians = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-1edd0666"]]);

export { Asgardians as default };

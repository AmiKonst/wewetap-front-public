import { m as mapState, q as mapMutations, l as mapActions, w as watch, C as onMounted, G as onBeforeUnmount, A as router } from './index.becb99b9.js';

const _sfc_main = {
  __name: 'PlaneGame',
  setup(__props) {

    const { enableBG, disableBG, ready, user, settings } = mapState();
    const { openModal, closeModal } = mapMutations();
    const { startPlaneGame } = mapActions();

    const runPlaneGame = async () => {
        // Если нет тикетсов
        if (!user.value.profile.plane_game_pass_count) {
            router.push({ name: 'home' });
            return;
        }

        const canPlay = await startPlaneGame();

        if (!canPlay) {
            router.push({ name: 'home' });
            return;   
        }

        await disableBG.value();

        openModal({
            name: 'plane-game',
            callback: (coins) => {
                if (!coins) {
                    return;
                }

                openModal({
                    name: 'plane-game-result',
                    data: {
                        coins
                    },
                    callback: (result) => {
                        if (result === 'home') {
                            router.push({ name: 'home' });
                        }

                        if (result === 'play') {
                            runPlaneGame();
                        }
                    }
                });
            }
        });
    };

    watch(
        () => ready.value,
        async () => {
            if (ready.value) {
                runPlaneGame();
            }
        }
    );

    onMounted(async () => {
        if (ready.value) {
            runPlaneGame();
        }
    });

    onBeforeUnmount(() => {
        enableBG.value();
    });

return (_ctx, _cache) => {
  return null
}
}

};

export { _sfc_main as default };

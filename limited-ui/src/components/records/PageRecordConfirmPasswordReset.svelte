<script>
    import PocketBase, { getTokenPayload } from "pocketbase";
    import ApiClient from "@/utils/ApiClient";
    import CommonHelper from "@/utils/CommonHelper";
    import FullPage from "@/components/base/FullPage.svelte";
    import Field from "@/components/base/Field.svelte";

    export let params;

    let newPassword = "";
    let newPasswordConfirm = "";
    let isLoading = false;
    let success = false;

    $: email = CommonHelper.getJWTPayload(params?.token).email || "";

    async function submit() {
        if (isLoading) {
            return;
        }

        isLoading = true;

        // init a custom client to avoid interfering with the admin state
        const client = new PocketBase(import.meta.env.PB_BACKEND_URL);

        try {
            const payload = getTokenPayload(params?.token);
            await client
                .collection(payload.collectionId)
                .confirmPasswordReset(params?.token, newPassword, newPasswordConfirm);
            success = true;
        } catch (err) {
            ApiClient.error(err);
        }

        isLoading = false;
    }
</script>

<FullPage nobranding>
    {#if success}
        <div class="alert alert-success">
            <div class="icon"><i class="ri-checkbox-circle-line" /></div>
            <div class="content txt-bold">
                <p>Hasło zostało zmienione</p>
                <p>Możesz zalogować się używając nowego hasła</p>
            </div>
        </div>

        <button type="button" class="btn btn-transparent btn-block" on:click={() => window.close()}>
            Zamknij
        </button>
    {:else}
        <form on:submit|preventDefault={submit}>
            <div class="content txt-center m-b-base">
                <h5>
                    Zmień hasło
                    {#if email}
                        dla adresu <strong>{email}</strong>
                    {/if}
                </h5>
            </div>

            <Field class="form-field required" name="password" let:uniqueId>
                <label for={uniqueId}>Nowe hasło</label>
                <!-- svelte-ignore a11y-autofocus -->
                <input type="password" id={uniqueId} required autofocus bind:value={newPassword} />
            </Field>

            <Field class="form-field required" name="passwordConfirm" let:uniqueId>
                <label for={uniqueId}>Potwierdź nowe hasło</label>
                <input type="password" id={uniqueId} required bind:value={newPasswordConfirm} />
            </Field>

            <button
                type="submit"
                class="btn btn-lg btn-block"
                class:btn-loading={isLoading}
                disabled={isLoading}
            >
                <span class="txt">Ustaw nowe hasło</span>
            </button>
        </form>
    {/if}
</FullPage>

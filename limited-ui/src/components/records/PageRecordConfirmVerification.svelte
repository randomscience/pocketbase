<script>
    import PocketBase, { getTokenPayload } from "pocketbase";
    import FullPage from "@/components/base/FullPage.svelte";

    export let params;

    let success = false;
    let isLoading = false;

    send();

    async function send() {
        isLoading = true;

        // init a custom client to avoid interfering with the admin state
        const client = new PocketBase(import.meta.env.PB_BACKEND_URL);

        try {
            const payload = getTokenPayload(params?.token);
            await client.collection(payload.collectionId).confirmVerification(params?.token);
            success = true;
        } catch (err) {
            success = false;
        }

        isLoading = false;
    }
</script>

<FullPage nobranding>
    {#if isLoading}
        <div class="txt-center">
            <div class="loader loader-lg">
                <em>Ładowanie...</em>
            </div>
        </div>
    {:else if success}
        <div class="alert alert-success">
            <div class="icon"><i class="ri-checkbox-circle-line" /></div>
            <div class="content txt-bold">
                <p>Adres email został zweryfikowany</p>
            </div>
        </div>

        <button type="button" class="btn btn-transparent btn-block" on:click={() => window.close()}>
            Zamknij
        </button>
    {:else}
        <div class="alert alert-danger">
            <div class="icon"><i class="ri-error-warning-line" /></div>
            <div class="content txt-bold">
                <p>Błąd weryfikacji adresu email</p>
            </div>
        </div>

        <button type="button" class="btn btn-transparent btn-block" on:click={() => window.close()}>
            Zamknij
        </button>
    {/if}
</FullPage>

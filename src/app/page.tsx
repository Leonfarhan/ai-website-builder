import {Suspense} from "react";
import {getQueryClient, trpc} from "@/trpc/server";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";
import Client from "@/app/client";

async function Home() {
    const queryClient = getQueryClient();
    void queryClient.prefetchQuery(trpc.hello.queryOptions({ text: "Leonfarhan PRETECH"}))

    return(
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Suspense fallback={<p>Loading...</p>}>
                <Client />
            </Suspense>
        </HydrationBoundary>
  )
}

export default Home;
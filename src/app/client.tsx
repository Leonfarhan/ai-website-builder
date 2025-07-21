"use client"

import {useTRPC} from "@/trpc/client";
import {useSuspenseQuery} from "@tanstack/react-query";

function Client() {
    const trpc = useTRPC();
    const { data } = useSuspenseQuery(trpc.hello.queryOptions({ text: "Leonfarhan PRETECH"}));

    return(
        <div>
            {JSON.stringify(data)}
        </div>
    )
}

export default Client
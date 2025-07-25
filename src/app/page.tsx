"use client";

import {Button} from "@/components/ui/button";
import {useTRPC} from "@/trpc/client";
import {useMutation} from "@tanstack/react-query";
import {toast} from "sonner";
import {Input} from "@/components/ui/input";
import {useState} from "react";

function Page() {
    const [value, setValue] = useState("");
    const trpc = useTRPC()
    const invoke = useMutation(trpc.invoke.mutationOptions({
        onSuccess: () => {
            toast.success("Background job started")
        }
    }))

    return(
        <div>
            <Input value={value} onChange={e => setValue(e.target.value)}/>
            <Button onClick={() => invoke.mutate({ value: value})} disabled={invoke.isPending}>
                Invoke background job
            </Button>
        </div>
    )
}

export default Page
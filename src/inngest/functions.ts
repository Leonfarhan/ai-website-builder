import { inngest } from "./client";
import { gemini, createAgent } from "@inngest/agent-kit";
import {env} from "google-logging-utils";

export const helloWorld = inngest.createFunction(
    { id: "hello-world" },
    { event: "test/hello.world" },
    async ({ event }) => {
        // imagine this is a summary
        // await step.sleep("wait-a-moment", "5s");

        const summarize = createAgent({
            name: "summarize",
            system: "You are an expert summarize. You summarize in 2 words.",
            model: gemini({ model: "gemini-2.5-flash" }),
        });

        const { output } = await summarize.run(
            `Summarize the following text: ${event.data.value}`,
        );

        return { output };
    },
);
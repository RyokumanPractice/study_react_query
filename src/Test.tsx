import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();
const url = "";

export default function Test() {
    return (
        <QueryClientProvider client={queryClient}>
            <Example />
        </QueryClientProvider>
    );
}

function Example() {
    const { isLoading, error, data } = useQuery("repoData", () => {
        fetch(url).then((res) => {
            res.json;
        });
    });

    if (isLoading) return <h1>Loading</h1>;
    if (error) return <h1>Error Encounter!!</h1>;

    return (
        <div>
            <h1>{data ? data : "hello"}</h1>
        </div>
    );
}

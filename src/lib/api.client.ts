export const gql = String.raw;

export const gqlAPIClient = async <T>(payload: {
  query: string;
  variables?: Record<string, unknown>;
  token?: string;
}) => {
  const api = process.env.NEXT_PUBLIC_GRAPHQL_API_URL || "";
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const apiResponse = await fetch(api, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query: payload.query,
      variables: payload.variables,
    }),
  });

  if (!apiResponse.ok) {
    throw new Error("Failed to fetch data");
  }

  const { data, errors } = await apiResponse.json();

  if (errors && errors.length > 0) {
    throw new Error(
      errors
        .map((e: { message?: string }) => e.message || "Unknown error")
        .join(", ")
    );
  }

  return data as T;
};

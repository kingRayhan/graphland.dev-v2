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

  const response = (await apiResponse.json()) as {
    data?: T;
    errors?: Array<{ message?: string }>;
  };

  const { data, errors } = response;

  if (errors && errors.length > 0) {
    throw new Error(errors.map((e) => e.message || "Unknown error").join(", "));
  }

  if (!data) {
    throw new Error("No data returned from API");
  }

  return data;
};

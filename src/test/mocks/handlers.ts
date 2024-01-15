import { http, HttpResponse } from "msw";
import { MOCK_PLANETS } from "./data";

export const handlers = [
  http.get("https://swapi.dev/api/planets", () => {
    return HttpResponse.json(MOCK_PLANETS);
  }),
  http.get("*", (req) => {
    console.error(`You MUST write a request handle for ${req.toString()}`);
    return HttpResponse.error();
  }),
];

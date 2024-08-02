import { rest, http, HttpResponse } from "msw";
import profile from "./profile.json";

export const handlers = [
  // /api/user 엔드포인트에 대한 핸들러
  http.get("/user/signup", async (req, res, ctx) => {
    return HttpResponse.json(profile);
  }),
];

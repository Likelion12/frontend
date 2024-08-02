import { http, HttpResponse } from "msw";
import profile from "./profile.json";

export const handlers = [
  // /api/user 엔드포인트에 대한 핸들러
  http.post("/socialring", (req, res, ctx) => {
    const {
      socialringName,
      socialringImg,
      activityRegionId,
      facilityId,
      exerciseId,
      totalRecruits,
      socialringDate,
      socialringCost,
      comment,
      commentSimple,
      gender,
      level,
    } = req.body;

    return res(
      ctx.status(200),
      ctx.json({
        code: 1000,
        message: "소셜링 등록에 성공하였습니다.",
        data: {
          socialringName,
          socialringImg,
          activityRegionId,
          facilityId,
          exerciseId,
          totalRecruits,
          socialringDate,
          socialringCost,
          comment,
          commentSimple,
          gender,
          level,
        },
      })
    );
  }),
];

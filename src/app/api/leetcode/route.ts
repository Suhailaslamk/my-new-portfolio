import { NextResponse } from "next/server";

export const revalidate = 3600; // Cache for 1 hour

const LEETCODE_GRAPHQL = "https://leetcode.com/graphql";

const query = `
  query getUserProfile($username: String!) {
    matchedUser(username: $username) {
      username
      profile {
        ranking
        reputation
        starRating
      }
      submitStats: submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
      }
      userCalendar {
        streak
        totalActiveDays
        submissionCalendar
      }
    }
    userContestRanking(username: $username) {
      attendedContestsCount
      rating
      globalRanking
      totalParticipants
      topPercentage
    }
  }
`;

export async function GET() {
  try {
    const res = await fetch(LEETCODE_GRAPHQL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
      },
      body: JSON.stringify({
        query,
        variables: { username: "suhailaslamk" },
      }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`LeetCode API error: ${res.status}`);
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("LeetCode fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch LeetCode data" }, { status: 500 });
  }
}

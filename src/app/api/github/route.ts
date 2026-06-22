import { NextResponse } from "next/server";

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  try {
    const username = "Suhailaslamk";
    
    // Fetch user profile stats
    const profileRes = await fetch(`https://api.github.com/users/${username}`, {
      next: { revalidate: 3600 }
    });
    
    if (!profileRes.ok) {
      throw new Error(`GitHub API error: ${profileRes.status}`);
    }

    const profileData = await profileRes.json();
    
    // Fetch contribution stats (for streak calculation)
    const contribRes = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      { next: { revalidate: 3600 } }
    );
    
    let currentStreak = 0;
    let totalContributions = 0;
    
    if (contribRes.ok) {
      const contribData = await contribRes.json();
      totalContributions = contribData?.total?.lastYear ?? contribData?.total?.["2024"] ?? 0;
      const contributions = contribData?.contributions ?? [];
      
      for (let i = contributions.length - 1; i >= 0; i--) {
        const c = contributions[i];
        if (c.count > 0) {
          if (i === contributions.length - 1 || contributions[i + 1].count > 0) {
            currentStreak++;
          }
        } else if (currentStreak > 0) break;
      }
    }

    return NextResponse.json({
      followers: profileData.followers,
      following: profileData.following,
      public_repos: profileData.public_repos,
      currentStreak,
      totalContributions
    });
  } catch (error) {
    console.error("GitHub fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch GitHub data" }, { status: 500 });
  }
}

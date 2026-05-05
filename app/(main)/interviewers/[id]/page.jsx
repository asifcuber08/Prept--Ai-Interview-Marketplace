import { getInterviewerProfile } from "@/actions/booking";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";
import InterviewerProfileContent from "./_components/InterviewerProfileContent";
import { redirect, notFound } from "next/navigation";

const InterviewerProfilePage = async ({ params }) => {
  const { id } = await params;

  const user = await currentUser();
  if (!user) redirect("/");

  const dbUser = await db.user.findUnique({
    where: { clerkUserId: user.id },
    select: { role: true, credits: true },
  });

  if (!dbUser) redirect("/");
  if (dbUser.role === "UNASSIGNED") redirect("/onboarding");

  const interviewer = await getInterviewerProfile(id);
  if (!interviewer) notFound();

  return <InterviewerProfileContent interviewer={interviewer} userCredits={dbUser.credits} userRole={dbUser.role} />;
};

export default InterviewerProfilePage;

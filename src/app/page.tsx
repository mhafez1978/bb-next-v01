import Hero from "@/app/components/hero/Hero04";
import SocialProof from "./components/social-proof/SocialProof";
import Services from "@/app/components/services/Services00";
import ActionBanner from "./components/action-banner/ActionBanner";
import Accomplishments from "./components/accomplishments/Accomplishments";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Services />
      <ActionBanner />
      <Accomplishments />
    </>
  );
}

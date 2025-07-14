import HelpPets from "~/components/HelpPets";
import ModernDog from "~/components/ModernDog"
import WaysYouCanHelp from "~/components/WaysYouCanHelp"
import PerkCard from "~/components/PerkCard"
import SponsorshipForEvents from "~/components/SponsorshipForEvents"
import { getPageData } from '~/utils/common-functions';
import { useLoaderData } from 'react-router';
import { useInView } from 'react-intersection-observer';


export async function loader({ context }) {
  const pageDataByHandle = await getPageData({ context, pageHandle: "ambassador-program" })

  return {
    pageDataByHandle,
  };
}



export default function Ambassador() {
  const metaData = useLoaderData();

  const BannerData = metaData?.pageDataByHandle?.pageDatas?.page?.AmbassadorHelpPetsStaySafe?.reference?.fields || [];
  const CurrentPartner = metaData?.pageDataByHandle?.pageDatas?.page?.AmbassadorCurrentPartner?.reference?.fields || [];
  const AmbassadorWaysYouCanHelp = metaData?.pageDataByHandle?.pageDatas?.page?.AmbassadorWaysYouCanHelp?.reference?.fields || [];
  const AmbassadorWeGotThose = metaData?.pageDataByHandle?.pageDatas?.page?.AmbassadorWeGotThose?.reference?.fields || [];
  const AmbassadorClaimYourPerksToday = metaData?.pageDataByHandle?.pageDatas?.page?.AmbassadorClaimYourPerksToday?.reference?.fields || [];
  const [belowFoldRef, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div>
      {BannerData.length > 0 && (
        <HelpPets BannerData={BannerData} />
      )}
      {CurrentPartner.length > 0 && (
        <ModernDog CurrentPartner={CurrentPartner} />
      )}
      <div ref={belowFoldRef}>
        {inView && (
          <>
            {AmbassadorWaysYouCanHelp.length > 0 && (
              <WaysYouCanHelp AmbassadorWaysYouCanHelp={AmbassadorWaysYouCanHelp} />
            )}
            {AmbassadorWeGotThose.length > 0 && (
              <PerkCard AmbassadorWeGotThose={AmbassadorWeGotThose} />
            )}
            {AmbassadorClaimYourPerksToday.length > 0 && (
              <SponsorshipForEvents AmbassadorClaimYourPerksToday={AmbassadorClaimYourPerksToday} />
            )}
          </>
        )}
      </div>
    </div>
  );
}

import MeetStails from "~/components/MeetStails";
import WaggleForGood from "~/components/WaggleForGood";
import TailwaggingApproved from "~/components/TailwaggingApproved";
import CertifiedToCare from "~/components/CertiFiedToCare";
import PetParents from "~/components/PetParents";
import {useLoaderData} from 'react-router';
import { getPageData } from '~/utils/common-functions';

export async function loader({context}) {
  const pageDataByHandle = await getPageData({ context,pageHandle:"about-us" })

  return {
    pageDataByHandle,
  };
}

export default function CustomPage() {
  const metaData = useLoaderData();
  
  const BannerData = metaData?.pageDataByHandle?.pageDatas?.page?.aboutUsBannerData?.reference?.fields || [];
  const whereToTails = metaData?.pageDataByHandle?.pageDatas?.page?.aboutUsWhereToMeetTails?.reference?.fields || [];
  const noMoreRuffDays = metaData?.pageDataByHandle?.pageDatas?.page?.aboutNoMoreRuffDays?.reference?.fields || [];
  const waggingApproved = metaData?.pageDataByHandle?.pageDatas?.page?.abourWaggiesApproved?.reference?.fields || [];
  const cartifiedCare = metaData?.pageDataByHandle?.pageDatas?.page?.abourCartifiedCare?.reference?.fields || [];  

  return (
    <div>
      {BannerData.length > 0 && (
         <PetParents BannerData = {BannerData} />
      )}
      {whereToTails.length > 0 && (
        <MeetStails whereToTails = {whereToTails} />
      )}
      <div className="bg-custom-gradient ">
        {noMoreRuffDays.length > 0 && (
           <WaggleForGood noMoreRuffDays = {noMoreRuffDays} />
        )}
        {waggingApproved.length > 0 && (
            <TailwaggingApproved waggingApproved = {waggingApproved} />
        )}
        {cartifiedCare.length > 0 && (
          <CertifiedToCare cartifiedCare = {cartifiedCare} />
        )}
      </div>
    </div>
  );
}

import { ImageOff } from "lucide-react";
import MeetStails from "~/components/MeetStails";
import WaggleForGood from "~/components/WaggleForGood";
import TailwaggingApproved from "~/components/TailwaggingApproved";
import CertifiedToCare from "~/components/CertiFiedToCare";
import PetParents from "~/components/PetParents";
import {METOBJECT_DATA_QUERY} from '~/utils/product-query';
import {useLoaderData} from 'react-router';


export async function loader({context}) {
  const aboutUsBannersData = await getaboutUsDatas({ context, metaobjectType:"aboutus_banner" })
  const aboutUsWhereTechMeetsTailsData = await getaboutUsDatas({ context, metaobjectType:"aboutus_where_tech_meets_tails" }) 
  const aboutUsNoMoreRUFFDays = await getaboutUsDatas({ context, metaobjectType:"aboutus_no_more_ruff_days" })
  const aboutUsWaggingApproved = await getaboutUsDatas({ context, metaobjectType:"aboutus_wagging_approved" })
  const aboutUsCertifiedCare = await getaboutUsDatas({ context, metaobjectType:"aboutus_certified_to_care" })

  return {
    aboutUsBannersData,
    aboutUsWhereTechMeetsTailsData,
    aboutUsNoMoreRUFFDays,
    aboutUsWaggingApproved,
    aboutUsCertifiedCare,
  };
}

async function getaboutUsDatas({ context, metaobjectType } = {}) {
  if (!context?.storefront) {
    throw new Error("Missing storefront context.");
  }

  const { storefront } = context;

  const aboutUsMain = await storefront.query(
    METOBJECT_DATA_QUERY,
    {
      variables: { type : metaobjectType },
    },
  );

  return { aboutUsDatas: aboutUsMain };
}

export default function CustomPage() {
  const metaData = useLoaderData();

  return (
    <div>
      <PetParents metaData = {metaData} />
      <MeetStails metaData = {metaData} />
      <div className="bg-custom-gradient ">
        <WaggleForGood metaData = {metaData} />
        <TailwaggingApproved metaData = {metaData} />
        <CertifiedToCare metaData = {metaData} />
      </div>
    </div>
  );
}

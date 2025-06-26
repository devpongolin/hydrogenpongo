import HelpPets from "~/components/HelpPets";
import ModernDog from "~/components/ModernDog"
import WaysYouCanHelp from "~/components/WaysYouCanHelp"
import PerkCard from "~/components/PerkCard"
import SponsorshipForEvents from "~/components/SponsorshipForEvents"
import {METOBJECT_DATA_QUERY} from '~/utils/product-query';
import {useLoaderData} from 'react-router';


export async function loader({ context }) {
  const ambassadorBannerData = await getAmbassadorDatas({ context, metaobjectType: "ambassador_banner" })

  return {
    ambassadorBannerData,
  };
}

async function getAmbassadorDatas({ context, metaobjectType } = {}) {
  if (!context?.storefront) {
      throw new Error("Missing storefront context.");
  }

  const { storefront } = context;

  const ambassadorMain = await storefront.query(
      METOBJECT_DATA_QUERY,
      {
          variables: { type: metaobjectType },
      },
  );

  return { AmbassadorDatas: ambassadorMain };
}



export default function Ambassador() {
  const metaData = useLoaderData();
    return (
      <div>
        <HelpPets metaData = {metaData} />
        <ModernDog />
        <WaysYouCanHelp />
        <PerkCard />
        <SponsorshipForEvents />
      </div>
    );
  }
  
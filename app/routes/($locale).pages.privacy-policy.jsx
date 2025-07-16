import { getPageData } from '~/utils/common-functions';
import { useLoaderData } from 'react-router';

export async function loader({ context }) {
    const pageDataByHandle = await getPageData({ context, pageHandle: "privacy-policy" })

    return {
        pageDataByHandle,
    };
}

export default function privacyPolicy() {
    const metaData = useLoaderData();
    const bodyHTML = metaData?.pageDataByHandle?.pageDatas?.page?.body;
    return (
        <div className='privacy_policy-main' dangerouslySetInnerHTML={{ __html: bodyHTML }} >

        </div>
    )
}
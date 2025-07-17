import {getPageData} from '~/utils/common-functions';
import {useLoaderData} from 'react-router';
import {useEffect, useState} from 'react';
 
// ScrollSpy Hook
function useScrollSpy(sectionIds, offset = 100) {
  const [activeSection, setActiveSection] = useState('');
 
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isAtBottom =
        Math.abs(scrollPosition + windowHeight - documentHeight) < 50;
 
      let currentActiveSection = '';
 
      for (let i = 0; i < sectionIds.length; i++) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPosition >= top - 200 && scrollPosition < bottom) {
            currentActiveSection = sectionIds[i];
            break;
          }
        }
      }
 
      if (!currentActiveSection) {
        for (let i = sectionIds.length - 1; i >= 0; i--) {
          const el = document.getElementById(sectionIds[i]);
          if (el && scrollPosition >= el.offsetTop - 200) {
            currentActiveSection = sectionIds[i];
            break;
          }
        }
      }
 
      if (isAtBottom && !currentActiveSection) {
        currentActiveSection = sectionIds[sectionIds.length - 1];
      }
 
      if (currentActiveSection) {
        setActiveSection(currentActiveSection);
      }
    };
 
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);
 
  return activeSection;
}
 
// Loader
export async function loader({context}) {
  const pageDataByHandle = await getPageData({
    context,
    pageHandle: 'terms-of-service',
  });
  return {
    pageDataByHandle,
  };
}
 
// Component
export default function termsService() {
  const metaData = useLoaderData();
  const rawHTML = metaData?.pageDataByHandle?.pageDatas?.page?.body;
 
  const [titleHTML, setTitleHTML] = useState('');
  const [bodyHTML, setBodyHTML] = useState('');
 
  const sectionIds = [
    'collection-information',
    'use-information',
    'protection-information',
    'cookies-tracking',
    'third-party-disclosure',
    'rights-choices',
    'location-data',
    'childrens-privacy',
    'updates-policy',
    'contact-us',
  ];
  const sectionTitles = {
    'collection-information': 'Collection of Personal Information',
    'use-information': 'Use of Personal Information',
    'protection-information': 'Protection of Personal Information',
    'cookies-tracking': 'Use of Cookies and Tracking Technologies',
    'third-party-disclosure': 'Third-party Disclosure and Links',
    'rights-choices': 'Your Rights and Choices',
    'location-data': 'Location Data Privacy Policy',
    'childrens-privacy': "Children's Privacy",
    'updates-policy': 'Updates to this Privacy Policy',
    'contact-us': 'Contact Us',
  };
 
  const activeSection = useScrollSpy(sectionIds, 120);
 
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  
 
  // ✅ Safe DOM Parsing only on client
  useEffect(() => {
    if (typeof window !== 'undefined' && rawHTML) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(rawHTML, 'text/html');
      const titleEl = doc.getElementById('admin-dynamic-title');
      setTitleHTML(titleEl?.outerHTML || '');
      if (titleEl) titleEl.remove();
      setBodyHTML(doc.body.innerHTML);
    }
  }, [rawHTML]);
 
  return (
    <div className="mx-auto w-full">
      {/* Admin title rendered here */}
      {titleHTML && (
        <div
          className="text-center bg-[#B47E57] py-[58px]"
          dangerouslySetInnerHTML={{__html: titleHTML}}
        />
      )}
 
      <div className="flex justify-end">
        {/* Main Privacy Content */}
        <div className="md:w-[53.8%] pb-[41px] border-r border-[#CCCCCC] w-full mt-[64px] md:pr-[54px] px-[20px] md:px-0">
          <div
            className="privacy_policy-main"
            dangerouslySetInnerHTML={{__html: bodyHTML}}
          />
        </div>
 
        {/* ScrollSpy Sidebar */}
        <div className="sticky right-0 top-[92px] h-auto w-[25.5%] mt-[78px] hidden md:block">
          <div className="sticky top-[49px] px-[54px]">
            <h3 className="lexend pb-[5px] font-semibold text-[14px] tracking-[0%] uppercase">
              Privacy Policy
            </h3>
            <nav>
              {sectionIds.map((id, index) => (
                <button
                  key={id}  
                  onClick={() => scrollToSection(id)}
                  className={`w-full pb-[13px] leading-[16px] pt-[13px] border-b border-[#CECECE] text-left lato transition-all font-normal text-[12px] tracking-[0] ${
                    activeSection === id
                      ? 'bg-white !font-bold'
                      : 'text-[#6C6F73] hover:text-[#2E2E2E]'
                  }`}
                >
                  {`${index + 1}. ${sectionTitles[id] || id}`}  
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
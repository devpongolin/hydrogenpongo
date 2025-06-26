export const METOBJECT_DATA_QUERY = `#graphql
  query MetaobjectData($type: String!) {
    metaobjects(type:$type, first: 250) {
        edges {
            node {
                fields {                    
                    key
                    value
                    reference {
                        ... on MediaImage {
                          image {
                            url
                            altText
                          }
                        }
                    }
                    references(first:250) {
                        nodes{
                          ... on MediaImage {
                                image {
                                    url
                                    altText
                                }
                            }
                        }
                    }
                }
            }
        }
    }
  }
`;

export const PAGE_DATA_QUERY = `#graphql
query PageObjectData($handle: String) {
  page(handle: $handle) {
    id

    mainBannerData: metafield(namespace: "custom", key: "cms_page") {
      reference {
        ...MetaobjectFields
      }
    }

    faqData: metafield(namespace: "custom", key: "faq") {
      references(first: 250) {
        edges {
          node {
            ... on Metaobject {
              fields {
                key
                value
              }
            }
          }
        }
      }
    }

    aboutUsBannerData: metafield(namespace: "custom", key: "about_us_banner_data") {
      reference {
        ...MetaobjectFields
      }
    }

    aboutUsWhereToMeetTails: metafield(namespace: "custom", key: "about_us_where_to_meet_tails_data") {
      reference {
        ...MetaobjectFields
      }
    }
    
    aboutNoMoreRuffDays: metafield(namespace: "custom", key: "about_us_no_more_ruff_day") {
      reference {
        ...MetaobjectFields
      }
    }
    
    abourWaggiesApproved: metafield(namespace: "custom", key: "about_us_wagging_approved") {
      reference {
        ...MetaobjectFields
      }      
    }
    
    abourCartifiedCare: metafield(namespace: "custom", key: "about_certified_care") {
      reference {
        ...MetaobjectFields
      }      
    }
    
    partnerProgramBanner: metafield(namespace: "custom", key: "partner_program_banner_data") {
      reference {
        ...MetaobjectFields
      }      
    }
    
    partnerProgramTrustByDog: metafield(namespace: "custom", key: "partner_program_trust_by_dog") {
      reference {
        ...MetaobjectFields
      }      
    }
    
    partnerProgramFindYourPartner: metafield(namespace: "custom", key: "partner_program_find_your_partner") {
      reference {
        ...MetaobjectFields
      }      
    }
    
    partnerProgramSimpleStep: metafield(namespace: "custom", key: "partner_program_simple_step") {
      reference {
        ...MetaobjectFields
      }      
    }
  }
}

fragment MetaobjectFields on Metaobject {
  fields {
    key
    value
    reference {
      ... on MediaImage {
        image {
          url
          altText
        }
      }
    }
  }
}
`;